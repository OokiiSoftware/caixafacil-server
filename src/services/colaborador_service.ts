import Colaborador from '../models/colaborador';

class ColaboradorService {
  
  async getListColaborador() {
    return await Colaborador.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getColaboradorById(Id: number) {
    return await Colaborador.findByPk(Id);
  }

  async insertColaborador(value: Colaborador) {
    return await Colaborador.create(value);
  }

  async updateColaborador(id: number, value: Colaborador) {
    return await Colaborador.update(value, {
      where: {id: id}
    });
  }

  async deleteColaborador(id: number) {
    return await Colaborador.destroy({
      where: {id: id}
    });
  }

}

  export default new ColaboradorService();