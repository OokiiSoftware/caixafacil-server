import NfeCana from '../models/nfe_cana';

class NfeCanaService {
  
  async getListNfeCana() {
    return await NfeCana.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeCanaById(Id: number) {
    return await NfeCana.findByPk(Id);
  }

  async insertNfeCana(value: NfeCana) {
    return await NfeCana.create(value);
  }

  async updateNfeCana(id: number, value: NfeCana) {
    return await NfeCana.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeCana(id: number) {
    return await NfeCana.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeCanaService();