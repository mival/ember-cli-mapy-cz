# Ember-cli-mapy-cz

[![Ember Observer Score](https://emberobserver.com/badges/ember-cli-mapy-cz.svg)](https://emberobserver.com/addons/ember-cli-mapy-cz))

An ember-cli add-on for easy integration with mapy.cz maps. Each object displayed on map is inserted via child component, so you can easily declare which marker and when to display on map using {{#if}} and {{#each}} on template level.

## Installation

* `ember install ember-cli-mapy-cz`

# Configuration

You must define the size of the canvas in which the map is displayed. Simply add something similar to this to your styles:

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
