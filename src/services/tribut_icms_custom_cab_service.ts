import TributIcmsCustomCab from '../models/tribut_icms_custom_cab';

class TributIcmsCustomCabService {
  
  async getListTributIcmsCustomCab() {
    return await TributIcmsCustomCab.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getTributIcmsCustomCabById(Id: number) {
    return await TributIcmsCustomCab.findByPk(Id);
  }

  async insertTributIcmsCustomCab(value: TributIcmsCustomCab) {
    return await TributIcmsCustomCab.create(value);
  }

  async updateTributIcmsCustomCab(id: number, value: TributIcmsCustomCab) {
    return await TributIcmsCustomCab.update(value, {
      where: {id: id}
    });
  }

  async deleteTributIcmsCustomCab(id: number) {
    return await TributIcmsCustomCab.destroy({
      where: {id: id}
    });
  }

}

  export default new TributIcmsCustomCabService();