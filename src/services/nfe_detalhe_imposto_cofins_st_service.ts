import NfeDetalheImpostoCofinsSt from '../models/nfe_detalhe_imposto_cofins_st';

class NfeDetalheImpostoCofinsStService {
  
  async getListNfeDetalheImpostoCofinsSt() {
    return await NfeDetalheImpostoCofinsSt.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeDetalheImpostoCofinsStById(Id: number) {
    return await NfeDetalheImpostoCofinsSt.findByPk(Id);
  }

  async insertNfeDetalheImpostoCofinsSt(value: NfeDetalheImpostoCofinsSt) {
    return await NfeDetalheImpostoCofinsSt.create(value);
  }

  async updateNfeDetalheImpostoCofinsSt(id: number, value: NfeDetalheImpostoCofinsSt) {
    return await NfeDetalheImpostoCofinsSt.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeDetalheImpostoCofinsSt(id: number) {
    return await NfeDetalheImpostoCofinsSt.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeDetalheImpostoCofinsStService();