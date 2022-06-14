import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { GameModule } from './game/game.module';
import { GenreModule } from './genre/genre.module';
import { HomepageModule } from './homepage/homepage.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProfileModule } from './profile/profile.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GameModule,
    PrismaModule,
    GenreModule,
    ProfileModule,
    UserModule,
    HomepageModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
