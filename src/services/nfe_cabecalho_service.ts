import NfeCabecalho from '../models/nfe_cabecalho';

class NfeCabecalhoService {
  
  async getListNfeCabecalho() {
    return await NfeCabecalho.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeCabecalhoById(Id: number) {
    return await NfeCabecalho.findByPk(Id);
  }

  async insertNfeCabecalho(value: NfeCabecalho) {
    return await NfeCabecalho.create(value);
  }

  async updateNfeCabecalho(id: number, value: NfeCabecalho) {
    return await NfeCabecalho.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeCabecalho(id: number) {
    return await NfeCabecalho.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeCabecalhoService();