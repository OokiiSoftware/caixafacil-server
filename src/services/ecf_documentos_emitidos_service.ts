import EcfDocumentosEmitidos from '../models/ecf_documentos_emitidos';

class EcfDocumentosEmitidosService {
  
  async getListEcfDocumentosEmitidos() {
    return await EcfDocumentosEmitidos.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getEcfDocumentosEmitidosById(Id: number) {
    return await EcfDocumentosEmitidos.findByPk(Id);
  }

  async insertEcfDocumentosEmitidos(value: EcfDocumentosEmitidos) {
    return await EcfDocumentosEmitidos.create(value);
  }

  async updateEcfDocumentosEmitidos(id: number, value: EcfDocumentosEmitidos) {
    return await EcfDocumentosEmitidos.update(value, {
      where: {id: id}
    });
  }

  async deleteEcfDocumentosEmitidos(id: number) {
    return await EcfDocumentosEmitidos.destroy({
      where: {id: id}
    });
  }

}

  export default new EcfDocumentosEmitidosService();