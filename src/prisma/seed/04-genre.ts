import { Prisma, PrismaClient } from '@prisma/client';

export const genres: Prisma.GenreCreateInput[] = [
  {
    Name: 'FPS',
  },
  {
    Name: 'Running',
  },
  {
    Name: 'Sport',
  },
  {
    Name: 'Horror',
  },
  {
    Name: 'Action and adventure',
  },
];

export const genre = async (prisma: PrismaClient) => {
  for (const obj of Object.values(genres)) {
    await prisma.genre.upsert({
      where: { Name: obj.Name },
      update: {},
      create: {
        ...obj,
      },
    });
  }
};
