import { Router } from "express";
import { feedbackController } from "../controllers";
import {
  jwtMiddleware,
  validatePermission,
  validateRequestBody,
} from "../middlewares";
const { checkPermission } = validatePermission;
const { addFeedback, reply, getAllFeedbacks, getAllReplyByFeedbackId } =
  feedbackController;
const { validateFeedbackData, validateReplyData } = validateRequestBody;
export const feedbackRoute = Router();
const baseUrl = "/api/v1/feedbacks";
feedbackRoute.use(`${baseUrl}`, jwtMiddleware);
feedbackRoute.route(`${baseUrl}`).get(checkPermission("FEEDBACK", "View"));
feedbackRoute
  .route(`${baseUrl}`)
  .post(
    checkPermission("FEEDBACK", "Create"),
    validateFeedbackData,
    addFeedback
  );
feedbackRoute
  .route(`${baseUrl}/reply`)
  .post(checkPermission("FEEDBACK", "Create"), validateReplyData, reply);
feedbackRoute
  .route(`${baseUrl}/reply/:feedbackId`)
  .get(getAllReplyByFeedbackId);
feedbackRoute
  .route(`${baseUrl}/:foodId`)
  .get(checkPermission("FEEDBACK", "View"), getAllFeedbacks);
