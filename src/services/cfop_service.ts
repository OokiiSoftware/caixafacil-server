import Cfop from '../models/cfop';

class CfopService {
  
  async getListCfop() {
    return await Cfop.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getCfopById(Id: number) {
    return await Cfop.findByPk(Id);
  }

  async insertCfop(value: Cfop) {
    return await Cfop.create(value);
  }

  async updateCfop(id: number, value: Cfop) {
    return await Cfop.update(value, {
      where: {id: id}
    });
  }

  async deleteCfop(id: number) {
    return await Cfop.destroy({
      where: {id: id}
    });
  }

}

  export default new CfopService();