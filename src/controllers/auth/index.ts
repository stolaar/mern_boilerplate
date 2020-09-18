import AuthService from "../../services/auth/AuthService";
import AuthController from "./AuthController";
import ValidationService from "../../services/validation/ValidationService";

const validationService = new ValidationService()
const authService = new AuthService(validationService)

const authController = new AuthController(authService)

export default authController
