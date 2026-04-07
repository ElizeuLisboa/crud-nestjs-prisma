"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadoPagoProvider = exports.MERCADO_PAGO = void 0;
const mercadopago_1 = require("mercadopago");
exports.MERCADO_PAGO = "MERCADO_PAGO";
exports.MercadoPagoProvider = {
    provide: exports.MERCADO_PAGO,
    useFactory: () => {
        const client = new mercadopago_1.MercadoPagoConfig({
            accessToken: process.env.MP_ACCESS_TOKEN,
        });
        return {
            payment: new mercadopago_1.Payment(client),
            merchantOrder: new mercadopago_1.MerchantOrder(client),
        };
    },
};
//# sourceMappingURL=mercadopago.provider.js.map