import EcfRecebimentoNaoFiscal from '../models/ecf_recebimento_nao_fiscal';

class EcfRecebimentoNaoFiscalService {
  
  async getListEcfRecebimentoNaoFiscal() {
    return await EcfRecebimentoNaoFiscal.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getEcfRecebimentoNaoFiscalById(Id: number) {
    return await EcfRecebimentoNaoFiscal.findByPk(Id);
  }

  async insertEcfRecebimentoNaoFiscal(value: EcfRecebimentoNaoFiscal) {
    return await EcfRecebimentoNaoFiscal.create(value);
  }

  async updateEcfRecebimentoNaoFiscal(id: number, value: EcfRecebimentoNaoFiscal) {
    return await EcfRecebimentoNaoFiscal.update(value, {
      where: {id: id}
    });
  }

  async deleteEcfRecebimentoNaoFiscal(id: number) {
    return await EcfRecebimentoNaoFiscal.destroy({
      where: {id: id}
    });
  }

}

  export default new EcfRecebimentoNaoFiscalService();