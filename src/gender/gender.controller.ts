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
} from '@nestjs/common';
import { GenderService } from './gender.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Gender } from './entities/gender.entity';

@ApiTags('gender')
@Controller('gender')
export class GenderController {
  constructor(private readonly genderService: GenderService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new gender',
  })
  create(@Body() dto: CreateGenderDto): Promise<Gender> {
    return this.genderService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'List all genders',
  })
  findAll(): Promise<Gender[]> {
    return this.genderService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'View a gender by Id',
  })
  findOne(@Param('id') id: string): Promise<Gender> {
    return this.genderService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Edit a gender by Id',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateGenderDto,
  ): Promise<Gender> {
    return this.genderService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remove a gender by Id',
  })
  delete(@Param('id') id: string) {
    this.genderService.delete(id);
  }
}
