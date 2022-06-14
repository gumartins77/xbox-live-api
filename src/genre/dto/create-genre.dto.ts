import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenreDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the genre',
    example: 'FPS',
  })
  Name: string;
}
