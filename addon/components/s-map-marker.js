import Ember from 'ember';

export default Ember.Component.extend({
  marker: null,

  layerObserver: Ember.observer('layer.layer', function () {
    let layer = this.get('layer.layer');
    let latitude = this.get('latitude');
    let longitude = this.get('longitude');
    let center = SMap.Coords.fromWGS84(longitude, latitude);
    let guid = Ember.guidFor(this);
    let markerId = `s-map-marker-${guid}`;
    let options = {};
    let marker = new SMap.Marker(center, markerId, options);
    layer.addMarker(marker);

    this.set('marker', marker);
  }),
});
