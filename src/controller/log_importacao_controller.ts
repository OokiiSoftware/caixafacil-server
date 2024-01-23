import { Request, Response } from "express";
import LogImportacao from "../services/log_importacao_service";

class LogImportacaoController {
    
    async getListLogImportacao(req: Request, res: Response) {
        try {
            const response = await LogImportacao.getListLogImportacao();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getLogImportacaoById(req: Request, res: Response) {
        try {
            const response = await LogImportacao.getLogImportacaoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertLogImportacao(req: Request, res: Response) {
        try {
            const response = await LogImportacao.insertLogImportacao(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateLogImportacao(req: Request, res: Response) {
        try {
            const response = await LogImportacao.updateLogImportacao(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteLogImportacao(req: Request, res: Response) {
        try {
            const response = await LogImportacao.deleteLogImportacao(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new LogImportacaoController();