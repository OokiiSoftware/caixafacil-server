import PdvConfiguracaoBalanca from '../models/pdv_configuracao_balanca';

class PdvConfiguracaoBalancaService {
  
  async getListPdvConfiguracaoBalanca() {
    return await PdvConfiguracaoBalanca.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getPdvConfiguracaoBalancaById(Id: number) {
    return await PdvConfiguracaoBalanca.findByPk(Id);
  }

  async insertPdvConfiguracaoBalanca(value: PdvConfiguracaoBalanca) {
    return await PdvConfiguracaoBalanca.create(value);
  }

  async updatePdvConfiguracaoBalanca(id: number, value: PdvConfiguracaoBalanca) {
    return await PdvConfiguracaoBalanca.update(value, {
      where: {id: id}
    });
  }

  async deletePdvConfiguracaoBalanca(id: number) {
    return await PdvConfiguracaoBalanca.destroy({
      where: {id: id}
    });
  }

}

  export default new PdvConfiguracaoBalancaService();