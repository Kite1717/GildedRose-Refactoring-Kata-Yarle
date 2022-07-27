import { updateABrie, updateBPass, updateSHand, updateDefault } from "./gilded-rose-functions";
import { Item } from "./item";

interface ItemTypes {
  A_BRIE: string;
  B_PASS: string;
  S_HAND: string;
}

const ItemTypes: ItemTypes = {
  A_BRIE: 'Aged Brie',
  B_PASS: 'Backstage passes to a TAFKAL80ETC concert',
  S_HAND: 'Sulfuras, Hand of Ragnaros'
}



export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {

      switch (item.name) {
        case ItemTypes.A_BRIE:
          updateABrie(item);
          continue;
        case ItemTypes.B_PASS:
          updateBPass(item);
          continue;
        case ItemTypes.S_HAND:
          updateSHand(item);
          continue;
        default:
          updateDefault(item);
          continue;
      }

    }

    return this.items;
  }
}
