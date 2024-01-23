import EcfR01 from '../models/ecf_r01';

class EcfR01Service {
  
  async getListEcfR01() {
    return await EcfR01.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getEcfR01ById(Id: number) {
    return await EcfR01.findByPk(Id);
  }

  async insertEcfR01(value: EcfR01) {
    return await EcfR01.create(value);
  }

  async updateEcfR01(id: number, value: EcfR01) {
    return await EcfR01.update(value, {
      where: {id: id}
    });
  }

  async deleteEcfR01(id: number) {
    return await EcfR01.destroy({
      where: {id: id}
    });
  }

}

  export default new EcfR01Service();