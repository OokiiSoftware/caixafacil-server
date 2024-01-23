import EcfLogTotais from '../models/ecf_log_totais';

class EcfLogTotaisService {
  
  async getListEcfLogTotais() {
    return await EcfLogTotais.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getEcfLogTotaisById(Id: number) {
    return await EcfLogTotais.findByPk(Id);
  }

  async insertEcfLogTotais(value: EcfLogTotais) {
    return await EcfLogTotais.create(value);
  }

  async updateEcfLogTotais(id: number, value: EcfLogTotais) {
    return await EcfLogTotais.update(value, {
      where: {id: id}
    });
  }

  async deleteEcfLogTotais(id: number) {
    return await EcfLogTotais.destroy({
      where: {id: id}
    });
  }

}

  export default new EcfLogTotaisService();