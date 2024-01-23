import NfeNfReferenciada from '../models/nfe_nf_referenciada';

class NfeNfReferenciadaService {
  
  async getListNfeNfReferenciada() {
    return await NfeNfReferenciada.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeNfReferenciadaById(Id: number) {
    return await NfeNfReferenciada.findByPk(Id);
  }

  async insertNfeNfReferenciada(value: NfeNfReferenciada) {
    return await NfeNfReferenciada.create(value);
  }

  async updateNfeNfReferenciada(id: number, value: NfeNfReferenciada) {
    return await NfeNfReferenciada.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeNfReferenciada(id: number) {
    return await NfeNfReferenciada.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeNfReferenciadaService();