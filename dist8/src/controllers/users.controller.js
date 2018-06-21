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
const user_repository_1 = require("../repositories/user.repository");
const rest_1 = require("@loopback/rest");
const donation_repository_1 = require("../repositories/donation.repository");
//import { Stripe } from '@ionic-native/stripe';
const cryptoanimal_repository_1 = require("../repositories/cryptoanimal.repository");
let UserController = class UserController {
    constructor(donationRepo, userRepo, cryptoanimalRepo) {
        this.donationRepo = donationRepo;
        this.userRepo = userRepo;
        this.cryptoanimalRepo = cryptoanimalRepo;
    }
    async findUsers() {
        return await this.userRepo.find();
    }
    async findUsersById(id) {
        // Check for valid ID
        let userExists = !!(await this.userRepo.count({ id }));
        if (!userExists) {
            throw new rest_1.HttpErrors.BadRequest(`user ID ${id} does not exist`);
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
    async findCryptoanimalsByUserId(user_id) {
        let userExists = !!(await this.userRepo.count({ user_id }));
        if (!userExists) {
            throw new rest_1.HttpErrors.BadRequest('ID ${user_id} does not exist');
        }
        return await this.cryptoanimalRepo.find({
            where: {
                user_id: user_id
            }
        });
    }
};
__decorate([
    rest_1.get('/users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findUsers", null);
__decorate([
    rest_1.get('/users/{id}'),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findUsersById", null);
__decorate([
    rest_1.get('/users/{user_id}/donations'),
    __param(0, rest_1.param.path.number('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findDonationsByUserId", null);
__decorate([
    rest_1.get('/users/{user_id}/cryptoanimals'),
    __param(0, rest_1.param.path.number('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findCryptoanimalsByUserId", null);
UserController = __decorate([
    __param(0, repository_1.repository(donation_repository_1.DonationRepository)),
    __param(1, repository_1.repository(user_repository_1.UserRepo)),
    __param(2, repository_1.repository(cryptoanimal_repository_1.CryptoanimalRepository)),
    __metadata("design:paramtypes", [donation_repository_1.DonationRepository,
        user_repository_1.UserRepo,
        cryptoanimal_repository_1.CryptoanimalRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=users.controller.js.map