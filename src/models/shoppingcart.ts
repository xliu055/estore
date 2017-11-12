import { Product } from "./product";

class ShoppingCartUnit {

    constructor(public product?: Product, public quantity?: number) {

    }

    get price() {
        if (!this.product) {
            return 0;
        }
        return this.product.price * this.quantity;
    }

    get identifier() {
        if (!this.product) {
            return '';
        }
        return this.product.name;
    }
}

export class ShoppingCart {

    static serialize(obj: ShoppingCart): string {
        let o = obj.items.map(i => {
            return {
                product: i.product,
                quantity: i.quantity
            }
        });
        return JSON.stringify(o);
    }

    static deserialize(str: string): ShoppingCart {
        let obj = new ShoppingCart();
        if (!str) return obj;

        let o = JSON.parse(str);
        for (let i of o) {
            obj.items.push(new ShoppingCartUnit(i.product, i.quantity));
        }

        return obj;
    }

    constructor() {
        this.items = new Array<ShoppingCartUnit>();
    }

    items: Array<ShoppingCartUnit>;

    get totalPrice() {
        return this.items.map(i => i.price)
            .reduce((i, j) => {
                return i + j;
            }, 0);
    }

    get totalCount() {
        return this.items.map(i => i.quantity)
            .reduce((i, j) => {
                return i + j;
            }, 0);
    }

    addToCart(product: Product): void {
        let unit = this.items.find(i => i.identifier === product.name);
        if (unit) {
            unit.quantity++;
        } else {
            this.items.push(new ShoppingCartUnit(product, 1));
        }
    }

    removeFromCart(product: Product): void {
        let unit = this.items.find(i => i.identifier === product.name);
        if (!unit) {
            return;
        }

        if (unit.quantity > 1) {
            unit.quantity--;
        } else {
            console.log(this.items.indexOf(unit));
            this.items.splice(this.items.indexOf(unit), 1);
        }
    }

    removeAll(): void {
        this.items.splice(0, this.items.length);
    }
}
