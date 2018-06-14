"use strict";
// Uncomment these imports to begin using these cool features!
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
const user_repository_1 = require("../repositories/user.repository");
const rest_1 = require("@loopback/rest");
const user_1 = require("../models/user");
const jsonwebtoken_1 = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const login_1 = require("../models/login");
const donation_repository_1 = require("../repositories/donation.repository");
//import { Stripe } from '@ionic-native/stripe';
let UsersController = class UsersController {
    constructor(userRepo, donationRepo) {
        this.userRepo = userRepo;
        this.donationRepo = donationRepo;
    }
    async createUser(user) {
        if (!user.username || !user.password || !user.firstName || !user.lastName || !user.email) {
            throw new rest_1.HttpErrors.BadRequest('Please input all fields');
        }
        let userExists = !!(await this.userRepo.count({ username: user.username }));
        if (userExists) {
            throw new rest_1.HttpErrors.BadRequest('Username already exists');
        }
        //bcrypt is a very slow algorithm, make the generation of hashes take a very long time
        let hashedPassword = await bcrypt.hash(user.password, 10);
        var userToStore = new user_1.User();
        userToStore.firstname = user.firstname;
        userToStore.lastname = user.lastname;
        userToStore.email = user.email;
        userToStore.password = user.hashedPassword;
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
                        id: user.id,
                        firstname: user.firstname,
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
        throw new rest_1.HttpErrors.Unauthorized('User not found');
        //return "Error";
    }
    async loginWithQuery(login) {
        var users = await this.userRepo.find({
            where: {
                and: [{ email: login.email }, { password: login.password }],
            },
        });
        if (users.length == 0) {
            throw new rest_1.HttpErrors.NotFound('User not found');
        }
        return users[0];
    }
    async findUsers() {
        return await this.userRepo.find();
    }
    async findUsersById(id) {
        let userExists = !!(await this.userRepo.count({ id }));
        if (!userExists) {
            throw new rest_1.HttpErrors.BadRequest('ID ${id} does not exist');
        }
        return await this.userRepo.findById(id);
    }
    async findDonationsByUserId(user_id) {
        let userExists = !!(await this.userRepo.count({ user_id }));
        if (!userExists) {
            throw new rest_1.HttpErrors.BadRequest('ID ${user_id} does not exist');
        }
        return await this.donationRepo.find({
            where: {
                user_id: user_id
            }
        });
    }
};
__decorate([
    rest_1.post('/registration'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    rest_1.post('/login'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_1.Login]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    rest_1.post('/login-with-query'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_1.Login]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "loginWithQuery", null);
__decorate([
    rest_1.get('/users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findUsers", null);
__decorate([
    rest_1.get('/users/{id}'),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findUsersById", null);
__decorate([
    rest_1.get('/users/{user_id}/donations'),
    __param(0, rest_1.param.path.number('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findDonationsByUserId", null);
UsersController = __decorate([
    __param(0, repository_1.repository(user_repository_1.UserRepository)),
    __param(1, repository_1.repository(donation_repository_1.DonationRepository)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        donation_repository_1.DonationRepository])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map