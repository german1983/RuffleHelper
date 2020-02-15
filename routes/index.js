const express = require('express')
const api = require('./api')

// TODO: Can we make this pattern more elegant?

const routes = [
];

const router = routes.reduce((rootRouter, router) => {
  return rootRouter.use(router);
}, express.Router({ mergeParams: true }))
  .use("/api", api.router)
;
