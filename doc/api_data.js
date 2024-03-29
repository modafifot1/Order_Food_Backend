define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/admin/foods/:foodId",
    "title": "Confirm food when create new one",
    "name": "Confirm_food_when_create_new_one",
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
            "description": "<p><code> Confirm successully</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Confirm successully!\",\n}",
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
        "url": "http://127.0.0.1:3000/api/v1/admin/foods/:foodId"
      }
    ]
  },
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
            "description": "<p><code>Get list employee successfully!</code> if everything went fine.</p>"
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
    "url": "/api/v1/admin/foods",
    "title": "Get list of food to confirm",
    "name": "Get_list_of_food_to_confirm",
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
            "description": "<p><code>Get list food successfully</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "foods",
            "description": "<p><code> Array foods which need confirming </code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Get list food successfully!\",\n    \"foods\": [\n        {\n            \"confirmed\": false,\n            \"_id\": \"607d81b6e141e742289e2ecf\",\n            \"typeId\": 1,\n            \"name\": \"Gà sốt me\",\n            \"unitPrice\": 50000,\n            \"imageUrl\": \"https://res.cloudinary.com/dacnpm17n2/image/upload/v1618837943/qrqsf3qukvlsnzslfry2.jpg\",\n            \"createAt\": \"2021-04-19T13:12:22.475Z\",\n            \"__v\": 0\n        }\n    ]\n}",
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
        "url": "http://127.0.0.1:3000/api/v1/admin/foods"
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
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Get permissions by userId successfully!\",\n    \"listPermissons\": {\n        \"USER_PROFILE\": [\n            {\n                \"_id\": \"606318bbae23812268265f03\",\n                \"action\": \"Edit\",\n                \"license\": 1\n            },\n            {\n                \"_id\": \"606318bbae23812268265f04\",\n                \"action\": \"View\",\n                \"license\": 1\n            }\n        ],\n        \"CHANGE_PASSWORD\": [\n            {\n                \"_id\": \"606318bbae23812268265f05\",\n                \"action\": \"Edit\",\n                \"license\": 1\n            }\n        ],\n        \"FORGOT_PASSWORD\": [\n            {\n                \"_id\": \"606318bbae23812268265f06\",\n                \"action\": \"Edit\",\n                \"license\": 1\n            }\n        ],\n     }\n}",
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
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Get permissions by roleId successfully!\",\n    \"listPermissons\": {\n        \"USER_PROFILE\": [\n            {\n                \"_id\": \"606318bbae23812268265f03\",\n                \"action\": \"Edit\",\n                \"license\": 1\n            },\n            {\n                \"_id\": \"606318bbae23812268265f04\",\n                \"action\": \"View\",\n                \"license\": 1\n            }\n        ],\n        \"CHANGE_PASSWORD\": [\n            {\n                \"_id\": \"606318bbae23812268265f05\",\n                \"action\": \"Edit\",\n                \"license\": 1\n            }\n        ],\n        \"FORGOT_PASSWORD\": [\n            {\n                \"_id\": \"606318bbae23812268265f06\",\n                \"action\": \"Edit\",\n                \"license\": 1\n            }\n        ],\n     }\n}",
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
    "type": "get",
    "url": "/api/v1/admin/revenues/day?day=",
    "title": "Get revenue by day",
    "name": "Get_revenue_by_day",
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
            "description": "<p><code> Get revenue by day successfully!</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "revenues",
            "description": "<p>key-hour of day, value-revenue of hour(Only return the hours have revenue &gt; 0 )</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    \"msg\": \"Get revenue by day successfully!\",\n    \"revenues\": {\n        \"17\": 245000\n    }\n}",
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
        "url": "http://127.0.0.1:3000/api/v1/admin/revenues/day?day="
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/admin/revenues/months?month=&&year=",
    "title": "Get revenue by month",
    "name": "Get_revenue_by_month",
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
            "description": "<p><code> Get revenue by month successfully!</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "revenues",
            "description": "<p>key-day in month, value-revenue of day(Only return the days have revenue &gt; 0 )</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    \"msg\": \"Get revenue by month successfully!\",\n     \"revenues\": {\n        \"27\": 245000,\n        \"28\": 70000\n    }\n}",
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
        "url": "http://127.0.0.1:3000/api/v1/admin/revenues/months?month=&&year="
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/admin/revenues/quaters?quater=&&year=",
    "title": "Get revenue by quater",
    "name": "Get_revenue_by_quater",
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
            "description": "<p><code>Get revenue by quater successfully!</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "revenues",
            "description": "<p>key-month in quater, value-revenue of month(Only return the months have revenue &gt; 0 )</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    \"msg\": \"Get revenue by quater successfully!\",\n    \"revenues\": {\n        \"4\": 245000,\n        \"5\": 70000\n    }\n}",
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
        "url": "http://127.0.0.1:3000/api/v1/admin/revenues/quaters?quater=&&year="
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/admin/revenues/years?year=",
    "title": "Get revenue by year",
    "name": "Get_revenue_by_year",
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
            "description": "<p><code> Get revenue by year successfully!</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "revenues",
            "description": "<p>key-month in year, value-revenue of month(Only return the months have revenue &gt; 0 )</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    \"msg\": \"Get revenue by year successfully!\",\n      \"revenues\": {\n        \"4\": 315000\n    }\n}",
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
        "url": "http://127.0.0.1:3000/api/v1/admin/revenues/years?year="
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
    "type": "put",
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
    "url": "/api/v1/admin/permissions/:roleId?applying=",
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
        "url": "http://127.0.0.1:3000/api/v1/admin/permissions/:roleId?applying="
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
    "url": "/api/v1/auth/new-password",
    "title": "Reset password when forgot",
    "name": "Reset_password_when_forgot",
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
            "field": "newPassword",
            "description": "<p>New password for account</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>Confirm password is required matching with new password</p>"
          },
          {
            "group": "Parameter",
            "type": "email",
            "optional": false,
            "field": "code",
            "description": "<p>The code for reseting password. Check in email box.</p>"
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
            "description": "<p><code>Reset password successfully</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Reset password successfully\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\":  Reset code is invalid!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/authController.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/auth/new-password"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/v1/auth/send-reset-code",
    "title": "Send code to reset passsword",
    "name": "Send_code_to_reset_passsword",
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
            "description": "<p><code>Send reset code successfully!. Please check your email.</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Send reset code successfully!. Please check your email.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\": email is invalid!\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/authController.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/auth/send-reset-code"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/v1/auth/change-password",
    "title": "Change password",
    "name": "change_password",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>current password of account</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>New password for changing passsword</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>Required matching with new password</p>"
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
            "description": "<p><code>Change password successfully</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Change password successfully\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\":  \"Old password is incorrect!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/authController.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/auth/change-password"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/auth/roleId",
    "title": "get roleId",
    "name": "get_roleId",
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
            "description": "<p><code>get roleId successfully</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"get roleId successfully\",\n     roleId: 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n  \"status\" : 400,\n  \"msg\":  \"token is invalid!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/authController.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/auth/roleId"
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
            "description": "<p>food's Id required when add one item</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "quantity",
            "description": "<p>quantity food required when add one Item</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "cartItems",
            "description": "<p>key-_itemId, value-quantity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param example",
          "content": "{\n     cartItems:\n       {\n         \"607faeb5d35ea403f0328a38\": 3,\n       }\n\n}",
          "type": "json"
        }
      ]
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
    "url": "/api/v1/carts",
    "title": "Delete cart item",
    "name": "Delete_cart_item",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "cartItems",
            "description": "<p>list id of cart item id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "param example",
          "content": "{\n   \"cartItems\" :[\n       \"607faeb5d35ea403f0328a38\"\n   ]\n}",
          "type": "json"
        }
      ]
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
        "url": "http://127.0.0.1:3000/api/v1/carts"
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
    "url": "/api/v1/carts",
    "title": "Update cart item",
    "name": "Update_cart_item",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "cartItems",
            "description": "<p>key-_itemId, value-quantity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param example",
          "content": "{\n     cartItems:\n       {\n         \"607faeb5d35ea403f0328a38\": 3,\n       }\n\n}",
          "type": "json"
        }
      ]
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
        "url": "http://127.0.0.1:3000/api/v1/carts"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/v1/feedbacks",
    "title": "Add feebback",
    "name": "Add_feebback",
    "group": "Feedback",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "foodId",
            "description": "<p>Food's foodId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>feedback's content</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "numOfStars",
            "description": "<p>feedback's numOfStars</p>"
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
            "description": "<p><code>Add feedback successfully!</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 201 OK\n{\n    status: 201,\n    msg: \"Add feedback successfully!\",\n}",
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
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/feedbackController.js",
    "groupTitle": "Feedback",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/feedbacks"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/feedbacks/:foodId",
    "title": "Get all feebbacks",
    "name": "Get_all_feebbacks",
    "group": "Feedback",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "foodId",
            "description": "<p>Food's id</p>"
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
            "description": "<p><code>Get all feedbacks successfully!</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Get all feedbacks successfully!\",\n    feedbacks: [\n          {\n              \"_id\": \"607bb68228b9b81957c0aa3c\",\n              \"userName\": \"Nguyen Van B\",\n              \"content\": \"\",\n              \"numOfStars\": 3,\n              \"reply\": [\n                  {\n                      \"_id\": \"6093f7772d771f2db023aa7b\",\n                      \"userName\": \"Viet Huynh\",\n                      \"content\": \"Đánh giá 5 sao\",\n                      \"createAt\": \"2021-05-06T14:04:39.726Z\"\n                  }\n              ]\n          },\n          {\n              \"_id\": \"6086337c692e3429b8b8a37a\",\n              \"userName\": \"Nguyen Van B\",\n              \"content\": \"Đồ ăn rất ngon\",\n              \"numOfStars\": 4,\n              \"createAt\": \"2021-04-26T03:29:00.439Z\",\n              \"reply\": [\n                  {\n                      \"_id\": \"60863bd9168d1d075cc6226c\",\n                      \"userName\": \"Nguyen Van B\",\n                      \"content\": \"Đồ ăn rất ngon. Đã mua lần 2\",\n                      \"createAt\": \"2021-04-26T04:04:41.143Z\"\n                  }\n              ]\n          }\n      ]\n}",
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
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/feedbackController.js",
    "groupTitle": "Feedback",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/feedbacks/:foodId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/v1/feedbacks/reply",
    "title": "Reply feebback",
    "name": "Reply_feebback",
    "group": "Feedback",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "feedbackId",
            "description": "<p>Feedback's feedbackId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>reply's content</p>"
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
            "description": "<p><code>reply feedback successfully!</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 201 OK\n{\n    status: 201,\n    msg: \"reply feedback successfully!\",\n}",
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
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/feedbackController.js",
    "groupTitle": "Feedback",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/feedbacks/reply"
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
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Delete food successfully!\",\n}",
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
    "url": "/api/v1/foods/search/filter?page=&&unitPrice=&&numOfStars=&&foodType=&&searchText=",
    "title": "Filter food by unitPrice and numOfStars",
    "name": "Filter_food_by_unitPrice_and_numOfStars,_foodType",
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
            "description": "<p><code>Filter food successfully</code> if everything went fine.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "foods",
            "description": "<p><code> List of food found</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 201,\n    \"msg\": \"Filter food successfully!\",\n      \"foods\": [\n          {\n              \"confirmed\": false,\n              \"_id\": \"607d81b6e141e742289e2ecf\",\n              \"typeId\": 1,\n              \"name\": \"Gà sốt me\",\n              \"unitPrice\": 50000,\n              \"imageUrl\": \"https://res.cloudinary.com/dacnpm17n2/image/upload/v1618837943/qrqsf3qukvlsnzslfry2.jpg\",\n              \"createAt\": \"2021-04-19T13:12:22.475Z\",\n              \"__v\": 0,\n              \"score\": 1.5\n          },\n          {\n              \"confirmed\": true,\n              \"_id\": \"607d8194e141e742289e2ece\",\n              \"typeId\": 1,\n              \"name\": \"Gà sốt phô mai\",\n              \"unitPrice\": 65000,\n              \"imageUrl\": \"https://res.cloudinary.com/dacnpm17n2/image/upload/v1618837909/inb8toi2piizugdinrzp.png\",\n              \"createAt\": \"2021-04-19T13:11:48.964Z\",\n              \"__v\": 0,\n              \"score\": 1.25\n          },\n     ]\n}",
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
        "url": "http://127.0.0.1:3000/api/v1/foods/search/filter?page=&&unitPrice=&&numOfStars=&&foodType=&&searchText="
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
    "url": "/api/v1/foods/foodType/:foodType/?page=",
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
        "url": "http://127.0.0.1:3000/api/v1/foods/foodType/:foodType/?page="
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
    "type": "post",
    "url": "/api/v1/foods/search",
    "title": "Search food by name",
    "name": "Search_food_by_name",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchText",
            "description": "<p>search string</p>"
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
            "description": "<p><code>Seacrh food successfully</code> if everything went fine.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "foods",
            "description": "<p><code> List of food found</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 201,\n    \"msg\": \"Search food successfully!\",\n      \"foods\": [\n          {\n              \"confirmed\": false,\n              \"_id\": \"607d81b6e141e742289e2ecf\",\n              \"typeId\": 1,\n              \"name\": \"Gà sốt me\",\n              \"unitPrice\": 50000,\n              \"imageUrl\": \"https://res.cloudinary.com/dacnpm17n2/image/upload/v1618837943/qrqsf3qukvlsnzslfry2.jpg\",\n              \"createAt\": \"2021-04-19T13:12:22.475Z\",\n              \"__v\": 0,\n              \"score\": 1.5\n          },\n          {\n              \"confirmed\": true,\n              \"_id\": \"607d8194e141e742289e2ece\",\n              \"typeId\": 1,\n              \"name\": \"Gà sốt phô mai\",\n              \"unitPrice\": 65000,\n              \"imageUrl\": \"https://res.cloudinary.com/dacnpm17n2/image/upload/v1618837909/inb8toi2piizugdinrzp.png\",\n              \"createAt\": \"2021-04-19T13:11:48.964Z\",\n              \"__v\": 0,\n              \"score\": 1.25\n          },\n          {\n              \"confirmed\": true,\n              \"_id\": \"607d8172e141e742289e2ecd\",\n              \"typeId\": 1,\n              \"name\": \"Đùi gà\",\n              \"unitPrice\": 60000,\n              \"imageUrl\": \"https://res.cloudinary.com/dacnpm17n2/image/upload/v1618837875/yddc5hcfzu0i5iqimvbf.jpg\",\n              \"createAt\": \"2021-04-19T13:11:14.894Z\",\n              \"__v\": 0,\n              \"score\": 0.75\n          }\n     ]\n}",
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
        "url": "http://127.0.0.1:3000/api/v1/foods/search"
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
    "type": "delete",
    "url": "/api/v1/orders/:orderId",
    "title": "Cancel order",
    "name": "Cancel_order",
    "group": "Order",
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
            "description": "<p><code>Cancel order successfully</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 201 OK\n   {\n      \"status\": 200,\n      \"msg\": \"Cancel order successfully!\",\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n     \"msg\": \"You can only cancel the order if don't over 5 minutes from ordering\",\n     \"status\": 400\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/orderController.js",
    "groupTitle": "Order",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/orders/:orderId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/v1/orders",
    "title": "Create new order",
    "name": "Create_new_order",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>customer's address</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "cartItems",
            "description": "<p>list id of cart items in order</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paymentMethod",
            "description": "<p>The way user can pay for order</p>"
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
            "description": "<p><code>Create new order successfully</code> if everything went fine.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "shipmentFee",
            "description": "<p>the shipment fee of order</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "merchandiseSubtotal",
            "description": "<p>The total of merchandise</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "paymentMethod",
            "description": "<p>The way user can pay for order</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "distance",
            "description": "<p>The distance between two locations</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n   {\n      \"status\": 200,\n      \"msg\": \"Create new order successfully!\",\n  }",
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
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/orderController.js",
    "groupTitle": "Order",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/orders"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/orders",
    "title": "Get list order by userId",
    "name": "Get_list_order",
    "group": "Order",
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
            "description": "<p><code>Get list orders sucessfully</code> if everything went fine.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "cartItems",
            "description": "<p><code> List the orders <code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n   {\n      \"status\": 200,\n      \"msg\": \"Get list order sucessfully!\",\n      \"orders\": [\n          {\n              \"_id\": \"607ee38c5061c506d4604111\",\n              \"customerId\": \"607b99348f2d3500151f091d\",\n              \"address\": \"62/07 Đồng Kè, Liên Chiểu, Đà Năng\",\n              \"total\": 278000,\n              \"statusId\": 0,\n              \"createAt\": \"2021-04-20T14:22:04.994Z\",\n              \"__v\": 0\n          },\n          {\n              \"_id\": \"607f895a5e06da3054bacbc3\",\n              \"customerId\": \"607b99348f2d3500151f091d\",\n              \"address\": \"Hue\",\n              \"total\": 128000,\n              \"statusId\": 0,\n              \"createAt\": \"2021-04-21T02:09:30.509Z\",\n              \"__v\": 0\n          }\n      ]\n  }",
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
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/orderController.js",
    "groupTitle": "Order",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/orders"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/orders/statuses/:statusId",
    "title": "Get list order by statusId",
    "name": "Get_list_order_by_statusId",
    "group": "Order",
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
            "description": "<p><code>Get list orders by statusId sucessfully</code> if everything went fine.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "orders",
            "description": "<p><code> List the orders <code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n   {\n      \"status\": 200,\n      \"msg\": \"Get list orders by statusId sucessfully!\",\n      \"orders\": [\n          {\n              \"_id\": \"6091ff398fe1960015a75a59\",\n              \"address\": \"472 Điện Biên Phủ, Thanh Khê Đông, Thanh Khê, Đà Nẵng\",\n              \"statusId\": 0,\n              \"paymentMethod\": \"COD\",\n              \"merchandiseSubtotal\": 255000,\n              \"shipmentFee\": 10000,\n              \"total\": 265000,\n              \"createAt\": \"2021-05-05T02:13:13.376Z\",\n              \"customerName\": \"Tiến Ngô Văn\",\n              \"phoneNumber\": \"0888071782\",\n              \"paymentCode\": \"n2zi2gTy\" // return if statusId = 2\n          },\n          {\n              \"_id\": \"609205998fe1960015a75a62\",\n              \"address\": \"472 Điện Biên Phủ, Thanh Khê Đông, Thanh Khê, Đà Nẵng\",\n              \"statusId\": 0,\n              \"paymentMethod\": \"COD\",\n              \"merchandiseSubtotal\": 445000,\n              \"shipmentFee\": 10000,\n              \"total\": 455000,\n              \"createAt\": \"2021-05-05T02:40:25.818Z\",\n              \"customerName\": \"Tiến Ngô Văn\",\n              \"phoneNumber\": \"0888071782\",\n              \"paymentCode\": \"n2zi2gTy\" // return if statusId = 2\n          },\n          {\n              \"_id\": \"60925fa26e204d001532c997\",\n              \"address\": \"472 Điện Biên Phủ, Thanh Khê Đông, Thanh Khê, Đà Nẵng\",\n              \"statusId\": 0,\n              \"paymentMethod\": \"COD\",\n              \"merchandiseSubtotal\": 190000,\n              \"shipmentFee\": 10000,\n              \"total\": 200000,\n              \"createAt\": \"2021-05-05T09:04:34.095Z\",\n              \"customerName\": \"Tiến Ngô Văn\",\n              \"phoneNumber\": \"0888071782\",\n              \"paymentCode\": \"n2zi2gTy\" // return if statusId = 2\n          },\n          {\n              \"_id\": \"60925fc46e204d001532c99b\",\n              \"address\": \"472 Điện Biên Phủ, Thanh Khê Đông, Thanh Khê, Đà Nẵng\",\n              \"statusId\": 0,\n              \"paymentMethod\": \"COD\",\n              \"merchandiseSubtotal\": 120000,\n              \"shipmentFee\": 10000,\n              \"total\": 130000,\n              \"createAt\": \"2021-05-05T09:05:08.835Z\",\n              \"customerName\": \"Tiến Ngô Văn\",\n              \"phoneNumber\": \"0888071782\"\n              \"paymentCode\": \"n2zi2gTy\" // return if statusId = 2\n          }\n      ],\n   shippers:[ // return if status Id =1\n       {\n         _id: \"\",\n         fullName: \"\",\n         phoneNumber: \"\",\n       }\n   ]\n  }",
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
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/orderController.js",
    "groupTitle": "Order",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/orders/statuses/:statusId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/orders/:orderId",
    "title": "Get order by orderId",
    "name": "Get_order_by_orderId",
    "group": "Order",
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
            "description": "<p><code>Get list orders sucessfully</code> if everything went fine.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>order's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>customer's address</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "total",
            "description": "<p>order's total price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderStatus",
            "description": "<p>order's status</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createAt",
            "description": "<p>purchase date</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "orderItems",
            "description": "<p>List object of order items</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "cartItems",
            "description": "<p><code> List the orders <code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "{\n    \"status\": 200,\n    \"msg\": \"Get order successfully!\",\n    \"_id\": \"607ee38c5061c506d4604111\",\n    \"address\": \"62/07 Đồng Kè, Liên Chiểu, Đà Năng\",\n    \"total\": 278000,\n    \"orderStatus\": \"Chờ xác nhận\",\n    \"createAt\": \"2021-04-20T14:22:04.994Z\",\n    \"orderItems\": [\n        {\n            \"_id\": \"607ee38d5061c506d4604112\",\n            \"quantity\": 4,\n            \"foodId\": \"6076c317ebb733360805137a\",\n            \"name\": \"Orange juice\",\n            \"unitPrice\": 40000,\n            \"discountOff\": 20\n        },\n        {\n            \"_id\": \"607ee38d5061c506d4604113\",\n            \"quantity\": 3,\n            \"foodId\": \"607d81b6e141e742289e2ecf\",\n            \"name\": \"Gà sốt me\",\n            \"unitPrice\": 50000\n        }\n    ]\n}",
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
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/orderController.js",
    "groupTitle": "Order",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/orders/:orderId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/v1/orders/purchase",
    "title": "Purchase order",
    "name": "Purchase_order",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>customer's address</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "cartItems",
            "description": "<p>list id of cart items in order</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paymentMethod",
            "description": "<p>The way user can pay for order</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "shipmentFee",
            "description": "<p>The shiment fee of order</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "merchandiseSubtotal",
            "description": "<p>the total of merchandise</p>"
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
            "description": "<p><code>Create Purchase successfully</code> if everything went fine.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>id of new order</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 201 OK\n   {\n      \"status\": 201,\n      \"msg\": \"Purchase successfully!\",\n      \"orderId\": \"id\"\n  }",
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
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/orderController.js",
    "groupTitle": "Order",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/orders/purchase"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/v1/orders/:orderId/statuses",
    "title": "Update order Status",
    "name": "Update_order_status",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>must be required when customer paid order.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shipperId",
            "description": "<p>must be required when shipOrerStatus(tranfer from status 1-&gt;2)</p>"
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
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": " HTTP/1.1 200 OK when confirm order\n    {\n       \"status\": 200,\n       \"msg\": \"Confirm successfully!\",\n   }\nHTTP/1.1 200 OK when ship order\n    {\n        \"status\": 200,\n        \"msg\": \"Tranfer to ship purchase successfully!\"\n    }\nHTTP/1.1 200 OK when paid order\n    {\n        \"status\": 200,\n        \"msg\": \"Pay for order successfully!\"\n    }\nHTTP/1.1 200 OK when Comfirm paid order\n    {\n        \"status\": 200,\n        \"msg\": \"Confirm paid order successfully!\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400\n{\n     \"msg\": \"You can only cancel the order if don't over 5 minutes from ordering\",\n     \"status\": 400\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/orderController.js",
    "groupTitle": "Order",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/orders/:orderId/statuses"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/v1/profile/avatar/:userId",
    "title": "Update avatar by userId",
    "name": "Update_avatar_by_userId",
    "group": "Profile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "avatar",
            "description": "<p>file avatar of user</p>"
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
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>The image url of avatar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 201 OK\n{\n    status: 200,\n    msg: \"update profile successfully!\",\n    imageUrl: \"https://res.cloudinary.com/dacnpm17n2/image/upload/v1619077426/wyfrh0tmxlydidvfyujn.jpg\"\n}",
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
        "url": "http://127.0.0.1:3000/api/v1/profile/avatar/:userId"
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
  },
  {
    "type": "post",
    "url": "/api/v1/shippers",
    "title": "Create a new shipper",
    "name": "Create_a_new_eployees",
    "group": "Shipper",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>shipper's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>shipper's phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>shipper's birthday</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>shipper's address</p>"
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
            "description": "<p><code>Create an shipper successfully!</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 201 OK\n{\n    status: 201,\n    msg: \"Create an shipper successfully!\"\n}",
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
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/shipperController.js",
    "groupTitle": "Shipper",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/shippers"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/v1/shippers/:shipperId",
    "title": "Delete shipper",
    "name": "Delete_shipper",
    "group": "Shipper",
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
            "description": "<p><code>Delete shipper successfully!</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Delete shipper successfully!\"\n}",
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
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/shipperController.js",
    "groupTitle": "Shipper",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/shippers/:shipperId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/shippers",
    "title": "Get list shippers",
    "name": "Get_list_shippers",
    "group": "Shipper",
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
            "description": "<p><code>get list shippers successfully!</code> if everything went fine.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "shippers",
            "description": "<p><code> List of shippers</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"get list shippers successfully!\",\n    shippers: [\n     {\n      \"_id\": \"6090c7583b9d9331b4e08bf2\",\n      \"status\": \"Rảnh\",\n      \"fullName\": \"Lê Văn Tùng\",\n      \"phoneNumber\": \"0336646997\",\n      \"address\": \"32 Nguyễn Lương Bằng, Liên Chiểu, Đà Nẵng\",\n      \"birthday\": \"1998-06-28T17:00:00.000Z\"\n     }\n   ]\n}",
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
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/shipperController.js",
    "groupTitle": "Shipper",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/shippers"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/v1/shippers/:shipperId",
    "title": "Update shipper's Information",
    "name": "Update_shipper's_Information",
    "group": "Shipper",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>shipper's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>shipper's phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>shipper's birthday</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>shipper's address</p>"
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
            "description": "<p><code>Update an shipper successfully!</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    msg: \"Update an shipper successfully!\"\n}",
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
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/shipperController.js",
    "groupTitle": "Shipper",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/shippers/:shipperId"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/v1/wishlist/:foodId",
    "title": "Delete an item of wishlist",
    "name": "Delete_an_item_of_wishlist",
    "group": "Wishlist",
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
            "description": "<p><code>Delete an item of wishlist successfully</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n  status: 200,\n  \"msg\": \"Delete an item of wishlist successfully!\",\n}",
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
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/wishlistController.js",
    "groupTitle": "Wishlist",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/wishlist/:foodId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/wishlist",
    "title": "Get wishlist of customer",
    "name": "Get_wishlist_of_customer",
    "group": "Wishlist",
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
            "description": "<p><code>Get wishlist successfully!</code> if everything went fine.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>The Id of wishlist</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "wishlist",
            "description": "<p>the Array foods of wishlist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n  status: 200,\n  \"msg\": \"Get wishlist successfully!\",\n  \"_id\": \"6088d77c2b587d62dbc1237b\",\n  \"wishlist\": [\n      {\n          \"_id\": \"6076c317ebb733360805137a\",\n          \"typeId\": 2,\n          \"name\": \"Orange juice\",\n          \"unitPrice\": 40000,\n          \"imageUrl\": \"https://res.cloudinary.com/dacnpm17n2/image/upload/v1618395927/syp4cyw7tjzxddyr8xxd.png\",\n          \"createAt\": \"2021-04-14T10:25:27.376Z\",\n          \"numOfStars\": 4,\n          \"numOfFeedbacks\": 2,\n          \"confirmed\": true,\n          \"__v\": 0,\n          \"discountOff\": 20\n      },\n      {\n          \"_id\": \"607d8172e141e742289e2ecd\",\n          \"typeId\": 1,\n          \"name\": \"Đùi gà\",\n          \"unitPrice\": 60000,\n          \"imageUrl\": \"https://res.cloudinary.com/dacnpm17n2/image/upload/v1618837875/yddc5hcfzu0i5iqimvbf.jpg\",\n          \"createAt\": \"2021-04-19T13:11:14.894Z\",\n          \"confirmed\": true,\n          \"__v\": 0\n      }\n  ]\n}",
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
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/wishlistController.js",
    "groupTitle": "Wishlist",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/wishlist"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/v1/wishlist",
    "title": "Update wishlist of customer (add or delete item)",
    "name": "Update_wishlist_of_customer_(add_or_delete_item)",
    "group": "Wishlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "foodId",
            "description": "<p>The id of food</p>"
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
            "description": "<p><code>Update wishlist successfully</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\n  status: 200,\n  \"msg\": \"Update wishlist successfully!\",\n}",
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
    "filename": "D:/Term2_2020-2021/DA_CNPM/src/backend/src/controllers/wishlistController.js",
    "groupTitle": "Wishlist",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/v1/wishlist"
      }
    ]
  }
] });
