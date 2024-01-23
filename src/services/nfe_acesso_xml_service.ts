import NfeAcessoXml from '../models/nfe_acesso_xml';

class NfeAcessoXmlService {
  
  async getListNfeAcessoXml() {
    return await NfeAcessoXml.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeAcessoXmlById(Id: number) {
    return await NfeAcessoXml.findByPk(Id);
  }

  async insertNfeAcessoXml(value: NfeAcessoXml) {
    return await NfeAcessoXml.create(value);
  }

  async updateNfeAcessoXml(id: number, value: NfeAcessoXml) {
    return await NfeAcessoXml.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeAcessoXml(id: number) {
    return await NfeAcessoXml.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeAcessoXmlService();