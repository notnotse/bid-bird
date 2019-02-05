import Controller from '@ember/controller'
import { inject as service } from '@ember/service'
import { computed } from '@ember/object'
import {
  parseAmount,
  firebaseDocData,
  docToAmount,
  firstDoc,
  add,
} from '../helpers/utils'

export default Controller.extend({
  firebase: service('firebase'),
  isValid: computed(
    'name',
    'phone',
    'model.amount',
    'minBid',
    'saving',
    function() {
      console.log('minBid', this.minBid)
      return (
        this.name &&
        this.phone &&
        !isNaN(this.model.amount) &&
        this.model.amount >= this.minBid &&
        !this.saving
      )
    }
  ),
  validAmount: computed('model.amount', 'minBid', 'saving', function() {
    return this.model.amount >= this.minBid || this.saving
  }),
  init() {
    this.name = ''
    this.phone = ''
    this.minBid = null
    this.saving = false
    this.firebase.db
      .collection('bids')
      .orderBy('amount', 'desc')
      .limit(1)
      .onSnapshot(snapshot => {
        const nextMinBid = snapshot.docs
          .map(firebaseDocData)
          .map(docToAmount)
          .map(add(10))
          .find(firstDoc)

        if (nextMinBid) {
          this.set('minBid', nextMinBid)
        }
      })
  },
  actions: {
    setMinAmount() {
      this.set('model.amount', this.minBid)
    },
    save() {
      this.set('saving', true)
      this.firebase.db
        .collection('bids')
        .add({
          name: this.name,
          amount: parseInt(this.model.amount, 10),
          phone: this.phone,
        })
        .then(docRef => {
          this.transitionToRoute('bids').then(() => {
            this.set('saving', false)
          })
        })
        .catch(error => {
          this.set('saving', false)
          console.error('Error adding document: ', error)
        })
    },
    cancel() {
      this.transitionToRoute('bids')
    },
  },
})
