import { expect } from 'chai';
import { GildedRose } from '@/gilded-rose';
import { Item } from '@/item';

describe('Gilded Rose', () => {
  it('should add new item', () => {
      const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
      const added = gildedRose.items[0]
      expect(added.name).to.equal('foo');
      expect(added.quality).to.equal(0);
      expect(added.sellIn).to.equal(0);
  });
});

describe('basic quality rules', () => {
  it('should update quality for sellin 1 day', () => {
      const gildedRose = new GildedRose([ new Item('foo', 1, 1) ]);
      const items = gildedRose.updateQuality();
      const added =items[0]
      expect(added.quality).to.equal(0);
      expect(added.sellIn).to.equal(0);
  });
   
  it('should update quality 2x as fast for sellin 0 days', () => {
      const gildedRose = new GildedRose([ new Item('foo', 0, 4) ]);
      const items = gildedRose.updateQuality();
       const added =items[0]
      expect(added.quality).to.equal(2);
      expect(added.sellIn).to.equal(-1);
  });

  it('quality should never go below 0', () => {
      const gildedRose = new GildedRose([ new Item('foo', 0, 1) ]);
      const items = gildedRose.updateQuality();
      const added = items[0]
      expect(added.quality).to.equal(0);
      expect(added.sellIn).to.equal(-1);
  });
})
