import Controller from '@ember/controller';
import jquery from 'jquery';

export default Controller.extend({
  response: null,
  
  actions: {
    async fetchData() {
      let response = await jquery.ajax({ url: 'https://jsonplaceholder.typicode.com/posts/1', method: 'GET' });

      this.set('response', response);
    }
  }
});
