import NfeFatura from '../models/nfe_fatura';

class NfeFaturaService {
  
  async getListNfeFatura() {
    return await NfeFatura.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeFaturaById(Id: number) {
    return await NfeFatura.findByPk(Id);
  }

  async insertNfeFatura(value: NfeFatura) {
    return await NfeFatura.create(value);
  }

  async updateNfeFatura(id: number, value: NfeFatura) {
    return await NfeFatura.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeFatura(id: number) {
    return await NfeFatura.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeFaturaService();