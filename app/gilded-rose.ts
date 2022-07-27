export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
const ItemTypes = {
  A_BRIE: 'Aged Brie',
  B_PASS: 'Backstage passes to a TAFKAL80ETC concert',
  S_HAND: 'Sulfuras, Hand of Ragnaros'
}

const updateABrie = (item) => {
  if (item.quality < 50) {
    item.quality = item.quality + 1;
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0 && item.quality < 50) {
    item.quality = item.quality + 1;
  }
}

const updateBPass = (item) => {
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

const updateSHand = (item) => {

  if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
    if (item.quality > 0) {
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.quality = item.quality - 1
      }
    }
  } else {
    if (item.quality < 50) {
      item.quality = item.quality + 1
      if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.sellIn < 11) {
          if (item.quality < 50) {
            item.quality = item.quality + 1
          }
        }
        if (item.sellIn < 6) {
          if (item.quality < 50) {
            item.quality = item.quality + 1
          }
        }
      }
    }
  }
  if (item.name != 'Sulfuras, Hand of Ragnaros') {
    item.sellIn = item.sellIn - 1;
  }
  if (item.sellIn < 0) {
    if (item.name != 'Aged Brie') {
      if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.quality > 0) {
          if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.quality = item.quality - 1
          }
        }
      } else {
        item.quality = item.quality - item.quality
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1
      }
    }
  }

}

const updateDefault = (item) => {


  if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
    if (item.quality > 0) {
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.quality = item.quality - 1
      }
    }
  } else {
    if (item.quality < 50) {
      item.quality = item.quality + 1
      if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.sellIn < 11) {
          if (item.quality < 50) {
            item.quality = item.quality + 1
          }
        }
        if (item.sellIn < 6) {
          if (item.quality < 50) {
            item.quality = item.quality + 1
          }
        }
      }
    }
  }
  if (item.name != 'Sulfuras, Hand of Ragnaros') {
    item.sellIn = item.sellIn - 1;
  }
  if (item.sellIn < 0) {
    if (item.name != 'Aged Brie') {
      if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.quality > 0) {
          if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.quality = item.quality - 1
          }
        }
      } else {
        item.quality = item.quality - item.quality
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1
      }
    }
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
