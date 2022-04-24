import { Item } from './Item'
import { ItemWeightComparator } from './ItemWeightComparator'

export class Inventory {
  items: Item[] = []

  public sort(comparator?: ItemWeightComparator): void {
    if (comparator) {
      this.items.sort(comparator.compare.bind(comparator))
    }

    this.items.sort()
  }

  public toString(): string {
    return this.items.map((item) => item.name).join(', ')
  }

  public addItem(item: Item): void {
    this.items.push(item)
  }
}
