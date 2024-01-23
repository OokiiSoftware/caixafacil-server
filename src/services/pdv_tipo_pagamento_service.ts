import PdvTipoPagamento from '../models/pdv_tipo_pagamento';

class PdvTipoPagamentoService {
  
  async getListPdvTipoPagamento() {
    return await PdvTipoPagamento.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getPdvTipoPagamentoById(Id: number) {
    return await PdvTipoPagamento.findByPk(Id);
  }

  async insertPdvTipoPagamento(value: PdvTipoPagamento) {
    return await PdvTipoPagamento.create(value);
  }

  async updatePdvTipoPagamento(id: number, value: PdvTipoPagamento) {
    return await PdvTipoPagamento.update(value, {
      where: {id: id}
    });
  }

  async deletePdvTipoPagamento(id: number) {
    return await PdvTipoPagamento.destroy({
      where: {id: id}
    });
  }

}

  export default new PdvTipoPagamentoService();