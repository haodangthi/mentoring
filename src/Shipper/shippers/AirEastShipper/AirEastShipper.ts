import { Shipper } from '../../Shipper'
import { PackageType } from '../../../enum/package-type.enum'
import { Client } from '../../../Client/Client'

export class AirEastShipper extends Shipper {
    protected readonly cost = 39
    protected additionalCost = {
        [PackageType.letter]: 0.39,
        [PackageType.package]: 0.25,
        [PackageType.oversize]: 10,
    }

    constructor(client: Client) {
        super(client)
    }
}
