import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PowerSupplyService {

    private logger: Logger = new Logger();

    supplyPower(watts: number) : void {
        this.logger.log(`will supply ${watts} of power`,"PowerSupplyService");
    }

}
