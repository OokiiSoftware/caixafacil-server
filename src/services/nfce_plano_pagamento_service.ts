import NfcePlanoPagamento from '../models/nfce_plano_pagamento';

class NfcePlanoPagamentoService {
  
  async getListNfcePlanoPagamento() {
    return await NfcePlanoPagamento.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfcePlanoPagamentoById(Id: number) {
    return await NfcePlanoPagamento.findByPk(Id);
  }

  async insertNfcePlanoPagamento(value: NfcePlanoPagamento) {
    return await NfcePlanoPagamento.create(value);
  }

  async updateNfcePlanoPagamento(id: number, value: NfcePlanoPagamento) {
    return await NfcePlanoPagamento.update(value, {
      where: {id: id}
    });
  }

  async deleteNfcePlanoPagamento(id: number) {
    return await NfcePlanoPagamento.destroy({
      where: {id: id}
    });
  }

}

  export default new NfcePlanoPagamentoService();