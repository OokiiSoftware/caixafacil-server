import NfeDetEspecificoMedicamento from '../models/nfe_det_especifico_medicamento';

class NfeDetEspecificoMedicamentoService {
  
  async getListNfeDetEspecificoMedicamento() {
    return await NfeDetEspecificoMedicamento.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeDetEspecificoMedicamentoById(Id: number) {
    return await NfeDetEspecificoMedicamento.findByPk(Id);
  }

  async insertNfeDetEspecificoMedicamento(value: NfeDetEspecificoMedicamento) {
    return await NfeDetEspecificoMedicamento.create(value);
  }

  async updateNfeDetEspecificoMedicamento(id: number, value: NfeDetEspecificoMedicamento) {
    return await NfeDetEspecificoMedicamento.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeDetEspecificoMedicamento(id: number) {
    return await NfeDetEspecificoMedicamento.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeDetEspecificoMedicamentoService();