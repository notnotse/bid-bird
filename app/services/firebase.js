import Service from '@ember/service'

import firebase from 'firebase'
import config from '../config/environment'
import { firebaseDocData, docToAmount, firstDoc, add } from '../helpers/utils'

export default Service.extend({
  db: null,
  init() {
    firebase.initializeApp(config.firebase)
    this.set('db', firebase.firestore())
  },
})
