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

const updateABrie = (item: Item) => {
  if (item.quality < 50) {
    item.quality = item.quality + 1;
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0 && item.quality < 50) {
    item.quality = item.quality + 1;
  }
}

const updateBPass = (item: Item) => {
  if (item.quality < 50) {
    item.quality = item.quality + 1
    if (item.sellIn < 11 && item.quality < 50) {
      item.quality = item.quality + 1;
    }
    if (item.sellIn < 6 && item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0) {
    item.quality = item.quality - item.quality;
  }
}

const updateSHand = (item: Item) => {
}

const updateDefault = (item: Item) => {
  if (item.quality > 0) {
    item.quality = item.quality - 1;
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0 && item.quality > 0) {
    item.quality = item.quality - 1;
  }
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
