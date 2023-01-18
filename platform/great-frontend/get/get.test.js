import get from './get';
import { describe, it, expect } from 'vitest'

const john = {
  profile: {
    name: { firstName: 'John', lastName: 'Doe' },
    age: 20,
    gender: 'Male',
  },
};

const jane = {
  profile: {
    age: 19,
    gender: 'Female',
  },
};

// Write vitest test for get function here
describe('get', () => {
  it('should return the value at path of object', () => {
    expect(get(john, 'profile.name.firstName')).toBe('John');
    expect(get(john, 'profile.age')).toBe(20);
  });

  it('should return the defaultValue if the value is undefined', () => {
    expect(get(john, 'profile.name.middleName', 'No middle name')).toBe('No middle name');
    expect(get(jane, 'profile.name.middleName', 'No middle name')).toBe('No middle name');
  });

  it('should return the defaultValue if the value is null', () => {
    expect(get(john, 'profile.name.middleName', 'No middle name')).toBe('No middle name');
    expect(get(jane, 'profile.name.middleName', 'No middle name')).toBe('No middle name');
  });

  it('should return the defaultValue if the value is NaN', () => {
    expect(get(john, 'profile.name.middleName', 'No middle name')).toBe('No middle name');
    expect(get(jane, 'profile.name.middleName', 'No middle name')).toBe('No middle name');
  });

  it('should return the defaultValue if the value is an empty string', () => {
    expect(get(john, 'profile.name.middleName', 'No middle name')).toBe('No middle name');
    expect(get(jane, 'profile.name.middleName', 'No middle name')).toBe('No middle name');
  });

  it('should return the defaultValue if the value is 0', () => {
    expect(get(john, 'profile.name.middleName', 'No middle name')).toBe('No middle name');
    expect(get(jane, 'profile.name.middleName', 'No middle name')).toBe('No middle name');
  });

  it('should return the defaultValue if the value is false', () => {
    expect(get(john, 'profile.name.middleName', 'No middle name')).toBe('No middle name');
    expect(get(jane, 'profile.name.middleName', 'No middle name')).toBe('No middle name');
  });

  it('should return the defaultValue if the value is an empty array', () => {
    expect(get(john, 'profile.name.middleName', 'No middle name')).toBe('No middle name');
    expect(get(jane, 'profile.name.middleName', 'No middle name')).toBe('No middle name');
  });

  it('should return the defaultValue if the value is an empty object', () => {
    expect(get(john, 'profile.name.middleName', 'No middle name')).toBe('No middle name');
    expect(get(jane, 'profile.name.middleName', 'No middle name')).toBe('No middle name');
  });
});

describe('get', () => {
  it('empty object', () => {
    expect(get({}, 'a')).toEqual(undefined);
    expect(get({}, 'a.b')).toEqual(undefined);
  });

  it('path contains one segment', () => {
    expect(get({ a: 1 }, 'a')).toEqual(1);
    expect(get({ c: 2 }, 'b')).toEqual(undefined);
    expect(get({ c: { foo: 1 } }, 'c')).toEqual({ foo: 1 });
  });

  it('path contains two segments', () => {
    expect(get({ a: { b: 2 }, c: 1 }, 'a.b')).toEqual(2);
    expect(get({ a: { b: 2 }, c: 1 }, 'a.c')).toEqual(undefined);
    expect(get({ a: { b: 2, c: { foo: 2 } } }, 'a.c')).toEqual({
      foo: 2,
    });
  });

  it('path contains multiple segments', () => {
    expect(get({ a: { b: 2, c: { d: 0 } }, c: 1 }, 'a.c.d')).toEqual(0);
    expect(get({ a: { b: 2 }, c: 1 }, 'a.c.e.f')).toEqual(undefined);
    expect(
      get({ a: { b: 2, c: { d: { e: { foo: 3 } } } }, c: 1 }, 'a.c.d.e'),
    ).toEqual({ foo: 3 });
  });

  it('array values', () => {
    expect(get({ a: { b: [1, 2, 3], c: { d: 0 } }, c: 1 }, 'a.b.2')).toEqual(3);
    expect(
      get({ a: { b: [1, 2, 3, { c: 'bar' }], c: { d: 0 } }, c: 1 }, 'a.b.3.c'),
    ).toEqual('bar');
  });

  it('uses default value', () => {
    expect(get({}, 'a', 1)).toEqual(1);
    expect(get({}, 'a.b', 2)).toEqual(2);
    expect(get({ c: 2 }, 'b', 3)).toEqual(3);
  });

  it('correctly returns null values', () => {
    expect(get({ b: null }, 'b')).toEqual(null);
    expect(get({ a: { b: 2, c: null }, c: 1 }, 'a.c')).toEqual(null);
    expect(
      get({ a: { b: 2, c: { d: { e: null } } }, c: 1 }, 'a.c.d.e'),
    ).toEqual(null);
  })
});
  