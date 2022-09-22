import { Module } from '@nestjs/common';

import { FileReaderService } from './reader.service';

@Module({
  imports: [],
  controllers: [],
  providers: [FileReaderService],
})
export class FileReaderModule {}
