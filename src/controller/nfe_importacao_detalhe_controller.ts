import { Request, Response } from "express";
import NfeImportacaoDetalhe from "../services/nfe_importacao_detalhe_service";

class NfeImportacaoDetalheController {
    
    async getListNfeImportacaoDetalhe(req: Request, res: Response) {
        try {
            const response = await NfeImportacaoDetalhe.getListNfeImportacaoDetalhe();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeImportacaoDetalheById(req: Request, res: Response) {
        try {
            const response = await NfeImportacaoDetalhe.getNfeImportacaoDetalheById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeImportacaoDetalhe(req: Request, res: Response) {
        try {
            const response = await NfeImportacaoDetalhe.insertNfeImportacaoDetalhe(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeImportacaoDetalhe(req: Request, res: Response) {
        try {
            const response = await NfeImportacaoDetalhe.updateNfeImportacaoDetalhe(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeImportacaoDetalhe(req: Request, res: Response) {
        try {
            const response = await NfeImportacaoDetalhe.deleteNfeImportacaoDetalhe(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeImportacaoDetalheController();