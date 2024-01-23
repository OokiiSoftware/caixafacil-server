import NfeDetEspecificoVeiculo from '../models/nfe_det_especifico_veiculo';

class NfeDetEspecificoVeiculoService {
  
  async getListNfeDetEspecificoVeiculo() {
    return await NfeDetEspecificoVeiculo.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeDetEspecificoVeiculoById(Id: number) {
    return await NfeDetEspecificoVeiculo.findByPk(Id);
  }

  async insertNfeDetEspecificoVeiculo(value: NfeDetEspecificoVeiculo) {
    return await NfeDetEspecificoVeiculo.create(value);
  }

  async updateNfeDetEspecificoVeiculo(id: number, value: NfeDetEspecificoVeiculo) {
    return await NfeDetEspecificoVeiculo.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeDetEspecificoVeiculo(id: number) {
    return await NfeDetEspecificoVeiculo.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeDetEspecificoVeiculoService();