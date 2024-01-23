import NfeDetalheImpostoIssqn from '../models/nfe_detalhe_imposto_issqn';

class NfeDetalheImpostoIssqnService {
  
  async getListNfeDetalheImpostoIssqn() {
    return await NfeDetalheImpostoIssqn.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeDetalheImpostoIssqnById(Id: number) {
    return await NfeDetalheImpostoIssqn.findByPk(Id);
  }

  async insertNfeDetalheImpostoIssqn(value: NfeDetalheImpostoIssqn) {
    return await NfeDetalheImpostoIssqn.create(value);
  }

  async updateNfeDetalheImpostoIssqn(id: number, value: NfeDetalheImpostoIssqn) {
    return await NfeDetalheImpostoIssqn.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeDetalheImpostoIssqn(id: number) {
    return await NfeDetalheImpostoIssqn.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeDetalheImpostoIssqnService();