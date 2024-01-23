import PdvFechamento from '../models/pdv_fechamento';

class PdvFechamentoService {
  
  async getListPdvFechamento() {
    return await PdvFechamento.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getPdvFechamentoById(Id: number) {
    return await PdvFechamento.findByPk(Id);
  }

  async insertPdvFechamento(value: PdvFechamento) {
    return await PdvFechamento.create(value);
  }

  async updatePdvFechamento(id: number, value: PdvFechamento) {
    return await PdvFechamento.update(value, {
      where: {id: id}
    });
  }

  async deletePdvFechamento(id: number) {
    return await PdvFechamento.destroy({
      where: {id: id}
    });
  }

}

  export default new PdvFechamentoService();