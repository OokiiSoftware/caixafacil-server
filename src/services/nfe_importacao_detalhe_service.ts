import NfeImportacaoDetalhe from '../models/nfe_importacao_detalhe';

class NfeImportacaoDetalheService {
  
  async getListNfeImportacaoDetalhe() {
    return await NfeImportacaoDetalhe.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeImportacaoDetalheById(Id: number) {
    return await NfeImportacaoDetalhe.findByPk(Id);
  }

  async insertNfeImportacaoDetalhe(value: NfeImportacaoDetalhe) {
    return await NfeImportacaoDetalhe.create(value);
  }

  async updateNfeImportacaoDetalhe(id: number, value: NfeImportacaoDetalhe) {
    return await NfeImportacaoDetalhe.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeImportacaoDetalhe(id: number) {
    return await NfeImportacaoDetalhe.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeImportacaoDetalheService();