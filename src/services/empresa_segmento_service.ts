import EmpresaSegmento from '../models/empresa_segmento';

class EmpresaSegmentoService {
  
  async getListEmpresaSegmento() {
    return await EmpresaSegmento.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getEmpresaSegmentoById(Id: number) {
    return await EmpresaSegmento.findByPk(Id);
  }

  async insertEmpresaSegmento(value: EmpresaSegmento) {
    return await EmpresaSegmento.create(value);
  }

  async updateEmpresaSegmento(id: number, value: EmpresaSegmento) {
    return await EmpresaSegmento.update(value, {
      where: {id: id}
    });
  }

  async deleteEmpresaSegmento(id: number) {
    return await EmpresaSegmento.destroy({
      where: {id: id}
    });
  }

}

  export default new EmpresaSegmentoService();