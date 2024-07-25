import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JWATModule } from './JWAT/jwat.module';

@Module({
  imports: [JWATModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
