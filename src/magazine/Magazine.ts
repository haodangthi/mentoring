import { PageIterable } from '../pageIterable'
import { Item } from '../Item'
import { Pages } from '../pages'

export class Magazine extends PageIterable(Item) {
    constructor(protected title: string, protected pagesInstance: Pages) {
        super()
    }

    toString(counter: number): string {
        const { pages } = this.pagesInstance
        const currentPage = pages[counter]

        return `${this.constructor.name}: ${this.title} with number of pages: ${pages.length}, here is page ${currentPage.pageType} #${counter} and it\'s material is ${currentPage.pageMaterial}`
    }
}
