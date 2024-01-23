import NfeDetalheImpostoIpi from '../models/nfe_detalhe_imposto_ipi';

class NfeDetalheImpostoIpiService {
  
  async getListNfeDetalheImpostoIpi() {
    return await NfeDetalheImpostoIpi.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeDetalheImpostoIpiById(Id: number) {
    return await NfeDetalheImpostoIpi.findByPk(Id);
  }

  async insertNfeDetalheImpostoIpi(value: NfeDetalheImpostoIpi) {
    return await NfeDetalheImpostoIpi.create(value);
  }

  async updateNfeDetalheImpostoIpi(id: number, value: NfeDetalheImpostoIpi) {
    return await NfeDetalheImpostoIpi.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeDetalheImpostoIpi(id: number) {
    return await NfeDetalheImpostoIpi.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeDetalheImpostoIpiService();