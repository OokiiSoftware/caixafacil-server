import { Request, Response } from "express";
import Empresa from "../services/empresa_serice";

class EmpresaController {
    async getAll(req: Request, res: Response) {
        try {
            const response = await Empresa.getAll();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new EmpresaController();