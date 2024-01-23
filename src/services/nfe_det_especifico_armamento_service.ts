import NfeDetEspecificoArmamento from '../models/nfe_det_especifico_armamento';

class NfeDetEspecificoArmamentoService {
  
  async getListNfeDetEspecificoArmamento() {
    return await NfeDetEspecificoArmamento.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeDetEspecificoArmamentoById(Id: number) {
    return await NfeDetEspecificoArmamento.findByPk(Id);
  }

  async insertNfeDetEspecificoArmamento(value: NfeDetEspecificoArmamento) {
    return await NfeDetEspecificoArmamento.create(value);
  }

  async updateNfeDetEspecificoArmamento(id: number, value: NfeDetEspecificoArmamento) {
    return await NfeDetEspecificoArmamento.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeDetEspecificoArmamento(id: number) {
    return await NfeDetEspecificoArmamento.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeDetEspecificoArmamentoService();