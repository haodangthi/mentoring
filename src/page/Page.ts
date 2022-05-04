export class Page {
    constructor(private _pageNumber: number, private _pageType: string, private _pageMaterial: string) {}

    public get pageNumber(): number {
        return this._pageNumber
    }

    public get pageType(): string {
        return this._pageType
    }

    public get pageMaterial(): string {
        return this._pageMaterial
    }

    public toString(): string {
        return `here is page with some content #${this.pageNumber} and it\'s material is paper`
    }
}
