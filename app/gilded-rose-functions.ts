import { Item } from "./item";

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

const increaseQuality = (quality: number) => Math.min(MAX_QUALITY, quality + 1);
const decreaseQuality = (quality: number) => Math.max(MIN_QUALITY, quality + 1);



export const updateABrie = (item: Item) => {
    item.quality = increaseQuality(item.quality);
    item.sellIn -= 1;
    item.quality = item.sellIn < 0 ? increaseQuality(item.quality) : item.quality;
}

export const updateBPass = (item: Item) => {
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

export const updateSHand = (item: Item) => {
}

export const updateDefault = (item: Item) => {
    if (item.quality > 0) {
        item.quality = item.quality - 1;
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0 && item.quality > 0) {
        item.quality = item.quality - 1;
    }
}
