import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';

@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService) {}

    @Post()
    async create(@Body() dto: CreateRoleDto) {
        return this.rolesService.createRole(dto);
    }

    @Get()
    async findAll() {
        return this.rolesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.rolesService.findOne(id);
    }
}
