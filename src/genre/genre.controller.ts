import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Genre } from './entities/genre.entity';
import { AuthGuard } from '@nestjs/passport';
import { UserValid } from 'src/user/isAdmin.decorator';
import { User } from 'src/user/entities/user.entity';

@ApiTags('genre')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('genre')
export class GenreController {
  constructor(private readonly genderService: GenreService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new genre',
  })
  create(@UserValid() user: User, @Body() dto: CreateGenreDto): Promise<Genre> {
    return this.genderService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'List all genders',
  })
  findAll(@UserValid() user: User): Promise<Genre[]> {
    return this.genderService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'List all games by related genre',
  })
  findAllGamesRelation(@UserValid() user: User, @Param('id') id: string) {
    return this.genderService.findAllGamesRelation(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Edit a genre by Id',
  })
  update(
    @UserValid() user: User,
    @Param('id') id: string,
    @Body() dto: UpdateGenreDto,
  ): Promise<Genre> {
    return this.genderService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remove a genre by Id',
  })
  delete(@UserValid() user: User, @Param('id') id: string) {
    return this.genderService.delete(id);
  }
}
