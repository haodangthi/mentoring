import { Comparable } from './Comparable'

let id = 0
let counter = 0

export abstract class Item implements Comparable<Item> {
  private _id: number
  private _value: number
  private _name: string
  private _weight: number

  protected constructor(name, value, weight) {
    this._id = id
    this.name = name
    this.value = value
    this.weight = weight

    id++
    counter++
  }

  abstract use(): string

  public static get numberOfItems() {
    return counter
  }

  public compareTo(other: Item): number {
    return this.value === other.value
      ? this.compareNames(other)
      : this.isWeightBigger(other)
  }

  public get weight(): number {
    return this._weight
  }

  public get name(): string {
    return this._name
  }

  public get value(): number {
    return this._value
  }

  public set weight(value: number) {
    this._weight = value
  }

  public set name(value: string) {
    this._name = value
  }

  public set value(value: number) {
    this._value = value
  }

  public static reset() {
    id = 0
  }

  private isWeightBigger(other: Item): number {
    return this.value > other.value ? 1 : -1
  }

  private compareNames(other: Item): number {
    return this.name.toLocaleLowerCase() > other.name.toLocaleLowerCase()
      ? 1
      : -1
  }

  public toString(): string {
    return `${this.name} − Value: ${this.value}, Weight: ${this.weight}`
  }
}
