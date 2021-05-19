import React, {useRef, useState} from "react";
import {Button, Card, CardContent, Grid, IconButton, TextField} from "@material-ui/core";
import { Typography } from "@material-ui/core";
import {API} from "../../api/API";
import InfoCard from "../../component/InfoCard";
import {ModuleInfo} from "../../api/ModuleInfo";
import Polynomial from "../../base/Polynomial";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

interface BasePPageProps {
    apiMethod: string,
    modules: ModuleInfo[],
}

const BasePPageOneInput: React.FC<BasePPageProps> = ({apiMethod, modules}) => {
    const validator = Polynomial.validatePart;
    const [output, setOutput] = useState([<span>#</span>]);

    const buttonStyles = {
        marginTop: 4,
        marginBottom: 4
    };
    const xStyles = {
        fontSize: 30,
        marginLeft: 10
    };
    const inputStyles = {
        maxWidth: 100
    };

    const [, __redraw] = useState(0); // костыль, но без этого не будет нормально работать добавление/убирание коэффициентов многочлена
    const redraw = () => __redraw(Math.random);

    const update = () => {
        const a = Polynomial.toString(p1);

        if(a !== "") {
            API.request(apiMethod, {a: a})
                .then(result => {
                    // @ts-ignore
                    const textResponse: string = result.response;

                    const res = [];
                    for (const p of textResponse.split(' ')){
                        let part = [];

                        const p12 = p.split('*');
                        const coefficient = p12[0];

                        if(coefficient === "0") continue;

                        let degree: string;

                        if(p12.length >= 2) {
                            const p23 = p12[1].split('^');
                            degree = p23[1];
                        }else{
                            degree = "0";
                        }

                        if(degree === "0"){
                            part.push(<span style={xStyles}>{coefficient}</span>);
                            part.push(<span style={xStyles}><sup>&nbsp;</sup></span>); // выглядит странно и костыльно, но я не хочу разбираться в чем дело
                        }else{
                            part.push(<span style={xStyles}>{coefficient}</span>);
                            part.push(<span style={xStyles}>x<sup>{degree}</sup></span>);
                        }

                        res.push(
                            <Grid item>
                                {part}
                            </Grid>
                        );

                        res.push(
                            <Grid item>
                                <AddIcon style={{marginTop: 15, marginLeft: 10}} />
                            </Grid>
                        );
                    }

                    if(res.length > 1) {
                        res.pop();
                    }else{
                        let part = [];
                        part.push(<span style={xStyles}>0</span>);
                        part.push(<span style={xStyles}><sup>&nbsp;</sup></span>);
                        res.push(
                            <Grid item>
                                {part}
                            </Grid>
                        );
                    }
                    setOutput(res);
                })
                .catch(err => {
                    alert(err.message);
                });
        }
    };

    const [p1, __setP1] = useState(['1']);
    const handleChangeP1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        const id = parseInt(event.target.id.substr(3));

        if(validator(val)){
            p1[id] = val; // так надо!
            __setP1(p1);
            redraw();
            if(Polynomial.validate(p1)) {
                update();
            }
        }else if(val === ''){
            p1[id] = val; // нельзя отсюда эту строку выносить
            __setP1(p1);
            redraw();
        }
    };

    const addP1Element = () => {
        p1.push('1');
        __setP1(p1);
        update();
        redraw();
    }
    const removeP1Element = () => {
        if(p1.length > 1) {
            p1.pop();
            update();
            redraw();
        }
    }

    const p1Inputs = [];
    for(const [_i, _val] of Object.entries(p1)){
        _i !== "0" && p1Inputs.push(
            <AddIcon style={{marginTop: 28}} />
        );

        p1Inputs.push(
            <Grid item>
                <TextField size="medium" style={inputStyles} id={"p1_"+_i} value={_val} onChange={handleChangeP1} type="text" variant="outlined" />
                {_i !== "0" &&
                <span style={xStyles}>x<sup>{_i}</sup></span>
                }
            </Grid>
        )
    }

    return (
        <form noValidate autoComplete="off">
            <Grid container spacing={3} alignItems="flex-start">
                {p1Inputs}
                <Grid item>
                    <Card>
                        <IconButton color="primary" style={buttonStyles} size="medium" onClick={addP1Element}><AddIcon /></IconButton>
                        <IconButton style={buttonStyles} size="medium" onClick={removeP1Element}><RemoveIcon /></IconButton>
                    </Card>
                </Grid>
            </Grid>
            <br />
            <Card>
                <CardContent>
                    <Typography variant="h5" color="primary">
                        Результат
                    </Typography>
                    <Grid spacing={1} container>
                        {output}
                    </Grid>
                </CardContent>
            </Card>
            <br />
            <InfoCard modules={modules} />

        </form>
    )
};

export default BasePPageOneInput;