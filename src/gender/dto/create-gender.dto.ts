import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateGenderDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the gender',
    example: 'Action',
  })
  Name: string;
}
