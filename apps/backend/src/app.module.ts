// Librerias de NestJs

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Importaciones Locales

import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modulos De Aplicacion

import { DatabaseModule } from './database/database.module';

@Module({
  imports: [

    ConfigModule.forRoot({ isGlobal: true }),

    DatabaseModule

  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
