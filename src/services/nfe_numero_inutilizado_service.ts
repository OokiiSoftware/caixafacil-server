import NfeNumeroInutilizado from '../models/nfe_numero_inutilizado';

class NfeNumeroInutilizadoService {
  
  async getListNfeNumeroInutilizado() {
    return await NfeNumeroInutilizado.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeNumeroInutilizadoById(Id: number) {
    return await NfeNumeroInutilizado.findByPk(Id);
  }

  async insertNfeNumeroInutilizado(value: NfeNumeroInutilizado) {
    return await NfeNumeroInutilizado.create(value);
  }

  async updateNfeNumeroInutilizado(id: number, value: NfeNumeroInutilizado) {
    return await NfeNumeroInutilizado.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeNumeroInutilizado(id: number) {
    return await NfeNumeroInutilizado.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeNumeroInutilizadoService();