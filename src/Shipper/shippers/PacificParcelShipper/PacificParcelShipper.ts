import { Shipper } from '../../Shipper'
import { PackageType } from '../../../enum/package-type.enum'
import { Client } from '../../../Client/Client'

export class PacificParcelShipper extends Shipper {
    protected readonly cost = 51
    protected additionalCost = {
        [PackageType.letter]: 0.51,
        [PackageType.package]: 0.19,
        [PackageType.oversize]: 0.02,
    }

    constructor(client: Client) {
        super(client)
    }
}
