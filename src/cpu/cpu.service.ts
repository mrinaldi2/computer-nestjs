import { Injectable, Logger } from '@nestjs/common';
import { stringify } from 'querystring';
import { PowerSupplyService } from 'src/power-supply/power-supply.service';

@Injectable()
export class CpuService {

    private logger: Logger = new Logger();

    constructor(private powerSupplyService: PowerSupplyService) {}

    public compute(code: string): string {
        this.logger.log(`Going to consume power to compute ${code}`, "CpuService");
        this.powerSupplyService.supplyPower(100);
        return code;
    }
}
