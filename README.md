# Bid Bird

Simple single, one item auction site.

Uses Google Cloud Firestore database and deploys to Firebase web hosting.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Firestore](https://firebase.google.com/docs/firestore/quickstart)
* [Firebase CLI](https://firebase.google.com/docs/cli/)

## Installation

* `git clone https://github.com/notnotse/bid-bird` this repository
* `cd bid-bird`
* `npm install`

## Running / Development

* `FIREBASE_ID=your-project-id FIREBASE_API_KEY=project-api-key ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`


### Deploying

* `firebase login` 
* `FIREBASE_ID=your-project-id FIREBASE_API_KEY=project-api-key npm run deploy` 
