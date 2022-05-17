import { Client } from './Client/Client'
import { Shipment } from './Shipment/Shipment'
import { FragileShipment } from './Shipment/decorator/FragileShipment'
import { DoNotLeaveShipment } from './Shipment/decorator/DoNotTouchShipment'
import { ReturnReceiptShipment } from './Shipment/decorator/ReturnReceiptShipment'

const client = new Client('Mockingbird Lane, Tulsa, OK', '4th Ave SE, Bellevue, Wa', '12021', '97721', 16)

const shipment = new Shipment(client)

const fragile = new FragileShipment(shipment)
const doNotLeaveShipment = new DoNotLeaveShipment(shipment)
const returnReceiptShipment = new ReturnReceiptShipment(shipment)

console.log(shipment.ship())
console.log(fragile.shipItself())
console.log(doNotLeaveShipment.shipItself())
console.log(returnReceiptShipment.shipItself())
