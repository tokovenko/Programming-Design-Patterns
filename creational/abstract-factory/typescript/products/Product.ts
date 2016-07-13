abstract class Product {
    public price: number;
    public name: string;

    public getPrice() {
        return this.price;
    }
    public getName() {
        return this.name;
    };
}

export {Product}
