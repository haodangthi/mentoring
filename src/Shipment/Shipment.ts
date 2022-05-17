import { Client } from '../Client/Client'
import { AirEastShipper } from '../Shipper/shippers/AirEastShipper/AirEastShipper'
import { ChicagoSprintShipper } from '../Shipper/shippers/ChicagoSprintShipper/ChicagoSprintShipper'
import { PacificParcelShipper } from '../Shipper/shippers/PacificParcelShipper/PacificParcelShipper'

export class Shipment {
    constructor(private client: Client) {}

    getInstance(): Client {
        return this.client
    }

    getShipmentID(): number {
        return this.client.shipmentID
    }

    getShipper(): AirEastShipper | ChicagoSprintShipper | PacificParcelShipper {
        const firstZipcodeLetter = +(this.client.fromZipCode as any)[0]

        switch (firstZipcodeLetter) {
            case 1:
            case 2:
            case 3:
            default:
                return new AirEastShipper(this.client)
            case 4:
            case 5:
            case 6:
                return new ChicagoSprintShipper(this.client)
            case 7:
            case 8:
            case 9:
                return new PacificParcelShipper(this.client)
        }
    }

    getCost(): number {
        const shipper = this.getShipper()

        return shipper.getCost()
    }

    ship(): string {
        return `Shipment with the ID ${this.getShipmentID()} will be picked up from ${this.client.fromAddress} ${
            this.client.fromZipCode
        } and shipped to ${this.client.toAddress} ${this.client.toZipCode}
        Cost = ${this.getCost()}`
    }
}
