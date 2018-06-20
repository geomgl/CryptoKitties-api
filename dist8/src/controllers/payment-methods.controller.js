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
const rest_1 = require("@loopback/rest");
const payment_repository_1 = require("../repositories/payment.repository");
const paymentmethod_1 = require("../models/paymentmethod");
let PaymentController = class PaymentController {
    constructor(paymentRepo) {
        this.paymentRepo = paymentRepo;
    }
    async paymentMethods(paymentMethod) {
        if (!paymentMethod) {
            throw new rest_1.HttpErrors.Unauthorized('No Payment Methods');
        }
        // how to pass parameters into endpoint:
        // how to secure the endpoint 
        // quesrt parameter jwt as a string and throw an error if no token pprovided
        // user path parameters when tyring to access a specific id on a resource, otherwise use query parameters
        // in front end you would put "?param1= whateverparam1is 
        return await this.paymentRepo.create(paymentMethod);
    }
    async findPaymentMethods() {
        return await this.paymentRepo.find();
    }
};
__decorate([
    rest_1.post('/payment-methods'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paymentmethod_1.PaymentMethod]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "paymentMethods", null);
__decorate([
    rest_1.get('/payment-methods'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "findPaymentMethods", null);
PaymentController = __decorate([
    __param(0, repository_1.repository(payment_repository_1.PaymentRepository.name)),
    __metadata("design:paramtypes", [payment_repository_1.PaymentRepository])
], PaymentController);
exports.PaymentController = PaymentController;
//# sourceMappingURL=payment-methods.controller.js.map