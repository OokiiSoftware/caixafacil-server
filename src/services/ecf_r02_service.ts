import EcfR02 from '../models/ecf_r02';

class EcfR02Service {
  
  async getListEcfR02() {
    return await EcfR02.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getEcfR02ById(Id: number) {
    return await EcfR02.findByPk(Id);
  }

  async insertEcfR02(value: EcfR02) {
    return await EcfR02.create(value);
  }

  async updateEcfR02(id: number, value: EcfR02) {
    return await EcfR02.update(value, {
      where: {id: id}
    });
  }

  async deleteEcfR02(id: number) {
    return await EcfR02.destroy({
      where: {id: id}
    });
  }

}

  export default new EcfR02Service();