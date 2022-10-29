import { Module } from '@nestjs/common';
import { PowerSupplyModule } from 'src/power-supply/power-supply.module';
import { DiskService } from './disk.service';

@Module({
  providers: [DiskService],
  imports: [PowerSupplyModule],
  exports: [DiskService]
})
export class DiskModule {}
