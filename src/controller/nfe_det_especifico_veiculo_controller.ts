import { Request, Response } from "express";
import NfeDetEspecificoVeiculo from "../services/nfe_det_especifico_veiculo_service";

class NfeDetEspecificoVeiculoController {
    
    async getListNfeDetEspecificoVeiculo(req: Request, res: Response) {
        try {
            const response = await NfeDetEspecificoVeiculo.getListNfeDetEspecificoVeiculo();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeDetEspecificoVeiculoById(req: Request, res: Response) {
        try {
            const response = await NfeDetEspecificoVeiculo.getNfeDetEspecificoVeiculoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeDetEspecificoVeiculo(req: Request, res: Response) {
        try {
            const response = await NfeDetEspecificoVeiculo.insertNfeDetEspecificoVeiculo(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeDetEspecificoVeiculo(req: Request, res: Response) {
        try {
            const response = await NfeDetEspecificoVeiculo.updateNfeDetEspecificoVeiculo(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeDetEspecificoVeiculo(req: Request, res: Response) {
        try {
            const response = await NfeDetEspecificoVeiculo.deleteNfeDetEspecificoVeiculo(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeDetEspecificoVeiculoController();