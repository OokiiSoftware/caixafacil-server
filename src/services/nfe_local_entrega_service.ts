import NfeLocalEntrega from '../models/nfe_local_entrega';

class NfeLocalEntregaService {
  
  async getListNfeLocalEntrega() {
    return await NfeLocalEntrega.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeLocalEntregaById(Id: number) {
    return await NfeLocalEntrega.findByPk(Id);
  }

  async insertNfeLocalEntrega(value: NfeLocalEntrega) {
    return await NfeLocalEntrega.create(value);
  }

  async updateNfeLocalEntrega(id: number, value: NfeLocalEntrega) {
    return await NfeLocalEntrega.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeLocalEntrega(id: number) {
    return await NfeLocalEntrega.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeLocalEntregaService();