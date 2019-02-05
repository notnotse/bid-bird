import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import {
  parseAmount,
  firebaseDocData,
  docToAmount,
  firstDoc,
  add,
} from '../helpers/utils'

export default Route.extend({
  firebase: service('firebase'),
  model(params) {
    return new Promise((resolve, reject) => {
      this.firebase.db
        .collection('bids')
        .orderBy('amount', 'desc')
        .limit(1)
        .get()
        .then(snapshot => {
          console.log(snapshot.docs.map(d => d.data()))
          const nextMinBid = snapshot.docs
            .map(firebaseDocData)
            .map(docToAmount)
            .map(add(10))
            .find(firstDoc)

          resolve({ amount: nextMinBid || 10 })
        })
        .catch(console.error)
    })
  },
})
