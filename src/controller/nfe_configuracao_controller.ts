import { Request, Response } from "express";
import NfeConfiguracao from "../services/nfe_configuracao_service";

class NfeConfiguracaoController {
    
    async getListNfeConfiguracao(req: Request, res: Response) {
        try {
            const response = await NfeConfiguracao.getListNfeConfiguracao();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeConfiguracaoById(req: Request, res: Response) {
        try {
            const response = await NfeConfiguracao.getNfeConfiguracaoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeConfiguracao(req: Request, res: Response) {
        try {
            const response = await NfeConfiguracao.insertNfeConfiguracao(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeConfiguracao(req: Request, res: Response) {
        try {
            const response = await NfeConfiguracao.updateNfeConfiguracao(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeConfiguracao(req: Request, res: Response) {
        try {
            const response = await NfeConfiguracao.deleteNfeConfiguracao(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeConfiguracaoController();