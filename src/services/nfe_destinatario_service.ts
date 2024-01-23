import NfeDestinatario from '../models/nfe_destinatario';

class NfeDestinatarioService {
  
  async getListNfeDestinatario() {
    return await NfeDestinatario.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeDestinatarioById(Id: number) {
    return await NfeDestinatario.findByPk(Id);
  }

  async insertNfeDestinatario(value: NfeDestinatario) {
    return await NfeDestinatario.create(value);
  }

  async updateNfeDestinatario(id: number, value: NfeDestinatario) {
    return await NfeDestinatario.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeDestinatario(id: number) {
    return await NfeDestinatario.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeDestinatarioService();