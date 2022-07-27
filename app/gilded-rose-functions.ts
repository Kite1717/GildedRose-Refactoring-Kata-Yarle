
const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

const increaseQuality = (quality: number) => Math.min(MAX_QUALITY, quality + 1)
const decreaseQuality = (quality: number) => Math.max(MIN_QUALITY, quality + 1)


