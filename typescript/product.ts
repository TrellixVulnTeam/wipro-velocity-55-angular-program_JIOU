export class Product {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    display() {
        console.log(`${this.id} - ${this.name}`)
    }

}

let laptop = new Product(101, 'Dell Latitude')
laptop.display()