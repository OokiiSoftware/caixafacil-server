import { Request, Response } from "express";
import NfeDetalheImpostoCofins from "../services/nfe_detalhe_imposto_cofins_service";

class NfeDetalheImpostoCofinsController {
    
    async getListNfeDetalheImpostoCofins(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoCofins.getListNfeDetalheImpostoCofins();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeDetalheImpostoCofinsById(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoCofins.getNfeDetalheImpostoCofinsById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeDetalheImpostoCofins(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoCofins.insertNfeDetalheImpostoCofins(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeDetalheImpostoCofins(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoCofins.updateNfeDetalheImpostoCofins(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeDetalheImpostoCofins(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoCofins.deleteNfeDetalheImpostoCofins(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeDetalheImpostoCofinsController();