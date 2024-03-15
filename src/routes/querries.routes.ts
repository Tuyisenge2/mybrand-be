import  express  from "express";
import querriesController from "../controllers/querries.controller";

const QuerriesRouter = express.Router();

QuerriesRouter.post("/querries",querriesController.newQuerries);

QuerriesRouter.get("/querries/:id",querriesController.singleQuerries)
                       
QuerriesRouter.get("/querries",querriesController.GetAllQuerries)

export default QuerriesRouter;