import NfeCteReferenciado from '../models/nfe_cte_referenciado';

class NfeCteReferenciadoService {
  
  async getListNfeCteReferenciado() {
    return await NfeCteReferenciado.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeCteReferenciadoById(Id: number) {
    return await NfeCteReferenciado.findByPk(Id);
  }

  async insertNfeCteReferenciado(value: NfeCteReferenciado) {
    return await NfeCteReferenciado.create(value);
  }

  async updateNfeCteReferenciado(id: number, value: NfeCteReferenciado) {
    return await NfeCteReferenciado.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeCteReferenciado(id: number) {
    return await NfeCteReferenciado.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeCteReferenciadoService();