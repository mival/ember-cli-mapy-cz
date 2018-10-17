import { observer } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/s-map-layer';

const SMap = window.SMap;

export default Component.extend({
  layout: layout,
  layer: null,

  mapObserver: observer('map.map', function() {
		let map = this.get('map.map');
    let layer = new SMap.Layer.Marker();
    map.addLayer(layer);
    layer.enable();

    this.set('layer', layer);
  })
});
