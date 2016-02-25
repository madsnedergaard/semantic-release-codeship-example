module.exports = {
  hello: function(toWhom) {
    toWhom = toWhom || 'Stranger';
    console.log('Hello ' + toWhom + '!');
  }
};
