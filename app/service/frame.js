let Service = require("egg").Service;

class FrameService extends Service {
  async index() {
    let that = this;
    let { app, service, config } = that;
    let columnsModel = await service.db.queryAll("column");
    let roles = await service.db.queryAll("role", {
      where: { cid: -1 },
      limit: 10,
    });
    let factions = await service.db.queryAll("faction", {
      where: { cid: -1 },
      limit: 4,
    });
    let years = await service.db.queryAll("year", {
      where: { cid: -1 },
      limit: 5,
    });
    let banners = await service.db.queryAll("banner", {
      where: { cid: -1 },
      limit: 4,
    });
    let realms = await service.db.queryAll("realm", {
      where: { cid: -1 },
      limit: 4,
    });
    let site = await service.file.read("site.config.json");
    let about = await service.file.read("about.config.json");
    let columns = {};
    columnsModel.forEach((item, idx) => {
      columns[item.template] = item;
    });
    return {
      headers: columnsModel,
      columns,
      roles,
      site: site.data,
      about: about.data,
      factions,
      years,
      banners,
      realms,
    };
  }
}

module.exports = FrameService;
