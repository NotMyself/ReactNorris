import React from 'react';
import ReactDOM from 'react-dom';
import ChuckApi from './ChuckApi';

const baseUrl = 'https://api.chucknorris.io/';

describe('ChuckApi', () => {
  describe('constructor', () => {
    it('should throw on empty options', () => {
      expect(() => new ChuckApi()).toThrow();
    });

    it('should throw if baseUrl is not supplied', () => {
      expect(() => new ChuckApi({})).toThrow();
    });

    it('should construct an axios object', () => {
      const url = 'http://example.com';
      const api = new ChuckApi({
        baseUrl: url
      });

      expect(api._api).toBeDefined();
      expect(api._api.defaults.baseURL).toEqual(url);
    });
  });

  describe('methods', () => {
    const api = new ChuckApi({ baseUrl });
    describe('getRandom', () => {
      it('should get a random joke', done => {
        api
          .getRandom()
          .then(joke => {
            expect(joke).toBeDefined();
            expect(joke).toBeInstanceOf(Object);
            done();
          })
          .catch(err => done(err));
      });

      it('should get a random joke by category', done => {
        const category = 'science';
        api
          .getRandom({ category })
          .then(joke => {
            expect(joke).toBeDefined();
            expect(joke).toBeInstanceOf(Object);
            expect(joke.category).toEqual(category);
            done();
          })
          .catch(err => done(err));
      });
    });

    describe('search', () => {
      it('should get a set of jokes containing the search term', done => {
        const query = 'punch';
        api
          .search({ query })
          .then(joke => {
            expect(jokes).toBeDefined();
            expect(jokes).toBeInstanceOf(Array);
            jokes.forEach(joke => {
              expect(joke.value).stringContaining(query);
            });
            done();
          })
          .catch(err => done(err));
      });
    });

    describe('getCategories', () => {
      it('should get a list of catetories', done => {
        api
          .getCategories()
          .then(categories => {
            expect(categories).toBeInstanceOf(Array);
            done();
          })
          .catch(err => done(err));
      });
    });
  });
});
