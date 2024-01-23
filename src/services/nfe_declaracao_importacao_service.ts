import NfeDeclaracaoImportacao from '../models/nfe_declaracao_importacao';

class NfeDeclaracaoImportacaoService {
  
  async getListNfeDeclaracaoImportacao() {
    return await NfeDeclaracaoImportacao.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeDeclaracaoImportacaoById(Id: number) {
    return await NfeDeclaracaoImportacao.findByPk(Id);
  }

  async insertNfeDeclaracaoImportacao(value: NfeDeclaracaoImportacao) {
    return await NfeDeclaracaoImportacao.create(value);
  }

  async updateNfeDeclaracaoImportacao(id: number, value: NfeDeclaracaoImportacao) {
    return await NfeDeclaracaoImportacao.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeDeclaracaoImportacao(id: number) {
    return await NfeDeclaracaoImportacao.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeDeclaracaoImportacaoService();