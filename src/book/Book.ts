import { PageIterable } from '../pageIterable'
import { Pages } from '../pages'
import { Item } from '../Item'

export class Book extends PageIterable(Item) {
    constructor(protected title: string, protected author: string, protected pagesInstance: Pages) {
        super()
    }

    toString(counter: number): string {
        const { pages } = this.pagesInstance
        const currentPage = pages[counter]

        return `${this.constructor.name}: ${this.title} by ${this.author} with number of pages: ${pages.length}, here is page ${currentPage.pageType} #${counter} and it\'s material is ${currentPage.pageMaterial}`
    }
}
