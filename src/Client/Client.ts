let id = 0
export class Client {
    private readonly _shipmentID: number

    constructor(
        private _toAddress: string,
        private _fromAddress: string,
        private _toZipCode: string,
        private _fromZipCode: string,
        private _weight: number
    ) {
        this._shipmentID = id
        id++
    }

    public get weight(): number {
        return this._weight
    }

    public get fromZipCode(): string {
        return this._fromZipCode
    }

    public get shipmentID(): number {
        return this._shipmentID
    }

    public get toAddress(): string {
        return this._toAddress
    }

    public get fromAddress(): string {
        return this._fromAddress
    }

    public get toZipCode(): string {
        return this._toZipCode
    }
}
