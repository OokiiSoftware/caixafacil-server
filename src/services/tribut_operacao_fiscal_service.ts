import TributOperacaoFiscal from '../models/tribut_operacao_fiscal';

class TributOperacaoFiscalService {
  
  async getListTributOperacaoFiscal() {
    return await TributOperacaoFiscal.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getTributOperacaoFiscalById(Id: number) {
    return await TributOperacaoFiscal.findByPk(Id);
  }

  async insertTributOperacaoFiscal(value: TributOperacaoFiscal) {
    return await TributOperacaoFiscal.create(value);
  }

  async updateTributOperacaoFiscal(id: number, value: TributOperacaoFiscal) {
    return await TributOperacaoFiscal.update(value, {
      where: {id: id}
    });
  }

  async deleteTributOperacaoFiscal(id: number) {
    return await TributOperacaoFiscal.destroy({
      where: {id: id}
    });
  }

}

  export default new TributOperacaoFiscalService();