import { guidFor } from '@ember/object/internals';
import { observer } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/s-map-marker';

const SMap = window.SMap;

export default Component.extend({
  layout: layout,
  marker: null,

  layerObserver: observer('layer.layer', function () {
    let layer = this.get('layer.layer');
    let latitude = this.get('latitude');
    let longitude = this.get('longitude');
    let center = SMap.Coords.fromWGS84(longitude, latitude);
    let guid = guidFor(this);
    let markerId = `s-map-marker-${guid}`;
    let options = {};
    let marker = new SMap.Marker(center, markerId, options);
    layer.addMarker(marker);

    this.set('marker', marker);
  }),
});
