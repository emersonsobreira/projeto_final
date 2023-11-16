"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitacoesModule = void 0;
const common_1 = require("@nestjs/common");
const solicitacoes_service_1 = require("./solicitacoes.service");
const solicitacoes_controller_1 = require("./solicitacoes.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let SolicitacoesModule = class SolicitacoesModule {
};
exports.SolicitacoesModule = SolicitacoesModule;
exports.SolicitacoesModule = SolicitacoesModule = __decorate([
    (0, common_1.Module)({
        controllers: [solicitacoes_controller_1.SolicitacoesController],
        providers: [solicitacoes_service_1.SolicitacoesService],
        imports: [prisma_module_1.PrismaModule],
    })
], SolicitacoesModule);
//# sourceMappingURL=solicitacoes.module.js.map