import { Request, Response } from "express";
import PdvSangria from "../services/pdv_sangria_service";

class PdvSangriaController {
    
    async getListPdvSangria(req: Request, res: Response) {
        try {
            const response = await PdvSangria.getListPdvSangria();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getPdvSangriaById(req: Request, res: Response) {
        try {
            const response = await PdvSangria.getPdvSangriaById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertPdvSangria(req: Request, res: Response) {
        try {
            const response = await PdvSangria.insertPdvSangria(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updatePdvSangria(req: Request, res: Response) {
        try {
            const response = await PdvSangria.updatePdvSangria(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deletePdvSangria(req: Request, res: Response) {
        try {
            const response = await PdvSangria.deletePdvSangria(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new PdvSangriaController();