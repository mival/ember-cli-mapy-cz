/* jshint node: true */
'use strict';

module.exports = {
  name: require('./package').name,

  contentFor: function(type/* , config */) {
    var content = '';

    if (type === 'head') {
      var src = 'https://api.mapy.cz/loader.js';

      content = '<script type="text/javascript" src="' + src + '"></script><script type="text/javascript">Loader.load();</script>';
    }

    return content;
  }
};
