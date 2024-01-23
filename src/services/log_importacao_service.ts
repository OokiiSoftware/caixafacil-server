import LogImportacao from '../models/log_importacao';

class LogImportacaoService {
  
  async getListLogImportacao() {
    return await LogImportacao.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getLogImportacaoById(Id: number) {
    return await LogImportacao.findByPk(Id);
  }

  async insertLogImportacao(value: LogImportacao) {
    return await LogImportacao.create(value);
  }

  async updateLogImportacao(id: number, value: LogImportacao) {
    return await LogImportacao.update(value, {
      where: {id: id}
    });
  }

  async deleteLogImportacao(id: number) {
    return await LogImportacao.destroy({
      where: {id: id}
    });
  }

}

  export default new LogImportacaoService();