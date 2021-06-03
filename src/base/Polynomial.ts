import RationalFraction from "./RationalFraction";
import LongNumber from "./LongNumber";

export default class Polynomial {

    static validate(n: string[]): boolean{
        for(const el of n){
            if(!LongNumber.validate(el)){ //todo validate RationalFraction
                return false;
            }
        }
        return true;
    }
    static validatePart(el: string): boolean{
        if(!LongNumber.validate(el)){ //todo validate RationalFraction
            return false;
        }
        return true;
    }

    static toString(n: string[][]): string{
        let r = "";
        for(const [i, el] of Object.entries(n)){
            if(parseInt(i) > 0) {
                r += el[0] + "/" + el[1] + "*x^" + i;
            }else{
                r += el[0] + "/" + el[1];
            }
            r += " ";
        }
        return r.trim();
    }

}