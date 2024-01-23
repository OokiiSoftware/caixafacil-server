import ContasReceber from '../models/contas_receber';

class ContasReceberService {
  
  async getListContasReceber() {
    return await ContasReceber.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getContasReceberById(Id: number) {
    return await ContasReceber.findByPk(Id);
  }

  async insertContasReceber(value: ContasReceber) {
    return await ContasReceber.create(value);
  }

  async updateContasReceber(id: number, value: ContasReceber) {
    return await ContasReceber.update(value, {
      where: {id: id}
    });
  }

  async deleteContasReceber(id: number) {
    return await ContasReceber.destroy({
      where: {id: id}
    });
  }

}

  export default new ContasReceberService();