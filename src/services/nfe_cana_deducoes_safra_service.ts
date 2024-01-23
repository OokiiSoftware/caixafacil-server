import NfeCanaDeducoesSafra from '../models/nfe_cana_deducoes_safra';

class NfeCanaDeducoesSafraService {
  
  async getListNfeCanaDeducoesSafra() {
    return await NfeCanaDeducoesSafra.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeCanaDeducoesSafraById(Id: number) {
    return await NfeCanaDeducoesSafra.findByPk(Id);
  }

  async insertNfeCanaDeducoesSafra(value: NfeCanaDeducoesSafra) {
    return await NfeCanaDeducoesSafra.create(value);
  }

  async updateNfeCanaDeducoesSafra(id: number, value: NfeCanaDeducoesSafra) {
    return await NfeCanaDeducoesSafra.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeCanaDeducoesSafra(id: number) {
    return await NfeCanaDeducoesSafra.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeCanaDeducoesSafraService();