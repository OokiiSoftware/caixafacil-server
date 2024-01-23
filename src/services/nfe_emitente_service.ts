import NfeEmitente from '../models/nfe_emitente';

class NfeEmitenteService {
  
  async getListNfeEmitente() {
    return await NfeEmitente.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeEmitenteById(Id: number) {
    return await NfeEmitente.findByPk(Id);
  }

  async insertNfeEmitente(value: NfeEmitente) {
    return await NfeEmitente.create(value);
  }

  async updateNfeEmitente(id: number, value: NfeEmitente) {
    return await NfeEmitente.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeEmitente(id: number) {
    return await NfeEmitente.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeEmitenteService();