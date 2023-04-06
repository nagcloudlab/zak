import { DiscountPipe } from './discount.pipe';

describe('DiscountPipe', () => {
  it('shoud return 999 on 1000', () => {
    const pipe = new DiscountPipe();
    expect(pipe.transform(1000)).toBe(999);
  });
});
