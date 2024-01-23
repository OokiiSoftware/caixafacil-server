import NfeDetalheImpostoCofins from '../models/nfe_detalhe_imposto_cofins';

class NfeDetalheImpostoCofinsService {
  
  async getListNfeDetalheImpostoCofins() {
    return await NfeDetalheImpostoCofins.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeDetalheImpostoCofinsById(Id: number) {
    return await NfeDetalheImpostoCofins.findByPk(Id);
  }

  async insertNfeDetalheImpostoCofins(value: NfeDetalheImpostoCofins) {
    return await NfeDetalheImpostoCofins.create(value);
  }

  async updateNfeDetalheImpostoCofins(id: number, value: NfeDetalheImpostoCofins) {
    return await NfeDetalheImpostoCofins.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeDetalheImpostoCofins(id: number) {
    return await NfeDetalheImpostoCofins.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeDetalheImpostoCofinsService();