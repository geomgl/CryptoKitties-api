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
const charity_repository_1 = require("../repositories/charity.repository");
const rest_1 = require("@loopback/rest");
const project_repository_1 = require("../repositories/project.repository");
const donation_repository_1 = require("../repositories/donation.repository");
// Uncomment these imports to begin using these cool features!
// import {inject} from @loopback/context;
let CharitiesController = class CharitiesController {
    constructor(charityRepo, projectRepo, donationRepo) {
        this.charityRepo = charityRepo;
        this.projectRepo = projectRepo;
        this.donationRepo = donationRepo;
    }
    async findCharities() {
        return await this.charityRepo.find();
    }
    async findCharitiesById(charity_id) {
        let charityExists = !!(await this.charityRepo.count({ charity_id }));
        if (!charityExists) {
            throw new rest_1.HttpErrors.BadRequest('ID ${charity_id} does not exist');
        }
        return await this.charityRepo.findById(charity_id);
    }
    async findProjectsByCharityId(charity_id) {
        let charityExists = !!(await this.charityRepo.count({ charity_id }));
        if (!charityExists) {
            throw new rest_1.HttpErrors.BadRequest('ID ${charity_id} does not exist');
        }
        return await this.projectRepo.find({
            where: {
                charity_id: charity_id
            }
        });
    }
    async findDonationsByCharityId(charity_id) {
        let charityExists = !!(await this.charityRepo.count({ charity_id }));
        if (!charityExists) {
            throw new rest_1.HttpErrors.BadRequest('ID ${charity_id} does not exist');
        }
        return await this.donationRepo.find({
            where: {
                charity_id: charity_id
            }
        });
    }
};
__decorate([
    rest_1.get('/charities'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CharitiesController.prototype, "findCharities", null);
__decorate([
    rest_1.get('/charities/{charity_id}'),
    __param(0, rest_1.param.path.number('charity_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CharitiesController.prototype, "findCharitiesById", null);
__decorate([
    rest_1.get('/charities/{charity_id}/projects'),
    __param(0, rest_1.param.path.number('charity_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CharitiesController.prototype, "findProjectsByCharityId", null);
__decorate([
    rest_1.get('/charities/{charity_id}/donations'),
    __param(0, rest_1.param.path.number('charity_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CharitiesController.prototype, "findDonationsByCharityId", null);
CharitiesController = __decorate([
    __param(0, repository_1.repository(charity_repository_1.CharityRepository.name)),
    __param(1, repository_1.repository(project_repository_1.ProjectRepository.name)),
    __param(2, repository_1.repository(donation_repository_1.DonationRepository.name)),
    __metadata("design:paramtypes", [charity_repository_1.CharityRepository,
        project_repository_1.ProjectRepository,
        donation_repository_1.DonationRepository])
], CharitiesController);
exports.CharitiesController = CharitiesController;
//# sourceMappingURL=charities.controller.js.map