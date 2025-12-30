import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsString()
    @IsOptional()
    descripcion?: string;
}