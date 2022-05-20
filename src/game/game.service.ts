import { Body, Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  games: Game[] = [];

  findAll() {
    return this.games;
  }

  create(createGameDto: CreateGameDto) {
    const game: Game = { id: this.games.length + 1, ...createGameDto };

    this.games.push(game);

    return game;
  }
}
