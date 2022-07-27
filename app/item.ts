export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export const ItemTypes: ItemTypes = {
    A_BRIE: 'Aged Brie',
    B_PASS: 'Backstage passes to a TAFKAL80ETC concert',
    S_HAND: 'Sulfuras, Hand of Ragnaros'
}
interface ItemTypes {
    A_BRIE: string;
    B_PASS: string;
    S_HAND: string;
}