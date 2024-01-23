import EcfImpressora from '../models/ecf_impressora';

class EcfImpressoraService {
  
  async getListEcfImpressora() {
    return await EcfImpressora.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getEcfImpressoraById(Id: number) {
    return await EcfImpressora.findByPk(Id);
  }

  async insertEcfImpressora(value: EcfImpressora) {
    return await EcfImpressora.create(value);
  }

  async updateEcfImpressora(id: number, value: EcfImpressora) {
    return await EcfImpressora.update(value, {
      where: {id: id}
    });
  }

  async deleteEcfImpressora(id: number) {
    return await EcfImpressora.destroy({
      where: {id: id}
    });
  }

}

  export default new EcfImpressoraService();