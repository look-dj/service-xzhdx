// 时间线介绍
"use strict";
const Controller = require("egg").Controller;

class WeaponController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.table = "weapon";
  }
  async queryAll() {
    const { ctx, service, table } = this;
    let req = ctx.request.body;
    let result = await service.spa.db.select(table, req);
    if (result) {
      ctx.success("成功", result);
    } else {
      ctx.err("失败或者没查到数据");
    }
  }
  async add() {
    const { ctx, service, table } = this;
    let req = ctx.request.body;
    let result = await service.spa.db.add(table, req);
    if (result) ctx.success("成功添加一方势力");
    else ctx.err("添加势力失败");
  }
  async read() {
    const { ctx, service, table } = this;
    let req = ctx.request.body;
    let result = await service.spa.db.get(table, req);
    if (result) ctx.success("查询成功", result);
    else ctx.err("查询失败");
  }
  async delete() {
    const { ctx, service, table } = this;
    let req = ctx.request.body;
    let result = await service.spa.db.deleteSingle(table, req);
    if (result) ctx.success("成功删除一方势力");
    else ctx.err("删除失败");
  }
  async update() {
    const { ctx, service, table } = this;
    let req = ctx.request.body;
    let result = await service.spa.db.update(table, req);
    if (result) ctx.success("成功更新一条数据");
    else ctx.err("更新失败");
  }
}

module.exports = WeaponController;
