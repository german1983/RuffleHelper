const express = require('express')
const config = require('./config')

// This API provides the raw config data that the server receives from its configuration files, it is simply for reference. Each UI
// has its own method of obtaining the appropriate configuration (`/bep.js` for Tech Dossier, and `/api/testHub/config` for Test Hub).
const router = express.Router({ mergeParams: true })
  .get("/sendAlert", (req, res) => {
    var data = Object.assign({}, config, req);
    res.json(data);
  });
