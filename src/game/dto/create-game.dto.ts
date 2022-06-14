import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
  IsUUID,
} from 'class-validator';

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The title of the game',
    example: 'Halo Infinite',
  })
  Title: string;
  @IsUrl()
  @ApiProperty({
    description: 'The game image URL',
    example:
      'https://upload.wikimedia.org/wikipedia/pt/d/d1/Halo_Infinite_capa.png',
  })
  CoverImageUrl: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The description of the game',
    example:
      'Halo Infinite is a first-person shooter video game developed by 343 Industries and published by Xbox Game Studios. It was released on December 8, 2021 for Microsoft Windows, Xbox One, and Xbox Series X/S.',
  })
  Description: string;
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'The game release year',
    example: 2021,
  })
  Year: number;
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @IsPositive()
  @ApiProperty({
    description: 'The game IMBD Score (0 to 5)',
    example: 4.25,
  })
  ImdbScore: number;
  @IsUrl()
  @ApiProperty({
    description: 'The URL of the game Youtube video trailer',
    example: 'https://youtu.be/PyMlV5_HRWk',
  })
  TrailerYouTubeUrl: string;
  @IsUrl()
  @ApiProperty({
    description: 'The URL of the game Youtube gameplay video',
    example: 'https://youtu.be/HZtc5-syeAk',
  })
  GameplayYouTubeUrl: string;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'The genre of the game',
    example: ['dcaff4f1-f984-49c2-a7ec-ccbe8d9d49a7'],
  })
  genres: string[];
}
