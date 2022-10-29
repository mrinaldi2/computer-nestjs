import { Controller, Get, Logger, Param } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {

    private logger: Logger = new Logger();

    constructor(private cpuService: CpuService, private diskService: DiskService) {

    }

    @Get("/execute/:code")
    computeCode(@Param("code") code: string) {
        this.logger.log(`Going to compute code: ${code}`, "ComputerController")
        this.diskService.saveData(code);
        return this.cpuService.compute(code);
    }
}
