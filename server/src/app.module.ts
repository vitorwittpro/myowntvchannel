import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoModule } from './modules/video.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    VideoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'postgres',
      entities: [],
      // Warning
      synchronize: true, // Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
