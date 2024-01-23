import NfeDetalheImpostoIcmsUfdest from '../models/nfe_detalhe_imposto_icms_ufdest';

class NfeDetalheImpostoIcmsUfdestService {
  
  async getListNfeDetalheImpostoIcmsUfdest() {
    return await NfeDetalheImpostoIcmsUfdest.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeDetalheImpostoIcmsUfdestById(Id: number) {
    return await NfeDetalheImpostoIcmsUfdest.findByPk(Id);
  }

  async insertNfeDetalheImpostoIcmsUfdest(value: NfeDetalheImpostoIcmsUfdest) {
    return await NfeDetalheImpostoIcmsUfdest.create(value);
  }

  async updateNfeDetalheImpostoIcmsUfdest(id: number, value: NfeDetalheImpostoIcmsUfdest) {
    return await NfeDetalheImpostoIcmsUfdest.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeDetalheImpostoIcmsUfdest(id: number) {
    return await NfeDetalheImpostoIcmsUfdest.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeDetalheImpostoIcmsUfdestService();