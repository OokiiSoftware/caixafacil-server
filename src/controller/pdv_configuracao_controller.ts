import { Request, Response } from "express";
import PdvConfiguracao from "../services/pdv_configuracao_service";

class PdvConfiguracaoController {
    
    async getListPdvConfiguracao(req: Request, res: Response) {
        try {
            const response = await PdvConfiguracao.getListPdvConfiguracao();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getPdvConfiguracaoById(req: Request, res: Response) {
        try {
            const response = await PdvConfiguracao.getPdvConfiguracaoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertPdvConfiguracao(req: Request, res: Response) {
        try {
            const response = await PdvConfiguracao.insertPdvConfiguracao(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updatePdvConfiguracao(req: Request, res: Response) {
        try {
            const response = await PdvConfiguracao.updatePdvConfiguracao(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deletePdvConfiguracao(req: Request, res: Response) {
        try {
            const response = await PdvConfiguracao.deletePdvConfiguracao(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new PdvConfiguracaoController();