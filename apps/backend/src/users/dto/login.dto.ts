import { IsString, IsNotEmpty } from 'class-validator';

export class LoginDto {
    @IsString()
    @IsNotEmpty()
    usuario: string;

    @IsString()
    @IsNotEmpty()
    contraseña: string;
}