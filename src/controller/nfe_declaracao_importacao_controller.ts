import { Request, Response } from "express";
import NfeDeclaracaoImportacao from "../services/nfe_declaracao_importacao_service";

class NfeDeclaracaoImportacaoController {
    
    async getListNfeDeclaracaoImportacao(req: Request, res: Response) {
        try {
            const response = await NfeDeclaracaoImportacao.getListNfeDeclaracaoImportacao();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeDeclaracaoImportacaoById(req: Request, res: Response) {
        try {
            const response = await NfeDeclaracaoImportacao.getNfeDeclaracaoImportacaoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeDeclaracaoImportacao(req: Request, res: Response) {
        try {
            const response = await NfeDeclaracaoImportacao.insertNfeDeclaracaoImportacao(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeDeclaracaoImportacao(req: Request, res: Response) {
        try {
            const response = await NfeDeclaracaoImportacao.updateNfeDeclaracaoImportacao(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeDeclaracaoImportacao(req: Request, res: Response) {
        try {
            const response = await NfeDeclaracaoImportacao.deleteNfeDeclaracaoImportacao(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeDeclaracaoImportacaoController();