import { Injectable, Logger } from '@nestjs/common';
import { PowerSupplyService } from 'src/power-supply/power-supply.service';

@Injectable()
export class DiskService {

    private logger: Logger = new Logger();

    constructor(private powerSupplyService: PowerSupplyService) {}

    saveData(code: string) {
        this.logger.log(`Going to consume 20 watts to save ${code}}`, "DiskService");
        this.powerSupplyService.supplyPower(20);
    }
}
