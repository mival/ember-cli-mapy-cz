import Ember from 'ember';
import layout from '../templates/components/s-map';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['s-map'],
  attributeBindings: ['style'],

  map: null,

  setElementId: Ember.on('init', function() {
    let guid = Ember.guidFor(this);
    this.set('elementId', `s-map-${guid}`);
    console.log(this.get('elementId'));
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
    let zoomDiff = desiredZoom - currentZoom;

    map.setZoom(zoomDiff);
  }),

  didInsertElement: function() {
    this._super();
    let elementId = this.get('elementId');
    let zoom = this.get('zoom');
    let center = SMap.Coords.fromWGS84(this.get('longitude'), this.get('latitude'));
		let map = new SMap(JAK.gel(elementId), center, zoom);
		map.addDefaultLayer(SMap.DEF_BASE).enable();
		map.addDefaultControls();

    this.set('map', map);
  }
});
