import { Item } from './Item'

export class Weapon extends Item {
  private _baseDamage: number
  private _baseDurability: number
  private _damageModifier: number = 0
  private _durabilityModifier: number = 0

  protected static MODIFIER_CHANGE_RATE: number = 0.25

  constructor(name, baseDamage, baseDurability, value, weight) {
    super(name, value, weight)

    this._baseDamage = baseDamage
    this._baseDurability = baseDurability
  }

  protected get baseDamage(): number {
    return this._baseDamage
  }

  protected set baseDamage(value: number) {
    this._baseDamage = value
  }

  protected get baseDurability(): number {
    return this._baseDurability
  }

  protected set baseDurability(value: number) {
    this._baseDurability = value
  }

  protected get damageModifier(): number {
    return this._damageModifier
  }

  protected get durabilityModifier(): number {
    return this._durabilityModifier
  }

  protected set durabilityModifier(value: number) {
    this._durabilityModifier = value
  }

  protected set damageModifier(value: number) {
    this._damageModifier = value
  }

  public getDamage(): number {
    return this.baseDamage + this.damageModifier
  }

  public getDurability(): number {
    return this.baseDurability + this.durabilityModifier
  }

  public toString(): string {
    return `${this.name} − Value: ${this.value}, Weight: ${
      this.weight
    }, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}%`
  }

  public use(): string {
    if (this.getDurability() <= 0) {
      return `You can't use the ${this.name}, it is broken.`
    }

    return `You use the ${
      this.name
    }, dealing ${this.getDamage()} points of damage.`
  }
}
