import { Prisma, PrismaClient } from '@prisma/client';

export const games: Prisma.GameCreateInput[] = [
  {
    Title: 'Halo Infinite',
    CoverImageUrl:
      'https://upload.wikimedia.org/wikipedia/pt/d/d1/Halo_Infinite_capa.png',
    Description:
      'Halo Infinite is a first-person shooter video game developed by 343 Industries and published by Xbox Game Studios. It was released on December 8, 2021 for Microsoft Windows, Xbox One, and Xbox Series X/S.',
    Year: 2021,
    ImdbScore: 4.25,
    TrailerYouTubeUrl: 'https://youtu.be/PyMlV5_HRWk',
    GameplayYouTubeUrl: 'https://youtu.be/HZtc5-syeAk',
    genre: {
      connect: {
        id: '3a3a4738-05fb-43b1-82bc-832e1423933d',
      },
    },
  },
  {
    Title: 'FIFA 22',
    CoverImageUrl:
      'https://t.ctcdn.com.br/8D0irThpaTHpB31VyRo_h-ONbGE=/0x17:1080x625/1080x608/smart/i473168.png',
    Description:
      'FIFA 22 is a football simulation video game developed and published by Electronic Arts. The game was announced on July 11, 2021 and released on October 1, 2021 for PlayStation 5, Xbox Series X/S, Google Stadia, Microsoft Windows, PlayStation 4, Xbox One, and PC.',
    Year: 2021,
    ImdbScore: 2.5,
    TrailerYouTubeUrl: 'https://youtu.be/vLj-27T-SEQ',
    GameplayYouTubeUrl: 'https://youtu.be/XlrJ_urwp-Y',
    genre: {
      connect: {
        id: '2e25cd4e-0bba-440e-a896-08ee9e898167',
      },
    },
  },
  {
    Title: 'Forza Horizon 5',
    CoverImageUrl: 'https://i.ebayimg.com/images/g/9VoAAOSwaU9hfHFE/s-l400.jpg',
    Description:
      'Forza Horizon 5 is a racing video game developed by Playground Games and published by Xbox Game Studios. It is the fifth game in the Forza Horizon series and the twelfth main title in the Forza franchise. The game takes place in a fictional representation of Mexico.',
    Year: 2021,
    ImdbScore: 4.35,
    TrailerYouTubeUrl: 'https://youtu.be/FYH9n37B7Yw',
    GameplayYouTubeUrl: 'https://youtu.be/1XB-fTP0iT0',
    genre: {
      connect: {
        id: '1050f467-e75e-42b9-8c7c-72263ad73add',
      },
    },
  },
  {
    Title: 'Resident Evil Village',
    CoverImageUrl:
      'https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png',
    Description:
      'Resident Evil: Village, known in Japan as Biohazard: Village is a survival horror video game developed and published by Capcom. It is the sequel to 2017 Resident Evil 7: Biohazard and was first announced at the PlayStation 5 reveal event on June 11, 2020.',
    Year: 2021,
    ImdbScore: 4.35,
    TrailerYouTubeUrl: 'https://youtu.be/50C9vDayxkE',
    GameplayYouTubeUrl: 'https://youtu.be/W8vdFS_fBhw',
    genre: {
      connect: {
        id: '5d69b8ec-7061-477b-80be-82b7f1736ae9',
      },
    },
  },
  {
    Title: 'Assassins Creed Valhalla',
    CoverImageUrl:
      'https://upload.wikimedia.org/wikipedia/pt/e/e9/Assassins_Creed_Valhalla_capa.png',
    Description:
      'Assassins Creed Valhalla is an action role-playing video game developed by Ubisoft Montreal and published by Ubisoft',
    Year: 2020,
    ImdbScore: 4.05,
    TrailerYouTubeUrl: 'https://youtu.be/TUbgBVTD7VI',
    GameplayYouTubeUrl: 'https://youtu.be/FApX-M_DrDc',
    genre: {
      connect: {
        id: '5543c313-96ea-42b5-a81c-5f9304288576',
      },
    },
  },
  {
    Title: 'Call of Duty: Vanguard',
    CoverImageUrl:
      'https://store-images.s-microsoft.com/image/apps.31712.14284165171924425.328fdc67-fafc-4929-b10f-b1bc44a36c07.9cb9d66c-985e-4c82-b678-6a638d68b0c8',
    Description:
      'Call of Duty: Vanguard is a first-person shooter video game developed by Sledgehammer Games and published by Activision. It was released on November 5, 2021 for Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X/S.',
    Year: 2021,
    ImdbScore: 3,
    TrailerYouTubeUrl: 'https://youtu.be/OQ1CwPhE8KQ',
    GameplayYouTubeUrl: 'https://youtu.be/hsmYOYAEqd4',
    genre: {
      connect: {
        id: '3a3a4738-05fb-43b1-82bc-832e1423933d',
      },
    },
  },
];

export const game = async (prisma: PrismaClient) => {
  for (const obj of Object.values(games)) {
    await prisma.game.upsert({
      where: { Title: obj.Title },
      update: {},
      create: {
        ...obj,
      },
    });
  }
};
