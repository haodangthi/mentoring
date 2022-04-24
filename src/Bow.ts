import { Weapon } from './Weapon'

const weaponName = 'bow'

export class Bow extends Weapon {
  constructor(baseDamage, baseDurability, value, weight) {
    super(weaponName, baseDamage, baseDurability, value, weight)
  }

  public polish(): void {
    this.damageModifier += Weapon.MODIFIER_CHANGE_RATE * this.baseDamage
  }
}
