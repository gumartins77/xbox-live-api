import { Prisma, PrismaClient } from '@prisma/client';

export const profiles: Prisma.ProfileCreateInput[] = [
  {
    Title: 'gumartins',
    ImageURL:
      'https://media.fortniteapi.io/images/7bf522a34af664a172ce581441985e75/transparent.png',
    user: {
      connect: {
        id: 'f690ab13-5c24-4844-8a1b-c80c6938ab8b',
      },
    },
  },
];

export const profile = async (prisma: PrismaClient) => {
  for (const obj of Object.values(profiles)) {
    await prisma.profile.upsert({
      where: { Title: obj.Title },
      update: {},
      create: {
        ...obj,
      },
    });
  }
};
