import NfeExportacao from '../models/nfe_exportacao';

class NfeExportacaoService {
  
  async getListNfeExportacao() {
    return await NfeExportacao.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeExportacaoById(Id: number) {
    return await NfeExportacao.findByPk(Id);
  }

  async insertNfeExportacao(value: NfeExportacao) {
    return await NfeExportacao.create(value);
  }

  async updateNfeExportacao(id: number, value: NfeExportacao) {
    return await NfeExportacao.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeExportacao(id: number) {
    return await NfeExportacao.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeExportacaoService();