import App from './App.js';

App.start(3000, '127.0.0.1');

const options = {
  host: 'nodejs.org',
  path: '/dist/latest-v18.x/docs/api/'
}
App.request(options)
