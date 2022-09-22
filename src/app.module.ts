import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileReaderModule } from './filereader/reader.module';

@Module({
  imports: [FileReaderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
