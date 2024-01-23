import { Request, Response } from "express";
import TributIcmsCustomCab from "../services/tribut_icms_custom_cab_service";

class TributIcmsCustomCabController {
    
    async getListTributIcmsCustomCab(req: Request, res: Response) {
        try {
            const response = await TributIcmsCustomCab.getListTributIcmsCustomCab();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getTributIcmsCustomCabById(req: Request, res: Response) {
        try {
            const response = await TributIcmsCustomCab.getTributIcmsCustomCabById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertTributIcmsCustomCab(req: Request, res: Response) {
        try {
            const response = await TributIcmsCustomCab.insertTributIcmsCustomCab(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateTributIcmsCustomCab(req: Request, res: Response) {
        try {
            const response = await TributIcmsCustomCab.updateTributIcmsCustomCab(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteTributIcmsCustomCab(req: Request, res: Response) {
        try {
            const response = await TributIcmsCustomCab.deleteTributIcmsCustomCab(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new TributIcmsCustomCabController();