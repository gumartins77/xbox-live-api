import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'utils/handle-error.util';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';

@Injectable()
export class FavoriteService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(id: string) {
    const allGames = await this.prisma.favorite.findMany({
      where: { profileId: id },
      select: {
        id: true,
        isFavorite: true,
        game: {
          select: {
            Title: true,
            CoverImageUrl: true,
          },
        },
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
    const record = await this.prisma.favorite.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Record with Id '${id}' not found!`);
    }

    return record;
  }

  async create(dto: CreateFavoriteDto) {
    const data: Prisma.FavoriteCreateInput = {
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
      return await this.prisma.favorite
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

  async update(id: string, dto: UpdateFavoriteDto) {
    await this.findById(id);

    const data: Prisma.FavoriteUpdateInput = {
      isFavorite: dto.isFavorite,
    };

    return this.prisma.favorite
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.favorite.delete({ where: { id } });
  }
}
