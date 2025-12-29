import { IsString, IsOptional, MinLength } from "class-validator";

export class UpdateUserDto {
    @IsString()
    @IsOptional()
    nombres?: string;

    @IsString()
    @IsOptional()
    apellidos?: string;

    @IsString()
    @IsOptional()
    cedula?: string;

    @IsString()
    @IsOptional()
    usuario?: string;

    @IsString()
    @MinLength(6)
    @IsOptional()
    clave?: string;
}