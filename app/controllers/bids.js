import Controller from '@ember/controller'
import { inject as service } from '@ember/service'
import { firebaseDocData } from '../helpers/utils'

export default Controller.extend({
  firebase: service('firebase'),
  bids: [],
  init() {
    this.firebase.db
      .collection('bids')
      .orderBy('amount', 'desc')
      .limit(10)
      .onSnapshot(querySnapshot => {
        this.set('bids', querySnapshot.docs.map(firebaseDocData))
      })
  },
})
