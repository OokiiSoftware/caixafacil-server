import Cliente from '../models/cliente';

class ClienteService {
  
    async getAll() {
      const values = await Cliente.findAll({
        limit: 40,
        include: [{ all: true, nested: true }],
      });
  
      return values;
    }

    async getById(Id: number) {
      const values = await Cliente.findByPk(Id, {
        limit: 40,
        include: [{ all: true, nested: true }],
      });
  
      return values;
    }

    async insert(value: Cliente) {
      return await Cliente.create(value);
    }

    async update(id: number, value: Cliente) {
      return await Cliente.update(value, {
        where: {
          id: id,
        }
      });
    }

    async delete(id: number) {
      return await Cliente.destroy({
        where: {
          id: id,
        }
      });
    }

  }

  export default new ClienteService();