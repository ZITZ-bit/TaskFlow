import { Injectable, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

import { DatabaseService } from '../database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly db: DatabaseService) {}

  async register(createUserDto: CreateUserDto) {
    const { nombres, apellidos, cedula, usuario, contraseña, confirmacion } = createUserDto;

    if (contraseña !== confirmacion) {
      throw new BadRequestException('Las contraseñas no coinciden');
    }

    const [existing] = await this.db.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario]) as any[];
      if (existing.length > 0) {
        throw new BadRequestException('Usuario ya existe');
      }

    const hashedPassword = await bcrypt.hash(contraseña, 10);

    await this.db.query(
      'INSERT INTO usuarios (nombre, apellido, cedula, usuario, clave) VALUES (?, ?, ?, ?, ?)',
      [nombres, apellidos, cedula, usuario, hashedPassword]
    );

    return { message: 'Usuario creado correctamente' };
  }

  async validateUser(loginDto: LoginDto) {
    const { usuario, contraseña } = loginDto;

    const rows = await this.db.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario]);
    const user = rows[0];
    if (!user) return null;

    const isMatch = await bcrypt.compare(contraseña, user.clave);
    if (!isMatch) return null;

    return user;
  }
}
