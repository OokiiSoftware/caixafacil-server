import PdvConfiguracaoLeitorSerial from '../models/pdv_configuracao_leitor_serial';

class PdvConfiguracaoLeitorSerialService {
  
  async getListPdvConfiguracaoLeitorSerial() {
    return await PdvConfiguracaoLeitorSerial.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getPdvConfiguracaoLeitorSerialById(Id: number) {
    return await PdvConfiguracaoLeitorSerial.findByPk(Id);
  }

  async insertPdvConfiguracaoLeitorSerial(value: PdvConfiguracaoLeitorSerial) {
    return await PdvConfiguracaoLeitorSerial.create(value);
  }

  async updatePdvConfiguracaoLeitorSerial(id: number, value: PdvConfiguracaoLeitorSerial) {
    return await PdvConfiguracaoLeitorSerial.update(value, {
      where: {id: id}
    });
  }

  async deletePdvConfiguracaoLeitorSerial(id: number) {
    return await PdvConfiguracaoLeitorSerial.destroy({
      where: {id: id}
    });
  }

}

  export default new PdvConfiguracaoLeitorSerialService();