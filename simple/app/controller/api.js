'use strict';

const Controller = require('egg').Controller;

class ApiController extends Controller {
  async index() {
    const { ctx } = this;
    const { query } = ctx;
    ctx.body = 'api: hi, egg 111' + JSON.stringify(query);
  }

  async news() {
    const { params } = this.ctx;
    this.ctx.body = 'api: news' + JSON.stringify(params);
  }
}

module.exports = ApiController;
