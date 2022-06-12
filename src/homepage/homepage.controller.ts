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
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateHomepageDto } from './dto/create-homepage.dto';
import { UpdateHomepageDto } from './dto/update-homepage.dto';
import { HomepageService } from './homepage.service';

@ApiTags('homepage')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('homepage')
export class HomepageController {
  constructor(private readonly favoriteService: HomepageService) {}

  @Post()
  @ApiOperation({
    summary:
      'Add an existing game from the API games list to your profile homepage',
  })
  create(@Body() dto: CreateHomepageDto) {
    return this.favoriteService.create(dto);
  }

  @Get(':id')
  @ApiOperation({
    summary:
      'Individual profile homepage with their added games, favorites and sorted by genre',
  })
  findAll(@Param('id') id: string) {
    return this.favoriteService.findAll(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Favorite or unfavorite a game from the profile by Id',
  })
  update(@Param('id') id: string, @Body() dto: UpdateHomepageDto) {
    return this.favoriteService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remove a game from profile homepage by Id',
  })
  delete(@Param('id') id: string) {
    return this.favoriteService.delete(id);
  }
}
