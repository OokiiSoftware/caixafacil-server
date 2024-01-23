import EcfSintegra60a from '../models/ecf_sintegra_60a';

class EcfSintegra60aService {
  
  async getListEcfSintegra60a() {
    return await EcfSintegra60a.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getEcfSintegra60aById(Id: number) {
    return await EcfSintegra60a.findByPk(Id);
  }

  async insertEcfSintegra60a(value: EcfSintegra60a) {
    return await EcfSintegra60a.create(value);
  }

  async updateEcfSintegra60a(id: number, value: EcfSintegra60a) {
    return await EcfSintegra60a.update(value, {
      where: {id: id}
    });
  }

  async deleteEcfSintegra60a(id: number) {
    return await EcfSintegra60a.destroy({
      where: {id: id}
    });
  }

}

  export default new EcfSintegra60aService();