import * as  yup from "yup";
import valid from "card-validator";
export const CardValidSchema = yup.object().shape({
    cardNumber: yup.string().test("test-number", "Creadit Card number is invalid", value => valid.number(parseInt(value)).isValid),
    cardName: yup.string().min(5),
    cardSecurityCode: yup.string().min(3).max(3),
    cardExpiration: yup.string().min(4).max(4)
}).required();

