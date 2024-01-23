import EcfR07 from '../models/ecf_r07';

class EcfR07Service {
  
  async getListEcfR07() {
    return await EcfR07.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getEcfR07ById(Id: number) {
    return await EcfR07.findByPk(Id);
  }

  async insertEcfR07(value: EcfR07) {
    return await EcfR07.create(value);
  }

  async updateEcfR07(id: number, value: EcfR07) {
    return await EcfR07.update(value, {
      where: {id: id}
    });
  }

  async deleteEcfR07(id: number) {
    return await EcfR07.destroy({
      where: {id: id}
    });
  }

}

  export default new EcfR07Service();