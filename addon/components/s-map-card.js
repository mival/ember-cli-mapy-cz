import { observer } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/s-map-card';

const SMap = window.SMap;

export default Component.extend({
  layout: layout,
  card: null,

  markerObserver: observer('marker', 'marker.marker', function() {
		let marker = this.get('marker.marker');
    let card = new SMap.Card();
    card.getHeader().innerHTML = this.getWithDefault('header', '');
    card.getBody().appendChild(this.get('element'));
    marker.decorate(SMap.Marker.Feature.Card, card);

    this.set('card', card);
  })
});
