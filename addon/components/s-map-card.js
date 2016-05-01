import Ember from 'ember';
import layout from '../templates/components/s-map-card';

export default Ember.Component.extend({
  layout: layout,
  card: null,

  markerObserver: Ember.observer('marker', 'marker.marker', function() {
		let marker = this.get('marker.marker');
    let card = new SMap.Card();
    card.getHeader().innerHTML = this.getWithDefault('header', '');
    card.getBody().appendChild(this.get('element'));
    marker.decorate(SMap.Marker.Feature.Card, card);

    this.set('card', card);
  })
});
