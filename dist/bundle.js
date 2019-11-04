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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nvar product_list = exports.product_list = [\n// List of all products\n{\n   name: \"Firefox Send\",\n   description: \"Share files with end-to-end encryption and a link that automatically expires.\",\n   url: \"https://send.firefox.com\",\n   img_url: \"./assets/img/firefox.svg\",\n   category: [\"All\", \"File Transfer\"],\n   tags: [\"all\", \"open-source\", \"free\"]\n}, {\n   name: \"Signal\",\n   description: \"messaging\",\n   url: \"https://signal.org\",\n   img_url: \"./assets/img/signal.png\",\n   category: [\"All\", \"Messaging\"],\n   tags: [\"all\", \"open-source\", \"free\"]\n}, {\n   name: \"EteSync\",\n   description: \"Share files with end-to-end encryption and a link that automatically expires.\",\n   url: \"https://etesync.com\",\n   img_url: \"./assets/img/etesync.png\",\n   category: [\"All\", \"File Transfer\"],\n   tags: [\"all\", \"open-source\", \"free\"]\n}, {\n   name: \"SpiderOak\",\n   description: \"Share files with end-to-end encryption and a link that automatically expires.\",\n   url: \"https://send.firefox.com\",\n   img_url: \"./assets/img/spideroak.svg\",\n   category: [\"All\", \"File Transfer\"],\n   tags: [\"all\", \"open-source\", \"free\"]\n}, {\n   name: \"Skype\",\n   description: \"Share files with end-to-end encryption and a link that automatically expires.\",\n   url: \"https://www.skype.com/en/\",\n   img_url: \"./assets/img/skype.svg\",\n   category: [\"All\", \"File Transfer\"],\n   tags: [\"all\", \"open-source\", \"free\"]\n}, {\n   name: \"Wickr\",\n   description: \"Share files with end-to-end encryption and a link that automatically expires.\",\n   url: \"https://wickr.com/\",\n   img_url: \"./assets/img/wickr.png\",\n   category: [\"All\", \"File Transfer\"],\n   tags: [\"all\", \"open-source\", \"free\"]\n}, {\n   name: \"Wire\",\n   description: \"Share files with end-to-end encryption and a link that automatically expires.\",\n   url: \"https://wire.com/en/\",\n   img_url: \"./assets/img/wire.png\",\n   category: [\"All\", \"File Transfer\"],\n   tags: [\"all\", \"open-source\", \"free\"]\n}, {\n   name: \"Telegram\",\n   description: \"messaging\",\n   url: \"https://telegram.org\",\n   img_url: \"./assets/img/telegram.svg\",\n   category: [\"All\", \"Messaging\"],\n   tags: [\"all\", \"free\"]\n}, {\n   name: \"WhatsApp\",\n   description: \"Share files with end-to-end encryption and a link that automatically expires.\",\n   url: \"https://www.whatsapp.com/\",\n   img_url: \"./assets/img/whatsapp.svg\",\n   category: [\"All\", \"Messaging\"],\n   tags: [\"all\", \"free\"]\n}, {\n   name: \"Threema\",\n   description: \"Share files with end-to-end encryption and a link that automatically expires.\",\n   url: \"https://threema.ch/\",\n   img_url: \"./assets/img/threema.svg\",\n   category: [\"All\", \"Messaging\"],\n   tags: [\"all\", \"open-source\", \"free\"]\n}, {\n   name: \"CryptPad\",\n   description: \"Share files with end-to-end encryption and a link that automatically expires.\",\n   url: \"https://cryptpad.fr\",\n   img_url: \"./assets/img/cryptpad.svg\",\n   category: [\"All\", \"File Transfer\"],\n   tags: [\"all\", \"open-source\", \"free\"]\n}, {\n   name: \"Protonmail\",\n   description: \"Send e2ee emails\",\n   url: \"https://protonmail.com\",\n   img_url: \"./assets/img/protonmail.svg\",\n   category: [\"All\", \"Email\"],\n   tags: [\"all\", \"open-source\", \"freemium\"]\n}, {\n   name: \"Tutanota\",\n   description: \"Send e2ee emails\",\n   url: \"https://Tutanota.com\",\n   img_url: \"./assets/img/tutanota.svg\",\n   category: [\"All\", \"Email\"],\n   tags: [\"all\", \"open-source\", \"freemium\"]\n}, {\n   name: \"Mailfence\",\n   description: \"Share files with end-to-end encryption and a link that automatically expires.\",\n   url: \"https://mailfence.com\",\n   img_url: \"./assets/img/mailfence.png\",\n   category: [\"All\", \"Email\"],\n   tags: [\"all\", \"open-source\", \"free\"]\n}, {\n   name: \"Mega\",\n   description: \"Store files with end-to-end encryption.\",\n   url: \"https://mega.nz\",\n   img_url: \"./assets/img/mega.svg\",\n   category: [\"All\", \"File Transfer\", \"Storage\"],\n   tags: [\"all\", \"open-source\", \"freemium\"]\n}, {\n   name: \"Tresorit\",\n   description: \"Share files with end-to-end encryption and a link that automatically expires.\",\n   url: \"https://tresorit.com\",\n   img_url: \"./assets/img/tresorit.svg\",\n   category: [\"All\", \"File Transfer\", \"Storage\"],\n   tags: [\"all\", \"open-source\", \"freemium\"]\n}, {\n   name: \"pDrive\",\n   description: \"Share files with end-to-end encryption and a link that automatically expires.\",\n   url: \"https://pdrive.co/\",\n   img_url: \"./assets/img/pdrive.png\",\n   category: [\"All\", \"File Transfer\", \"Storage\"],\n   tags: [\"all\", \"open-source\", \"freemium\"]\n}, {\n   name: \"Recall Photos\",\n   description: \"Share files with end-to-end encryption and a link that automatically expires.\",\n   url: \"https://app.recall.photos/\",\n   img_url: \"./assets/img/recallphotos.svg\",\n   category: [\"All\", \"File Transfer\", \"Storage\"],\n   tags: [\"all\", \"open-source\", \"freemium\"]\n}, {\n   name: \"Photo Vault\",\n   description: \"Share files with end-to-end encryption and a link that automatically expires.\",\n   url: \"https://photovault.online/\",\n   img_url: \"./assets/img/photovault.png\",\n   category: [\"All\", \"File Transfer\", \"Storage\"],\n   tags: [\"all\", \"open-source\", \"freemium\"]\n}, {\n   name: \"Encrypt My Photos\",\n   description: \"Share files with end-to-end encryption and a link that automatically expires.\",\n   url: \"https://encryptmyphotos.com/\",\n   img_url: \"./assets/img/encryptmyphotos.png\",\n   category: [\"All\", \"File Transfer\", \"Storage\"],\n   tags: [\"all\", \"open-source\", \"freemium\"]\n}, {\n   name: \"Firefox Notes\",\n   description: \"Share files with end-to-end encryption and a link that automatically expires.\",\n   url: \"https://addons.mozilla.org/en-US/firefox/addon/notes-by-firefox/\",\n   img_url: \"./assets/img/firefoxnotes.png\",\n   category: [\"All\", \"File Transfer\", \"Storage\"],\n   tags: [\"all\", \"open-source\", \"freemium\"]\n}, {\n   name: \"Standard Notes\",\n   description: \"Take encrypted notes.\",\n   url: \"https://app.standardnotes.org\",\n   img_url: \"./assets/img/snotes.svg\",\n   category: [\"All\", \"Productivity\", \"Notes\"],\n   tags: [\"all\", \"open-source\", \"freemium\"]\n}];\n\n// List of available tags\nvar tag_list = exports.tag_list = [\"all\", \"beta\", \"free\", \"premium\", \"freemium\", \"proprietary\", \"open-source\", \"decentralized\", \"cross-platform\" //, \"\", \"\", \"\", \"\", \"\"\n];\n// List of available categories\nvar catergory_list = exports.catergory_list = [\"All\", \"Email\", \"Notes\", \"Storage\", \"Productivity\", \"Messaging\", \"Collaboration\"];\n\n//# sourceURL=webpack:///./src/data.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _data = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\nvar json_data = _interopRequireWildcard(_data);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar disclaimer_btn = document.querySelector(\".disclaimer-btn\");\nvar disclaimer_text = document.querySelector(\".disclaimer\");\n\nvar list_type = document.querySelector(\".list__type\");\nvar list_container = document.querySelector(\".list__container\");\n\nvar tag_dropdown = document.querySelector(\".tags__list\");\nvar category_dropdown = document.querySelector(\".category__list\");\nvar dropdown_lists = document.querySelectorAll(\".dropdown__list\");\n\n// 404 Image URL for empty list \nvar empty_list_img = \"./assets/img/404.png\";\n\n// Get data values from 'data.js' module\nvar data_array = json_data.product_list;\nvar tag_names = json_data.tag_list;\nvar catergory_names = json_data.catergory_list;\n\n// Load up dropdown values from corresponding arrays\nwindow.addEventListener(\"load\", function () {\n   dropdown_lists.forEach(function (dropdown) {\n      if (dropdown.classList.contains(\"tags__list\")) {\n         renderOptions(tag_names, tag_dropdown);\n      } else if (dropdown.classList.contains(\"category__list\")) {\n         renderOptions(catergory_names, category_dropdown);\n      }\n   });\n   // Render from current value (onload)\n   renderFromValue(data_array, selectedValues()[0], selectedValues()[1]);\n});\n\nvar renderOptions = function renderOptions(dropdown_type, dropdown_type_parent) {\n   var dropdown_markup = \"\";\n   for (var i = 0; i < dropdown_type.length; i++) {\n      var val = dropdown_type[i];\n      dropdown_markup += \"<option value = \\\"\" + val + \"\\\" \" + (val.toLowerCase() == \"all\" ? 'selected' : '') + \">\" + val + \"</option>\";\n   }\n   dropdown_type_parent.insertAdjacentHTML(\"afterbegin\", dropdown_markup);\n};\n\n// Renders values from array to list container\nvar renderItems = function renderItems(items_arr) {\n   var markup = \"\";\n   for (var i = 0; i < items_arr.length; i++) {\n      markup += \"\\n         <a target=\\\"_blank\\\" href=\\\"\" + items_arr[i].url + \"\\\" class=\\\"list__item\\\">\\n            <div class=\\\"icon\\\">\\n               <img src=\\\"\" + items_arr[i].img_url + \"\\\" alt=\\\"\" + items_arr[i].name + \" logo\\\">\\n            </div>\\n            <div class=\\\"info\\\">\\n               <div class=\\\"name\\\">\" + items_arr[i].name + \"</div>\\n               <div class=\\\"desc\\\">\" + items_arr[i].description + \"</div>\\n               <div class=\\\"tags\\\">\";\n      for (var j = 1; j < items_arr[i].tags.length; j++) {\n         markup += \"<span>#\" + items_arr[i].tags[j] + \"</span>\";\n      }\n      markup += \"</div></div></a>\";\n   }\n   list_container.innerHTML = \"\";\n   list_container.innerHTML = markup;\n   list_container.insertAdjacentHTML(\"beforeend\", \"<hr class='list__end'>\");\n};\n\n// Renders items from passed array list \n// with matching category and tag values\nvar renderFromValue = function renderFromValue(items_list, cat_val, tag_val) {\n   var filterArr = [];\n\n   // Find items with matching cat_val & tag_val\n   for (var i = 0; i < items_list.length; i++) {\n      if (items_list[i].category.includes(cat_val) && items_list[i].tags.includes(tag_val)) {\n         filterArr.push(items_list[i]);\n      }\n   }\n\n   // Render \n   // 1) results if items match\n   // 2) 404 output if no match\n   renderItems(filterArr);\n   if (filterArr.length > 0) {\n      list_type.innerHTML = cat_val + \" (\" + tag_val + \")\";\n   } else {\n      var content_empty = \"\\n         <h2>No products with that specification.</h2>\\n         <img src=\" + empty_list_img + \" alt=\\\"Empty List\\\">\\n      \";\n      list_type.innerHTML = \"\";\n      list_container.insertAdjacentHTML('afterbegin', content_empty);\n   }\n};\n\n// Returns current category and tag values\nvar selectedValues = function selectedValues() {\n   // Get current category value\n   var category_index = category_dropdown.selectedIndex;\n   var category_value = category_dropdown.options[category_index].value;\n\n   // Get current tag value\n   var tag_index = tag_dropdown.selectedIndex;\n   var tag_value = tag_dropdown.options[tag_index].value;\n\n   return [category_value, tag_value];\n};\n\n// Render from changed dropdown values\ndropdown_lists.forEach(function (dropdown) {\n   return dropdown.addEventListener(\"change\", function () {\n      renderFromValue(data_array, selectedValues()[0], selectedValues()[1]);\n\n      if (disclaimer_text.classList.contains(\"show\")) {\n         disclaimer_text.classList.remove(\"show\");\n         disclaimer_text.classList.add(\"hide\");\n      }\n   });\n});\n\n// Toggle disclaimer text\nvar toggleDisclaimer = function toggleDisclaimer() {\n   if (disclaimer_text.classList.contains(\"show\")) {\n      disclaimer_text.classList.remove(\"show\");\n      disclaimer_text.classList.add(\"hide\");\n   } else {\n      disclaimer_text.classList.remove(\"hide\");\n      disclaimer_text.classList.add(\"show\");\n   }\n};\ndisclaimer_btn.addEventListener(\"click\", toggleDisclaimer);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });