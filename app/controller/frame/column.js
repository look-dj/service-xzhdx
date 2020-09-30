const Controller = require("egg").Controller;

class IndexController extends Controller {
	constructor(ctx) {
		super(ctx);
	}
	/**
	 * 这里是每个会拿到list目录下的所有文件
	 */
	// <!-- class="{{head_active==0?'header_li_active':''}}" -->
	async index() {
		let that = this;
		let { ctx, service } = that;
		let params = ctx.params.column;
		let query = ctx.query;
		let res = await service.frame.checkLink(params, query);
		if (!res) return (ctx.body = "<h1>没有找到当前页面</h1>");
		await that[res.tmp](res);
	}
	/**
	 * 检查当前路由对应的模板是否存在
	 */
	async role(params) {
		let that = this;
		let { ctx, service, config } = that;
		let data = await service.frame.role();
		data.head_active = params.id;
		await ctx.render("frame/list/role", data);
	}
	async faction(params) {
		let that = this;
		let { ctx, service, config } = that;
		let data = await service.frame.faction();
		data.head_active = params.id;
		await ctx.render("frame/list/faction", data);
	}
	async realm(params) {
		let that = this;
		let { ctx, service, config } = that;
		let data = await service.frame.realm();
		data.head_active = params.id;
		await ctx.render("frame/list/realm", data);
	}
	async year(params) {
		let that = this;
		let { ctx } = that;
		ctx.body = ctx;
	}
	async contact(params) {
		let that = this;
		let { ctx } = that;
		await ctx.render("frame/list/contact", that.tempData);
	}
	async faction2(params) {
		let that = this;
		let { ctx } = that;
		await ctx.render("frame/list/faction2", that.tempData);
	}
	async product(params) {
		let that = this;
		let { ctx } = that;
		await ctx.render("frame/list/product", that.tempData);
	}
	async scope(params) {
		let that = this;
		let { ctx } = that;
		await ctx.render("frame/list/scope", that.tempData);
	}
	async video(params) {
		let that = this;
		let { ctx } = that;
		await ctx.render("frame/list/video", that.tempData);
	}
	async page(params) {
		let that = this;
		let { ctx, service } = that;
		let data = await service.frame.page(params.id);
		data.head_active = params.id;
		await ctx.render("frame/list/page", data);
	}
}

module.exports = IndexController;