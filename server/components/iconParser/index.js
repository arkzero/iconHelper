/**
 * Parse SVG Icon Sheet to JSON
 */

'use strict';

var SVG = require('svgutils').Svg;

module.exports.getIconsFromFile = function (req, res) {
  SVG.fromSvgDocument('../../client/app/assets/showdme.svg', function (err, svg) {
    if(err){
      throw new Error('SVG file not found or invalid');
    }

    var json = svg.toJSON();

    res.status(200).json(json);
  });
}
