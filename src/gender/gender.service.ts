import {
  HttpException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './entities/gender.entity';

@Injectable()
export class GenderService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Gender[]> {
    return this.prisma.gender.findMany();
  }

  async findById(id: string): Promise<Gender> {
    const record = await this.prisma.gender.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Record with Id '${id}' not found!`);
    }

    return record;
  }

  findOne(id: string): Promise<Gender> {
    return this.findById(id);
  }

  create(dto: CreateGenderDto): Promise<Gender> {
    const data: Gender = { ...dto };

    return this.prisma.gender.create({ data }).catch(this.handleError);
  }

  async update(id: string, dto: UpdateGenderDto) {
    await this.findById(id);

    const data: Partial<Gender> = { ...dto };

    return this.prisma.gender
      .update({
        where: { id },
        data,
      })
      .catch(this.handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.gender.delete({ where: { id } });
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();

    throw new UnprocessableEntityException(
      lastErrorLine || 'An error occurred while performing the operation!',
    );
  }
}
