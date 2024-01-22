import Empresa from '../models/empresa';

class EmpresaService {
  
    async getAll() {
      const values = await Empresa.findAll({
        limit: 40,
        include: [{ all: true, nested: true }],
      });
  
      return values;
    }

  }

  export default new EmpresaService();