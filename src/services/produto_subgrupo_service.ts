import ProdutoSubgrupo from '../models/produto_subgrupo';

class ProdutoSubgrupoService {
  
  async getListProdutoSubgrupo() {
    return await ProdutoSubgrupo.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getProdutoSubgrupoById(Id: number) {
    return await ProdutoSubgrupo.findByPk(Id);
  }

  async insertProdutoSubgrupo(value: ProdutoSubgrupo) {
    return await ProdutoSubgrupo.create(value);
  }

  async updateProdutoSubgrupo(id: number, value: ProdutoSubgrupo) {
    return await ProdutoSubgrupo.update(value, {
      where: {id: id}
    });
  }

  async deleteProdutoSubgrupo(id: number) {
    return await ProdutoSubgrupo.destroy({
      where: {id: id}
    });
  }

}

  export default new ProdutoSubgrupoService();