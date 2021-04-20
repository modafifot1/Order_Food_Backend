import { envVariables } from "../configs";
import { Food } from "../models/FoodModel";
import { uploadSingle } from "../configs";
import createHttpError from "http-errors";
import Mongoose from "mongoose";
import { Feedback } from "../models/FeedbackModel";
const { perPage } = envVariables;
/**
 * @api {get} /api/v1/food?page= Get food per page
 * @apiName Get food per page
 * @apiGroup Food
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization: Bearer AAA.BBB.CCC"
 * @apiSuccess {Number} status <code> 200 </code>
 * @apiSuccess {String} msg <code>get list food per page successfully</code> if everything went fine.
 * @apiSuccess {Array} foods <code> List food per page <code>
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 200 OK
 *     {
 *         status: 200,
 *         msg: "get list food successfully!",
 *         foods:[
 *       {
 *           "_id": "6076c317ebb733360805137a",
 *           "typeId": 1,
 *           "name": "Orange juice",
 *           "unitPrice": 40000,
 *           "imageUrl": "https://res.cloudinary.com/dacnpm17n2/image/upload/v1618395927/syp4cyw7tjzxddyr8xxd.png",
 *           "createAt": "2021-04-14T10:25:27.376Z",
 *           "numOfStars": 3,
 *           "numOfFeedback": 1,
 *           "__v": 0
 *       }
 *  ]
 *     }
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400
 *     {
 *       "status" : 400,
 *       "msg": "Role is invalid"
 *     }
 */
const getListFoodPerPage = async (req, res, next) => {
  try {
    const page = req.query.page || 1;
    console.log(page);
    const start = (page - 1) * perPage;
    const foods = await Food.find({}).skip(start).limit(perPage);
    res.status(200).json({
      status: 200,
      msg: "Get foods successfully!",
      foods,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
/**
 * @api {get} /api/v1/foods/:foodId Get food by foodId
 * @apiName Get food by foodId
 * @apiGroup Food
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization: Bearer AAA.BBB.CCC"
 * @apiSuccess {Number} status <code> 200 </code>
 * @apiSuccess {String} msg <code>get food by id successfully</code> if everything went fine.
 * @apiSuccess {ObjecId} _id food's id
 * @apiSuccess {int} typeId food's typeId
 * @apiSuccess {string} name food's name
 * @apiSuccess {int} unitPrice food's unitPrice
 * @apiSuceess {string} imageUrl link of food image
 * @apiSuccess {double} numOfStars rate of food
 * @apiSuccess {object} feedbacks <code> List feedbacks <code>
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 200 OK
 *     {
 *         status: 201,
 *         msg: "get food successfully!",
 *         "_id": "6076c317ebb733360805137a",
 *         "typeId": 1,
 *         "name": "Orange juice",
 *         "unitPrice": 40000,
 *         "imageUrl": "https://res.cloudinary.com/dacnpm17n2/image/upload/v1618395927/syp4cyw7tjzxddyr8xxd.png",
 *         "createAt": "2021-04-14T10:25:27.376Z",
 *         "numOfStars": 3,
 *         "numOfFeedback": 1,
 *          "feedbacks": [
 *            {
 *              "_id": "607bb68228b9b81957c0aa3c",
 *              "foodId": "6076c317ebb733360805137a",
 *              "userId": "607bb6af8bdfa84b56021b57",
 *              "numOfStars": 3,
 *              "content": ""
 *            }
 *   ]
 *     }
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400
 *     {
 *       "status" : 400,
 *       "msg": "Role is invalid"
 *     }
 */
const getFoodById = async (req, res, next) => {
  try {
    const foodId = req.params.foodId;
    console.log("FoodId :", foodId);
    // const food = await Food.findById(foodId);
    const result = await Promise.all([
      Food.findById(foodId),
      Feedback.find({ foodId: foodId }).limit(5),
    ]);
    const food = result[0];
    const feedbacks = result[1];
    res.status(200).json({
      status: 200,
      msg: "Get food successfully!",
      ...food._doc,
      feedbacks,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
/**
 * @api {get} /api/v1/foods/:foodType/?page= Get food by foodType
 * @apiName Get food by foodType
 * @apiGroup Food
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization: Bearer AAA.BBB.CCC"
 * @apiSuccess {Number} status <code> 200 </code>
 * @apiSuccess {String} msg <code>get list food per page successfully</code> if everything went fine.
 * @apiSuccess {Array} foods <code> List food per page <code>
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 200 OK
 *     {
 *         status: 200,
 *         msg: "get list food successfully!",
 *         foods:[
 *          {
 *           "_id": "6076c317ebb733360805137a",
 *           "typeId": 1,
 *           "name": "Orange juice",
 *           "unitPrice": 40000,
 *           "imageUrl": "https://res.cloudinary.com/dacnpm17n2/image/upload/v1618395927/syp4cyw7tjzxddyr8xxd.png",
 *           "createAt": "2021-04-14T10:25:27.376Z",
 *           "numOfStars": 3,
 *           "numOfFeedback": 1,
 *           "__v": 0
 *          }
 *          ]
 *     }
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400
 *     {
 *       "status" : 400,
 *       "msg": "Role is invalid"
 *     }
 */
const getFoodByFoodType = async (req, res, next) => {
  try {
    const foodType = req.params.foodType;
    const page = req.query.page;
    const start = (page - 1) * perPage;
    const foods = await Food.find({ typeId: foodType })
      .skip(start)
      .limit(perPage);
    res.status(200).json({
      status: 200,
      msg: "Get list foood by foodType successfully",
      foods,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
/**
 * @api {post} /api/v1/foods Create new food
 * @apiName Create new food
 * @apiGroup Food
 * @apiParam {file} image food's image
 * @apiParam {int} typeId foodType 1-food, 2-drink
 * @apiParam {string} name food's name
 * @apiParam {int} unitPrice food's unitPricemust be greater than 0
 * @apiParam {int} discountOff food's discountOff. Not required and value between 0-100 (curentcy = %)
 * @apiParam {int} discountMaximum food's discountMaximum. Not required
 * @apiParam {string} description food's description. Not required
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization: Bearer AAA.BBB.CCC"
 * @apiSuccess {Number} status <code> 201 </code>
 * @apiSuccess {String} msg <code>create food successfully</code> if everything went fine.
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 201 OK
 *     {
 *         status: 201,
 *         msg: "Create food successfully!",
 *     }
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400
 *     {
 *       "status" : 400,
 *       "msg": "Role is invalid"
 *     }
 */
const createNewFood = async (req, res, next) => {
  try {
    const {
      typeId,
      name,
      unitPrice,
      discountOff,
      description,
      discountMaximum,
    } = req.body;
    console.log(req.files[0].path);
    const image = await uploadSingle(req.files[0].path);
    const newFood = await Food.create({
      typeId,
      name,
      unitPrice,
      imageUrl: image.url,
      discountOff,
      description,
      discountMaximum,
    });
    console.log(image.url);
    res.status(201).json({
      status: 201,
      msg: "Create new food successfully!",
      newFood,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
/**
 * @api {put} /api/v1/foods/:foodId Update food by foodId
 * @apiName Update food by foodId
 * @apiGroup Food
 * @apiParam {int} typeId foodType 1-food, 2-drink
 * @apiParam {string} name food's name
 * @apiParam {int} unitPrice food's unitPricemust be greater than 0
 * @apiParam {int} discountOff food's discountOff. Not required and value between 0-100 (curentcy = %)
 * @apiParam {int} discountMaximum food's discountMaximum. Not required
 * @apiParam {string} description food's description. Not required
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization: Bearer AAA.BBB.CCC"
 * @apiSuccess {Number} status <code> 200 </code>
 * @apiSuccess {String} msg <code>Update food successfully</code> if everything went fine.
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 200 OK
 *     {
 *         status: 201,
 *         msg: "Update food successfully!",
 *     }
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400
 *     {
 *       "status" : 400,
 *       "msg": "Role is invalid"
 *     }
 */
const updateFoodById = async (req, res, next) => {
  try {
    const {
      name,
      unitPrice,
      typeId,
      discountOff,
      description,
      discountMaximum,
    } = req.body;
    console.log(req.body);
    const foodId = req.params.foodId;
    const existedFood = await Food.findById(foodId);
    if (!existedFood) {
      throw createHttpError(404, "food id not exist!");
    }
    const newFood = await Food.findByIdAndUpdate(foodId, {
      name,
      unitPrice,
      typeId,
      discountOff,
      description,
      discountMaximum,
    });
    res.status(200).json({
      status: 200,
      msg: "Update food successfully!",
      food: newFood,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
/**
 * @api {delete} /api/v1/foods/:foodId Delete food by foodId
 * @apiName Delete food by foodId
 * @apiGroup Food
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization: Bearer AAA.BBB.CCC"
 * @apiSuccess {Number} status <code> 200 </code>
 * @apiSuccess {String} msg <code>Delete food successfully</code> if everything went fine.
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 200 OK
 *     {
 *         status: 201,
 *         msg: "Delete food successfully!",
 *     }
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400
 *     {
 *       "status" : 400,
 *       "msg": "Role is invalid"
 *     }
 */
const deleteFoodById = async (req, res, next) => {
  try {
    const foodId = req.params.foodId;
    const existedFood = await Food.findById(foodId);
    if (!existedFood) {
      throw createHttpError(404, "Food is not found");
    }
    await Food.findByIdAndRemove(foodId);
    res.status(200).json({
      status: 200,
      msg: "Delete food successfully!",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const foodController = {
  getListFoodPerPage,
  getFoodById,
  createNewFood,
  updateFoodById,
  deleteFoodById,
  getFoodByFoodType,
};
