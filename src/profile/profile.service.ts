import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'utils/handle-error.util';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(id: string) {
    return this.prisma.profile.findMany({
      where: { userId: id },
      select: {
        id: true,
        Title: true,
        ImageURL: true
      }
    });
  }

  async findById(id: string) {
    const record = await this.prisma.profile.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Record with Id '${id}' not found!`);
    }

    return record;
  }

  async create(userId: string, dto: CreateProfileDto): Promise<Profile> {
    const data: Prisma.ProfileCreateInput = {
      Title: dto.Title,
      ImageURL: dto.ImageURL,
      user: {
        connect: {
          id: userId,
        },
      },
    };

    return await this.prisma.profile
      .create({
        data,
        select: {
          id: true,
          Title: true,
          ImageURL: true,
          user: {
            select: {
              Name: true,
            },
          },
        },
      })
      .catch(handleError);
  }

  async update(id: string, dto: UpdateProfileDto) {
    await this.findById(id);

    const data: Prisma.ProfileUpdateInput = { ...dto };

    return this.prisma.profile
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.profile.delete({ where: { id } });
  }
}
