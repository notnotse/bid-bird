import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import { firebaseDocData } from '../helpers/utils'

export default Route.extend({
  firebase: service('firebase'),
  model() {
    return this.firebase.db
      .collection('auction')
      .doc('settings')
      .get()
      .then(firebaseDocData)
  },
})
