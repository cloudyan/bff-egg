'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.home.news);

  router.get('/api', controller.api.index);
  router.get('/api/news/:id', controller.api.news);
};
