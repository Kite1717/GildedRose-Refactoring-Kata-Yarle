import { GildedRose } from '@/gilded-rose';
import { Item } from '@/item';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });
});

describe('basic quality rules', () => {
  it('should update quality for sellin 1 day', () => {
      const gildedRose = new GildedRose([ new Item('foo', 1, 1) ]);
      const items = gildedRose.updateQuality();
      const added =items[0]
      expect(added.quality).toBe(0);
      expect(added.sellIn).toBe(0);
  });
   
  it('should update quality 2x as fast for sellin 0 days', () => {
      const gildedRose = new GildedRose([ new Item('foo', 0, 4) ]);
      const items = gildedRose.updateQuality();
       const added =items[0]
      expect(added.quality).toBe(2);
      expect(added.sellIn).toBe(-1);
  });

  it('quality should never go below 0', () => {
      const gildedRose = new GildedRose([ new Item('foo', 0, 1) ]);
      const items = gildedRose.updateQuality();
      const added = items[0]
      expect(added.quality).toBe(0);
      expect(added.sellIn).toBe(-1);
  });
})

