import ProdutoFichaTecnica from '../models/produto_ficha_tecnica';

class ProdutoFichaTecnicaService {
  
  async getListProdutoFichaTecnica() {
    return await ProdutoFichaTecnica.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getProdutoFichaTecnicaById(Id: number) {
    return await ProdutoFichaTecnica.findByPk(Id);
  }

  async insertProdutoFichaTecnica(value: ProdutoFichaTecnica) {
    return await ProdutoFichaTecnica.create(value);
  }

  async updateProdutoFichaTecnica(id: number, value: ProdutoFichaTecnica) {
    return await ProdutoFichaTecnica.update(value, {
      where: {id: id}
    });
  }

  async deleteProdutoFichaTecnica(id: number) {
    return await ProdutoFichaTecnica.destroy({
      where: {id: id}
    });
  }

}

  export default new ProdutoFichaTecnicaService();