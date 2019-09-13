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
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst dynamodb_1 = __webpack_require__(/*! aws-sdk/clients/dynamodb */ \"aws-sdk/clients/dynamodb\");\r\nexports.default = (event) => __awaiter(void 0, void 0, void 0, function* () {\r\n    console.log('event: ' + JSON.stringify(event, null, 2));\r\n    const dc = new dynamodb_1.DocumentClient();\r\n    const postId = event.pathParameters.id;\r\n    var items;\r\n    if (postId == \"*\") {\r\n        items = yield dc.scan({\r\n            TableName: process.env.DYNAMO_TABLE\r\n        }).promise();\r\n    }\r\n    else {\r\n        items = yield dc.get({\r\n            TableName: process.env.DYNAMO_TABLE,\r\n            Key: {\r\n                id: postId\r\n            }\r\n        }).promise();\r\n    }\r\n    console.log(items);\r\n    return {\r\n        headers: {\r\n            'Access-Control-Allow-Origin': '*'\r\n        },\r\n        statusCode: 200,\r\n        body: JSON.stringify(items)\r\n    };\r\n});\r\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXBvc3QtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oYW5kbGVycy9nZXQtcG9zdC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdURBQTBEO0FBRTFELGtCQUFlLENBQU8sS0FBVSxFQUFFLEVBQUU7SUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFcEQsTUFBTSxFQUFFLEdBQUcsSUFBSSx5QkFBYyxFQUFFLENBQUM7SUFDaEMsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7SUFDdkMsSUFBSSxLQUFLLENBQUM7SUFFVixJQUFHLE1BQU0sSUFBSSxHQUFHLEVBQUM7UUFDYixLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2xCLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVk7U0FDdEMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ2hCO1NBQUk7UUFDRCxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2pCLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVk7WUFDbkMsR0FBRyxFQUFFO2dCQUNELEVBQUUsRUFBRSxNQUFNO2FBQ2I7U0FDSixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDaEI7SUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRW5CLE9BQU87UUFDSCxPQUFPLEVBQUU7WUFDTCw2QkFBNkIsRUFBRSxHQUFHO1NBQ3JDO1FBQ0QsVUFBVSxFQUFFLEdBQUc7UUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7S0FDOUIsQ0FBQTtBQUNMLENBQUMsQ0FBQSxDQUFDIn0=\n\n//# sourceURL=webpack:///./src/handlers/get-post-handler.ts?");

/***/ }),

/***/ "./src/handlers/new-post-handler.ts":
/*!******************************************!*\
  !*** ./src/handlers/new-post-handler.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst aws_sdk_1 = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\r\nconst dynamodb_1 = __webpack_require__(/*! aws-sdk/clients/dynamodb */ \"aws-sdk/clients/dynamodb\");\r\nconst uuid_1 = __webpack_require__(/*! uuid */ \"uuid\");\r\nconst documentClient = new dynamodb_1.DocumentClient();\r\nconst snsClient = new aws_sdk_1.SNS();\r\nexports.default = (event) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const recordId = uuid_1.v1();\r\n    console.log('Generating new DynamoDB record with id: ' + recordId);\r\n    const body = JSON.parse(event.body);\r\n    const voice = body.voice;\r\n    const text = body.text;\r\n    const params = {\r\n        TableName: process.env.DYNAMO_TABLE,\r\n        Item: {\r\n            'id': recordId,\r\n            'text': text,\r\n            'voice': voice,\r\n            'status': 'PROCESSING'\r\n        }\r\n    };\r\n    yield documentClient.put(params).promise().then(() => {\r\n        console.log('posted in db');\r\n    })\r\n        .catch((err) => {\r\n        console.log(err);\r\n    });\r\n    yield snsClient.publish({\r\n        Message: recordId,\r\n        TopicArn: process.env.SNS_TOPIC\r\n    }).promise();\r\n    return {\r\n        headers: {\r\n            'Access-Control-Allow-Origin': '*'\r\n        },\r\n        statusCode: 200\r\n    };\r\n});\r\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXBvc3QtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oYW5kbGVycy9uZXctcG9zdC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBQThCO0FBQzlCLHVEQUEwRDtBQUMxRCwrQkFBa0M7QUFFbEMsTUFBTSxjQUFjLEdBQUcsSUFBSSx5QkFBYyxFQUFFLENBQUM7QUFDNUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxhQUFHLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxDQUFPLEtBQVUsRUFBRSxFQUFFO0lBQ2hDLE1BQU0sUUFBUSxHQUFHLFNBQUksRUFBRSxDQUFDO0lBRXhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFFbkUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN6QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBRXZCLE1BQU0sTUFBTSxHQUFHO1FBQ1gsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWTtRQUNuQyxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsUUFBUTtZQUNkLE1BQU0sRUFBRSxJQUFJO1lBQ1osT0FBTyxFQUFFLEtBQUs7WUFDZCxRQUFRLEVBQUUsWUFBWTtTQUN6QjtLQUNKLENBQUE7SUFFRCxNQUFNLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBQyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztJQUVQLE1BQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUNoQixPQUFPLEVBQUUsUUFBUTtRQUNqQixRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTO0tBQ2xDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUVqQixPQUFPO1FBQ0gsT0FBTyxFQUFFO1lBQ0wsNkJBQTZCLEVBQUUsR0FBRztTQUNyQztRQUNELFVBQVUsRUFBRSxHQUFHO0tBQ2xCLENBQUE7QUFDTCxDQUFDLENBQUEsQ0FBQyJ9\n\n//# sourceURL=webpack:///./src/handlers/new-post-handler.ts?");

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