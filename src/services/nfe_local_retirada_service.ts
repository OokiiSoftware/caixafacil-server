import NfeLocalRetirada from '../models/nfe_local_retirada';

class NfeLocalRetiradaService {
  
  async getListNfeLocalRetirada() {
    return await NfeLocalRetirada.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeLocalRetiradaById(Id: number) {
    return await NfeLocalRetirada.findByPk(Id);
  }

  async insertNfeLocalRetirada(value: NfeLocalRetirada) {
    return await NfeLocalRetirada.create(value);
  }

  async updateNfeLocalRetirada(id: number, value: NfeLocalRetirada) {
    return await NfeLocalRetirada.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeLocalRetirada(id: number) {
    return await NfeLocalRetirada.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeLocalRetiradaService();