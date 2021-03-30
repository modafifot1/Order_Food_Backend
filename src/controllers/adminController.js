import createHttpError from "http-errors";
import bcrypt from "bcryptjs";
import { User, Permission, Role, RolePermission, UserDetail } from "../models";
import Mongoose from "mongoose";
//--------------------Managing employees---------------------------//

/**
 * @api {get} /api/v1/admin/employees Get list employees
 * @apiName Get list employees
 * @apiGroup Admin
 * @apiHeader {String} token The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization: Bearer AAA.BBB.CCC"
 * @apiSuccess {Number} status <code> 200 </code>
 * @apiSuccess {String} msg <code>Regitser success</code> if everything went fine.
 * @apiSuccess {Array} listEmployees <code> An array list of employees </code>
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 200 OK
 *     {
 *         status: 200,
 *         msg: "Get list employee successfully!",
 *         listEmployees: [object1, object2, ...]
 *     }
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400
 *     {
 *       "status" : 400,
 *       "msg": "Not found"
 *     }
 */
const getListEmployees = async (req, res, next) => {
  try {
    const employeeRole = await Role.findOne({ roleName: "employee" });
    const listEmployees = await User.aggregate([
      {
        $lookup: {
          from: "UserDetail",
          localField: "_id",
          foreignField: "userId",
          as: "userDetail",
        },
      },
      {
        $match: {
          roleId: employeeRole.id,
        },
      },
    ]);
    // const listEmployees = await User.find({ roleId: employeeRole.id });
    res.status(200).json({
      status: 200,
      msg: "Get list employee successfully!",
      listEmployees,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
/**
 * @api {post} /api/v1/admin/employees Create a new employee
 * @apiName Create a new eployees
 * @apiGroup Admin
 * @apiParam {String} email email's employee account
 * @apiParam {String} password password's employee account
 * @apiParam {Int} role role's employee require "employee"
 * @apiParam {String} fullName name's employee
 * @apiParam {String} phoneNumber phone's employee
 * @apiParam {Date} birthday birthday's employee
 * @apiHeader {String} token The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization: Bearer AAA.BBB.CCC"
 * @apiSuccess {Number} status <code> 201 </code>
 * @apiSuccess {String} msg <code>Regitser success</code> if everything went fine.
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 201 OK
 *     {
 *         status: 201,
 *         msg: "Create an employee successfully!"
 *     }
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400
 *     {
 *       "status" : 400,
 *       "msg": "Role is invalid"
 *     }
 */
const createNewEmployee = async (req, res, next) => {
  const { email, password, roleId, fullName, phoneNumber, birthday } = req.body;
  try {
    const userExisted = await User.findOne({ email });
    if (userExisted) {
      throw createHttpError(400, "This email is used by others!");
    }
    // Check role
    // const checkRole = Role.findOne({ id: roleId });
    // if (!checkRole||checkRole.id != roleemployee.id) {
    //   throw createHttpError(401,"Role is invalid");
    // }
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      email,
      password: hashPassword,
      roleId: [roleId],
    });

    await UserDetail.create({
      userId: newUser._id,
      fullName,
      phoneNumber,
      birthday: new Date(birthday),
    });
    res.status(201).json({
      status: 201,
      msg: "Create a new employee successfully!",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
/**
 * @api {get} /api/v1/admin/employees/:employeeId Get an employee by id
 * @apiName Get an employee
 * @apiGroup Admin
 * @apiHeader {String} token The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization: Bearer AAA.BBB.CCC"
 * @apiSuccess {Number} status <code> 200 </code>
 * @apiSuccess {String} msg <code>Regitser success</code> if everything went fine.
 * @apiSuccess {Object} employee <code> An employee </code>
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 200 OK
 *     {
 *         status: 200,
 *         msg: "Get an employee successfully!",
 *         employee: {
 *              _id: "6020bd895d7a6b07b0b0eef9",
 *              email: "nqp260699@gmail.com",
 *              password: "sds54545602sdsd0bd8sds95d7a6b07b0b0eef9",
 *              roleId: 1,
 *              "userDetail": [
 *                  {
 *                      "_id": "6062d14bf3541b39146c0206",
 *                       "userId": "6062d14bf3541b39146c0205",
 *                      "fullName": "Nguyen van A",
 *                      "phoneNumber": "0325656596",
 *                       "birthday": "1999-02-04T17:00:00.000Z",
 *                       "__v": 0
 *                   }
 *               ]
 *         }
 *     }
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400
 *     {
 *       "status" : 400,
 *       "msg": "Not found"
 *     }
 */
const getEmpployeeById = async (req, res, next) => {
  try {
    const employeeId = req.params.employeeId;
    const employee = await User.aggregate([
      {
        $lookup: {
          from: "UserDetail",
          localField: "_id",
          foreignField: "userId",
          as: "userDetail",
        },
      },
      {
        $match: {
          _id: Mongoose.Types.ObjectId(employeeId),
        },
      },
    ]);
    if (!employee) {
      throw createHttpError(400, "employeeId is not exist!");
    }
    res.status(200).json({
      status: 200,
      msg: "Get an employee successfully!",
      employee: employee[0],
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
/**
 * @api {put} /api/v1/admin/employees/:employeeId Update a employee
 * @apiName Update a eployees
 * @apiGroup Admin
 * @apiParam {String} employeeId id's employee
 * @apiParam {String} email email's employee
 * @apiParam {String} password password's employee
 * @apiParam {Int} role role's employee require "employee"
 * @apiParam {String} fullName name's employee
 * @apiParam {String} phoneNumber phone's employee
 * @apiParam {Date} birthday birthday's employee
 * @apiHeader {String} token The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization: Bearer AAA.BBB.CCC"
 * @apiSuccess {Number} status <code> 201 </code>
 * @apiSuccess {String} msg <code>Update successfully</code> if everything went fine.
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 201 OK
 *     {
 *         status: 201,
 *         msg: "Update an employee successfully!"
 *     }
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400
 *     {
 *       "status" : 400,
 *       "msg": "Role is invalid"
 *     }
 */
const updateEmployeeById = async (req, res, next) => {
  try {
    const employeeId = req.params.employeeId;
    const {
      email,
      password,
      roleId,
      fullName,
      phoneNumber,
      birthday,
    } = req.body;
    const employee = await User.findByIdAndUpdate(employeeId, {
      email,
      password,
      roleId,
    });
    if (!employee) {
      throw createHttpError(400, "An employee is not exist!");
    }
    await UserDetail.findOneAndUpdate(
      { userId: employeeId },
      {
        fullName,
        phoneNumber,
        birthday: new Date(birthday),
      }
    );
    res.status(200).json({
      status: 200,
      msg: "Update an employee successfully!",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
/**
 * @api {delete} /api/v1/admin/employees/:employeeId Delete an employee by id
 * @apiName Delete an employee
 * @apiGroup Admin
 * @apiParam {String} employeeId id's employee
 * @apiHeader {String} token The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization: Bearer AAA.BBB.CCC"
 * @apiSuccess {Number} status <code> 200 </code>
 * @apiSuccess {String} msg <code>Delete successfully</code>
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 200 OK
 *     {
 *         status: 200,
 *         msg: "Get an employee successfully!",
 *     }
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400
 *     {
 *       "status" : 400,
 *       "msg": "Not found"
 *     }
 */
const deleteEmployeeById = async (req, res, next) => {
  try {
    const employeeId = req.params.employeeId;
    const employee = await Promise.all([
      User.findByIdAndDelete(employeeId),
      UserDetail.findOneAndDelete({ userId: employeeId }),
    ]);
    console.log(JSON.stringify(employee));
    if (!employee) {
      throw createHttpError(400, "An employee is not exist!");
    }
    res.status(200).json({
      status: 200,
      msg: "Delete an employee successfully!",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
/**
 * @api {get} /api/v1/admin/roles Get all role of system
 * @apiName Get all role
 * @apiGroup Admin
 * @apiHeader {String} token The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization: Bearer AAA.BBB.CCC"
 * @apiSuccess {Number} status <code> 200 </code>
 * @apiSuccess {String} msg <code>get all role successfully</code>
 * @apiSuccess {Array} listRoles <code> An array role </code>
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 200 OK
 *     {
 *         status: 200,
 *         msg: "Get an employee successfully!",
 *         listRoles: [
 *          {
 *            "_id": "605be446ddf39f2daf48b701",
 *            "id": 1,
 *            "roleName": "customer"
 *           },
 *           {
 *            "_id": "605be482ddf39f2daf48b702",
 *            "id": 0,
 *            "roleName": "admin"
 *            }
 *          ]
 *     }
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400
 *     {
 *       "status" : 400,
 *       "msg": "Not found"
 *     }
 */
const getAllRoles = async (req, res, next) => {
  try {
    const listRoles = await Role.find({});
    res.status(200).json({
      status: 200,
      msg: "Get list role successfully!",
      listRoles,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
/**
 * @api {get} /api/v1/admin/permissions/:roleId Get permission by roleId
 * @apiName Get permissions
 * @apiGroup Admin
 * @apiParam {number} roleId id's role
 * @apiHeader {String} token The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization: Bearer AAA.BBB.CCC"
 * @apiSuccess {Number} status <code> 200 </code>
 * @apiSuccess {String} msg <code>get permissions successfully</code>
 * @apiSuccess {Array} listPermissions <code> An array permissions </code>
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 200 OK
 *     {
 *         status: 200,
 *         msg: "Get permissions by roleId successfully!",
 *         listPermissions: [
 *          {
 *           "_id": "606318bbae23812268265ef0",
 *           "name": "EMPLOYEE",
 *           "action": "Edit",
 *           "__v": 0,
 *           "license": 0 // 0 -is not allowed
 *          },
 *          {
 *           "_id": "606318bbae23812268265f03",
 *           "name": "USER_PROFILE",
 *           "action": "Edit",
 *           "__v": 0,
 *           "license": 1 // 1-is allowed
 *          },
 *         ]
 *     }
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400
 *     {
 *       "status" : 400,
 *       "msg": "Not found"
 *     }
 */
const getPermissionsByRoleId = async (req, res, next) => {
  try {
    const roleId = req.params.roleId;
    const allPermissions = await Permission.find({});
    const rolePermissions = await RolePermission.find({ roleId });
    const listPermissionId = rolePermissions.map((x) => String(x.permissionId));
    const listPermissions = allPermissions.map((x) => {
      let license = 0;
      if (listPermissionId.includes(String(x._id))) {
        license = 1;
      }
      return {
        ...x._doc,
        license,
      };
    });
    res.status(200).json({
      status: 200,
      msg: "Get list permissions of role successfully!",
      listPermissions,
    });
    console.log("all: " + typeof allPermissions[0]._id);
    console.log(
      "license: " +
        typeof listPermissionId[0] +
        JSON.stringify(listPermissionId)
    );
  } catch (error) {
    console.log(error);
    next(error);
  }
};
/**
 * @api {put} /api/v1/admin/permissions/:roleId Update permission by roleId
 * @apiName Update permissions
 * @apiGroup Admin
 * @apiParam {number} roleId id's role
 * @apiParam {Array} permissions an array of permissionId which is checked
 * @apiHeader {String} token The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization: Bearer AAA.BBB.CCC"
 * @apiSuccess {Number} status <code> 200 </code>
 * @apiSuccess {String} msg <code>update permissions successfully</code>
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 200 OK
 *     {
 *         status: 200,
 *         msg: "Update permissions by roleId successfully!",
 *     }
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400
 *     {
 *       "status" : 400,
 *       "msg": "Not found"
 *     }
 */
const updatePermissionsByRoleId = async (req, res, next) => {
  try {
    const roleId = req.params.roleId;
    let permissions = await RolePermission.find({ roleId });
    permissions = permissions.map((x) => String(x.permissionId));
    const updatePermissions = req.body.permissions;
    const addPermissions = updatePermissions.filter(
      (x) => !permissions.includes(x)
    );
    const delPermissions = permissions.filter(
      (x) => !updatePermissions.includes(x)
    );
    await RolePermission.insertMany(
      addPermissions.map((x) => {
        return {
          roleId,
          permissionId: x,
        };
      })
    );
    await RolePermission.deleteMany({
      permissionId: delPermissions,
    });
    const applying = req.query.applying;
    if (applying == 1) {
      console.log("true");
    } else {
      console.log("false");
    }
    res.status(200).json({
      status: 200,
      msg: "Update permissions of role successfully!",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const adminController = {
  createNewEmployee,
  getListEmployees,
  getEmpployeeById,
  updateEmployeeById,
  deleteEmployeeById,
  getAllRoles,
  getPermissionsByRoleId,
  updatePermissionsByRoleId,
};
