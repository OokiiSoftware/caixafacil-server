import PdvCaixa from '../models/pdv_caixa';

class PdvCaixaService {
  
  async getListPdvCaixa() {
    return await PdvCaixa.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getPdvCaixaById(Id: number) {
    return await PdvCaixa.findByPk(Id);
  }

  async insertPdvCaixa(value: PdvCaixa) {
    return await PdvCaixa.create(value);
  }

  async updatePdvCaixa(id: number, value: PdvCaixa) {
    return await PdvCaixa.update(value, {
      where: {id: id}
    });
  }

  async deletePdvCaixa(id: number) {
    return await PdvCaixa.destroy({
      where: {id: id}
    });
  }

}

  export default new PdvCaixaService();