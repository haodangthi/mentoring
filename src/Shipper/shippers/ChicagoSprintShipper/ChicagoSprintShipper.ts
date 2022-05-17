import { Shipper } from '../../Shipper'
import { PackageType } from '../../../enum/package-type.enum'
import { Client } from '../../../Client/Client'

export class ChicagoSprintShipper extends Shipper {
    protected readonly cost = 42
    protected additionalCost = {
        [PackageType.letter]: 0.42,
        [PackageType.package]: 0.2,
        [PackageType.oversize]: 0,
    }

    constructor(client: Client) {
        super(client)
    }
}
