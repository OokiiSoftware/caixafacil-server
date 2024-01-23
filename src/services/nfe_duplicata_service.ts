import NfeDuplicata from '../models/nfe_duplicata';

class NfeDuplicataService {
  
  async getListNfeDuplicata() {
    return await NfeDuplicata.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeDuplicataById(Id: number) {
    return await NfeDuplicata.findByPk(Id);
  }

  async insertNfeDuplicata(value: NfeDuplicata) {
    return await NfeDuplicata.create(value);
  }

  async updateNfeDuplicata(id: number, value: NfeDuplicata) {
    return await NfeDuplicata.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeDuplicata(id: number) {
    return await NfeDuplicata.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeDuplicataService();