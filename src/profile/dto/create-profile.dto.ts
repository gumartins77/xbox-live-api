import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the profile',
    example: 'gumartins',
  })
  Title: string;
  @IsUrl()
  @ApiProperty({
    description: 'The image of the profile',
    example:
      'https://media.fortniteapi.io/images/7bf522a34af664a172ce581441985e75/transparent.png',
  })
  ImageURL: string;
}
