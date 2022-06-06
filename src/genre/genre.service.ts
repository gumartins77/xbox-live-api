import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'utils/handle-error.util';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenreService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Genre[]> {
    return this.prisma.genre.findMany();
  }

  async findById(id: string): Promise<Genre> {
    const record = await this.prisma.genre.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Record with Id '${id}' not found!`);
    }

    return record;
  }

  findAllGamesRelation(id: string) {
    return this.prisma.genre.findMany({
      where: { id: id },
      select: {
        games: {
          select: {
            Title: true,
            CoverImageUrl: true,
          },
        },
      },
    });
  }

  create(dto: CreateGenreDto): Promise<Genre> {
    const data: Genre = { ...dto };

    return this.prisma.genre.create({ data }).catch(handleError);
  }

  async update(id: string, dto: UpdateGenreDto) {
    await this.findById(id);

    const data: Partial<Genre> = { ...dto };

    return this.prisma.genre
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.genre.delete({ where: { id } });
  }
}
