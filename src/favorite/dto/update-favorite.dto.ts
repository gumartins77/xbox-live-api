import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';
import { CreateFavoriteDto } from './create-favorite.dto';

export class UpdateFavoriteDto {
  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    description: 'The action of favoriteing or unfavoring a game',
    example: false
  })
  isFavorite?: boolean
}
