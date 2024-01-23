import PdvSangria from '../models/pdv_sangria';

class PdvSangriaService {
  
  async getListPdvSangria() {
    return await PdvSangria.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getPdvSangriaById(Id: number) {
    return await PdvSangria.findByPk(Id);
  }

  async insertPdvSangria(value: PdvSangria) {
    return await PdvSangria.create(value);
  }

  async updatePdvSangria(id: number, value: PdvSangria) {
    return await PdvSangria.update(value, {
      where: {id: id}
    });
  }

  async deletePdvSangria(id: number) {
    return await PdvSangria.destroy({
      where: {id: id}
    });
  }

}

  export default new PdvSangriaService();