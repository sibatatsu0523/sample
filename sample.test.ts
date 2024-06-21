import {Sample}  from './sample.ts';


describe('walkFast関数のモック化テスト', () => {
  // テスト2
  test('モック化できているか', () => {
    
    const sample = new Sample();

      expect(sample.getData()).toBe(2);
  });
});