import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl, IsUUID } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the profile',
    example: 'MasterChief',
  })
  Title: string;
  @IsUrl()
  @ApiProperty({
    description: 'The image of the profile',
    example:
      'https://media.fortniteapi.io/images/7bf522a34af664a172ce581441985e75/transparent.png',
  })
  ImageURL: string;

  @IsUUID()
  @ApiProperty({
    description: 'User id that this profile is created',
    example: '992cc2c4-9673-4843-866c-ac0f285444fe',
  })
  userId: string;
}
