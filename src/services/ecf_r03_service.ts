import EcfR03 from '../models/ecf_r03';

class EcfR03Service {
  
  async getListEcfR03() {
    return await EcfR03.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getEcfR03ById(Id: number) {
    return await EcfR03.findByPk(Id);
  }

  async insertEcfR03(value: EcfR03) {
    return await EcfR03.create(value);
  }

  async updateEcfR03(id: number, value: EcfR03) {
    return await EcfR03.update(value, {
      where: {id: id}
    });
  }

  async deleteEcfR03(id: number) {
    return await EcfR03.destroy({
      where: {id: id}
    });
  }

}

  export default new EcfR03Service();