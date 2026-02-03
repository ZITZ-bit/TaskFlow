import "dotenv/config"; // 🔑 cargar .env
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed...");

  // ---- ROLES ----
  await prisma.roles.createMany({
    data: [
      { nombre_rol: "ADMIN", descripcion: "Administrador del sistema" },
      { nombre_rol: "USER", descripcion: "Usuario normal" },
    ],
    skipDuplicates: true, // evita errores si ya existen
  });

  // ---- USUARIO ADMIN ----
  const hashedPassword = await bcrypt.hash("zitzkira", 10);

  await prisma.usuarios.upsert({
    where: { usuario: "ZITZ" },
    update: {}, // no hace nada si ya existe
    create: {
      nombres: "Andrew",
      apellidos: "Carrero",
      cedula: "00000001",
      usuario: "ZITZ",
      clave: hashedPassword,
      usuario_rol: {
        create: [
          { rol_id: 1 }, // ADMIN
        ],
      },
    },
  });

  console.log("✅ Seed completada!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
