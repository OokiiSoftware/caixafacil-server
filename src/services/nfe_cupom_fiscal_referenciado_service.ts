import NfeCupomFiscalReferenciado from '../models/nfe_cupom_fiscal_referenciado';

class NfeCupomFiscalReferenciadoService {
  
  async getListNfeCupomFiscalReferenciado() {
    return await NfeCupomFiscalReferenciado.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeCupomFiscalReferenciadoById(Id: number) {
    return await NfeCupomFiscalReferenciado.findByPk(Id);
  }

  async insertNfeCupomFiscalReferenciado(value: NfeCupomFiscalReferenciado) {
    return await NfeCupomFiscalReferenciado.create(value);
  }

  async updateNfeCupomFiscalReferenciado(id: number, value: NfeCupomFiscalReferenciado) {
    return await NfeCupomFiscalReferenciado.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeCupomFiscalReferenciado(id: number) {
    return await NfeCupomFiscalReferenciado.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeCupomFiscalReferenciadoService();