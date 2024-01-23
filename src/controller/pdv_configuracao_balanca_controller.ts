import { Request, Response } from "express";
import PdvConfiguracaoBalanca from "../services/pdv_configuracao_balanca_service";

class PdvConfiguracaoBalancaController {
    
    async getListPdvConfiguracaoBalanca(req: Request, res: Response) {
        try {
            const response = await PdvConfiguracaoBalanca.getListPdvConfiguracaoBalanca();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getPdvConfiguracaoBalancaById(req: Request, res: Response) {
        try {
            const response = await PdvConfiguracaoBalanca.getPdvConfiguracaoBalancaById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertPdvConfiguracaoBalanca(req: Request, res: Response) {
        try {
            const response = await PdvConfiguracaoBalanca.insertPdvConfiguracaoBalanca(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updatePdvConfiguracaoBalanca(req: Request, res: Response) {
        try {
            const response = await PdvConfiguracaoBalanca.updatePdvConfiguracaoBalanca(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deletePdvConfiguracaoBalanca(req: Request, res: Response) {
        try {
            const response = await PdvConfiguracaoBalanca.deletePdvConfiguracaoBalanca(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new PdvConfiguracaoBalancaController();