import { Request, Response } from "express";
import NfeResponsavelTecnico from "../services/nfe_responsavel_tecnico_service";

class NfeResponsavelTecnicoController {
    
    async getListNfeResponsavelTecnico(req: Request, res: Response) {
        try {
            const response = await NfeResponsavelTecnico.getListNfeResponsavelTecnico();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeResponsavelTecnicoById(req: Request, res: Response) {
        try {
            const response = await NfeResponsavelTecnico.getNfeResponsavelTecnicoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeResponsavelTecnico(req: Request, res: Response) {
        try {
            const response = await NfeResponsavelTecnico.insertNfeResponsavelTecnico(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeResponsavelTecnico(req: Request, res: Response) {
        try {
            const response = await NfeResponsavelTecnico.updateNfeResponsavelTecnico(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeResponsavelTecnico(req: Request, res: Response) {
        try {
            const response = await NfeResponsavelTecnico.deleteNfeResponsavelTecnico(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeResponsavelTecnicoController();