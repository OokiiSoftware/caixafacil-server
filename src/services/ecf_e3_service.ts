import EcfE3 from '../models/ecf_e3';

class EcfE3Service {
  
  async getListEcfE3() {
    return await EcfE3.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getEcfE3ById(Id: number) {
    return await EcfE3.findByPk(Id);
  }

  async insertEcfE3(value: EcfE3) {
    return await EcfE3.create(value);
  }

  async updateEcfE3(id: number, value: EcfE3) {
    return await EcfE3.update(value, {
      where: {id: id}
    });
  }

  async deleteEcfE3(id: number) {
    return await EcfE3.destroy({
      where: {id: id}
    });
  }

}

  export default new EcfE3Service();