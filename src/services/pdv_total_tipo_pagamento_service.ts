import PdvTotalTipoPagamento from '../models/pdv_total_tipo_pagamento';

class PdvTotalTipoPagamentoService {
  
  async getListPdvTotalTipoPagamento() {
    return await PdvTotalTipoPagamento.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getPdvTotalTipoPagamentoById(Id: number) {
    return await PdvTotalTipoPagamento.findByPk(Id);
  }

  async insertPdvTotalTipoPagamento(value: PdvTotalTipoPagamento) {
    return await PdvTotalTipoPagamento.create(value);
  }

  async updatePdvTotalTipoPagamento(id: number, value: PdvTotalTipoPagamento) {
    return await PdvTotalTipoPagamento.update(value, {
      where: {id: id}
    });
  }

  async deletePdvTotalTipoPagamento(id: number) {
    return await PdvTotalTipoPagamento.destroy({
      where: {id: id}
    });
  }

}

  export default new PdvTotalTipoPagamentoService();