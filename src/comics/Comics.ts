import { PageIterable } from '../pageIterable'
import { Item } from '../Item'
import { Pages } from '../pages'

export class Comics extends PageIterable(Item) {
    constructor(
        protected title: string,
        protected author: string,
        protected artist: string,
        protected pagesInstance: Pages
    ) {
        super()
    }

    toString(counter: number): string {
        const { pages } = this.pagesInstance
        const currentPage = pages[counter]

        return `${this.constructor.name}: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${pages.length}, here is page ${currentPage.pageType} #${counter} and it\'s material is ${currentPage.pageMaterial}`
    }
}
