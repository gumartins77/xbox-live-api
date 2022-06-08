import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateHomepageDto {
  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    description: 'The action of favoriteing or unfavoring a game',
    example: false
  })
  isFavorite?: boolean
}
