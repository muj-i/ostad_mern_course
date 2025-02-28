import express from "express";
import * as UserController from "../app/controller/users_controller.js";
import AuthMiddleware from "../app/middlewares/auth_middleware.js";

const router = express.Router();

// user auth
router.post('/register', UserController.register);
router.post('/login', UserController.login);

// user profile
router.get('/profile', AuthMiddleware, UserController.profile);
router.post('/update-profile', AuthMiddleware, UserController.updateProfile);



export default router;
