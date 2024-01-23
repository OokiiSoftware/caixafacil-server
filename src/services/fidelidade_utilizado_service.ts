import FidelidadeUtilizado from '../models/fidelidade_utilizado';

class FidelidadeUtilizadoService {
  
  async getListFidelidadeUtilizado() {
    return await FidelidadeUtilizado.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getFidelidadeUtilizadoById(Id: number) {
    return await FidelidadeUtilizado.findByPk(Id);
  }

  async insertFidelidadeUtilizado(value: FidelidadeUtilizado) {
    return await FidelidadeUtilizado.create(value);
  }

  async updateFidelidadeUtilizado(id: number, value: FidelidadeUtilizado) {
    return await FidelidadeUtilizado.update(value, {
      where: {id: id}
    });
  }

  async deleteFidelidadeUtilizado(id: number) {
    return await FidelidadeUtilizado.destroy({
      where: {id: id}
    });
  }

}

  export default new FidelidadeUtilizadoService();