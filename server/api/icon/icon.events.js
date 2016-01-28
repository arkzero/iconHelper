/**
 * icon model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var icon = require('./icon.model');
var iconEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
iconEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  icon.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    iconEvents.emit(event + ':' + doc._id, doc);
    iconEvents.emit(event, doc);
  }
}

module.exports = iconEvents;
