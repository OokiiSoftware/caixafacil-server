import NfeReferenciada from '../models/nfe_referenciada';

class NfeReferenciadaService {
  
  async getListNfeReferenciada() {
    return await NfeReferenciada.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeReferenciadaById(Id: number) {
    return await NfeReferenciada.findByPk(Id);
  }

  async insertNfeReferenciada(value: NfeReferenciada) {
    return await NfeReferenciada.create(value);
  }

  async updateNfeReferenciada(id: number, value: NfeReferenciada) {
    return await NfeReferenciada.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeReferenciada(id: number) {
    return await NfeReferenciada.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeReferenciadaService();