/* eslint-env jest */

import config, { BASE_CONF, DIMENSION_NAMES } from './config';

describe('config', () => {
  describe('BASE_CONF', () => {
    it('should be an object', () => {
      expect(BASE_CONF).toBeType('object');
    });
  });
  describe('DIMENSION_NAMES', () => {
    it('should be an array', () => {
      expect(DIMENSION_NAMES).toBeType('array');
    });
  });
  describe('config()', () => {
    it('should be a function', () => {
      expect(config).toBeType('function');
    });
  });
});
