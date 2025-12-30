import { IsString, IsOptional, IsIn } from "class-validator";

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    titulo?: string;

    @IsString()
    @IsOptional()
    descripcion?: string;

    @IsIn(["pendiente", "en_progreso", "completada"])
    @IsOptional()
    estado?: string;
}