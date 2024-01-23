import { Request, Response } from "express";
import TributCofins from "../services/tribut_cofins_service";

class TributCofinsController {
    
    async getListTributCofins(req: Request, res: Response) {
        try {
            const response = await TributCofins.getListTributCofins();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getTributCofinsById(req: Request, res: Response) {
        try {
            const response = await TributCofins.getTributCofinsById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertTributCofins(req: Request, res: Response) {
        try {
            const response = await TributCofins.insertTributCofins(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateTributCofins(req: Request, res: Response) {
        try {
            const response = await TributCofins.updateTributCofins(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteTributCofins(req: Request, res: Response) {
        try {
            const response = await TributCofins.deleteTributCofins(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new TributCofinsController();