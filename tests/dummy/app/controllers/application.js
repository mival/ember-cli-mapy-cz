import Ember from 'ember';

export default Ember.Controller.extend({
  latitude: 49.8,
  longitude: 15.5,
  zoom: 7,
  points: [
    {latitude: 50.076334, longitude: 14.429911},
    {latitude: 49.739076, longitude: 13.373292},
    {latitude: 49.819879, longitude: 18.258674, cardHeader: 'Card 1', cardBody: 'Example usage of card text in block.'},
    {latitude: 49.196153, longitude: 16.612972, cardHeader: 'Card 2', cardBody: 'You can use <b>H</b><i>T</i><u>M</u><strike>L</strike> here.'}
  ]
});
