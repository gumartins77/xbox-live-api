import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HomepageController } from './homepage.controller';
import { HomepageService } from './homepage.service';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [HomepageController],
  providers: [HomepageService],
})
export class HomepageModule {}
