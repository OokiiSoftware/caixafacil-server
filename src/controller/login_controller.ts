import { Request, Response } from "express";
import { Token } from "../util/JwToken";

class LoginController {
    async login(req: Request, res: Response) {
        try {
            const user = req.body.userId;
            const token = Token(user);

            res.status(200).json({
                'assessToken': token,
            });
        } catch(e) {

        }
    }
}

export default new LoginController();