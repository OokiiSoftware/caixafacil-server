import PdvSuprimento from '../models/pdv_suprimento';

class PdvSuprimentoService {
  
  async getListPdvSuprimento() {
    return await PdvSuprimento.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getPdvSuprimentoById(Id: number) {
    return await PdvSuprimento.findByPk(Id);
  }

  async insertPdvSuprimento(value: PdvSuprimento) {
    return await PdvSuprimento.create(value);
  }

  async updatePdvSuprimento(id: number, value: PdvSuprimento) {
    return await PdvSuprimento.update(value, {
      where: {id: id}
    });
  }

  async deletePdvSuprimento(id: number) {
    return await PdvSuprimento.destroy({
      where: {id: id}
    });
  }

}

  export default new PdvSuprimentoService();