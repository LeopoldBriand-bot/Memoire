import { Request, Response, Router } from "express";
export const testRouter = Router();

testRouter.get("/", async (req: Request, res: Response) => {
    try {
      res.status(200).send({message: "API working"});
    } catch (e) {
      res.status(500).send(e.message);
    }
});