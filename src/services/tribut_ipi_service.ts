import TributIpi from '../models/tribut_ipi';

class TributIpiService {
  
  async getListTributIpi() {
    return await TributIpi.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getTributIpiById(Id: number) {
    return await TributIpi.findByPk(Id);
  }

  async insertTributIpi(value: TributIpi) {
    return await TributIpi.create(value);
  }

  async updateTributIpi(id: number, value: TributIpi) {
    return await TributIpi.update(value, {
      where: {id: id}
    });
  }

  async deleteTributIpi(id: number) {
    return await TributIpi.destroy({
      where: {id: id}
    });
  }

}

  export default new TributIpiService();