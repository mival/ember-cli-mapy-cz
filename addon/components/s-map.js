import { observer } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@ember/component';
import layout from '../templates/components/s-map';

const SMap = window.SMap;
const JAK = window.JAK;

export default Component.extend({
  layout: layout,
  classNames: ['s-map'],
  attributeBindings: ['style'],

  map: null,

  init() {
    this._super(...arguments);
    let guid = guidFor(this);
    this.set('elementId', `s-map-${guid}`);
  },

  centerObserver: observer('latitude', 'longitude', () => {
    let map = this.get('map');
    let center = SMap.Coords.fromWGS84(this.get('longitude'), this.get('latitude'));

    map.setCenter(center);
  }),

  zoomObserver: observer('zoom', () => {
    let map = this.get('map');
    let currentZoom = map.getZoom();
    let desiredZoom = this.get('zoom');
    let zoomDiff = desiredZoom - currentZoom;

    map.setZoom(zoomDiff);
  }),

  didInsertElement() {
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
