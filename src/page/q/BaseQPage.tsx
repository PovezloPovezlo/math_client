import React, {useRef, useState} from "react";
import {Card, CardContent, Divider, TextField} from "@material-ui/core";
import { Typography } from "@material-ui/core";
import LongNumber from "../../base/LongNumber";
import {API} from "../../api/API";
import InfoCard from "../../component/InfoCard";
import {ModuleInfo} from "../../api/ModuleInfo";
import NLongNumber from "../../base/NLongNumber";

interface BaseQPageProps {
    apiMethod: string,
    modules: ModuleInfo[],
}

const BaseQPage: React.FC<BaseQPageProps> = ({apiMethod, modules}) => {
    const validatorNumerator = LongNumber.validate;
    const validatorDenominator = NLongNumber.validate;
    let output = useRef<HTMLHeadingElement>(null);

    const update = (aNumerator: string, aDenominator: string, bNumerator: string, bDenominator: string) => {
        if(aNumerator !== "" && aNumerator !== "-" && aDenominator !== "" && bNumerator !== "" && bNumerator !== "-" && bDenominator !== "") {
            const a = aNumerator + "/" + aDenominator;
            const b = bNumerator + "/" + bDenominator;
            API.request(apiMethod, {a: a, b: b})
                .then(result => {
                    // @ts-ignore
                    output.current.innerText = result.response;
                })
                .catch(err => {
                    alert(err.message);
                });
        }
    };

    const [number1Numerator, setNumber1Numerator] = useState('1');
    const handleChange1Numerator = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        if(validatorNumerator(val)){
            setNumber1Numerator(val);
            update(val, number1Denominator, number2Numerator, number2Denominator);
        }else if(val === '' || val === '-'){
            setNumber1Numerator(val);
        }
    };

    const [number1Denominator, setNumber1Denominator] = useState('1');
    const handleChange1Denominator = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        if(validatorNumerator(val)){
            setNumber1Denominator(val);
            update(number1Numerator, val, number2Numerator, number2Denominator);
        }else if(val === ''){
            setNumber1Denominator(val);
        }
    };

    const [number2Numerator, setNumber2Numerator] = useState('1');
    const handleChange2Numerator = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        if(validatorNumerator(val)){
            setNumber2Numerator(val);
            update(number1Numerator, number1Denominator, val, number2Denominator);
        }else if(val === '' || val === '-'){
            setNumber2Numerator(val);
        }
    };

    const [number2Denominator, setNumber2Denominator] = useState('1');
    const handleChange2Denominator = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        if(validatorDenominator(val)){
            setNumber2Denominator(val);
            update(number1Numerator, number1Denominator, number2Numerator, val);
        }else if(val === ''){
            setNumber2Denominator(val);
        }
    };

    return (
        <form noValidate autoComplete="off">
            <TextField label="Числитель 1 числа" id="number1Numerator" fullWidth value={number1Numerator} onChange={handleChange1Numerator} type="text" variant="outlined" />
            <br />
            <hr />
            <TextField label="Знаменатель 1 числа" id="number1Denominator" fullWidth value={number1Denominator} onChange={handleChange1Denominator} type="text" variant="outlined" />
            <br />
            <br />
            <br />
            <TextField label="Числитель 2 числа" id="number2Numerator" fullWidth value={number2Numerator} onChange={handleChange2Numerator} type="text" variant="outlined" />
            <br />
            <hr />
            <TextField label="Знаменатель 2 числа" id="number2Denominator" fullWidth value={number2Denominator} onChange={handleChange2Denominator} type="text" variant="outlined" />
            <br />
            <br />
            <Card>
                <CardContent>
                    <Typography variant="h5" color="primary">
                        Результат
                    </Typography>
                    <Typography variant="h6" color="textPrimary" style={{ wordWrap: 'break-word' }} ref={output}>#</Typography>
                </CardContent>
            </Card>
            <br />
            <InfoCard modules={modules} />

        </form>
    )
};

export default BaseQPage;