import { PackageType } from '../enum/package-type.enum'
import { Client } from '../Client/Client'
import { Letter } from '../Shipment/shipments/Letter/Letter'
import { Package } from '../Shipment/shipments/Package/Package'
import { Oversize } from '../Shipment/shipments/Oversize/Oversize'

export class Shipper {
    protected additionalCost
    protected cost: number

    constructor(private client: Client) {}

    getCost(): number {
        const packageType = this.getPackage().type

        return this.cost + this.client.weight * this.getAdditionalCost(packageType)
    }

    getPackage(): Letter | Package | Oversize {
        const clientWeight = this.client.weight

        if (clientWeight <= 15) {
            return new Letter()
        }

        if (clientWeight <= 160) {
            return new Package()
        }

        return new Oversize()
    }

    getInstance(): Client {
        return this.client
    }

    getAdditionalCost(packageType: PackageType) {
        return this.additionalCost[packageType]
    }
}
