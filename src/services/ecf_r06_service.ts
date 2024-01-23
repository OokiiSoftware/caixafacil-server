import EcfR06 from '../models/ecf_r06';

class EcfR06Service {
  
  async getListEcfR06() {
    return await EcfR06.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getEcfR06ById(Id: number) {
    return await EcfR06.findByPk(Id);
  }

  async insertEcfR06(value: EcfR06) {
    return await EcfR06.create(value);
  }

  async updateEcfR06(id: number, value: EcfR06) {
    return await EcfR06.update(value, {
      where: {id: id}
    });
  }

  async deleteEcfR06(id: number) {
    return await EcfR06.destroy({
      where: {id: id}
    });
  }

}

  export default new EcfR06Service();