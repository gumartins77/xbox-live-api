import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './entities/game.entity';
import { GameService } from './game.service';

@ApiTags('game')
@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get()
  findAll(): Game[] | object {
    return this.gameService.findAll();
  }

  @Post()
  create(@Body() createGameDto: CreateGameDto): Game {
    return this.gameService.create(createGameDto);
  }
}
