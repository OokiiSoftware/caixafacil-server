import NfeDetalheImpostoPis from '../models/nfe_detalhe_imposto_pis';

class NfeDetalheImpostoPisService {
  
  async getListNfeDetalheImpostoPis() {
    return await NfeDetalheImpostoPis.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeDetalheImpostoPisById(Id: number) {
    return await NfeDetalheImpostoPis.findByPk(Id);
  }

  async insertNfeDetalheImpostoPis(value: NfeDetalheImpostoPis) {
    return await NfeDetalheImpostoPis.create(value);
  }

  async updateNfeDetalheImpostoPis(id: number, value: NfeDetalheImpostoPis) {
    return await NfeDetalheImpostoPis.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeDetalheImpostoPis(id: number) {
    return await NfeDetalheImpostoPis.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeDetalheImpostoPisService();