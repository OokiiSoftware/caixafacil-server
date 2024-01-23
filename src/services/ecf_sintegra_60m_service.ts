import EcfSintegra60m from '../models/ecf_sintegra_60m';

class EcfSintegra60mService {
  
  async getListEcfSintegra60m() {
    return await EcfSintegra60m.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getEcfSintegra60mById(Id: number) {
    return await EcfSintegra60m.findByPk(Id);
  }

  async insertEcfSintegra60m(value: EcfSintegra60m) {
    return await EcfSintegra60m.create(value);
  }

  async updateEcfSintegra60m(id: number, value: EcfSintegra60m) {
    return await EcfSintegra60m.update(value, {
      where: {id: id}
    });
  }

  async deleteEcfSintegra60m(id: number) {
    return await EcfSintegra60m.destroy({
      where: {id: id}
    });
  }

}

  export default new EcfSintegra60mService();