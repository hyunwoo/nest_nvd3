import { Module } from '@nestjs/common';

import { TestService } from '../domains/test.service';

@Module({
  imports: [],
  providers: [TestService],
})
export class TestModule {}
