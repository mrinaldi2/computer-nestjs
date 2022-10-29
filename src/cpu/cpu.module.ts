import { Module } from '@nestjs/common';
import { PowerSupplyModule } from 'src/power-supply/power-supply.module';
import { CpuService } from './cpu.service';

@Module({
  providers: [CpuService],
  exports: [CpuService],
  imports: [PowerSupplyModule]
})
export class CpuModule {}
