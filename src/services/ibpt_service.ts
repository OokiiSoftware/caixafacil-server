import Ibpt from '../models/ibpt';

class IbptService {
  
  async getListIbpt() {
    return await Ibpt.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getIbptById(Id: number) {
    return await Ibpt.findByPk(Id);
  }

  async insertIbpt(value: Ibpt) {
    return await Ibpt.create(value);
  }

  async updateIbpt(id: number, value: Ibpt) {
    return await Ibpt.update(value, {
      where: {id: id}
    });
  }

  async deleteIbpt(id: number) {
    return await Ibpt.destroy({
      where: {id: id}
    });
  }

}

  export default new IbptService();