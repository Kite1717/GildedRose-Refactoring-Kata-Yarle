import { Item } from "./item";

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;
const SULFURAS_QUALITY = 80;

const increaseQuality = (quality: number) => Math.min(MAX_QUALITY, quality + 1);
const decreaseQuality = (quality: number) => Math.max(MIN_QUALITY, quality - 1);

export const updateABrie = (item: Item) => {
    item.quality = increaseQuality(item.quality);
    item.quality = item.sellIn < 0 ? increaseQuality(item.quality) : item.quality;
    item.sellIn -= 1;
};

export const updateBPass = (item: Item) => {
    if (item.sellIn === 0) {
        item.quality = 0;
    } else {
        item.quality = increaseQuality(item.quality);
        item.quality =
            item.sellIn < 11 ? increaseQuality(item.quality) : item.quality;
        item.quality =
            item.sellIn < 6 ? increaseQuality(item.quality) : item.quality;
    }
    item.sellIn -= 1;
};

export const updateSHand = (item: Item) => {
    item.quality = SULFURAS_QUALITY;
};

export const updateDefault = (item: Item) => {
    item = updateDecreaseQualityItem(item);
    item.sellIn -= 1;
};

export const updateConj = (item: Item) => {
    if (item.sellIn === 5) {
        item.quality -= 3;
    } else {
        item = updateDecreaseQualityItem(item);
        item = updateDecreaseQualityItem(item);
    }
    item.sellIn -= 1;
};

const updateDecreaseQualityItem = (item: Item): Item => {
    item.quality = decreaseQuality(item.quality);
    item.quality =
        item.sellIn <= 0 ? decreaseQuality(item.quality) : item.quality;
    return item;
};
