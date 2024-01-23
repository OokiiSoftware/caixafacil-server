import ClienteFiado from '../models/cliente_fiado';

class ClienteFiadoService {
  
  async getListClienteFiado() {
    return await ClienteFiado.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getClienteFiadoById(Id: number) {
    return await ClienteFiado.findByPk(Id);
  }

  async insertClienteFiado(value: ClienteFiado) {
    return await ClienteFiado.create(value);
  }

  async updateClienteFiado(id: number, value: ClienteFiado) {
    return await ClienteFiado.update(value, {
      where: {id: id}
    });
  }

  async deleteClienteFiado(id: number) {
    return await ClienteFiado.destroy({
      where: {id: id}
    });
  }

}

  export default new ClienteFiadoService();