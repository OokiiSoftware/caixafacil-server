import NfeNumero from '../models/nfe_numero';

class NfeNumeroService {
  
  async getListNfeNumero() {
    return await NfeNumero.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeNumeroById(Id: number) {
    return await NfeNumero.findByPk(Id);
  }

  async insertNfeNumero(value: NfeNumero) {
    return await NfeNumero.create(value);
  }

  async updateNfeNumero(id: number, value: NfeNumero) {
    return await NfeNumero.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeNumero(id: number) {
    return await NfeNumero.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeNumeroService();