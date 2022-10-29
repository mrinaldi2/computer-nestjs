import { Module } from '@nestjs/common';
import { CpuModule } from 'src/cpu/cpu.module';
import { ComputerService } from './computer.service';

@Module({
  providers: [ComputerService],
  imports: [CpuModule]
})
export class ComputerModule {}
