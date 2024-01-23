import TributIss from '../models/tribut_iss';

class TributIssService {
  
  async getListTributIss() {
    return await TributIss.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getTributIssById(Id: number) {
    return await TributIss.findByPk(Id);
  }

  async insertTributIss(value: TributIss) {
    return await TributIss.create(value);
  }

  async updateTributIss(id: number, value: TributIss) {
    return await TributIss.update(value, {
      where: {id: id}
    });
  }

  async deleteTributIss(id: number) {
    return await TributIss.destroy({
      where: {id: id}
    });
  }

}

  export default new TributIssService();