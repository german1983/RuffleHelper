const express = require('express')
const sendAlert = require('./sendAlert')

const routes = [
  sendAlert.router
];

const router = routes.reduce((rootRouter, router) => {
  return rootRouter.use(router);
}, express.Router({ mergeParams: true }))
;
