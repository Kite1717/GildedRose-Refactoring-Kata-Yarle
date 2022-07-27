import { updateABrie, updateBPass, updateSHand, updateDefault, updateConj } from "./gilded-rose-functions";
import { Item, ItemTypes } from "./item";
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality(): Array<Item> {
    for (const item of this.items) {
      switch (item.name) {
        case ItemTypes.A_BRIE:
          updateABrie(item);
          break;
        case ItemTypes.B_PASS:
          updateBPass(item);
          break;
        case ItemTypes.S_HAND:
          updateSHand(item);
          break;
        case ItemTypes.CONJ:
          updateConj(item);
          break;
        default:
          updateDefault(item);
          break;
      }
    }

    return this.items;
  }
}
