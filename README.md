# Ember-cli-mapy-cz

[![Ember Observer Score](https://emberobserver.com/badges/ember-cli-mapy-cz.svg)](https://emberobserver.com/addons/ember-cli-mapy-cz) [![Build Status](https://travis-ci.org/MichalBryxi/ember-cli-mapy-cz.svg?branch=master)](https://travis-ci.org/MichalBryxi/ember-cli-mapy-cz)

An ember-cli add-on for easy integration with mapy.cz maps. Each object displayed on map is inserted via child component, so you can easily declare which marker and when to display on map using {{#if}} and {{#each}} on template level.

## Installation

* `ember install ember-cli-mapy-cz`

# Configuration

You must define the size of the canvas in which the map is displayed in your application. Otherwise the map will have zero size. Simply add something similar to this to your styles:

```css
.s-map {
  width: 640px;
  height: 480px;
}
```

# Usage

## Simple map

```handlebars
{{s-map latitude=37.7833 longitude=-122.4167 zoom=12}}
```

## Map with markers
- Create block version of `s-map` component. You can pass it `style` attribute for in-line styling
- Inside `s-map` component create `s-map-layer`. Currently this has no great use. Mainly for future usage.
- Inside `s-map-layer` component create as many `s-map-marker` components as you want. Just pass in latitude and longitude. Use decimal degrees format `marker: {latitude: 40.446, longitude: 79.982}`

```handlebars
{{#s-map latitude=latitude longitude=longitude zoom=zoom style="width: 100%" as |map|}}
  {{#s-map-layer map=map as |layer|}}
    {{#each markers as |marker|}}
      {{s-map-marker layer=layer latitude=marker.latitude longitude=marker.longitude}}
    {{/each}}
  {{/s-map-layer}}
{{/s-map}}
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

## Thanks

* Major ideas in this project comes from [ember-g-map](https://github.com/asennikov/ember-g-map) project.
* Special shout out goes to [Geret](http://twitter.com/RolandMartin)
