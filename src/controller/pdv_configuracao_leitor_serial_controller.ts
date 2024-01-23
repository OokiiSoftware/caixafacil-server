import { Request, Response } from "express";
import PdvConfiguracaoLeitorSerial from "../services/pdv_configuracao_leitor_serial_service";

class PdvConfiguracaoLeitorSerialController {
    
    async getListPdvConfiguracaoLeitorSerial(req: Request, res: Response) {
        try {
            const response = await PdvConfiguracaoLeitorSerial.getListPdvConfiguracaoLeitorSerial();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getPdvConfiguracaoLeitorSerialById(req: Request, res: Response) {
        try {
            const response = await PdvConfiguracaoLeitorSerial.getPdvConfiguracaoLeitorSerialById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertPdvConfiguracaoLeitorSerial(req: Request, res: Response) {
        try {
            const response = await PdvConfiguracaoLeitorSerial.insertPdvConfiguracaoLeitorSerial(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updatePdvConfiguracaoLeitorSerial(req: Request, res: Response) {
        try {
            const response = await PdvConfiguracaoLeitorSerial.updatePdvConfiguracaoLeitorSerial(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deletePdvConfiguracaoLeitorSerial(req: Request, res: Response) {
        try {
            const response = await PdvConfiguracaoLeitorSerial.deletePdvConfiguracaoLeitorSerial(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new PdvConfiguracaoLeitorSerialController();