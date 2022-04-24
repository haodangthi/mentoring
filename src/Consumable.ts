import { Item } from './Item'

export class Consumable extends Item {
  private _consumed = false
  private _spoiled: boolean

  constructor(spoiled, name, value, weight) {
    super(name, value, weight)

    this.spoiled = spoiled
  }

  public get spoiled(): boolean {
    return this._spoiled
  }

  public get consumed(): boolean {
    return this._consumed
  }

  public set spoiled(value: boolean) {
    this._spoiled = value
  }

  public set consumed(value: boolean) {
    this._consumed = value
  }

  public use(): string {
    return this.consumed
      ? `There is nothing left of the ${this.name} to consume.`
      : this.eat()
  }

  public eat(): string {
    const mainMsg = `You eat the ${this.name}`

    return this.spoiled ? `${mainMsg}\n You feel sick.` : `${mainMsg}`
  }
}
