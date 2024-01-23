import PdvOperador from '../models/pdv_operador';

class PdvOperadorService {
  
  async getListPdvOperador() {
    return await PdvOperador.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getPdvOperadorById(Id: number) {
    return await PdvOperador.findByPk(Id);
  }

  async insertPdvOperador(value: PdvOperador) {
    return await PdvOperador.create(value);
  }

  async updatePdvOperador(id: number, value: PdvOperador) {
    return await PdvOperador.update(value, {
      where: {id: id}
    });
  }

  async deletePdvOperador(id: number) {
    return await PdvOperador.destroy({
      where: {id: id}
    });
  }

}

  export default new PdvOperadorService();