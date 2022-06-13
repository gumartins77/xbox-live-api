import { Prisma, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

export const users: Prisma.UserCreateInput[] = [
  {
    Name: 'Gustavo Martins',
    Email: 'gugumartin77@gmail.com',
    Password: 'Xbox@1234',
    CPF: '123.456.789-10'
  }
];

export const user = async (prisma: PrismaClient) => {
  for (const obj of Object.values(users)) {
    await prisma.user.upsert({
      where: { Email: obj.Email },
      update: {},
      create: {
        ...obj,
        Password: await bcrypt.hash(obj.Password, 10),
      },
    });
  }
};
