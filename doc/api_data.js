define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/admin/employees",
    "title": "Create a new employee",
    "name": "Create_a_new_eployees",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email's employee account</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password's employee account</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "roleId",
            "description": "<p>role's employee required value = 2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>name's employee</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phone's employee</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>birthday's employee</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 201 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>Regitser success</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 201 OK\n{\n    status: 201,\n    msg: \"Create an employee successfully!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Role is invalid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/adminController.js",
    "groupTitle": "Admin",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/admin/employees"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/v1/admin/employees/:employeeId",
    "title": "Delete an employee by id",
    "name": "Delete_an_employee",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "employeeId",
            "description": "<p>id's employee</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 200 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>Delete successfully</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Get an employee successfully!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/adminController.js",
    "groupTitle": "Admin",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/admin/employees/:employeeId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/admin/roles",
    "title": "Get all role of system",
    "name": "Get_all_role",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 200 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>get all role successfully</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "listRoles",
            "description": "<p><code> An array role </code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Get an employee successfully!\",\n    listRoles: [\n     {\n       \"_id\": \"605be446ddf39f2daf48b701\",\n       \"id\": 1,\n       \"roleName\": \"customer\"\n      },\n      {\n       \"_id\": \"605be482ddf39f2daf48b702\",\n       \"id\": 0,\n       \"roleName\": \"admin\"\n       }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/adminController.js",
    "groupTitle": "Admin",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/admin/roles"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/admin/users",
    "title": "Get all users",
    "name": "Get_all_user",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 200 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>update permissions successfully</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "listUsers",
            "description": "<p><code> An array of users </code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Update permissions by roleId successfully!\",\n    listUsers: [\n        {\n            \"_id\": \"6062e0988b0140276c76269e\",\n            \"roleId\": [\n                2\n            ],\n            \"email\": \"employee2@gmail.com\",\n            \"password\": \"$2a$12$zitmHHPzp/LYBwGnfgRqVOGn7Amp/8zphXLAN0/TCSgtexCl6TlLG\",\n            \"userDetail\": [\n                {\n                    \"_id\": \"6062e0988b0140276c76269f\",\n                    \"userId\": \"6062e0988b0140276c76269e\",\n                    \"fullName\": \"Nguyen van B\",\n                    \"phoneNumber\": \"0325656596\",\n                    \"birthday\": \"1999-02-04T17:00:00.000Z\",\n                    \"__v\": 0\n                }\n            ]\n        },\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/adminController.js",
    "groupTitle": "Admin",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/admin/users"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/admin/employees/:employeeId",
    "title": "Get an employee by id",
    "name": "Get_an_employee",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 200 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>Regitser success</code> if everything went fine.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "employee",
            "description": "<p><code> An employee </code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Get an employee successfully!\",\n    employee: {\n         _id: \"6020bd895d7a6b07b0b0eef9\",\n         email: \"nqp260699@gmail.com\",\n         roleId: 1,\n         \"fullName\": \"Nguyen van A\",\n         \"phoneNumber\": \"0325656596\",\n         \"birthday\": \"1999-02-04T17:00:00.000Z\",\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/adminController.js",
    "groupTitle": "Admin",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/admin/employees/:employeeId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/admin/employees",
    "title": "Get list employees",
    "name": "Get_list_employees",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 200 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>Regitser success</code> if everything went fine.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "listEmployees",
            "description": "<p><code> List of eployees</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Get list employee successfully!\",\n    listEmployees: [\n     {\n     \"_id\": \"6076c201228fe14534c3ca4a\",\n      \"email\": \"employees1@gmail.com\",\n      \"roleId\": 2,\n      \"fullName\": \"Nguyen Van B\",\n      \"phoneNumber\": \"03566382356\",\n      \"birthday\": \"1999-04-27T17:00:00.000Z\"\n     }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/adminController.js",
    "groupTitle": "Admin",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/admin/employees"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/admin/users/:userId/permissions",
    "title": "Get permissions by userId",
    "name": "Get_permission_by_userId",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>id of user</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 200 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>Get permissions successfully</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "listPermissions",
            "description": "<p><code> An array permissions of user </code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Get permissions by userId successfully!\",\n    listPermissions: [\n     {\n          \"roleId\": 2,\n          \"permissionId\": \"606318bbae23812268265f03\",\n          \"name\": \"USER_PROFILE\",\n          \"action\": \"Edit\",\n          \"license\": 0\n      },\n      {\n          \"roleId\": 2,\n          \"permissionId\": \"606318bbae23812268265f04\",\n          \"name\": \"USER_PROFILE\",\n          \"action\": \"View\",\n          \"license\": 0\n      },\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/adminController.js",
    "groupTitle": "Admin",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/admin/users/:userId/permissions"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/admin/permissions/:roleId",
    "title": "Get permission by roleId",
    "name": "Get_permissions",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "roleId",
            "description": "<p>id's role</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 200 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>get permissions successfully</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "listPermissions",
            "description": "<p><code> An array permissions </code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Get permissions by roleId successfully!\",\n    listPermissions: [\n     {\n      \"_id\": \"606318bbae23812268265ef0\",\n      \"name\": \"EMPLOYEE\",\n      \"action\": \"Edit\",\n      \"__v\": 0,\n      \"license\": 0 // 0 -is not allowed\n     },\n     {\n      \"_id\": \"606318bbae23812268265f03\",\n      \"name\": \"USER_PROFILE\",\n      \"action\": \"Edit\",\n      \"__v\": 0,\n      \"license\": 1 // 1-is allowed\n     },\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/adminController.js",
    "groupTitle": "Admin",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/admin/permissions/:roleId"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/v1/admin/employees/:employeeId",
    "title": "Update a employee",
    "name": "Update_a_eployees",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "employeeId",
            "description": "<p>id's employee</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email's employee</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password's employee</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "role",
            "description": "<p>role's employee require value = 2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>name's employee</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phone's employee</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>birthday's employee</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 201 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>Update successfully</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 201 OK\n{\n    status: 201,\n    msg: \"Update an employee successfully!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Role is invalid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/adminController.js",
    "groupTitle": "Admin",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/admin/employees/:employeeId"
      }
    ]
  },
  {
    "type": "pat",
    "url": "/api/v1/admin/users/:userId/permissions",
    "title": "Update permissions by userId",
    "name": "Update_permission_by_userId",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>id of user</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "permissions",
            "description": "<p>this is permissions is checked</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 200 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>Update permissions successfully</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Update permissions by userId successfully!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/adminController.js",
    "groupTitle": "Admin",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/admin/users/:userId/permissions"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/v1/admin/permissions/:roleId",
    "title": "Update permission by roleId",
    "name": "Update_permissions",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "roleId",
            "description": "<p>id's role</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "permissions",
            "description": "<p>an array of permissionId which is checked</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 200 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>update permissions successfully</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Update permissions by roleId successfully!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/adminController.js",
    "groupTitle": "Admin",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/admin/permissions/:roleId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/v1/auth/login",
    "title": "login for all users",
    "name": "Login_for_all_users",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email's user account</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password's user account</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p><code> 200</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>Login success</code> if everything went fine.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p><code>Token of user </code></p>"
          },
          {
            "group": "Success 200",
            "type": "Array[Int]",
            "optional": false,
            "field": "roleId",
            "description": "<p><code> An array role of user </code></p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Login is success\",\n    roleId: [1],\n    token: \"xxx.xxx.xxx\",\n    userId:\"605a06776c02022ab46cc160\",\n    imageUrl:\"211d2s12c3fsf3s2df\",\n    fullName: \"Nguyen Quang Phieu\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\":  userName or password is incorrect!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/authController.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/auth/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/v1/auth/logout",
    "title": "Logout for all user",
    "name": "Logout_for_all_user",
    "group": "Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 200 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>Logoutsuccessfully</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Logout successfully!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/authController.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/auth/logout"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/v1/auth/register-customer",
    "title": "register for customer",
    "name": "Register_for_customer",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email's customer account</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password's customer account</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "roleID",
            "description": "<p>role's customer require &quot;customer&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>name's customer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phone's customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>birthday's customer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address's customer</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>Regitser success</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Regitser is success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"\\\"role\\\" is required\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/authController.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/auth/register-customer"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/v1/carts",
    "title": "Add cart item",
    "name": "Add_cart_item",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "foodId",
            "description": "<p>food's Id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "quantity",
            "description": "<p>quantity food</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 200 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>Add cart item successfully</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Add cart item successfully!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Role is invalid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/cartController.js",
    "groupTitle": "Cart",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/carts"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/v1/carts/:itemId",
    "title": "Delete cart item",
    "name": "Delete_cart_item",
    "group": "Cart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 200 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>Delete cart item successfully</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Delete cart item successfully!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Role is invalid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/cartController.js",
    "groupTitle": "Cart",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/carts/:itemId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/carts",
    "title": "Get cart item",
    "name": "Get_cart_item",
    "group": "Cart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 200 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>get list cart item successfully</code> if everything went fine.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "cartItems",
            "description": "<p><code> List cart item page <code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"get list cart item successfully!\",\n    \"cartItems\": [\n       {\n       \"_id\": \"607d3e2a8ce6ab317096a869\",\n       \"foodId\": \"6076c317ebb733360805137a\",\n       \"quantity\": 4,\n       \"name\": \"Orange juice\",\n       \"unitPrice\": 40000,\n       \"imageUrl\": \"https://res.cloudinary.com/dacnpm17n2/image/upload/v1618395927/syp4cyw7tjzxddyr8xxd.png\"\n       }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Role is invalid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/cartController.js",
    "groupTitle": "Cart",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/carts"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/v1/carts/:itemId",
    "title": "Update cart item by id",
    "name": "Update_cart_item_by_Id",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "quantity",
            "description": "<p>quantity food</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 200 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>Update cart item successfully</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Update cart item successfully!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Role is invalid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/cartController.js",
    "groupTitle": "Cart",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/carts/:itemId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/v1/foods",
    "title": "Create new food",
    "name": "Create_new_food",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "image",
            "description": "<p>food's image</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "typeId",
            "description": "<p>foodType 1-food, 2-drink</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>food's name</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "unitPrice",
            "description": "<p>food's unitPricemust be greater than 0</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "discountOff",
            "description": "<p>food's discountOff. Not required and value between 0-100 (curentcy = %)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "discountMaximum",
            "description": "<p>food's discountMaximum. Not required</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>food's description. Not required</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 201 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>create food successfully</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 201 OK\n{\n    status: 201,\n    msg: \"Create food successfully!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Role is invalid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/foodController.js",
    "groupTitle": "Food",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/foods"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/v1/foods/:foodId",
    "title": "Delete food by foodId",
    "name": "Delete_food_by_foodId",
    "group": "Food",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 200 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>Delete food successfully</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 201,\n    msg: \"Delete food successfully!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Role is invalid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/foodController.js",
    "groupTitle": "Food",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/foods/:foodId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/foods/:foodId",
    "title": "Get food by foodId",
    "name": "Get_food_by_foodId",
    "group": "Food",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 200 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>get food by id successfully</code> if everything went fine.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjecId",
            "optional": false,
            "field": "_id",
            "description": "<p>food's id</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "typeId",
            "description": "<p>food's typeId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>food's name</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "unitPrice",
            "description": "<p>food's unitPrice</p>"
          },
          {
            "group": "Success 200",
            "type": "double",
            "optional": false,
            "field": "numOfStars",
            "description": "<p>rate of food</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "feedbacks",
            "description": "<p><code> List feedbacks <code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "  HTTP/1.1 200 OK\n  {\n      status: 201,\n      msg: \"get food successfully!\",\n      \"_id\": \"6076c317ebb733360805137a\",\n      \"typeId\": 1,\n      \"name\": \"Orange juice\",\n      \"unitPrice\": 40000,\n      \"imageUrl\": \"https://res.cloudinary.com/dacnpm17n2/image/upload/v1618395927/syp4cyw7tjzxddyr8xxd.png\",\n      \"createAt\": \"2021-04-14T10:25:27.376Z\",\n      \"numOfStars\": 3,\n      \"numOfFeedback\": 1,\n       \"feedbacks\": [\n         {\n           \"_id\": \"607bb68228b9b81957c0aa3c\",\n           \"foodId\": \"6076c317ebb733360805137a\",\n           \"userId\": \"607bb6af8bdfa84b56021b57\",\n           \"numOfStars\": 3,\n           \"content\": \"\"\n         }\n]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Role is invalid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/foodController.js",
    "groupTitle": "Food",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/foods/:foodId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/foods/:foodType/?page=",
    "title": "Get food by foodType",
    "name": "Get_food_by_foodType",
    "group": "Food",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 200 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>get list food per page successfully</code> if everything went fine.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "foods",
            "description": "<p><code> List food per page <code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"get list food successfully!\",\n    foods:[\n     {\n      \"_id\": \"6076c317ebb733360805137a\",\n      \"typeId\": 1,\n      \"name\": \"Orange juice\",\n      \"unitPrice\": 40000,\n      \"imageUrl\": \"https://res.cloudinary.com/dacnpm17n2/image/upload/v1618395927/syp4cyw7tjzxddyr8xxd.png\",\n      \"createAt\": \"2021-04-14T10:25:27.376Z\",\n      \"numOfStars\": 3,\n      \"numOfFeedback\": 1,\n      \"__v\": 0\n     }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Role is invalid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/foodController.js",
    "groupTitle": "Food",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/foods/:foodType/?page="
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/food?page=",
    "title": "Get food per page",
    "name": "Get_food_per_page",
    "group": "Food",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 200 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>get list food per page successfully</code> if everything went fine.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "foods",
            "description": "<p><code> List food per page <code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "   HTTP/1.1 200 OK\n   {\n       status: 200,\n       msg: \"get list food successfully!\",\n       foods:[\n     {\n         \"_id\": \"6076c317ebb733360805137a\",\n         \"typeId\": 1,\n         \"name\": \"Orange juice\",\n         \"unitPrice\": 40000,\n         \"imageUrl\": \"https://res.cloudinary.com/dacnpm17n2/image/upload/v1618395927/syp4cyw7tjzxddyr8xxd.png\",\n         \"createAt\": \"2021-04-14T10:25:27.376Z\",\n         \"numOfStars\": 3,\n         \"numOfFeedback\": 1,\n         \"__v\": 0\n     }\n]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Role is invalid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/foodController.js",
    "groupTitle": "Food",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/food?page="
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/v1/foods/:foodId",
    "title": "Update food by foodId",
    "name": "Update_food_by_foodId",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "typeId",
            "description": "<p>foodType 1-food, 2-drink</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>food's name</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "unitPrice",
            "description": "<p>food's unitPricemust be greater than 0</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "discountOff",
            "description": "<p>food's discountOff. Not required and value between 0-100 (curentcy = %)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "discountMaximum",
            "description": "<p>food's discountMaximum. Not required</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>food's description. Not required</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 200 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>Update food successfully</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 201,\n    msg: \"Update food successfully!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Role is invalid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/foodController.js",
    "groupTitle": "Food",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/foods/:foodId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/profile/userId",
    "title": "get profile by userId",
    "name": "get_profile_by_userId",
    "group": "Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 200 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>get profile success</code> if everything went fine.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email's user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>fullName's user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phoneNumber's user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address's user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>birthday's</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 201 OK\n{\n    status: 200,\n    msg: \"update profile successfully!\",\n    \"email\": \"teo@gmail.com\",\n    \"userId\": \"607b99348f2d3500151f091d\",\n    \"fullName\": \"Nguyen Van B\",\n    \"phoneNumber\": \"03566382356\",\n    \"birthday\": \"1999-04-27T17:00:00.000Z\",\n    \"address\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Role is invalid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/profileController.js",
    "groupTitle": "Profile",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/profile/userId"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/v1/profile/userId",
    "title": "update profile by userId",
    "name": "update_profile_by_userId",
    "group": "Profile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>name's customer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phone's customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>birthday's customer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address's customer</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer AAA.BBB.CCC\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p><code> 200 </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p><code>Update profile success</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 201 OK\n{\n    status: 200,\n    msg: \"update profile successfully!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": \"Role is invalid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/profileController.js",
    "groupTitle": "Profile",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/profile/userId"
      }
    ]
  }
] });
