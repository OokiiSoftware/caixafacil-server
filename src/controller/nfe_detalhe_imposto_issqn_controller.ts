import { Request, Response } from "express";
import NfeDetalheImpostoIssqn from "../services/nfe_detalhe_imposto_issqn_service";

class NfeDetalheImpostoIssqnController {
    
    async getListNfeDetalheImpostoIssqn(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIssqn.getListNfeDetalheImpostoIssqn();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeDetalheImpostoIssqnById(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIssqn.getNfeDetalheImpostoIssqnById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeDetalheImpostoIssqn(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIssqn.insertNfeDetalheImpostoIssqn(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeDetalheImpostoIssqn(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIssqn.updateNfeDetalheImpostoIssqn(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeDetalheImpostoIssqn(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIssqn.deleteNfeDetalheImpostoIssqn(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeDetalheImpostoIssqnController();