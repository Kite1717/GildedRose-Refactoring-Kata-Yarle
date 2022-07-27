import { updateABrie, updateBPass, updateSHand, updateDefault, updateConj } from "./gilded-rose-functions";
import { Item, ItemTypes } from "./item";
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
        case ItemTypes.CONJ:
          updateConj(item);
          continue;
        default:
          updateDefault(item);
          continue;
      }
    }

    return this.items;
  }
}
