// your code goes here
import { Weapon } from './Weapon'

const weaponName = 'sword'

export class Sword extends Weapon {
  constructor(baseDamage, baseDurability, value, weight) {
    super(weaponName, baseDamage, baseDurability, value, weight)
  }

  public polish(): void {
    this.damageModifier += Weapon.MODIFIER_CHANGE_RATE * this.baseDamage
  }
}
