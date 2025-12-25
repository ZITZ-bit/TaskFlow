import { IsString, IsNotEmpty, MinLength, Matches } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    nombres: string;

    @IsString()
    @IsNotEmpty()
    apellidos: string;

    @IsString()
    @IsNotEmpty()
    cedula: string;

    @IsString()
    @IsNotEmpty()
    usuario: string;

    @IsString()
    @MinLength(6)
    contraseña: string;

    @IsString()
    @MinLength(6)
    confirmacion: string;
}