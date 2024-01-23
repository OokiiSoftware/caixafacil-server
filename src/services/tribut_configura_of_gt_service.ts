import TributConfiguraOfGt from '../models/tribut_configura_of_gt';

class TributConfiguraOfGtService {
  
  async getListTributConfiguraOfGt() {
    return await TributConfiguraOfGt.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getTributConfiguraOfGtById(Id: number) {
    return await TributConfiguraOfGt.findByPk(Id);
  }

  async insertTributConfiguraOfGt(value: TributConfiguraOfGt) {
    return await TributConfiguraOfGt.create(value);
  }

  async updateTributConfiguraOfGt(id: number, value: TributConfiguraOfGt) {
    return await TributConfiguraOfGt.update(value, {
      where: {id: id}
    });
  }

  async deleteTributConfiguraOfGt(id: number) {
    return await TributConfiguraOfGt.destroy({
      where: {id: id}
    });
  }

}

  export default new TributConfiguraOfGtService();