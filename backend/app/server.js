const { default: mongoose } = require("mongoose");
const { AllRoutes } = require("./router/router");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cors = require("cors");

module.exports = class Application {
    #express = require("express");
    #app = this.#express();
    #PORT;
    #DB_URI;
    constructor(PORT, DB_URL) {
        this.#PORT = PORT;
        this.#DB_URI = DB_URL;
        this.configApplication();
        this.connectTOMongoDB();
        this.createServer();
        this.createRoutes();
        this.errorHandling();
    }
    configApplication() {
        this.#app.use(cors());
        this.#app.use(express.json());
        this.#app.use(express.urlencoded({ extended: true }));
        this.#app.use(express.static(path.join(__dirname, "..", "public")));
        this.#app.use(
            "/api-doc",
            swaggerUI.serve,
            swaggerUI.setup(
                swaggerJsDoc({
                    swaggerDefinition: {
                        openapi: "3.0.0",
                        info: {
                            title: "Store Project",
                            version: "2.0.0",
                            description: "سایت فروشگاهی",
                            contact: {
                                name: "Store Project Website",
                                url: "https://github.com/G2-tech-intern/Store-project",
                                email: "storeproject947@gmail.com ",
                            },
                        },
                        servers: [
                            {
                                url: "http://localhost:5000",
                            },
                        ],
                        components: {
                            securitySchemes: {
                                BearerAuth: {
                                    type: "http",
                                    scheme: "bearer",
                                    bearerFormat: "JWT",
                                },
                            },
                        },
                        security: [{ BearerAuth: [] }],
                    },
                    apis: ["./app/router/**/*.js"],
                }),
                { explorer: true }
            )
        );
    }

    createServer() {
        const http = require("http");
        const server = http.createServer(this.#app);
        server.listen(this.#PORT, () => {
            console.log("run > http://localhost:" + this.#PORT);
        });
    }
    connectTOMongoDB() {
        mongoose
            .connect(this.#DB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then((res) => {
                console.log("Database connected");
            })
            .catch((error) => {
                console.log(error);
            });
    }
    createRoutes() {
        this.#app.use(AllRoutes);
    }
    errorHandling() {
        this.#app.use((req, res, next) => {
            next(createError.NotFound("The desired address was not found"));
        });
        this.#app.use((error, req, res, next) => {
            const serverError = createError.InternalServerError();
            const statusCode = error?.status || serverError.status;
            const message = error?.message || serverError.message;
            return res.status(statusCode).json({
                data: null,
                errors: [statusCode, message],
            });
        });
    }
};
