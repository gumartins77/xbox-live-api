import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'utils/handle-error.util';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private userSelect = {
    id: true,
    Name: true,
    Email: true,
    Password: false,
    CPF: false,
    isAdmin: true,
    createdAt: true,
    updatedAt: true,
  };

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({ select: this.userSelect });
  }

  async findById(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({
      where: { id },
      select: this.userSelect,
    });

    if (!record) {
      throw new NotFoundException(`Record with Id '${id}' not found!`);
    }

    return record;
  }

  findOne(id: string): Promise<User> {
    return this.findById(id);
  }

  async create(dto: CreateUserDto): Promise<User> {
    const data: User = {
      ...dto,
      Password: await bcrypt.hash(dto.Password, 10),
    };

    if (!data.isAdmin) {
      data.isAdmin = false;
    }

    return this.prisma.user
      .create({ data, select: this.userSelect })
      .catch(handleError);
  }

  async update(id: string, dto: UpdateUserDto) {
    await this.findById(id);

    const data: Partial<User> = { ...dto };

    if (data.Password) {
      data.Password = await bcrypt.hash(data.Password, 10);
    }

    return this.prisma.user
      .update({
        where: { id },
        data,
        select: this.userSelect,
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.user.delete({ where: { id } });
  }
}
