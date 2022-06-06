import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { FavoriteService } from './favorite.service';

@ApiTags('favorite')
@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new favorite',
  })
  create(@Body() dto: CreateFavoriteDto) {
    return this.favoriteService.create(dto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'List all favorites by related profile',
  })
  findAll(@Param('id') id: string) {
    return this.favoriteService.findAll(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remove a favorite by Id',
  })
  delete(@Param('id') id: string) {
    return this.favoriteService.delete(id);
  }
}
