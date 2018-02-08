import Assert from 'assert';
import axios from 'axios';

function ChuckApi(opts) {
  Assert.ok(opts, 'Options are required');
  Assert.ok(opts.baseUrl, 'Base Url is required');

  this._api = axios.create({
    baseURL: opts.baseUrl
  });

  this.getCategories = () => {
    return this._api.get('/jokes/categories').then(res => res.data);
  };

  this.getRandom = params => {
    return this._api.get('/jokes/random', { params }).then(res => res.data);
  };

  this.search = params => {
    return this._api
      .get('/jokes/search', { params })
      .then(res => res.data.result);
  };
}

export default ChuckApi;
