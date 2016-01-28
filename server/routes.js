/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

module.exports = function(app) {

  // Insert routes below
  //app.use('/api/icons', require('./api/icon'));
  app.route('/api/icons').get(function (req, res) {
      res.status(200).json(["download", "edit", "delete", "video-file", "open-link", "settings", "open-in-browser", "pie-chart", "add-user", "cancel", "document", "image-file", "admin", "attach", "bar-chart", "binoculars", "opened-folder", "calendar", "decline", "checkmark", "collapse", "comment", "checked", "empty-box", "create-new", "dashboard", "collapse", "expand-arrow", "flag", "expand", "hide-sidemenu", "picture", "learning-path", "link", "location", "message", "microphone", "microphone-mute", "minus", "user-folder", "right", "notification", "rules", "play", "plus", "left", "print", "upload-to-cloud", "questions", "raise-hand", "record", "register", "request", "save", "schedule", "screen-rec", "screen-share", "search", "visible", "sent", "chat", "menu", "show-menu", "star", "outline-star", "pie-chart", "thumbs-up", "thumbs-down", "clock", "stopwatch", "unpublish", "invisible", "user", "group", "video-call", "video", "file", "trophy", "home", "check", "checklist", "skills", "activity", "coffee", "happy", "day", "month", "subscribe", "reading", "down-arrow", "reading", "student", "admin", "linkedin", "info", "people", "directory", "camera", "list-numbered", "list-view", "grid-view", "copy-item", "copy-link", "collapse-arrow", "quiz-list", "true-false", "multiple-choice", "todo-list", "stats", "checklist", "archive", "ios7-magical-scroll"]);

  });
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
