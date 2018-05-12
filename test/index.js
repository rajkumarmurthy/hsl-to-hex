const {test} = require('tap');
const hsl = require('../');

test('pure white', ({is, end}) => {
  const expected = '#ffffff';
  const actual = hsl(0, 100, 100);
  const it = 'Full saturation and luminosity should produce pure white';
  is(actual, expected, it);
  end();
});

test('medium gray', ({is, end}) => {
  const expected = '#808080';
  const actual = hsl(0, 0, 50);
  const it = '0% saturation, 50% luminosity should be medium gray';
  is(actual, expected, it);
  end();
});

test('hue - red', ({is, end}) => {
  const expected = '#ff0000';
  const actual = hsl(0, 100, 50);
  const it = '0deg should be red';
  is(actual, expected, it);
  end();
});

test('hue - blue', ({is, end}) => {
  const expected = '#0000ff';
  const actual = hsl(240, 100, 50);
  const it = '240deg should be blue';
  is(actual, expected, it);
  end();
});

test('hue - cyan', ({is, end}) => {
  const expected = '#00ffff';
  const actual = hsl(180, 100, 50);
  const it = '180deg should be cyan';
  is(actual, expected, it);
  end();
});

test('degree overflow', ({is, end}) => {
  const expected = hsl(1, 100, 50);
  const actual = hsl(361, 100, 50);
  const it = '361deg should be the same as 1deg';
  is(actual, expected, it);
  end();
});

test('degree underflow', ({is, end}) => {
  const expected = (-1, 100, 50);
  const actual = hsl(359, 100, 50);
  const it = '-1deg is same as 359 deg';
  is(actual, expected, it);
  end();
});

test('max constraint', ({is, end}) => {
  const expected = hsl(0, 101, 50);
  const actual = hsl(0, 100, 50);
  const it = '101% should be same as 100%';
  is(actual, expected, it);
  end();
});

test('min constraint', ({is, end}) => {
  const expected = hsl(0, -1, 50);
  const actual = hsl(0, 0, 50);
  const it = '-1% should be same as 0%';
  is(actual, expected, it);
  end();
});
