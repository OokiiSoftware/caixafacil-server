import ContasPagar from '../models/contas_pagar';

class ContasPagarService {
  
  async getListContasPagar() {
    return await ContasPagar.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getContasPagarById(Id: number) {
    return await ContasPagar.findByPk(Id);
  }

  async insertContasPagar(value: ContasPagar) {
    return await ContasPagar.create(value);
  }

  async updateContasPagar(id: number, value: ContasPagar) {
    return await ContasPagar.update(value, {
      where: {id: id}
    });
  }

  async deleteContasPagar(id: number) {
    return await ContasPagar.destroy({
      where: {id: id}
    });
  }

}

  export default new ContasPagarService();