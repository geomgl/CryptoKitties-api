"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const user_repository_1 = require("../repositories/user.repository");
const user_1 = require("../models/user");
const login_1 = require("../models/login");
const jsonwebtoken_1 = require("jsonwebtoken");
const bcrypt = require("bcrypt");
let LoginController = class LoginController {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    // register a new user
    async createUser(user) {
        let hashedPassword = await bcrypt.hash(user.password, 10);
        console.log(user);
        var userToStore = new user_1.User();
        //userToStore.user_id = user.user_id;
        userToStore.first_name = user.first_name;
        userToStore.last_name = user.last_name;
        userToStore.email = user.email;
        // userToStore.profile_pic = user.profile_pic; 
        userToStore.password = hashedPassword;
        console.log(userToStore);
        let storedUser = await this.userRepo.create(userToStore);
        storedUser.password = "";
        return storedUser;
    }
    async login(login) {
        var users = await this.userRepo.find();
        var email = login.email;
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            if (user.email == email && await bcrypt.compare(login.password, user.password)) {
                var jwt = jsonwebtoken_1.sign({
                    user: {
                        id: user.user_id,
                        firstName: user.first_name,
                        email: user.email
                    },
                    anything: "hello"
                }, 'shh', {
                    issuer: 'auth.ix.co.za',
                    audience: 'ix.co.za',
                });
                return {
                    token: jwt,
                };
            }
        }
        //return "Error";
        throw new rest_1.HttpErrors.Unauthorized('Incorrect username and/or password!');
    }
};
__decorate([
    rest_1.post('/register'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "createUser", null);
__decorate([
    rest_1.post('/login'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_1.Login]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "login", null);
LoginController = __decorate([
    __param(0, repository_1.repository(user_repository_1.UserRepo.name)),
    __metadata("design:paramtypes", [user_repository_1.UserRepo])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map