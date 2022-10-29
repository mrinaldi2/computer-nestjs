import { Injectable } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';

@Injectable()
export class ComputerService {

  constructor(private cpuSer: CpuService) {
    
  }
}
