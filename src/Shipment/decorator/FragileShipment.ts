import { ShipmentDecorator } from './ShipmentDecorator'
import { SpecialCodesEnum } from '../../enum/special-codes.enum'
import { Shipment } from '../Shipment'

export class FragileShipment extends ShipmentDecorator {
    text = SpecialCodesEnum.fragile

    constructor(shipment: Shipment) {
        super(shipment)
    }
}
