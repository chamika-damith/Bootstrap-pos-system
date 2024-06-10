export default class orderModel{
    constructor(itemcode,itemname,itemprice,qty,total) {
        this._itemcode = itemcode;
        this._itemname = itemname;
        this._itemprice = itemprice;
        this._qty = qty;
        this._total = total;
    }

    get itemcode() {
        return this._itemcode;
    }

    set itemcode(value) {
        this._itemcode = value;
    }

    get itemname() {
        return this._itemname;
    }

    set itemname(value) {
        this._itemname = value;
    }

    get itemprice() {
        return this._itemprice;
    }

    set itemprice(value) {
        this._itemprice = value;
    }

    get qty() {
        return this._qty;
    }

    set qty(value) {
        this._qty = value;
    }

    get total() {
        return this._total;
    }

    set total(value) {
        this._total = value;
    }
}