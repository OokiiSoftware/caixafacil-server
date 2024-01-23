import PdvMovimento from '../models/pdv_movimento';

class PdvMovimentoService {
  
  async getListPdvMovimento() {
    return await PdvMovimento.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getPdvMovimentoById(Id: number) {
    return await PdvMovimento.findByPk(Id);
  }

  async insertPdvMovimento(value: PdvMovimento) {
    return await PdvMovimento.create(value);
  }

  async updatePdvMovimento(id: number, value: PdvMovimento) {
    return await PdvMovimento.update(value, {
      where: {id: id}
    });
  }

  async deletePdvMovimento(id: number) {
    return await PdvMovimento.destroy({
      where: {id: id}
    });
  }

}

  export default new PdvMovimentoService();