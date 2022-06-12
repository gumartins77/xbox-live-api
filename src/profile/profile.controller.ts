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
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Profile } from './entities/profile.entity';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from 'src/user/entities/user.entity';

@ApiTags('profile')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new profile',
  })
  create(@LoggedUser() user: User, @Body() dto: CreateProfileDto): Promise<Profile> {
    return this.profileService.create(user.id, dto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'List all profiles by user',
  })
  findAll(@Param('id') id: string) {
    return this.profileService.findAll(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Edit a profile by Id',
  })
  update(@Param('id') id: string, @Body() dto: UpdateProfileDto) {
    return this.profileService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remove a profile by Id',
  })
  delete(@Param('id') id: string) {
    return this.profileService.delete(id);
  }
}
