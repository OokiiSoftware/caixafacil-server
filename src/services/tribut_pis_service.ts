import TributPis from '../models/tribut_pis';

class TributPisService {
  
  async getListTributPis() {
    return await TributPis.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getTributPisById(Id: number) {
    return await TributPis.findByPk(Id);
  }

  async insertTributPis(value: TributPis) {
    return await TributPis.create(value);
  }

  async updateTributPis(id: number, value: TributPis) {
    return await TributPis.update(value, {
      where: {id: id}
    });
  }

  async deleteTributPis(id: number) {
    return await TributPis.destroy({
      where: {id: id}
    });
  }

}

  export default new TributPisService();