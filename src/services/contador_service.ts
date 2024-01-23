import Contador from '../models/contador';

class ContadorService {
  
  async getListContador() {
    return await Contador.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getContadorById(Id: number) {
    return await Contador.findByPk(Id);
  }

  async insertContador(value: Contador) {
    return await Contador.create(value);
  }

  async updateContador(id: number, value: Contador) {
    return await Contador.update(value, {
      where: {id: id}
    });
  }

  async deleteContador(id: number) {
    return await Contador.destroy({
      where: {id: id}
    });
  }

}

  export default new ContadorService();