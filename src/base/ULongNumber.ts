export default class ULongNumber {

    static validate(n: string): boolean{
        return /^(0|[1-9]\d*)$/.test(n);
    }

}