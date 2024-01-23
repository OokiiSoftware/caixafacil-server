import { Request, Response } from "express";
import FidelidadeHistorico from "../services/fidelidade_historico_service";

class FidelidadeHistoricoController {
    
    async getListFidelidadeHistorico(req: Request, res: Response) {
        try {
            const response = await FidelidadeHistorico.getListFidelidadeHistorico();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getFidelidadeHistoricoById(req: Request, res: Response) {
        try {
            const response = await FidelidadeHistorico.getFidelidadeHistoricoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertFidelidadeHistorico(req: Request, res: Response) {
        try {
            const response = await FidelidadeHistorico.insertFidelidadeHistorico(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateFidelidadeHistorico(req: Request, res: Response) {
        try {
            const response = await FidelidadeHistorico.updateFidelidadeHistorico(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteFidelidadeHistorico(req: Request, res: Response) {
        try {
            const response = await FidelidadeHistorico.deleteFidelidadeHistorico(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new FidelidadeHistoricoController();