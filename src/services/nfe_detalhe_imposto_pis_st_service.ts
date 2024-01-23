import NfeDetalheImpostoPisSt from '../models/nfe_detalhe_imposto_pis_st';

class NfeDetalheImpostoPisStService {
  
  async getListNfeDetalheImpostoPisSt() {
    return await NfeDetalheImpostoPisSt.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeDetalheImpostoPisStById(Id: number) {
    return await NfeDetalheImpostoPisSt.findByPk(Id);
  }

  async insertNfeDetalheImpostoPisSt(value: NfeDetalheImpostoPisSt) {
    return await NfeDetalheImpostoPisSt.create(value);
  }

  async updateNfeDetalheImpostoPisSt(id: number, value: NfeDetalheImpostoPisSt) {
    return await NfeDetalheImpostoPisSt.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeDetalheImpostoPisSt(id: number) {
    return await NfeDetalheImpostoPisSt.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeDetalheImpostoPisStService();