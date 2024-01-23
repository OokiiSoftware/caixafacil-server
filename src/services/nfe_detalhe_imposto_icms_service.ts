import NfeDetalheImpostoIcms from '../models/nfe_detalhe_imposto_icms';

class NfeDetalheImpostoIcmsService {
  
  async getListNfeDetalheImpostoIcms() {
    return await NfeDetalheImpostoIcms.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeDetalheImpostoIcmsById(Id: number) {
    return await NfeDetalheImpostoIcms.findByPk(Id);
  }

  async insertNfeDetalheImpostoIcms(value: NfeDetalheImpostoIcms) {
    return await NfeDetalheImpostoIcms.create(value);
  }

  async updateNfeDetalheImpostoIcms(id: number, value: NfeDetalheImpostoIcms) {
    return await NfeDetalheImpostoIcms.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeDetalheImpostoIcms(id: number) {
    return await NfeDetalheImpostoIcms.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeDetalheImpostoIcmsService();