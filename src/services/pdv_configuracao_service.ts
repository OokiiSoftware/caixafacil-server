import PdvConfiguracao from '../models/pdv_configuracao';

class PdvConfiguracaoService {
  
  async getListPdvConfiguracao() {
    return await PdvConfiguracao.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getPdvConfiguracaoById(Id: number) {
    return await PdvConfiguracao.findByPk(Id);
  }

  async insertPdvConfiguracao(value: PdvConfiguracao) {
    return await PdvConfiguracao.create(value);
  }

  async updatePdvConfiguracao(id: number, value: PdvConfiguracao) {
    return await PdvConfiguracao.update(value, {
      where: {id: id}
    });
  }

  async deletePdvConfiguracao(id: number) {
    return await PdvConfiguracao.destroy({
      where: {id: id}
    });
  }

}

  export default new PdvConfiguracaoService();