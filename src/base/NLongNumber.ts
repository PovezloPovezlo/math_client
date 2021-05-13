export default class NLongNumber {

    static validate(n: string): boolean{
        return /^([1-9]\d*)$/.test(n);
    }

}