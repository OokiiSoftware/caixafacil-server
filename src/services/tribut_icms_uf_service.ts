import TributIcmsUf from '../models/tribut_icms_uf';

class TributIcmsUfService {
  
  async getListTributIcmsUf() {
    return await TributIcmsUf.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getTributIcmsUfById(Id: number) {
    return await TributIcmsUf.findByPk(Id);
  }

  async insertTributIcmsUf(value: TributIcmsUf) {
    return await TributIcmsUf.create(value);
  }

  async updateTributIcmsUf(id: number, value: TributIcmsUf) {
    return await TributIcmsUf.update(value, {
      where: {id: id}
    });
  }

  async deleteTributIcmsUf(id: number) {
    return await TributIcmsUf.destroy({
      where: {id: id}
    });
  }

}

  export default new TributIcmsUfService();