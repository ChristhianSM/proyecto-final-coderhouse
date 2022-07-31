/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.createApp = void 0;\r\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\r\nconst cookie_parser_1 = __importDefault(__webpack_require__(/*! cookie-parser */ \"cookie-parser\"));\r\nconst express_session_1 = __importDefault(__webpack_require__(/*! express-session */ \"express-session\"));\r\nconst connect_mongo_1 = __importDefault(__webpack_require__(/*! connect-mongo */ \"connect-mongo\"));\r\nconst passport_1 = __importDefault(__webpack_require__(/*! passport */ \"passport\"));\r\nconst passportSetup_1 = __webpack_require__(/*! ./config/passportSetup */ \"./src/config/passportSetup.ts\");\r\nconst config_1 = __webpack_require__(/*! ./config/config */ \"./src/config/config.ts\");\r\nconst api_1 = __webpack_require__(/*! ./rutas/api/api */ \"./src/rutas/api/api.ts\");\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst handleBars = __importStar(__webpack_require__(/*! express-handlebars */ \"express-handlebars\"));\r\nconst os = __importStar(__webpack_require__(/*! os */ \"os\"));\r\nconst compression_1 = __importDefault(__webpack_require__(/*! compression */ \"compression\"));\r\nconst requestLogger_1 = __webpack_require__(/*! ./middlewares/requestLogger */ \"./src/middlewares/requestLogger.ts\");\r\nconst logger_1 = __webpack_require__(/*! ./logger */ \"./src/logger.ts\");\r\nconst checkAuthentication_1 = __webpack_require__(/*! ./middlewares/checkAuthentication */ \"./src/middlewares/checkAuthentication.ts\");\r\nconst multer_1 = __importDefault(__webpack_require__(/*! multer */ \"multer\"));\r\nconst carritoService_1 = __webpack_require__(/*! ./services/carritoService */ \"./src/services/carritoService.ts\");\r\nconst createApp = () => {\r\n    const app = (0, express_1.default)();\r\n    const storage = multer_1.default.diskStorage({\r\n        destination: \"./public/uploads\",\r\n        filename: (req, file, cb) => {\r\n            const { email } = req.body;\r\n            const ext = file.originalname.split(\".\").pop();\r\n            cb(null, email + \"-\" + file.originalname);\r\n        },\r\n    });\r\n    const upload = (0, multer_1.default)({ storage: storage });\r\n    // Set render engine\r\n    app.engine(\"hbs\", handleBars.engine({\r\n        extname: \".hbs\",\r\n        layoutsDir: __dirname + \"/../public/views\",\r\n    }));\r\n    app.set(\"views\", __dirname + \"/../public/views\");\r\n    app.set(\"view engine\", \"hbs\");\r\n    app.use(express_1.default.static(path_1.default.join(__dirname, \"/../public/\")));\r\n    // Server configs\r\n    app.use(express_1.default.json());\r\n    app.use(express_1.default.urlencoded({ extended: true }));\r\n    app.use((0, cookie_parser_1.default)());\r\n    app.use((0, express_session_1.default)({\r\n        store: connect_mongo_1.default.create({\r\n            mongoUrl: config_1.MONGO_URL,\r\n            ttl: 600,\r\n        }),\r\n        secret: config_1.SESSION_SECRET,\r\n        resave: false,\r\n        saveUninitialized: false,\r\n    }));\r\n    app.use(requestLogger_1.requestLogger);\r\n    // Initialize passport\r\n    app.use(passport_1.default.initialize());\r\n    app.use(passport_1.default.session());\r\n    (0, passportSetup_1.setUpPassport)(passport_1.default);\r\n    // Routes\r\n    app.use(\"/api\", api_1.api);\r\n    // Root\r\n    app.get(\"/\", checkAuthentication_1.checkAuthentication, (req, res) => {\r\n        res.render(\"index\", { layout: \"index\", domain: config_1.DOMAIN });\r\n    });\r\n    app.get(\"/profile\", checkAuthentication_1.checkAuthentication, (req, res) => {\r\n        const { email, nyap, direccion, edad, avatar, telefono } = req.user;\r\n        res.render(\"profile\", {\r\n            layout: \"profile\",\r\n            domain: config_1.DOMAIN,\r\n            email,\r\n            edad,\r\n            nyap,\r\n            avatar,\r\n            telefono,\r\n            direccion,\r\n        });\r\n    });\r\n    app.get(\"/carrito\", checkAuthentication_1.checkAuthentication, (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n        const { email, nyap, direccion, edad, avatar, telefono } = req.user;\r\n        let carrito = yield carritoService_1.CarritoService.getByOwnerEmail(email);\r\n        if (!carrito) {\r\n            carrito = yield carritoService_1.CarritoService.crearCarrito(email);\r\n        }\r\n        res.render(\"carrito\", {\r\n            layout: \"carrito\",\r\n            productos: carrito.productos,\r\n        });\r\n    }));\r\n    app.get(\"/info\", (0, compression_1.default)(), (req, res) => {\r\n        const { argv, execPath, platform, version, pid, memoryUsage, cwd } = process;\r\n        const { rss } = memoryUsage();\r\n        res.render(\"info\", {\r\n            layout: \"info\",\r\n            argv,\r\n            execPath,\r\n            platform,\r\n            version,\r\n            pid,\r\n            rss,\r\n            currentDir: cwd(),\r\n            cpus: os.cpus().length,\r\n        });\r\n    });\r\n    // LOGIN\r\n    app.get(\"/login\", (req, res) => {\r\n        res.render(\"login\", { layout: \"login\", domain: config_1.DOMAIN });\r\n    });\r\n    app.post(\"/login\", passport_1.default.authenticate(\"login\", { failureRedirect: \"/login-fail\" }), (req, res) => {\r\n        console.log(res);\r\n        res.redirect(\"/\");\r\n    });\r\n    app.get(\"/login-fail\", (req, res) => {\r\n        res.render(\"login-fail\", { layout: \"login-fail\", domain: config_1.DOMAIN });\r\n    });\r\n    // REGISTRO\r\n    app.get(\"/register\", (req, res) => {\r\n        res.render(\"register\", { layout: \"register\", domain: config_1.DOMAIN });\r\n    });\r\n    app.post(\"/register\", upload.single(\"avatar\"), passport_1.default.authenticate(\"signup\", { failureRedirect: \"/register-fail\" }), (req, res) => {\r\n        res.redirect(\"/\");\r\n    });\r\n    app.get(\"/register-fail\", (req, res) => {\r\n        res.render(\"register-fail\", { layout: \"register-fail\", domain: config_1.DOMAIN });\r\n    });\r\n    // Logout\r\n    app.get(\"/logout\", (req, res) => {\r\n        req.logOut();\r\n        res.redirect(\"/login\");\r\n    });\r\n    app.get(\"/args\", (req, res) => {\r\n        res.send(process.argv);\r\n    });\r\n    app.use((req, res) => {\r\n        logger_1.logger.warn(`Ruta: ${req.path} - Método: ${req.method}`);\r\n        res.status(404).send({\r\n            error: -2,\r\n            descripcion: `ruta ${req.path} método ${req.method} no implementada`,\r\n        });\r\n    });\r\n    return app;\r\n};\r\nexports.createApp = createApp;\r\n\n\n//# sourceURL=webpack://clase-16/./src/app.ts?");

/***/ }),

/***/ "./src/config/config.ts":
/*!******************************!*\
  !*** ./src/config/config.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ADMIN_EMAIL_PASS = exports.ADMIN_EMAIL = exports.TWILIO_AUTHTOKEN = exports.TWILIO_SID = exports.DOMAIN = exports.JWT_SECRET = exports.SESSION_SECRET = exports.MONGO_URL = void 0;\r\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\ndotenv_1.default.config();\r\nexports.MONGO_URL = process.env.MONGO_URL;\r\nexports.SESSION_SECRET = process.env.SESSION_SECRET;\r\nexports.JWT_SECRET = process.env.JWT_SECRET;\r\nexports.DOMAIN = process.env.DOMAIN;\r\nexports.TWILIO_SID = process.env.TWILIO_SID;\r\nexports.TWILIO_AUTHTOKEN = process.env.TWILIO_AUTHTOKEN;\r\nexports.ADMIN_EMAIL = process.env.ADMIN_EMAIL;\r\nexports.ADMIN_EMAIL_PASS = process.env.ADMIN_EMAIL_PASS;\r\n\n\n//# sourceURL=webpack://clase-16/./src/config/config.ts?");

/***/ }),

/***/ "./src/config/ioSetup.ts":
/*!*******************************!*\
  !*** ./src/config/ioSetup.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.setupIo = void 0;\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nconst logger_1 = __webpack_require__(/*! ../logger */ \"./src/logger.ts\");\r\nconst config_1 = __webpack_require__(/*! ./config */ \"./src/config/config.ts\");\r\n// Socket events\r\nconst setupIo = (io) => {\r\n    io.on(\"connection\", (socket) => {\r\n        logger_1.logger.info(\"¡Nuevo cliente conectado!\");\r\n        sendInitialData(socket);\r\n        socket.on(\"nuevoMensaje\", (data) => __awaiter(void 0, void 0, void 0, function* () {\r\n            yield axios_1.default.post(`http://${config_1.DOMAIN}/api/mensajes`, Object.assign({}, data));\r\n            const { data: mensajes } = yield axios_1.default.get(`http://${config_1.DOMAIN}/api/mensajes`);\r\n            io.sockets.emit(\"mensajeRecibo\", mensajes);\r\n        }));\r\n    });\r\n};\r\nexports.setupIo = setupIo;\r\nconst sendInitialData = (socket) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const { data: productos } = yield axios_1.default.get(`http://${config_1.DOMAIN}/api/productos-test`);\r\n    const { data: template } = yield axios_1.default.get(`http://${config_1.DOMAIN}/views/tabla.hbs`);\r\n    const { data: mensajes } = yield axios_1.default.get(`http://${config_1.DOMAIN}/api/mensajes`);\r\n    socket.emit(\"connected\", {\r\n        mensajes,\r\n        productos,\r\n        template,\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://clase-16/./src/config/ioSetup.ts?");

/***/ }),

/***/ "./src/config/passportSetup.ts":
/*!*************************************!*\
  !*** ./src/config/passportSetup.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.setUpPassport = void 0;\r\nconst userService_1 = __webpack_require__(/*! ../services/userService */ \"./src/services/userService.ts\");\r\nconst passport_local_1 = __webpack_require__(/*! passport-local */ \"passport-local\");\r\nconst logger_1 = __webpack_require__(/*! ../logger */ \"./src/logger.ts\");\r\nconst messageService_1 = __webpack_require__(/*! ../services/messageService */ \"./src/services/messageService.ts\");\r\nconst config_1 = __webpack_require__(/*! ./config */ \"./src/config/config.ts\");\r\nconst setUpPassport = (passport) => {\r\n    passport.serializeUser((user, done) => {\r\n        done(null, user);\r\n    });\r\n    passport.deserializeUser((user, done) => {\r\n        done(null, user);\r\n    });\r\n    passport.use(\"signup\", new passport_local_1.Strategy({\r\n        usernameField: \"email\",\r\n        passReqToCallback: true,\r\n    }, (req, email, password, done) => __awaiter(void 0, void 0, void 0, function* () {\r\n        const { nyap, direccion, edad, avatar, telefono } = req.body;\r\n        try {\r\n            const user = yield userService_1.userService.createUser({\r\n                email,\r\n                password,\r\n                nyap,\r\n                direccion,\r\n                edad,\r\n                avatar: req.file.filename,\r\n                telefono,\r\n            });\r\n            const mailOptions = {\r\n                from: \"E-commerce\",\r\n                to: config_1.ADMIN_EMAIL,\r\n                subject: \"Nuevo Registro\",\r\n                html: `<h1>Se ha generado un nuevo pedido:</h1>\n           <p>Email: ${email}</p>\n           <p>Nombre y apellido: ${nyap}</p>\n           <p>Dirección: ${direccion}</p>\n           <p>Edad: ${edad}</p>\n           <p>Telefono: ${telefono}</p>`,\r\n            };\r\n            messageService_1.transporter.sendMail(mailOptions);\r\n            return done(null, user);\r\n        }\r\n        catch (e) {\r\n            logger_1.logger.warn(\"User already exists\");\r\n            return done(null, false);\r\n        }\r\n    })));\r\n    passport.use(\"login\", new passport_local_1.Strategy({\r\n        usernameField: \"email\",\r\n        passReqToCallback: true,\r\n    }, (req, email, password, done) => __awaiter(void 0, void 0, void 0, function* () {\r\n        console.log('AQUIII', email);\r\n        try {\r\n            const user = yield userService_1.userService.verifyUser(email, password);\r\n            return done(null, user);\r\n        }\r\n        catch (e) {\r\n            console.warn(\"Las credenciales son incorrectas\");\r\n            return done(null, false);\r\n        }\r\n    })));\r\n};\r\nexports.setUpPassport = setUpPassport;\r\n\n\n//# sourceURL=webpack://clase-16/./src/config/passportSetup.ts?");

/***/ }),

/***/ "./src/logger.ts":
/*!***********************!*\
  !*** ./src/logger.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.logger = void 0;\r\nconst winston_1 = __importDefault(__webpack_require__(/*! winston */ \"winston\"));\r\nconst filterLevel = (level) => winston_1.default.format((info) => {\r\n    if (info.level === level) {\r\n        return info;\r\n    }\r\n    return false;\r\n})();\r\nexports.logger = winston_1.default.createLogger({\r\n    transports: [\r\n        new winston_1.default.transports.Console({ level: \"info\" }),\r\n        new winston_1.default.transports.File({\r\n            filename: \"error.log\",\r\n            level: \"error\",\r\n            format: filterLevel(\"error\"),\r\n        }),\r\n        new winston_1.default.transports.File({\r\n            filename: \"warn.log\",\r\n            level: \"warn\",\r\n            format: filterLevel(\"warn\"),\r\n        }),\r\n    ],\r\n});\r\n\n\n//# sourceURL=webpack://clase-16/./src/logger.ts?");

/***/ }),

/***/ "./src/middlewares/checkAuthentication.ts":
/*!************************************************!*\
  !*** ./src/middlewares/checkAuthentication.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.checkAuthentication = void 0;\r\nconst checkAuthentication = (req, res, next) => {\r\n    if (req.isAuthenticated()) {\r\n        next();\r\n    }\r\n    else {\r\n        res.redirect(\"/login\");\r\n    }\r\n};\r\nexports.checkAuthentication = checkAuthentication;\r\n\n\n//# sourceURL=webpack://clase-16/./src/middlewares/checkAuthentication.ts?");

/***/ }),

/***/ "./src/middlewares/requestLogger.ts":
/*!******************************************!*\
  !*** ./src/middlewares/requestLogger.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.requestLogger = void 0;\r\nconst logger_1 = __webpack_require__(/*! ../logger */ \"./src/logger.ts\");\r\n// Loguea Ruta y método de todas las peticiones recibidas por el servidor (info)\r\nconst requestLogger = (req, res, next) => {\r\n    logger_1.logger.info(`Ruta: ${req.path} - Método: ${req.method}`);\r\n    next();\r\n};\r\nexports.requestLogger = requestLogger;\r\n\n\n//# sourceURL=webpack://clase-16/./src/middlewares/requestLogger.ts?");

/***/ }),

/***/ "./src/modelo/types.ts":
/*!*****************************!*\
  !*** ./src/modelo/types.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Carrito = void 0;\r\nclass Carrito {\r\n    constructor(owner, productos = [], id, timestamp) {\r\n        this.id = id;\r\n        this.timestamp = timestamp;\r\n        this.productos = productos;\r\n        this.owner = owner;\r\n    }\r\n    agregarProductos(nuevosProductos) {\r\n        nuevosProductos.forEach((productoNuevo) => {\r\n            const indice = this.productos.findIndex((productoActual) => productoActual.id === productoNuevo.id);\r\n            if (indice === -1) {\r\n                this.productos.push(productoNuevo);\r\n            }\r\n            else {\r\n                this.productos[indice].stock += productoNuevo.stock;\r\n            }\r\n        });\r\n        return this.productos;\r\n    }\r\n    //Elimina un producto del carrito y lo devuelve\r\n    eliminarProducto(productoID) {\r\n        const i = this.productos.findIndex((p) => p.id === productoID);\r\n        if (i === -1)\r\n            throw { message: \"El producto a eliminar no existe en el carrito\" };\r\n        return this.productos.splice(i, 1)[0];\r\n    }\r\n}\r\nexports.Carrito = Carrito;\r\n\n\n//# sourceURL=webpack://clase-16/./src/modelo/types.ts?");

/***/ }),

/***/ "./src/persistencia/carritoDAO.ts":
/*!****************************************!*\
  !*** ./src/persistencia/carritoDAO.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.CarritoDAO = void 0;\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst mongoDAO_1 = __webpack_require__(/*! ./mongoDAO */ \"./src/persistencia/mongoDAO.ts\");\r\nclass CarritoDAO extends mongoDAO_1.MongoDAO {\r\n    constructor() {\r\n        const schema = new mongoose_1.default.Schema({\r\n            productos: { type: Array, require: true },\r\n            owner: { type: String, require: true },\r\n        });\r\n        const modelo = mongoose_1.default.model(\"carritos\", schema);\r\n        super(modelo);\r\n    }\r\n    getByOwnerEmail(email) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const element = yield this.model.findOne({ owner: email });\r\n            return element;\r\n        });\r\n    }\r\n    deleteByEmail(mail) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            yield this.model.deleteOne({ owner: mail });\r\n        });\r\n    }\r\n}\r\nexports.CarritoDAO = CarritoDAO;\r\n\n\n//# sourceURL=webpack://clase-16/./src/persistencia/carritoDAO.ts?");

/***/ }),

/***/ "./src/persistencia/mensajeDAO.ts":
/*!****************************************!*\
  !*** ./src/persistencia/mensajeDAO.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MensajeDAO = void 0;\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst mongoDAO_1 = __webpack_require__(/*! ./mongoDAO */ \"./src/persistencia/mongoDAO.ts\");\r\nclass MensajeDAO extends mongoDAO_1.MongoDAO {\r\n    constructor() {\r\n        const schema = new mongoose_1.default.Schema({\r\n            author: {\r\n                id: { type: String, require: true },\r\n                nombre: { type: String, require: true },\r\n                apellido: { type: String, require: true },\r\n                edad: { type: String, require: true },\r\n                alias: { type: String, require: true },\r\n                avatar: { type: String, require: true },\r\n            },\r\n            text: { type: String, require: true },\r\n            timestamp: { type: String, require: true },\r\n        }, { versionKey: false });\r\n        const modelo = mongoose_1.default.model(\"mensajes\", schema);\r\n        super(modelo);\r\n    }\r\n}\r\nexports.MensajeDAO = MensajeDAO;\r\n\n\n//# sourceURL=webpack://clase-16/./src/persistencia/mensajeDAO.ts?");

/***/ }),

/***/ "./src/persistencia/mongoDAO.ts":
/*!**************************************!*\
  !*** ./src/persistencia/mongoDAO.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MongoDAO = exports.URLMONGO = void 0;\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst config_1 = __webpack_require__(/*! ../config/config */ \"./src/config/config.ts\");\r\nexports.URLMONGO = config_1.MONGO_URL;\r\nclass MongoDAO {\r\n    constructor(model) {\r\n        mongoose_1.default.connect(exports.URLMONGO);\r\n        this.model = model;\r\n    }\r\n    obtener(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const element = yield this.model.findById(id);\r\n            if (!element)\r\n                throw { status: 404, error: `El producto ${id} no existe` };\r\n            return element;\r\n        });\r\n    }\r\n    obtenerTodos() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const docs = yield this.model.find({});\r\n            return docs.map((d) => d.toObject());\r\n        });\r\n    }\r\n    guardar(elementoAGuardar) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const elementToSave = new this.model(Object.assign({}, elementoAGuardar));\r\n            yield elementToSave.save();\r\n            return elementToSave;\r\n        });\r\n    }\r\n    eliminar(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            yield this.model.findByIdAndDelete(id);\r\n        });\r\n    }\r\n    modificar(id, modificacion) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            yield this.model.findByIdAndUpdate(id, modificacion);\r\n            const p = yield this.obtener(id);\r\n            return p;\r\n        });\r\n    }\r\n}\r\nexports.MongoDAO = MongoDAO;\r\n\n\n//# sourceURL=webpack://clase-16/./src/persistencia/mongoDAO.ts?");

/***/ }),

/***/ "./src/persistencia/userDAO.ts":
/*!*************************************!*\
  !*** ./src/persistencia/userDAO.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.UserDao = void 0;\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst mongoDAO_1 = __webpack_require__(/*! ./mongoDAO */ \"./src/persistencia/mongoDAO.ts\");\r\nclass UserDao extends mongoDAO_1.MongoDAO {\r\n    constructor() {\r\n        const schema = new mongoose_1.default.Schema({\r\n            email: { type: String, require: true },\r\n            password: { type: String, require: true },\r\n            nyap: { type: String, require: true },\r\n            direccion: { type: String, require: true },\r\n            edad: { type: Number, require: true },\r\n            avatar: { type: String, require: true },\r\n            telefono: { type: String, require: true },\r\n            id: { type: String, require: false },\r\n        });\r\n        const modelo = mongoose_1.default.model(\"users\", schema);\r\n        super(modelo);\r\n    }\r\n    getByEmail(email) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const element = yield this.model.findOne({ email: email });\r\n            return element;\r\n        });\r\n    }\r\n}\r\nexports.UserDao = UserDao;\r\n\n\n//# sourceURL=webpack://clase-16/./src/persistencia/userDAO.ts?");

/***/ }),

/***/ "./src/rutas/api/api.ts":
/*!******************************!*\
  !*** ./src/rutas/api/api.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.api = void 0;\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst mensajeDAO_1 = __webpack_require__(/*! ../../persistencia/mensajeDAO */ \"./src/persistencia/mensajeDAO.ts\");\r\nconst faker_1 = __webpack_require__(/*! @faker-js/faker */ \"@faker-js/faker\");\r\nconst normalizr_1 = __webpack_require__(/*! normalizr */ \"normalizr\");\r\nconst logger_1 = __webpack_require__(/*! ../../logger */ \"./src/logger.ts\");\r\nconst carrito_1 = __webpack_require__(/*! ./carrito */ \"./src/rutas/api/carrito.ts\");\r\nfaker_1.faker.locale = \"es\";\r\nconst { Router } = express_1.default;\r\nexports.api = Router();\r\nexports.api.use(\"/carrito\", carrito_1.carrito);\r\nconst mensajesDAO = new mensajeDAO_1.MensajeDAO();\r\n// Fake api\r\nconst generarProducto = (id) => {\r\n    const producto = {\r\n        id: Math.round(Math.random() * 10000000).toString(),\r\n        descripcion: \"un produc\",\r\n        codigo: \"ABC\" + Math.round(Math.random() * 10000000).toString(),\r\n        stock: Math.ceil(Math.random() * 10),\r\n        nombre: faker_1.faker.commerce.product(),\r\n        precio: parseFloat(faker_1.faker.finance.amount()),\r\n        foto: faker_1.faker.image.avatar(),\r\n    };\r\n    return producto;\r\n};\r\nconst getProductos = () => {\r\n    const productos = [];\r\n    for (let i = 0; i < 5; i++) {\r\n        productos.push(generarProducto(i));\r\n    }\r\n    return productos;\r\n};\r\nexports.api.get(\"/productos-test\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        res.send(getProductos());\r\n    }\r\n    catch (e) {\r\n        logger_1.logger.error(e);\r\n        res.status(500).send(\"Error al cargar los productos\");\r\n    }\r\n}));\r\n// Send normalized data.\r\nconst author = new normalizr_1.schema.Entity(\"author\");\r\nconst message = new normalizr_1.schema.Entity(\"mensaje\", { author: author }, { idAttribute: \"_id\" });\r\nconst listOfMessages = new normalizr_1.schema.Entity(\"mensajes\", {\r\n    mensajes: [message],\r\n});\r\nexports.api.get(\"/mensajes\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        const mensajes = yield mensajesDAO.obtenerTodos();\r\n        const originalData = { id: \"mensajes\", mensajes };\r\n        const normalizedData = (0, normalizr_1.normalize)(originalData, listOfMessages);\r\n        res.send(normalizedData);\r\n    }\r\n    catch (e) {\r\n        logger_1.logger.error(e);\r\n        res.status(500).send(\"Error al obtener los mensajes\");\r\n    }\r\n}));\r\nexports.api.post(\"/mensajes\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const mensaje = req.body;\r\n    try {\r\n        yield mensajesDAO.guardar(Object.assign({ id: mensaje.timestamp + mensaje.author.id }, mensaje));\r\n        res.send(\"guardado ok\");\r\n    }\r\n    catch (e) {\r\n        logger_1.logger.error(e);\r\n        res.status(500).send(\"Error al guardar los mensajes\");\r\n    }\r\n}));\r\n\n\n//# sourceURL=webpack://clase-16/./src/rutas/api/api.ts?");

/***/ }),

/***/ "./src/rutas/api/carrito.ts":
/*!**********************************!*\
  !*** ./src/rutas/api/carrito.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.carrito = void 0;\r\nconst express_1 = __webpack_require__(/*! express */ \"express\");\r\nconst config_1 = __webpack_require__(/*! ../../config/config */ \"./src/config/config.ts\");\r\nconst messageService_1 = __webpack_require__(/*! ../../services/messageService */ \"./src/services/messageService.ts\");\r\nconst carritoService_1 = __webpack_require__(/*! ../../services/carritoService */ \"./src/services/carritoService.ts\");\r\nexports.carrito = (0, express_1.Router)();\r\nexports.carrito.post(\"/\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const { email } = req.user;\r\n    try {\r\n        res.send(yield carritoService_1.CarritoService.crearCarrito(email));\r\n    }\r\n    catch (e) {\r\n        res.status(500).send(\"No se pudo crear el carrito\");\r\n    }\r\n}));\r\nexports.carrito.post(\"/:id/productos\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        const carritoId = req.params.id;\r\n        const { id, nombre, precio, cantidad, descripcion, codigo, foto } = req.body;\r\n        yield carritoService_1.CarritoService.agregarProductos(carritoId, [\r\n            { id, nombre, precio, stock: cantidad, descripcion, codigo, foto },\r\n        ]);\r\n        res.redirect(\"/carrito\");\r\n    }\r\n    catch (e) {\r\n        res.status(e.status || 500).send(e.message);\r\n    }\r\n}));\r\nexports.carrito.get(\"/finalizar\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const { email, nyap, telefono } = req.user;\r\n    try {\r\n        const { productos } = yield carritoService_1.CarritoService.getByOwnerEmail(email);\r\n        // Notificaciones al admin\r\n        const productList = productos.reduce((prev, current) => prev +\r\n            `<div>Código: ${current.codigo} Nombre: ${current.nombre} Precio: $${current.precio} Cantidad: ${current.stock}</div>`, \"\");\r\n        const mailOptions = {\r\n            from: \"E-commerce\",\r\n            to: config_1.ADMIN_EMAIL,\r\n            subject: \"Nuevo pedido\",\r\n            html: `<h1>Se ha generado un nuevo pedido:</h1>\n      ${productList}`,\r\n        };\r\n        const adminWppNotification = {\r\n            body: `Nuevo pedido de ${nyap}. Mail: ${email}`,\r\n            from: \"whatsapp:+14155238886\",\r\n            to: \"whatsapp:+5491123458427\",\r\n        };\r\n        messageService_1.twilioClient.messages.create(adminWppNotification);\r\n        messageService_1.transporter.sendMail(mailOptions);\r\n        // Notificación al usuario\r\n        const userNotification = {\r\n            body: `Tu pedido al e-commerce ha sido recibido y está en proceso.`,\r\n            from: \"+19895348213\",\r\n            to: telefono,\r\n        };\r\n        messageService_1.twilioClient.messages.create(userNotification);\r\n        // Eliminación del carrito\r\n        yield carritoService_1.CarritoService.deleteByEmail(email);\r\n        res.redirect(\"/\");\r\n    }\r\n    catch (e) {\r\n        res.status(500).send(\"No se pudo concretar la compra\");\r\n    }\r\n}));\r\n\n\n//# sourceURL=webpack://clase-16/./src/rutas/api/carrito.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst socket_io_1 = __webpack_require__(/*! socket.io */ \"socket.io\");\r\nconst http_1 = __webpack_require__(/*! http */ \"http\");\r\nconst minimist_1 = __importDefault(__webpack_require__(/*! minimist */ \"minimist\"));\r\nconst cluster_1 = __importDefault(__webpack_require__(/*! cluster */ \"cluster\"));\r\nconst os = __importStar(__webpack_require__(/*! os */ \"os\"));\r\nconst app_1 = __webpack_require__(/*! ./app */ \"./src/app.ts\");\r\nconst ioSetup_1 = __webpack_require__(/*! ./config/ioSetup */ \"./src/config/ioSetup.ts\");\r\nconst logger_1 = __webpack_require__(/*! ./logger */ \"./src/logger.ts\");\r\nconst { port: parameterPort, mode } = (0, minimist_1.default)(process.argv.slice(2));\r\nconst PORT = process.env.PORT || parameterPort || 8080;\r\n// Server config\r\nconst createServer = (serverPort) => {\r\n    const server = new http_1.Server((0, app_1.createApp)());\r\n    const io = new socket_io_1.Server(server);\r\n    (0, ioSetup_1.setupIo)(io);\r\n    server.listen(PORT, () => {\r\n        logger_1.logger.info(`Server listening on ${PORT}`);\r\n        logger_1.logger.info(`Worker ${process.pid} started`);\r\n    });\r\n    server.on(\"error\", (error) => logger_1.logger.error(`Error en servidor ${error}`));\r\n};\r\nif (mode === \"CLUSTER\" && cluster_1.default.isPrimary) {\r\n    const numCPUs = os.cpus().length;\r\n    for (let i = 0; i < numCPUs; i++) {\r\n        cluster_1.default.fork();\r\n    }\r\n}\r\nelse {\r\n    createServer(PORT);\r\n}\r\nprocess.on(\"uncaughtException\", (err) => {\r\n    logger_1.logger.error(err);\r\n});\r\n\n\n//# sourceURL=webpack://clase-16/./src/server.ts?");

/***/ }),

/***/ "./src/services/carritoService.ts":
/*!****************************************!*\
  !*** ./src/services/carritoService.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.CarritoService = void 0;\r\nconst types_1 = __webpack_require__(/*! ../modelo/types */ \"./src/modelo/types.ts\");\r\nconst carritoDAO_1 = __webpack_require__(/*! ../persistencia/carritoDAO */ \"./src/persistencia/carritoDAO.ts\");\r\nconst carritoDAO = new carritoDAO_1.CarritoDAO();\r\nconst crearCarrito = (mail) => __awaiter(void 0, void 0, void 0, function* () {\r\n    let carrito = yield carritoDAO.getByOwnerEmail(mail);\r\n    if (!carrito) {\r\n        yield carritoDAO.guardar(new types_1.Carrito(mail));\r\n        carrito = yield carritoDAO.getByOwnerEmail(mail);\r\n    }\r\n    return carrito;\r\n});\r\nconst recuperarEInstanciarCarrito = (id) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const { timestamp, productos, owner } = yield obtener(id);\r\n    return new types_1.Carrito(owner, productos, id, timestamp);\r\n});\r\nconst obtener = (id) => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        return yield carritoDAO.obtener(id);\r\n    }\r\n    catch (e) {\r\n        throw { status: 404, message: `Carrito con id ${id} inexistente` };\r\n    }\r\n});\r\nconst getByOwnerEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        return yield carritoDAO.getByOwnerEmail(email);\r\n    }\r\n    catch (e) {\r\n        throw { status: 404, message: `No existe el carrito` };\r\n    }\r\n});\r\nconst agregarProductos = (id, nuevosProductos) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const carrito = yield recuperarEInstanciarCarrito(id);\r\n    /* Los productos están mockeados, por el momento no voy a descontar stock\r\n  \r\n    for (const producto of nuevosProductos) {\r\n      await this.productoService.modificarStock(producto, true);\r\n    }*/\r\n    carrito.agregarProductos(nuevosProductos);\r\n    return yield carritoDAO.modificar(id, carrito);\r\n});\r\nconst deleteByEmail = (mail) => __awaiter(void 0, void 0, void 0, function* () {\r\n    /* Los productos están mockeados, por ahora no hay que sumar stock\r\n    \r\n    const productos: Producto[] = await this.obtenerProductos(id);\r\n    for (const producto of productos) {\r\n      await this.productoService.modificarStock(producto);\r\n    }*/\r\n    yield carritoDAO.deleteByEmail(mail);\r\n});\r\nexports.CarritoService = {\r\n    crearCarrito,\r\n    agregarProductos,\r\n    getByOwnerEmail,\r\n    deleteByEmail,\r\n};\r\n\n\n//# sourceURL=webpack://clase-16/./src/services/carritoService.ts?");

/***/ }),

/***/ "./src/services/messageService.ts":
/*!****************************************!*\
  !*** ./src/services/messageService.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.twilioClient = exports.transporter = void 0;\r\nconst nodemailer_1 = __webpack_require__(/*! nodemailer */ \"nodemailer\");\r\nconst twilio_1 = __importDefault(__webpack_require__(/*! twilio */ \"twilio\"));\r\nconst config_1 = __webpack_require__(/*! ../config/config */ \"./src/config/config.ts\");\r\nexports.transporter = (0, nodemailer_1.createTransport)({\r\n    host: 'gmail',\r\n    port: 587,\r\n    auth: {\r\n        user: config_1.ADMIN_EMAIL,\r\n        pass: config_1.ADMIN_EMAIL_PASS,\r\n    },\r\n});\r\nexports.twilioClient = (0, twilio_1.default)(config_1.TWILIO_SID, config_1.TWILIO_AUTHTOKEN);\r\n\n\n//# sourceURL=webpack://clase-16/./src/services/messageService.ts?");

/***/ }),

/***/ "./src/services/userService.ts":
/*!*************************************!*\
  !*** ./src/services/userService.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.userService = void 0;\r\nconst jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\r\nconst userDAO_1 = __webpack_require__(/*! ../persistencia/userDAO */ \"./src/persistencia/userDAO.ts\");\r\nconst bcrypt = __importStar(__webpack_require__(/*! bcrypt */ \"bcrypt\"));\r\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\nconst config_1 = __webpack_require__(/*! ../config/config */ \"./src/config/config.ts\");\r\ndotenv_1.default.config();\r\nconst PIRVATE_KEY = config_1.JWT_SECRET;\r\nconst userDAO = new userDAO_1.UserDao();\r\nconst createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const { email, password } = user;\r\n    const oldUser = yield userDAO.getByEmail(email);\r\n    if (oldUser) {\r\n        throw {\r\n            status: 409,\r\n            message: \"El usuario ya existe, por favor loguee con sus credenciales.\",\r\n        };\r\n    }\r\n    if (!email || !password) {\r\n        throw {\r\n            status: 400,\r\n            message: \"El email y password son requeridos\",\r\n        };\r\n    }\r\n    const token = jsonwebtoken_1.default.sign({ email: user.email }, PIRVATE_KEY, {\r\n        expiresIn: \"600s\",\r\n    });\r\n    const encryptedPassword = yield bcrypt.hash(password, 10);\r\n    userDAO.guardar(Object.assign(Object.assign({}, user), { password: encryptedPassword }));\r\n    user.token = token;\r\n    return user;\r\n});\r\nconst verifyUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const user = yield userDAO.getByEmail(email);\r\n    if (!user)\r\n        throw { status: 404, message: \"El usuario no existe\" };\r\n    const passwordMatch = yield bcrypt.compare(password, user.password);\r\n    if (passwordMatch) {\r\n        const token = jsonwebtoken_1.default.sign({ id: user.id, email: email }, PIRVATE_KEY, {\r\n            expiresIn: \"600s\",\r\n        });\r\n        user.token = token;\r\n        return user;\r\n    }\r\n});\r\nconst getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const user = yield userDAO.getByEmail(email);\r\n    if (!user)\r\n        throw { status: 404, message: \"El usuario no existe\" };\r\n    return user;\r\n});\r\nexports.userService = {\r\n    createUser,\r\n    verifyUser,\r\n};\r\n\n\n//# sourceURL=webpack://clase-16/./src/services/userService.ts?");

/***/ }),

/***/ "@faker-js/faker":
/*!**********************************!*\
  !*** external "@faker-js/faker" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@faker-js/faker");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cluster":
/*!**************************!*\
  !*** external "cluster" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cluster");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "connect-mongo":
/*!********************************!*\
  !*** external "connect-mongo" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("connect-mongo");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-handlebars":
/*!*************************************!*\
  !*** external "express-handlebars" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-handlebars");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("express-session");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "minimist":
/*!***************************!*\
  !*** external "minimist" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("minimist");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "normalizr":
/*!****************************!*\
  !*** external "normalizr" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("normalizr");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("passport");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "twilio":
/*!*************************!*\
  !*** external "twilio" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("twilio");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("winston");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.ts");
/******/ 	
/******/ })()
;