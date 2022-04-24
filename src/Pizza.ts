import { Consumable } from './Consumable'

const name = 'pizza1'

export class Pizza extends Consumable {
  private _numberOfSlices: number

  constructor(numberOfSlices, spoiled) {
    super(spoiled, name, 10, 15)

    this.numberOfSlices = numberOfSlices
  }

  public set numberOfSlices(numberOfSlices: number) {
    this._numberOfSlices = numberOfSlices
  }
}
