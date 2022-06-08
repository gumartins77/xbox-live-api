import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsUUID } from 'class-validator';

export class CreateHomepageDto {
  @IsUUID()
  @ApiProperty({
    description: 'The profile id',
    example: 'af4ed5b6-109c-4496-adc1-aaaede698d93',
  })
  profileId: string;

  @IsUUID()
  @ApiProperty({
    description: 'The game id',
    example: '9e9e886f-ebb3-44f6-a26b-1966e080bfef',
  })
  gameId: string;

  @IsBoolean()
  @ApiProperty({
    description: 'The action of favoriteing a game',
    example: true,
  })
  isFavorite: boolean;
}
