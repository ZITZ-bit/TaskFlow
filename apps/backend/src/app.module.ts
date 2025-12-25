// Librerias de NestJs

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Importaciones Locales

import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modulos De Aplicacion

import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [

    ConfigModule.forRoot({ isGlobal: true }),

    DatabaseModule,
    UsersModule,
    AuthModule

  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
