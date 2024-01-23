import TributGrupoTributario from '../models/tribut_grupo_tributario';

class TributGrupoTributarioService {
  
  async getListTributGrupoTributario() {
    return await TributGrupoTributario.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getTributGrupoTributarioById(Id: number) {
    return await TributGrupoTributario.findByPk(Id);
  }

  async insertTributGrupoTributario(value: TributGrupoTributario) {
    return await TributGrupoTributario.create(value);
  }

  async updateTributGrupoTributario(id: number, value: TributGrupoTributario) {
    return await TributGrupoTributario.update(value, {
      where: {id: id}
    });
  }

  async deleteTributGrupoTributario(id: number) {
    return await TributGrupoTributario.destroy({
      where: {id: id}
    });
  }

}

  export default new TributGrupoTributarioService();