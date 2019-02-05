import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  beforeModel() {
    this.replaceWith('bids')
  },
})

Router.map(function() {
  this.route('bids')
  this.route('place-bid')
})

export default Router
