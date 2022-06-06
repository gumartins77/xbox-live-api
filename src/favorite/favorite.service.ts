import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'utils/handle-error.util';
import { CreateFavoriteDto } from './dto/create-favorite.dto';

@Injectable()
export class FavoriteService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(id: string) {
    return this.prisma.favorite.findMany({
      where: { profileId: id },
      select: {
        id: true,
        game: {
          select: {
            Title: true,
            CoverImageUrl: true,
          },
        },
      },
    });
  }

  async findById(id: string) {
    const record = await this.prisma.favorite.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Record with Id '${id}' not found!`);
    }

    return record;
  }

  create(dto: CreateFavoriteDto) {
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
    };

    return this.prisma.favorite
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
        },
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.favorite.delete({ where: { id } });
  }
}
