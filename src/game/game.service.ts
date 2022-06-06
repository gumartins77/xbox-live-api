import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'utils/handle-error.util';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.game.findMany({
      select: {
        id: true,
        Title: true,
        CoverImageUrl: true,
      }
    });
  }

  async findById(id: string) {
    const record = await this.prisma.game.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Record with Id '${id}' not found!`);
    }

    return record;
  }

  findOne(id: string) {
    return this.findById(id);
  }

  create(dto: CreateGameDto) {
    const data: Prisma.GameCreateInput = {
      Title: dto.Title,
      CoverImageUrl: dto.CoverImageUrl,
      Description: dto.Description,
      Year: dto.Year,
      ImdbScore: dto.ImdbScore,
      TrailerYouTubeUrl: dto.TrailerYouTubeUrl,
      GameplayYouTubeUrl: dto.GameplayYouTubeUrl,
      genre: {
        connect: {
          Name: dto.genreId,
        },
      },
    };

    return this.prisma.game
      .create({
        data,
        select: {
          id: true,
          Title: true,
          CoverImageUrl: true,
          genre: {
            select: {
              Name: true,
            },
          },
        },
      })
      .catch(handleError);
  }

  async update(id: string, dto: UpdateGameDto) {
    await this.findById(id);

    const data: Prisma.GameUpdateInput = {
      Title: dto.Title,
      CoverImageUrl: dto.CoverImageUrl,
      Description: dto.Description,
      Year: dto.Year,
      ImdbScore: dto.ImdbScore,
      TrailerYouTubeUrl: dto.TrailerYouTubeUrl,
      GameplayYouTubeUrl: dto.GameplayYouTubeUrl,
      genre: {
        connect: {
          Name: dto.genreId,
        },
      },
    };

    return this.prisma.game
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.game.delete({ where: { id } });
  }
}
