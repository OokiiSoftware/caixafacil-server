import ProdutoGrupo from '../models/produto_grupo';

class ProdutoGrupoService {
  
  async getListProdutoGrupo() {
    return await ProdutoGrupo.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getProdutoGrupoById(Id: number) {
    return await ProdutoGrupo.findByPk(Id);
  }

  async insertProdutoGrupo(value: ProdutoGrupo) {
    return await ProdutoGrupo.create(value);
  }

  async updateProdutoGrupo(id: number, value: ProdutoGrupo) {
    return await ProdutoGrupo.update(value, {
      where: {id: id}
    });
  }

  async deleteProdutoGrupo(id: number) {
    return await ProdutoGrupo.destroy({
      where: {id: id}
    });
  }

}

  export default new ProdutoGrupoService();