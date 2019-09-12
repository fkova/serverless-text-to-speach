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
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = (event) => __awaiter(void 0, void 0, void 0, function* () {\r\n    console.log('has been called' + event);\r\n    return {\r\n        statusCode: 200\r\n    };\r\n});\r\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8tY29udmVydC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hhbmRsZXJzL2F1ZGlvLWNvbnZlcnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLGtCQUFlLENBQU8sS0FBVSxFQUFFLEVBQUU7SUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUN2QyxPQUFPO1FBQ0gsVUFBVSxFQUFFLEdBQUc7S0FDbEIsQ0FBQTtBQUNMLENBQUMsQ0FBQSxDQUFDIn0=\n\n//# sourceURL=webpack:///./src/handlers/audio-convert-handler.ts?");

/***/ }),

/***/ "./src/handlers/new-post-handler.ts":
/*!******************************************!*\
  !*** ./src/handlers/new-post-handler.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst aws_sdk_1 = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\r\nconst uuid_1 = __webpack_require__(/*! uuid */ \"uuid\");\r\nconst documentClient = new aws_sdk_1.DynamoDB.DocumentClient();\r\nconst snsClient = new aws_sdk_1.SNS();\r\nexports.default = (event) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const recordId = uuid_1.v1();\r\n    console.log('Generating new DynamoDB record with id: ' + recordId);\r\n    const body = JSON.parse(event.body);\r\n    const voice = body.voice;\r\n    const text = body.text;\r\n    const params = {\r\n        TableName: process.env.DYNAMO_TABLE,\r\n        Item: {\r\n            'id': recordId,\r\n            'text': text,\r\n            'voice': voice,\r\n            'status': 'PROCESSING'\r\n        }\r\n    };\r\n    yield documentClient.put(params).promise()\r\n        .then(() => {\r\n        console.log('posted in db');\r\n    })\r\n        .catch((err) => {\r\n        console.log(err);\r\n    });\r\n    yield snsClient.publish({\r\n        Message: recordId,\r\n        TopicArn: process.env.SNS_TOPIC\r\n    }).promise();\r\n    return {\r\n        statusCode: 200\r\n    };\r\n});\r\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXBvc3QtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oYW5kbGVycy9uZXctcG9zdC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBQXdDO0FBQ3hDLCtCQUFrQztBQUVsQyxNQUFNLGNBQWMsR0FBRyxJQUFJLGtCQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDckQsTUFBTSxTQUFTLEdBQUcsSUFBSSxhQUFHLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxDQUFPLEtBQVUsRUFBRSxFQUFFO0lBQ2hDLE1BQU0sUUFBUSxHQUFHLFNBQUksRUFBRSxDQUFDO0lBRXhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFFbkUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN6QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBRXZCLE1BQU0sTUFBTSxHQUFHO1FBQ1gsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWTtRQUNuQyxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsUUFBUTtZQUNkLE1BQU0sRUFBRSxJQUFJO1lBQ1osT0FBTyxFQUFFLEtBQUs7WUFDZCxRQUFRLEVBQUUsWUFBWTtTQUN6QjtLQUNKLENBQUE7SUFFRCxNQUFNLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFO1NBQ3pDLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBQyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUNoQixPQUFPLEVBQUUsUUFBUTtRQUNqQixRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTO0tBQ2xDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUVqQixPQUFPO1FBQ0gsVUFBVSxFQUFFLEdBQUc7S0FDbEIsQ0FBQTtBQUNMLENBQUMsQ0FBQSxDQUFDIn0=\n\n//# sourceURL=webpack:///./src/handlers/new-post-handler.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst new_post_handler_1 = __importDefault(__webpack_require__(/*! ./handlers/new-post-handler */ \"./src/handlers/new-post-handler.ts\"));\r\nconst audio_convert_handler_1 = __importDefault(__webpack_require__(/*! ./handlers/audio-convert-handler */ \"./src/handlers/audio-convert-handler.ts\"));\r\nexports.newPostLambda = new_post_handler_1.default;\r\nexports.audioConverterLambda = audio_convert_handler_1.default;\r\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtRkFBd0U7QUFDeEUsNkZBQWlGO0FBRXBFLFFBQUEsYUFBYSxHQUFHLDBCQUFjLENBQUM7QUFDL0IsUUFBQSxvQkFBb0IsR0FBRywrQkFBa0IsQ0FBQyJ9\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");\n\n//# sourceURL=webpack:///external_%22aws-sdk%22?");

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