/**
 * Parse SVG Icon Sheet to JSON
 */

'use strict';

var express = require('express');
var router = express.Router();
var Svg = require('svgutils').Svg;


router.get('/', function (req, res) {
  Svg.fromSvgDocument('../../client/app/assets/showdme.svg', function (err, svg) {
    if(err){
      throw new Error('SVG file not found or invalid');
    }

    var json = svg.toJSON();

    res.status(200).json(json);
  });
});
