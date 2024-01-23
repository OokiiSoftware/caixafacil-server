import TributIcmsCustomDet from '../models/tribut_icms_custom_det';

class TributIcmsCustomDetService {
  
  async getListTributIcmsCustomDet() {
    return await TributIcmsCustomDet.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getTributIcmsCustomDetById(Id: number) {
    return await TributIcmsCustomDet.findByPk(Id);
  }

  async insertTributIcmsCustomDet(value: TributIcmsCustomDet) {
    return await TributIcmsCustomDet.create(value);
  }

  async updateTributIcmsCustomDet(id: number, value: TributIcmsCustomDet) {
    return await TributIcmsCustomDet.update(value, {
      where: {id: id}
    });
  }

  async deleteTributIcmsCustomDet(id: number) {
    return await TributIcmsCustomDet.destroy({
      where: {id: id}
    });
  }

}

  export default new TributIcmsCustomDetService();