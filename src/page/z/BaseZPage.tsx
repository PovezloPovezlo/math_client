import React, {useRef, useState} from "react";
import {Card, CardContent, TextField} from "@material-ui/core";
import { Typography } from "@material-ui/core";
import LongNumber from "../../base/LongNumber";
import {API} from "../../api/API";
import InfoCard from "../../component/InfoCard";
import Author from "../../api/Author";
import {ModuleInfo} from "../../api/ModuleInfo";

interface BaseZPage {
    apiMethod: string,
    modules: ModuleInfo[],
    validator?: (t: string) => boolean
}

const BaseZPage: React.FC<BaseZPage> = ({apiMethod, modules,  validator}) => {
    if(!validator){
        validator = LongNumber.validate;
    }

    const [number1, setNumber1] = useState('1');
    let output = useRef<HTMLHeadingElement>(null);
    const update = (a: string, b: string) => {
        API.request(apiMethod, {a: a, b: b})
            .then(result => {
                // @ts-ignore
                output.current.innerText = result.response;
            })
            .catch(err => {
                alert(err.message);
            });
    }

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        if(validator && validator(val)){
            setNumber1(val);
            update(val, number2);
        }
    };

    const [number2, setNumber2] = useState('1');
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        if(validator && validator(val)){
            setNumber2(val);
            update(number1, val);
        }
    };

    return (
        <form noValidate autoComplete="off">
            <TextField id="number1" fullWidth value={number1} onChange={handleChange1} type="text" variant="outlined" />
            <br />
            <br />
            <TextField id="number2" fullWidth value={number2} onChange={handleChange2} type="text" variant="outlined" />
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

export default BaseZPage;