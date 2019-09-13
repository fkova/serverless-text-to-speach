module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/factories/response-factory.ts":
/*!*******************************************!*\
  !*** ./src/factories/response-factory.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass ResponseFactory {\r\n    static generateSuccessReaponse(data) {\r\n        return {\r\n            headers: {\r\n                'Access-Control-Allow-Origin': '*'\r\n            },\r\n            statusCode: 200,\r\n            body: JSON.stringify(data)\r\n        };\r\n    }\r\n}\r\nexports.ResponseFactory = ResponseFactory;\r\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UtZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mYWN0b3JpZXMvcmVzcG9uc2UtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQWEsZUFBZTtJQUN4QixNQUFNLENBQUMsdUJBQXVCLENBQUMsSUFBVTtRQUNyQyxPQUFPO1lBQ0gsT0FBTyxFQUFFO2dCQUNMLDZCQUE2QixFQUFFLEdBQUc7YUFDckM7WUFDRCxVQUFVLEVBQUUsR0FBRztZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUM3QixDQUFBO0lBQ0wsQ0FBQztDQUNKO0FBVkQsMENBVUMifQ==\n\n//# sourceURL=webpack:///./src/factories/response-factory.ts?");

/***/ }),

/***/ "./src/handlers/audio-convert-handler.ts":
/*!***********************************************!*\
  !*** ./src/handlers/audio-convert-handler.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst aws_sdk_1 = __importDefault(__webpack_require__(/*! aws-sdk */ \"aws-sdk\"));\r\nconst dynamodb_1 = __webpack_require__(/*! aws-sdk/clients/dynamodb */ \"aws-sdk/clients/dynamodb\");\r\nexports.default = (event) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const documentClient = new dynamodb_1.DocumentClient();\r\n    const polly = new aws_sdk_1.default.Polly();\r\n    const s3 = new aws_sdk_1.default.S3();\r\n    const postId = event[\"Records\"][0][\"Sns\"][\"Message\"];\r\n    const url = \"https://\" + process.env.BUCKET_NAME + \".s3.us-east-2.amazonaws.com/\" + postId + \".mp3\";\r\n    console.log(\"Text to Speech function. Post ID in DynamoDB: \" + postId);\r\n    const postItem = (yield documentClient.get({\r\n        TableName: process.env.DYNAMO_TABLE,\r\n        Key: {\r\n            id: postId\r\n        }\r\n    }).promise()).Item;\r\n    const text = postItem.text;\r\n    const voice = postItem.voice;\r\n    yield polly.synthesizeSpeech({\r\n        OutputFormat: 'mp3',\r\n        Text: text,\r\n        VoiceId: voice\r\n    }).promise().then((data) => __awaiter(void 0, void 0, void 0, function* () {\r\n        let s3params = {\r\n            Body: data.AudioStream,\r\n            Bucket: process.env.BUCKET_NAME,\r\n            Key: postId + \".mp3\",\r\n            ACL: \"public-read\"\r\n        };\r\n        console.log('synthesize completed');\r\n        yield s3.upload(s3params).promise()\r\n            .then(data => console.log('upload location: ' + data.Location))\r\n            .catch(err => console.log('error during upload: ' + err.message));\r\n    })).catch(err => console.log('err with synthesis' + err));\r\n    yield documentClient.update({\r\n        TableName: process.env.DYNAMO_TABLE,\r\n        Key: {\r\n            id: postId\r\n        },\r\n        UpdateExpression: 'set #statusAtt = :v, #urlAtt = :v2',\r\n        ExpressionAttributeValues: {\r\n            ':v': 'UPDATED', ':v2': url\r\n        },\r\n        ExpressionAttributeNames: {\r\n            '#statusAtt': 'status', '#urlAtt': 'url'\r\n        },\r\n        ReturnValues: 'UPDATED_NEW'\r\n    }).promise()\r\n        .then(res => console.log('updated ' + JSON.stringify(res)))\r\n        .catch(err => console.log('err ' + err));\r\n    return {\r\n        statusCode: 200\r\n    };\r\n});\r\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8tY29udmVydC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hhbmRsZXJzL2F1ZGlvLWNvbnZlcnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUEwQjtBQUMxQix1REFBMEQ7QUFFMUQsa0JBQWUsQ0FBTyxLQUFVLEVBQUUsRUFBRTtJQUNoQyxNQUFNLGNBQWMsR0FBRyxJQUFJLHlCQUFjLEVBQUUsQ0FBQztJQUM1QyxNQUFNLEtBQUssR0FBRyxJQUFJLGlCQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUIsTUFBTSxFQUFFLEdBQUcsSUFBSSxpQkFBRyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3hCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRCxNQUFNLEdBQUcsR0FBRyxVQUFVLEdBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUMsOEJBQThCLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUVoRyxPQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBRXZFLE1BQU0sUUFBUSxHQUFHLENBQUMsTUFBTSxjQUFjLENBQUMsR0FBRyxDQUFDO1FBQ3ZDLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVk7UUFDbkMsR0FBRyxFQUFFO1lBQ0QsRUFBRSxFQUFFLE1BQU07U0FDYjtLQUNKLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUVuQixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzNCLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFFN0IsTUFBTSxLQUFLLENBQUMsZ0JBQWdCLENBQUM7UUFDekIsWUFBWSxFQUFFLEtBQUs7UUFDbkIsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsS0FBSztLQUNqQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQU0sSUFBSSxFQUFDLEVBQUU7UUFDM0IsSUFBSSxRQUFRLEdBQUc7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDdEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVztZQUMvQixHQUFHLEVBQUUsTUFBTSxHQUFHLE1BQU07WUFDcEIsR0FBRyxFQUFFLGFBQWE7U0FDckIsQ0FBQztRQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUVwQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFO2FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFHdkQsTUFBTSxjQUFjLENBQUMsTUFBTSxDQUFDO1FBQ3hCLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVk7UUFDbkMsR0FBRyxFQUFFO1lBQ0QsRUFBRSxFQUFFLE1BQU07U0FDYjtRQUNELGdCQUFnQixFQUFFLG9DQUFvQztRQUN0RCx5QkFBeUIsRUFBRTtZQUN2QixJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHO1NBQzlCO1FBQ0Qsd0JBQXdCLEVBQUU7WUFDdEIsWUFBWSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSztTQUMzQztRQUNELFlBQVksRUFBRSxhQUFhO0tBQzlCLENBQUMsQ0FBQyxPQUFPLEVBQUU7U0FDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDMUQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUV4QyxPQUFPO1FBQ0gsVUFBVSxFQUFFLEdBQUc7S0FDbEIsQ0FBQTtBQUNMLENBQUMsQ0FBQSxDQUFDIn0=\n\n//# sourceURL=webpack:///./src/handlers/audio-convert-handler.ts?");

/***/ }),

/***/ "./src/handlers/get-post-handler.ts":
/*!******************************************!*\
  !*** ./src/handlers/get-post-handler.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst dynamodb_1 = __webpack_require__(/*! aws-sdk/clients/dynamodb */ \"aws-sdk/clients/dynamodb\");\r\nconst response_factory_1 = __webpack_require__(/*! ../factories/response-factory */ \"./src/factories/response-factory.ts\");\r\nexports.default = (event) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const dc = new dynamodb_1.DocumentClient();\r\n    const postId = event.pathParameters.id;\r\n    var items;\r\n    if (postId == \"*\") {\r\n        items = yield dc.scan({\r\n            TableName: process.env.DYNAMO_TABLE\r\n        }).promise();\r\n    }\r\n    else {\r\n        items = yield dc.get({\r\n            TableName: process.env.DYNAMO_TABLE,\r\n            Key: {\r\n                id: postId\r\n            }\r\n        }).promise();\r\n    }\r\n    return response_factory_1.ResponseFactory.generateSuccessReaponse(items);\r\n});\r\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXBvc3QtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oYW5kbGVycy9nZXQtcG9zdC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdURBQTBEO0FBRTFELG9FQUFnRTtBQUVoRSxrQkFBZSxDQUFPLEtBQXNCLEVBQUUsRUFBRTtJQUM1QyxNQUFNLEVBQUUsR0FBRyxJQUFJLHlCQUFjLEVBQUUsQ0FBQztJQUNoQyxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztJQUV2QyxJQUFJLEtBQUssQ0FBQztJQUVWLElBQUcsTUFBTSxJQUFJLEdBQUcsRUFBQztRQUNiLEtBQUssR0FBRyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDbEIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWTtTQUN0QyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDaEI7U0FBSTtRQUNELEtBQUssR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDakIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWTtZQUNuQyxHQUFHLEVBQUU7Z0JBQ0QsRUFBRSxFQUFFLE1BQU07YUFDYjtTQUNKLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNoQjtJQUVELE9BQU8sa0NBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxRCxDQUFDLENBQUEsQ0FBQyJ9\n\n//# sourceURL=webpack:///./src/handlers/get-post-handler.ts?");

/***/ }),

/***/ "./src/handlers/new-post-handler.ts":
/*!******************************************!*\
  !*** ./src/handlers/new-post-handler.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst aws_sdk_1 = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\r\nconst dynamodb_1 = __webpack_require__(/*! aws-sdk/clients/dynamodb */ \"aws-sdk/clients/dynamodb\");\r\nconst uuid_1 = __webpack_require__(/*! uuid */ \"uuid\");\r\nconst response_factory_1 = __webpack_require__(/*! ../factories/response-factory */ \"./src/factories/response-factory.ts\");\r\nconst documentClient = new dynamodb_1.DocumentClient();\r\nconst snsClient = new aws_sdk_1.SNS();\r\nexports.default = (event) => __awaiter(void 0, void 0, void 0, function* () {\r\n    console.log('Generating new DynamoDB record');\r\n    const recordId = uuid_1.v1();\r\n    const body = JSON.parse(event.body);\r\n    const voice = body.voice;\r\n    const text = body.text;\r\n    yield documentClient.put({\r\n        TableName: process.env.DYNAMO_TABLE,\r\n        Item: {\r\n            'id': recordId,\r\n            'text': text,\r\n            'voice': voice,\r\n            'status': 'PROCESSING'\r\n        }\r\n    }).promise().then(() => {\r\n        console.log('posted in db');\r\n    })\r\n        .catch((err) => {\r\n        console.log(err);\r\n    });\r\n    yield snsClient.publish({\r\n        Message: recordId,\r\n        TopicArn: process.env.SNS_TOPIC\r\n    }).promise();\r\n    return response_factory_1.ResponseFactory.generateSuccessReaponse();\r\n});\r\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXBvc3QtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oYW5kbGVycy9uZXctcG9zdC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBQThCO0FBQzlCLHVEQUEwRDtBQUMxRCwrQkFBa0M7QUFDbEMsb0VBQWdFO0FBRWhFLE1BQU0sY0FBYyxHQUFHLElBQUkseUJBQWMsRUFBRSxDQUFDO0FBQzVDLE1BQU0sU0FBUyxHQUFHLElBQUksYUFBRyxFQUFFLENBQUM7QUFFNUIsa0JBQWUsQ0FBTyxLQUFVLEVBQUUsRUFBRTtJQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFFOUMsTUFBTSxRQUFRLEdBQUcsU0FBSSxFQUFFLENBQUM7SUFDeEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN6QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBRXZCLE1BQU0sY0FBYyxDQUFDLEdBQUcsQ0FBQztRQUNqQixTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZO1FBQ25DLElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxRQUFRO1lBQ2QsTUFBTSxFQUFFLElBQUk7WUFDWixPQUFPLEVBQUUsS0FBSztZQUNkLFFBQVEsRUFBRSxZQUFZO1NBQ3pCO0tBQ1IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUMsRUFBRTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDaEIsT0FBTyxFQUFFLFFBQVE7UUFDakIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUztLQUNsQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFakIsT0FBTyxrQ0FBZSxDQUFDLHVCQUF1QixFQUFFLENBQUM7QUFDckQsQ0FBQyxDQUFBLENBQUMifQ==\n\n//# sourceURL=webpack:///./src/handlers/new-post-handler.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst new_post_handler_1 = __importDefault(__webpack_require__(/*! ./handlers/new-post-handler */ \"./src/handlers/new-post-handler.ts\"));\r\nconst get_post_handler_1 = __importDefault(__webpack_require__(/*! ./handlers/get-post-handler */ \"./src/handlers/get-post-handler.ts\"));\r\nconst audio_convert_handler_1 = __importDefault(__webpack_require__(/*! ./handlers/audio-convert-handler */ \"./src/handlers/audio-convert-handler.ts\"));\r\nexports.newPostLambda = new_post_handler_1.default;\r\nexports.getPostLambda = get_post_handler_1.default;\r\nexports.audioConverterLambda = audio_convert_handler_1.default;\r\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtRkFBd0U7QUFDeEUsbUZBQXdFO0FBQ3hFLDZGQUFpRjtBQUVwRSxRQUFBLGFBQWEsR0FBRywwQkFBYyxDQUFDO0FBQy9CLFFBQUEsYUFBYSxHQUFHLDBCQUFjLENBQUM7QUFDL0IsUUFBQSxvQkFBb0IsR0FBRywrQkFBa0IsQ0FBQyJ9\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");\n\n//# sourceURL=webpack:///external_%22aws-sdk%22?");

/***/ }),

/***/ "aws-sdk/clients/dynamodb":
/*!*******************************************!*\
  !*** external "aws-sdk/clients/dynamodb" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk/clients/dynamodb\");\n\n//# sourceURL=webpack:///external_%22aws-sdk/clients/dynamodb%22?");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");\n\n//# sourceURL=webpack:///external_%22uuid%22?");

/***/ })

/******/ });