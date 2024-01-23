import NfeDetalhe from '../models/nfe_detalhe';

class NfeDetalheService {
  
  async getListNfeDetalhe() {
    return await NfeDetalhe.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeDetalheById(Id: number) {
    return await NfeDetalhe.findByPk(Id);
  }

  async insertNfeDetalhe(value: NfeDetalhe) {
    return await NfeDetalhe.create(value);
  }

  async updateNfeDetalhe(id: number, value: NfeDetalhe) {
    return await NfeDetalhe.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeDetalhe(id: number) {
    return await NfeDetalhe.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeDetalheService();