-- CreateTable
CREATE TABLE `roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_rol` VARCHAR(50) NOT NULL,
    `descripcion` VARCHAR(150) NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `uq_roles_nombre`(`nombre_rol`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tasks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(100) NOT NULL,
    `descripcion` TEXT NULL,
    `estado` ENUM('pendiente', 'en_progreso', 'completada') NULL DEFAULT 'pendiente',
    `usuario_id` INTEGER NOT NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NULL,
    `imagen` VARCHAR(255) NULL,

    INDEX `usuario_id`(`usuario_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario_rol` (
    `usuario_id` INTEGER NOT NULL,
    `rol_id` INTEGER NOT NULL,

    INDEX `fk_usuario_rol_rol`(`rol_id`),
    PRIMARY KEY (`usuario_id`, `rol_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombres` VARCHAR(100) NOT NULL,
    `apellidos` VARCHAR(100) NOT NULL,
    `cedula` VARCHAR(20) NOT NULL,
    `usuario` VARCHAR(50) NOT NULL,
    `clave` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NULL,

    UNIQUE INDEX `uq_usuarios_cedula`(`cedula`),
    UNIQUE INDEX `uq_usuarios_usuario`(`usuario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `usuario_rol` ADD CONSTRAINT `fk_usuario_rol_rol` FOREIGN KEY (`rol_id`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usuario_rol` ADD CONSTRAINT `fk_usuario_rol_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
