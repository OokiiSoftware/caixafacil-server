import TributCofins from '../models/tribut_cofins';

class TributCofinsService {
  
  async getListTributCofins() {
    return await TributCofins.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getTributCofinsById(Id: number) {
    return await TributCofins.findByPk(Id);
  }

  async insertTributCofins(value: TributCofins) {
    return await TributCofins.create(value);
  }

  async updateTributCofins(id: number, value: TributCofins) {
    return await TributCofins.update(value, {
      where: {id: id}
    });
  }

  async deleteTributCofins(id: number) {
    return await TributCofins.destroy({
      where: {id: id}
    });
  }

}

  export default new TributCofinsService();