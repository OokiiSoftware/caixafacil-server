import FidelidadeHistorico from '../models/fidelidade_historico';

class FidelidadeHistoricoService {
  
  async getListFidelidadeHistorico() {
    return await FidelidadeHistorico.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getFidelidadeHistoricoById(Id: number) {
    return await FidelidadeHistorico.findByPk(Id);
  }

  async insertFidelidadeHistorico(value: FidelidadeHistorico) {
    return await FidelidadeHistorico.create(value);
  }

  async updateFidelidadeHistorico(id: number, value: FidelidadeHistorico) {
    return await FidelidadeHistorico.update(value, {
      where: {id: id}
    });
  }

  async deleteFidelidadeHistorico(id: number) {
    return await FidelidadeHistorico.destroy({
      where: {id: id}
    });
  }

}

  export default new FidelidadeHistoricoService();