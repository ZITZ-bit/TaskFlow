import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {

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

  const admin = await prisma.usuarios.create({

    data: {
      nombres: "admin",
      apellidos: "admin",
      cedula: "00000001",
      usuario: "ZITZ",
      clave: hashedPassword,
      usuario_rol: {
        create: [
          { rol_id: 1 },
        ],
      },
    },

  });
  
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
