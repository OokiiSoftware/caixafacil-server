import EcfRelatorioGerencial from '../models/ecf_relatorio_gerencial';

class EcfRelatorioGerencialService {
  
  async getListEcfRelatorioGerencial() {
    return await EcfRelatorioGerencial.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getEcfRelatorioGerencialById(Id: number) {
    return await EcfRelatorioGerencial.findByPk(Id);
  }

  async insertEcfRelatorioGerencial(value: EcfRelatorioGerencial) {
    return await EcfRelatorioGerencial.create(value);
  }

  async updateEcfRelatorioGerencial(id: number, value: EcfRelatorioGerencial) {
    return await EcfRelatorioGerencial.update(value, {
      where: {id: id}
    });
  }

  async deleteEcfRelatorioGerencial(id: number) {
    return await EcfRelatorioGerencial.destroy({
      where: {id: id}
    });
  }

}

  export default new EcfRelatorioGerencialService();