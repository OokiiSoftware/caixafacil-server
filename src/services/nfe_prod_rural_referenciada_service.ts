import NfeProdRuralReferenciada from '../models/nfe_prod_rural_referenciada';

class NfeProdRuralReferenciadaService {
  
  async getListNfeProdRuralReferenciada() {
    return await NfeProdRuralReferenciada.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeProdRuralReferenciadaById(Id: number) {
    return await NfeProdRuralReferenciada.findByPk(Id);
  }

  async insertNfeProdRuralReferenciada(value: NfeProdRuralReferenciada) {
    return await NfeProdRuralReferenciada.create(value);
  }

  async updateNfeProdRuralReferenciada(id: number, value: NfeProdRuralReferenciada) {
    return await NfeProdRuralReferenciada.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeProdRuralReferenciada(id: number) {
    return await NfeProdRuralReferenciada.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeProdRuralReferenciadaService();