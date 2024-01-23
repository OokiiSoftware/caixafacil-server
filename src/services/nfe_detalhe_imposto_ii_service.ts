import NfeDetalheImpostoIi from '../models/nfe_detalhe_imposto_ii';

class NfeDetalheImpostoIiService {
  
  async getListNfeDetalheImpostoIi() {
    return await NfeDetalheImpostoIi.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeDetalheImpostoIiById(Id: number) {
    return await NfeDetalheImpostoIi.findByPk(Id);
  }

  async insertNfeDetalheImpostoIi(value: NfeDetalheImpostoIi) {
    return await NfeDetalheImpostoIi.create(value);
  }

  async updateNfeDetalheImpostoIi(id: number, value: NfeDetalheImpostoIi) {
    return await NfeDetalheImpostoIi.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeDetalheImpostoIi(id: number) {
    return await NfeDetalheImpostoIi.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeDetalheImpostoIiService();