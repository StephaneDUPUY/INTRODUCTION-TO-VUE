const app = new Vue({
  el: '#app',
  data: {
    username: 'Stéphane',
    newTweet: '',
    tweets: [
      'On commence',
      'C\'est parti.',
      'Apprenons à utiliser VueJS.'
    ],
    bio: 'Impatient de commencer.'
  }
});