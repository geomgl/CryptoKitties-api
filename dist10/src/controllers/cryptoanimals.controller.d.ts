import { CryptoanimalRepository } from "../repositories/cryptoanimal.repository";
import { Cryptoanimal } from "../models/cryptoanimal";
export declare class CryptoanimalController {
    private cryptoanimalRepo;
    constructor(cryptoanimalRepo: CryptoanimalRepository);
    paymentMethods(cryptoanimal: Cryptoanimal): Promise<Cryptoanimal>;
    findCharities(): Promise<Cryptoanimal[]>;
}
