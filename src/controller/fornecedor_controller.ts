import { Request, Response } from "express";
import Fornecedor from "../services/fornecedor_service";

class FornecedorController {
    
    async getListFornecedor(req: Request, res: Response) {
        try {
            const response = await Fornecedor.getListFornecedor();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getFornecedorById(req: Request, res: Response) {
        try {
            const response = await Fornecedor.getFornecedorById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertFornecedor(req: Request, res: Response) {
        try {
            const response = await Fornecedor.insertFornecedor(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateFornecedor(req: Request, res: Response) {
        try {
            const response = await Fornecedor.updateFornecedor(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteFornecedor(req: Request, res: Response) {
        try {
            const response = await Fornecedor.deleteFornecedor(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new FornecedorController();