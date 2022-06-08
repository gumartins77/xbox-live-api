import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'utils/handle-error.util';
import { CreateHomepageDto } from './dto/create-homepage.dto';
import { UpdateHomepageDto } from './dto/update-homepage.dto';

@Injectable()
export class HomepageService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(id: string) {
    const allGames = await this.prisma.homepage.findMany({
      orderBy: {
        isFavorite: "desc",
      },
      where: { profileId: id },
      select: {
        id: true,
        isFavorite: true,
        game: true
      },
    });

    const allGenders = await this.prisma.genre.findMany({
      select: {
        Name: true,
        games: {
          select: {
            Title: true,
            CoverImageUrl: true
          }
        }
      }
    })

    return ({allGames, allGenders});
  }

  async findById(id: string) {
    const record = await this.prisma.homepage.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Record with Id '${id}' not found!`);
    }

    return record;
  }

  async create(dto: CreateHomepageDto) {
    const data: Prisma.HomepageCreateInput = {
      game: {
        connect: {
          id: dto.gameId,
        },
      },
      profile: {
        connect: {
          id: dto.profileId,
        },
      },
      isFavorite: dto.isFavorite,
    };

    try {
      return await this.prisma.homepage
        .create({
          data,
          select: {
            id: true,
            game: {
              select: {
                Title: true,
                CoverImageUrl: true,
              },
            },
            profile: {
              select: {
                Title: true,
              },
            },
            isFavorite: true,
          },
        });
    } catch (error) {
      return handleError(error);
    }
  }

  async update(id: string, dto: UpdateHomepageDto) {
    await this.findById(id);

    const data: Prisma.HomepageUpdateInput = {
      isFavorite: dto.isFavorite,
    };

    return this.prisma.homepage
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.homepage.delete({ where: { id } });
  }
}
