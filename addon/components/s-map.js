import Ember from 'ember';
import layout from '../templates/components/s-map';

export default Ember.Component.extend({
  layout: layout,

  map: null,

  mapId: Ember.computed(function () {
    let guid = Ember.guidFor(this);
    return `s-map-${guid}`;
  }),

  centerObserver: Ember.observer('latitude', 'longitude', function() {
    let map = this.get('map');
    let center = SMap.Coords.fromWGS84(this.get('longitude'), this.get('latitude'));

    map.setCenter(center);
  }),

  zoomObserver: Ember.observer('zoom', function() {
    let map = this.get('map');
    let currentZoom = map.getZoom();
    let desiredZoom = this.get('zoom');
    let zoomDiff = desiredZoom - currentZoom

    map.setZoom(zoomDiff);
  }),

  didInsertElement: function() {
    this._super();
    let mapId = this.get('mapId');
    let zoom = this.get('zoom');
    let center = SMap.Coords.fromWGS84(this.get('longitude'), this.get('latitude'));
		let map = new SMap(JAK.gel(mapId), center, zoom);
		map.addDefaultLayer(SMap.DEF_BASE).enable();
		map.addDefaultControls();

    this.set('map', map);
  }
});
