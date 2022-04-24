import { Item } from './Item'
import { ItemComparator } from './ItemComparator'

export class ItemWeightComparator implements ItemComparator {
  public compare(first: Item, second: Item): number {
    return this.isWeightEqual(first, second)
      ? first.compareTo(second)
      : this.isWeightBigger(first, second)
  }

  private isWeightEqual(first: Item, second: Item): boolean {
    return first.weight === second.weight
  }

  private isWeightBigger(first: Item, second: Item): number {
    return first.weight > second.weight ? 1 : -1
  }
}
