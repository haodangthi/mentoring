import { Shipment } from '../Shipment'
import { SpecialCodesEnum } from '../../enum/special-codes.enum'

export class ShipmentDecorator {
    protected wrapper
    protected text: SpecialCodesEnum

    constructor(shipment: Shipment) {
        this.wrapper = shipment
    }

    shipItself(): string {
        return `${this.wrapper.ship()}
        ${this.getMark()}`
    }

    getMark(): string {
        return `**${this.text.toUpperCase()}**`
    }
}
