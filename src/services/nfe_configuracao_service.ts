import NfeConfiguracao from '../models/nfe_configuracao';

class NfeConfiguracaoService {
  
  async getListNfeConfiguracao() {
    return await NfeConfiguracao.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeConfiguracaoById(Id: number) {
    return await NfeConfiguracao.findByPk(Id);
  }

  async insertNfeConfiguracao(value: NfeConfiguracao) {
    return await NfeConfiguracao.create(value);
  }

  async updateNfeConfiguracao(id: number, value: NfeConfiguracao) {
    return await NfeConfiguracao.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeConfiguracao(id: number) {
    return await NfeConfiguracao.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeConfiguracaoService();