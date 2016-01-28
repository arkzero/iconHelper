/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

var SVG = require('svgutils').Svg;

module.exports = function(app) {

  // Insert routes below
  //app.use('/api/icons', require('./api/icon'));
  app.use('/api/icons').get(function (req, res) {
    SVG.fromSvgDocument('../../client/app/assets/showdme.svg', function (err, svg) {
      if(err){
        throw new Error('SVG file not found or invalid');
      }

      var json = svg.toJSON();

      res.status(200).json(json);
    });
  })
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
