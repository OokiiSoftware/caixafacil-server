import { Request, Response } from "express";
import NfeDetalheImpostoCofinsSt from "../services/nfe_detalhe_imposto_cofins_st_service";

class NfeDetalheImpostoCofinsStController {
    
    async getListNfeDetalheImpostoCofinsSt(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoCofinsSt.getListNfeDetalheImpostoCofinsSt();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeDetalheImpostoCofinsStById(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoCofinsSt.getNfeDetalheImpostoCofinsStById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeDetalheImpostoCofinsSt(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoCofinsSt.insertNfeDetalheImpostoCofinsSt(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeDetalheImpostoCofinsSt(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoCofinsSt.updateNfeDetalheImpostoCofinsSt(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeDetalheImpostoCofinsSt(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoCofinsSt.deleteNfeDetalheImpostoCofinsSt(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeDetalheImpostoCofinsStController();