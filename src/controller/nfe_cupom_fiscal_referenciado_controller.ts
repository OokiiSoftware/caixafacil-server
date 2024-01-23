import { Request, Response } from "express";
import NfeCupomFiscalReferenciado from "../services/nfe_cupom_fiscal_referenciado_service";

class NfeCupomFiscalReferenciadoController {
    
    async getListNfeCupomFiscalReferenciado(req: Request, res: Response) {
        try {
            const response = await NfeCupomFiscalReferenciado.getListNfeCupomFiscalReferenciado();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeCupomFiscalReferenciadoById(req: Request, res: Response) {
        try {
            const response = await NfeCupomFiscalReferenciado.getNfeCupomFiscalReferenciadoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeCupomFiscalReferenciado(req: Request, res: Response) {
        try {
            const response = await NfeCupomFiscalReferenciado.insertNfeCupomFiscalReferenciado(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeCupomFiscalReferenciado(req: Request, res: Response) {
        try {
            const response = await NfeCupomFiscalReferenciado.updateNfeCupomFiscalReferenciado(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeCupomFiscalReferenciado(req: Request, res: Response) {
        try {
            const response = await NfeCupomFiscalReferenciado.deleteNfeCupomFiscalReferenciado(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeCupomFiscalReferenciadoController();