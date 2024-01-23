import NfeInformacaoPagamento from '../models/nfe_informacao_pagamento';

class NfeInformacaoPagamentoService {
  
  async getListNfeInformacaoPagamento() {
    return await NfeInformacaoPagamento.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeInformacaoPagamentoById(Id: number) {
    return await NfeInformacaoPagamento.findByPk(Id);
  }

  async insertNfeInformacaoPagamento(value: NfeInformacaoPagamento) {
    return await NfeInformacaoPagamento.create(value);
  }

  async updateNfeInformacaoPagamento(id: number, value: NfeInformacaoPagamento) {
    return await NfeInformacaoPagamento.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeInformacaoPagamento(id: number) {
    return await NfeInformacaoPagamento.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeInformacaoPagamentoService();