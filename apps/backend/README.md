# 📦 Dependencias del Backend TaskFlow

Este proyecto utiliza **NestJS** y las siguientes dependencias esenciales para un backend seguro y robusto, sin ORMs:

---

## 🔹 Base de datos

- `mysql2` – Cliente MySQL para Node.js

## 🔹 Configuración

- `@nestjs/config` – Manejo de variables de entorno global

## 🔹 Validación

- `class-validator` – Validación de DTOs
- `class-transformer` – Transformación de datos de DTOs

## 🔹 Seguridad

- `helmet` – Protege la app configurando cabeceras HTTP
- `cors` – Habilita CORS de forma segura

## 🔹 Autenticación

- `@nestjs/jwt` – JWT para auth segura
- `passport` – Estrategias de autenticación
- `passport-jwt` – Estrategia JWT para Passport
- `@nestjs/passport` – Integración de Passport en NestJS
- `bcrypt` – Encriptación de contraseñas
