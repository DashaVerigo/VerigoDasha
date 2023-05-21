/** @format */

import { Router } from "express";
import UserController from "../controllers/userController";
import TypeApartmentsCreate from "../controllers/typeApartmentsController";
import ApartmentsCreate from "../controllers/apartmentsController";
import CommentsCreate from "../controllers/commentsController";
import auth from "../middleware/authMiddleware";
import role from "../middleware/checkRoleMiddleware";

const router = Router();

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.get("/check", auth, UserController.check);

router.post("/createType", role, TypeApartmentsCreate.create);
router.get("/getAllType", TypeApartmentsCreate.getAll);
router.delete("/deleteType", TypeApartmentsCreate.delete);

router.post("/createApartments", role, ApartmentsCreate.create);
router.get("/getAllApartments", ApartmentsCreate.getAll);
router.get("/getOneApartments", ApartmentsCreate.getOne);
router.put("/updateApartments", ApartmentsCreate.update);
router.delete("/deleteApartments", ApartmentsCreate.delete);

router.post("/createComments", CommentsCreate.create);
router.get("/getAllComments", CommentsCreate.getAll);
router.get("/geOneComments", CommentsCreate.getOne);
router.delete("/deleteComments", CommentsCreate.delete);

export default router;
