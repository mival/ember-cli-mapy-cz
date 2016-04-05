import Ember from 'ember';
import layout from '../templates/components/s-map-layer';

export default Ember.Component.extend({
  layout: layout,
  layer: null,

  mapObserver: Ember.observer('map.map', function() {
		let map = this.get('map.map');
    let layer = new SMap.Layer.Marker();
    map.addLayer(layer);
    layer.enable();

    this.set('layer', layer);
  })
});
