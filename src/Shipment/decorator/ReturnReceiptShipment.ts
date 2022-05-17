import { SpecialCodesEnum } from '../../enum/special-codes.enum'
import { Shipment } from '../Shipment'
import { ShipmentDecorator } from './ShipmentDecorator'

export class ReturnReceiptShipment extends ShipmentDecorator {
    text = SpecialCodesEnum.returnReceiptRequested

    constructor(shipment: Shipment) {
        super(shipment)
    }
}
