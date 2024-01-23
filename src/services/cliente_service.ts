import Cliente from '../models/cliente';

class ClienteService {
  
  async getListCliente() {
    return await Cliente.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getClienteById(Id: number) {
    return await Cliente.findByPk(Id);
  }

  async insertCliente(value: Cliente) {
    return await Cliente.create(value);
  }

  async updateCliente(id: number, value: Cliente) {
    return await Cliente.update(value, {
      where: {id: id}
    });
  }

  async deleteCliente(id: number) {
    return await Cliente.destroy({
      where: {id: id}
    });
  }

}

  export default new ClienteService();