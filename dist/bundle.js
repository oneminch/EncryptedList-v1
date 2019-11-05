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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nvar product_list = exports.product_list = [\n// List of all products\n{\n   name: \"Firefox Send\",\n   description: \"Share files with end-to-end encryption and a link that automatically expires.\",\n   url: \"https://send.firefox.com\",\n   img_url: \"./assets/img/firefoxsend.svg\",\n   category: [\"All\", \"File Transfer\"],\n   tags: [\"all\", \"free\", \"web-app\", \"open-source\"]\n}, {\n   name: \"Datash\",\n   description: \"Send and receive files with end-to-end encryption.\",\n   url: \"https://datash.co/\",\n   img_url: \"./assets/img/datash.png\",\n   category: [\"All\", \"File Transfer\"],\n   tags: [\"all\", \"free\", \"web-app\", \"open-source\"]\n}, {\n   name: \"EteSync\",\n   description: \"Secure, end-to-end encrypted, and privacy respecting sync for your contacts, calendars and tasks.\",\n   url: \"https://www.etesync.com/\",\n   img_url: \"./assets/img/etesync.png\",\n   category: [\"All\", \"Productivity\"],\n   tags: [\"all\", \"web-app\", \"premium\", \"open-source\", \"cross-platform\"]\n}, {\n   name: \"Scannie\",\n   description: \"Secure and end-to-end encrypted document scanner and storage.\",\n   url: \"https://www.scannieapp.com/\",\n   img_url: \"./assets/img/scannie.png\",\n   category: [\"All\", \"Productivity\"],\n   tags: [\"all\", \"free\", \"open-source\", \"decentralized\"]\n}, {\n   name: \"Wickr\",\n   description: \"Fully encrypted, Enterprise-ready, Private, Secure Team Collaboration Space\",\n   url: \"https://wickr.com/\",\n   img_url: \"./assets/img/wickr.png\",\n   category: [\"All\", \"Communication\", \"Collaboration\"],\n   tags: [\"all\", \"freemium\", \"cross-platform\"]\n}, {\n   name: \"Wire\",\n   description: \"A collaboration platform with the most advanced security and superior user experience.\",\n   url: \"https://wire.com/en/\",\n   img_url: \"./assets/img/wire.png\",\n   category: [\"All\", \"Productivity\", \"Communication\", \"File Transfer\", \"Collaboration\"],\n   tags: [\"all\", \"web-app\", \"freemium\", \"open-source\", \"cross-platform\"]\n}, {\n   name: \"Stackfield\",\n   description: \"Encrypted projects, tasks & team communication.\",\n   url: \"https://www.stackfield.com/\",\n   img_url: \"./assets/img/stackfield.png\",\n   category: [\"All\", \"Productivity\", \"Communication\", \"Collaboration\"],\n   tags: [\"all\", \"web-app\", \"freemium\", \"proprietary\", \"cross-platform\"]\n}, {\n   name: \"dPhone\",\n   description: \"A secure calling app with P2P architecture and end-to-end encryption.\",\n   url: \"https://dphone.app/\",\n   img_url: \"./assets/img/dphone.png\",\n   category: [\"All\", \"Communication\"],\n   tags: [\"all\", \"free\", \"open-source\", \"decentralized\"]\n}, {\n   name: \"Signal\",\n   description: \"Fast, simple, and secure messaging\",\n   url: \"https://signal.org/\",\n   img_url: \"./assets/img/signal.png\",\n   category: [\"All\", \"Communication\"],\n   tags: [\"all\", \"free\", \"open-source\", \"cross-platform\"]\n}, {\n   name: \"Keybase Chat\",\n   description: \"End-to-end encrypted chat built into Keybase\",\n   url: \"https://keybase.io/download\",\n   img_url: \"./assets/img/keybase.png\",\n   category: [\"All\", \"Storage\", \"Communication\", \"File Transfer\"],\n   tags: [\"all\", \"free\", \"open-source\", \"cross-platform\"]\n}, {\n   name: \"Safer.Chat\",\n   description: \"End-to-end encrypted group webchat that allows users to create rooms with up to 4 participants.\",\n   url: \"https://safer.chat/\",\n   img_url: \"./assets/img/saferchat.png\",\n   category: [\"All\", \"Communication\"],\n   tags: [\"all\", \"free\", \"web-app\", \"open-source\"]\n}, {\n   name: \"Confide\",\n   description: \"Confidential messenger with encrypted, ephemeral and screenshot-proof messages.\",\n   url: \"https://getconfide.com/\",\n   img_url: \"./assets/img/confide.png\",\n   category: [\"All\", \"Communication\"],\n   tags: [\"all\", \"freemium\", \"proprietary\", \"cross-platform\"]\n}, {\n   name: \"Skype\",\n   description: \"End-to-end encryption when using Private Conversations (opt-in and not on by default)\",\n   url: \"https://skype.com/en\",\n   img_url: \"./assets/img/skype.svg\",\n   category: [\"All\", \"Communication\"],\n   tags: [\"all\", \"free\", \"web-app\", \"proprietary\", \"cross-platform\"]\n}, {\n   name: \"Telegram\",\n   description: \"A cloud-based messaging app which offers e2ee when using Secret Chats\",\n   url: \"https://telegram.org/\",\n   img_url: \"./assets/img/telegram.svg\",\n   category: [\"All\", \"Communication\"],\n   tags: [\"all\", \"free\", \"web-app\", \"proprietary\", \"cross-platform\"]\n}, {\n   name: \"WhatsApp\",\n   description: \"A Facebook-owned calling and messaging app with end-to-end encryption.\",\n   url: \"https://www.whatsapp.com/\",\n   img_url: \"./assets/img/whatsapp.svg\",\n   category: [\"All\", \"Communication\"],\n   tags: [\"all\", \"free\", \"proprietary\", \"cross-platform\"]\n}, {\n   name: \"Threema\",\n   description: \"An encrypted messenger built with security and privacy in mind.\",\n   url: \"https://threema.ch/en\",\n   img_url: \"./assets/img/threema.svg\",\n   category: [\"All\", \"Communication\"],\n   tags: [\"all\", \"premium\", \"proprietary\", \"cross-platform\"]\n}, {\n   name: \"Tutanota\",\n   description: \"A secure email service with built-in encrypted calendar, easy to use and private by design.\",\n   url: \"https://tutanota.com/\",\n   img_url: \"./assets/img/tutanota.svg\",\n   category: [\"All\", \"Email\", \"Communication\"],\n   tags: [\"all\", \"web-app\", \"freemium\", \"open-source\", \"cross-platform\"]\n}, {\n   name: \"Protonmail\",\n   description: \"An email service with e2e encryption and a modern design.\",\n   url: \"https://protonmail.com/\",\n   img_url: \"./assets/img/protonmail.svg\",\n   category: [\"All\", \"Email\", \"Communication\"],\n   tags: [\"all\", \"web-app\", \"freemium\", \"open-source\", \"cross-platform\"]\n}, {\n   name: \"Mailfence\",\n   description: \"End-to-end encrypted emails, contacts, calendars and documents.\",\n   url: \"https://mailfence.com/\",\n   img_url: \"./assets/img/mailfence.png\",\n   category: [\"All\", \"Email\", \"Communication\"],\n   tags: [\"all\", \"web-app\", \"freemium\", \"proprietary\"]\n}, {\n   name: \"Canary Mail\",\n   description: \"An email <b>client</b> with built-in end-to-end encryption.\",\n   url: \"https://canarymail.io/\",\n   img_url: \"./assets/img/canarymail.png\",\n   category: [\"All\", \"Email\"],\n   tags: [\"all\", \"premium\", \"proprietary\"]\n}, {\n   name: \"Mega\",\n   description: \"A simple, convenient & secure cloud storage and communication.\",\n   url: \"https://mega.nz/\",\n   img_url: \"./assets/img/mega.svg\",\n   category: [\"All\", \"Storage\", \"Communication\", \"File Transfer\"],\n   tags: [\"all\", \"web-app\", \"freemium\", \"open-source\", \"cross-platform\"]\n}, {\n   name: \"Tresorit\",\n   description: \"End-to-end encrypted secure cloud to store, sync and share files easily from anywhere, anytime.\",\n   url: \"https://tresorit.com/\",\n   img_url: \"./assets/img/tresorit.svg\",\n   category: [\"All\", \"Storage\", \"Productivity\"],\n   tags: [\"all\", \"web-app\", \"premium\", \"proprietary\", \"cross-platform\"]\n}, {\n   name: \"SpiderOak\",\n   description: \"A suite of end-to-end encrypted services: Semaphor, One Backup and Encryptr.\",\n   url: \"https://spideroak.com/\",\n   img_url: \"./assets/img/spideroak.svg\",\n   category: [\"All\", \"Storage\", \"Communication\", \"Collaboration\"],\n   tags: [\"all\", \"free\", \"premium\", \"proprietary\", \"open-source\", \"decentralized\", \"cross-platform\"]\n}, {\n   name: \"pDrive\",\n   description: \"A safe, secure and 100% private storage with built-in end-to-end encryption.\",\n   url: \"https://pdrive.co/\",\n   img_url: \"./assets/img/pdrive.png\",\n   category: [\"All\", \"Storage\"],\n   tags: [\"all\", \"free\", \"web-app\", \"decentralized\"]\n}, {\n   name: \"Encrypt My Photos\",\n   description: \"End-to-end encrypted photo storage 📸\",\n   url: \"https://encryptmyphotos.com/\",\n   img_url: \"./assets/img/encryptmyphotos.png\",\n   category: [\"All\", \"Storage\"],\n   tags: [\"all\", \"free\", \"web-app\", \"open-source\", \"decentralized\"]\n}, {\n   name: \"Photo Vault\",\n   description: \"Unlimited free and secure storage for your private photos with end-to-end encryption.\",\n   url: \"https://photovault.online/\",\n   img_url: \"./assets/img/photovault.png\",\n   category: [\"All\", \"Storage\"],\n   tags: [\"all\", \"free\", \"web-app\", \"proprietary\", \"decentralized\"]\n}, {\n   name: \"Recall Photos\",\n   description: \"A secure, free, end-to-end encrypted and open-source alternative to Google Photos.\",\n   url: \"https://app.recall.photos/\",\n   img_url: \"./assets/img/recallphotos.svg\",\n   category: [\"All\", \"Storage\"],\n   tags: [\"all\", \"free\", \"web-app\", \"open-source\", \"decentralized\"]\n}, {\n   name: \"Pixus\",\n   description: \"Organize, explore and share end-to-end encrypted photos.\",\n   url: \"https://pixus.tech/\",\n   img_url: \"./assets/img/pixus.png\",\n   category: [\"All\", \"Storage\"],\n   tags: [\"all\", \"free\", \"web-app\", \"open-source\", \"decentralized\"]\n}, {\n   name: \"Standard Notes\",\n   description: \"A free, open-source, and completely encrypted notes app.\",\n   url: \"https://app.standardnotes.org\",\n   img_url: \"./assets/img/snotes.svg\",\n   category: [\"All\", \"Notes\", \"Productivity\"],\n   tags: [\"all\", \"web-app\", \"freemium\", \"open-source\", \"cross-platform\"]\n}, {\n   name: \"Notes by Firefox\",\n   description: \"A simple, secure notepad extension for Firefox that has a companion app for Android. \",\n   url: \"https://addons.mozilla.org/en-US/firefox/addon/notes-by-firefox/\",\n   img_url: \"./assets/img/firefoxnotes.png\",\n   category: [\"All\", \"Notes\", \"Productivity\"],\n   tags: [\"all\", \"free\", \"open-source\"]\n}];\n\n// List of available tags\nvar tag_list = exports.tag_list = [\"all\", \"beta\", \"free\", \"premium\", \"freemium\", \"proprietary\", \"open-source\", \"decentralized\", \"cross-platform\" //, \"\", \"\", \"\", \"\", \"\"\n];\n// List of available categories\nvar catergory_list = exports.catergory_list = [\"All\", \"Email\", \"Notes\", \"Storage\", \"Productivity\", \"Communication\", \"File Transfer\", \"Collaboration\"];\n\n//# sourceURL=webpack:///./src/data.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _data = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\nvar json_data = _interopRequireWildcard(_data);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar disclaimer_btn = document.querySelector(\".disclaimer-btn\");\nvar disclaimer_text = document.querySelector(\".disclaimer\");\n\nvar list_type = document.querySelector(\".list__type\");\nvar list_container = document.querySelector(\".list__container\");\n\nvar tag_dropdown = document.querySelector(\".tags__list\");\nvar category_dropdown = document.querySelector(\".category__list\");\nvar dropdown_lists = document.querySelectorAll(\".dropdown__list\");\n\n// 404 Image URL for empty list \nvar empty_list_img = \"./assets/img/404.png\";\n\n// Get data values from 'data.js' module\nvar data_array = json_data.product_list;\nvar tag_names = json_data.tag_list;\nvar catergory_names = json_data.catergory_list;\n\n// Load up dropdown values from corresponding arrays\nwindow.addEventListener(\"load\", function () {\n   dropdown_lists.forEach(function (dropdown) {\n      if (dropdown.classList.contains(\"tags__list\")) {\n         renderOptions(tag_names, tag_dropdown);\n      } else if (dropdown.classList.contains(\"category__list\")) {\n         renderOptions(catergory_names, category_dropdown);\n      }\n   });\n   // Render from current value (onload)\n   renderFromValue(data_array, selectedValues()[0], selectedValues()[1]);\n});\n\nvar renderOptions = function renderOptions(dropdown_type, dropdown_type_parent) {\n   var dropdown_markup = \"\";\n   for (var i = 0; i < dropdown_type.length; i++) {\n      var val = dropdown_type[i];\n      dropdown_markup += \"<option value = \\\"\" + val + \"\\\" \" + (val.toLowerCase() == \"all\" ? 'selected' : '') + \">\" + val + \"</option>\";\n   }\n   dropdown_type_parent.insertAdjacentHTML(\"afterbegin\", dropdown_markup);\n};\n\n// Renders values from array to list container\nvar renderItems = function renderItems(items_arr) {\n   var markup = \"\";\n   for (var i = 0; i < items_arr.length; i++) {\n      markup += \"\\n         <a target=\\\"_blank\\\" href=\\\"\" + items_arr[i].url + \"\\\" class=\\\"list__item\\\">\\n            <div class=\\\"icon\\\">\\n               <img src=\\\"\" + items_arr[i].img_url + \"\\\" alt=\\\"\" + items_arr[i].name + \" logo\\\">\\n            </div>\\n            <div class=\\\"info\\\">\\n               <div class=\\\"name\\\">\" + items_arr[i].name + \"</div>\\n               <div class=\\\"desc\\\">\" + items_arr[i].description + \"</div>\\n               <div class=\\\"tags\\\">\";\n      for (var j = 1; j < items_arr[i].tags.length; j++) {\n         markup += \"<span>#\" + items_arr[i].tags[j] + \"</span>\";\n      }\n      markup += \"</div></div></a>\";\n   }\n   list_container.innerHTML = \"\";\n   list_container.innerHTML = markup;\n   var list_end_markup = \"\\n      <hr class='list__end'>\\n      <a href=\\\"https://github.com/oneminch/encryptedlist\\\" class=\\\"github-page\\\" title=\\\"How to submit\\\">\\n      <img src=\\\"./assets/img/logo/github.svg\\\" alt=\\\"GitHub Page\\\"/>            \\n      </a>\\n   \";\n   list_container.insertAdjacentHTML(\"beforeend\", list_end_markup);\n};\n\n// Renders items from passed array list \n// with matching category and tag values\nvar renderFromValue = function renderFromValue(items_list, cat_val, tag_val) {\n   var filterArr = [];\n\n   // Find items with matching cat_val & tag_val\n   for (var i = 0; i < items_list.length; i++) {\n      if (items_list[i].category.includes(cat_val) && items_list[i].tags.includes(tag_val)) {\n         filterArr.push(items_list[i]);\n      }\n   }\n\n   // Render \n   // 1) results if items match\n   // 2) 404 output if no match\n   renderItems(filterArr);\n   if (filterArr.length > 0) {\n      list_type.innerHTML = cat_val + \" (\" + tag_val + \")\";\n   } else {\n      var content_empty = \"\\n         <h2>No products with that specification.</h2>\\n         <img src=\" + empty_list_img + \" alt=\\\"Empty List\\\">\\n      \";\n      list_type.innerHTML = \"\";\n      list_container.insertAdjacentHTML('afterbegin', content_empty);\n   }\n};\n\n// Returns current category and tag values\nvar selectedValues = function selectedValues() {\n   // Get current category value\n   var category_index = category_dropdown.selectedIndex;\n   var category_value = category_dropdown.options[category_index].value;\n\n   // Get current tag value\n   var tag_index = tag_dropdown.selectedIndex;\n   var tag_value = tag_dropdown.options[tag_index].value;\n\n   return [category_value, tag_value];\n};\n\n// Render from changed dropdown values\ndropdown_lists.forEach(function (dropdown) {\n   return dropdown.addEventListener(\"change\", function () {\n      renderFromValue(data_array, selectedValues()[0], selectedValues()[1]);\n\n      if (disclaimer_text.classList.contains(\"show\")) {\n         disclaimer_text.classList.remove(\"show\");\n         disclaimer_text.classList.add(\"hide\");\n      }\n   });\n});\n\n// Toggle disclaimer text\nvar toggleDisclaimer = function toggleDisclaimer() {\n   if (disclaimer_text.classList.contains(\"show\")) {\n      disclaimer_text.classList.remove(\"show\");\n      disclaimer_text.classList.add(\"hide\");\n   } else {\n      disclaimer_text.classList.remove(\"hide\");\n      disclaimer_text.classList.add(\"show\");\n   }\n};\ndisclaimer_btn.addEventListener(\"click\", toggleDisclaimer);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });