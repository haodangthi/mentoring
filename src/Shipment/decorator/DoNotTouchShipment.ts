import { ShipmentDecorator } from './ShipmentDecorator'
import { SpecialCodesEnum } from '../../enum/special-codes.enum'
import { Shipment } from '../Shipment'

export class DoNotLeaveShipment extends ShipmentDecorator {
    text = SpecialCodesEnum.doNotLeave

    constructor(shipment: Shipment) {
        super(shipment)
    }
}
