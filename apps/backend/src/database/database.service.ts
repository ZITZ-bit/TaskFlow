import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import * as mysql from 'mysql2/promise';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy{
    private connection: mysql.Connection;

    constructor(private readonly config: ConfigService) {}

    async onModuleInit() {
        this.connection = await mysql.createConnection({

            host: this.config.get<string>('DB_HOST'),
            port: this.config.get<number>('DB_PORT'),
            user: this.config.get<string>('DB_USER'),
            password: this.config.get<string>('DB_PASSWORD'),
            database: this.config.get<string>('DB_NAME'),

        });

        console.log('✅ Conexión a MySQL establecida')
    }

    async query(sql: string, params?: any[]) {
        const [rows] = await this.connection.execute(sql, params);
        return rows;
    }

    async onModuleDestroy() {
        await this.connection.end();
        console.log('❌ Conexión a MySQL cerrada');
    }
}
