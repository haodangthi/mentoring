import { Page } from '../page'
import { Pages } from '../pages'

export class PagesFactory {
    static build(pagesConfig: Set<any[]>) {
        const pagesList = this.getPagesList(pagesConfig)

        return new Pages(pagesList)
    }

    private static getPagesList(config: Set<any[]>): Page[] {
        const pagesList = []

        for (const page of config) {
            pagesList.push(new (Function.prototype.bind.apply(Page, [null, ...page]))())
        }

        return pagesList
    }
}
