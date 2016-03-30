import Ember from 'ember';

export default Ember.Component.extend({
  marker: null,

  layerObserver: Ember.observer('layer.layer', 'layer', function () {
    let layer = this.get('layer.layer');
    let latitude = this.get('latitude');
    let longitude = this.get('longitude');
    let center = SMap.Coords.fromWGS84(longitude, latitude);
    let id = this.get('layer').getMarkerId();
    let options = {};
    let marker = new SMap.Marker(center, id, options);
    layer.addMarker(marker);
    this.incrementProperty('layer.markersCount');

    this.set('marker', marker);
  }),
});
