import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateHomepageDto } from './dto/create-homepage.dto';
import { UpdateHomepageDto } from './dto/update-homepage.dto';
import { HomepageService } from './homepage.service';

@ApiTags('homepage')
@Controller('homepage')
export class HomepageController {
  constructor(private readonly favoriteService: HomepageService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new homepage',
  })
  create(@Body() dto: CreateHomepageDto) {
    return this.favoriteService.create(dto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'List all favorites by related profile',
  })
  findAll(@Param('id') id: string) {
    return this.favoriteService.findAll(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Favorite or unfavorite a game from the profile',
  })
  update(@Param('id') id: string, @Body() dto: UpdateHomepageDto) {
    return this.favoriteService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remove a homepage by Id',
  })
  delete(@Param('id') id: string) {
    return this.favoriteService.delete(id);
  }
}
