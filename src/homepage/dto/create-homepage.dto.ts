import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsUUID } from 'class-validator';

export class CreateHomepageDto {
  @IsUUID()
  @ApiProperty({
    description: 'The profile id',
    example: '29d2d681-70fe-40f3-bcdd-1d8a07c98fcc',
  })
  profileId: string;

  @IsUUID()
  @ApiProperty({
    description: 'The game id',
    example: 'e8de0513-1f8c-46bd-9c72-8314211a6832',
  })
  gameId: string;

  @IsBoolean()
  @ApiProperty({
    description: 'The action of favoriteing a game',
    example: true,
  })
  isFavorite: boolean;
}
