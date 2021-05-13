export default class LongNumber {

    static validate(n: string): boolean{
        return /^-?(0|[1-9]\d*)(?<!-0)$/.test(n);
    }

}