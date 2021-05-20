import React from 'react';
import {Card, CardContent} from "@material-ui/core";
import SumPage from "./SumPage";
import Page from "../Page";
import SubPage from "./SubPage";
import MulPage from "./MulPage";
import DivPage from "./DivPage";
import GcfPage from "./GcfPage";
import ModPage from "./ModPage";
import DerPage from "./DerPage";
import NmrPage from "./NmrPage";

const PPage: React.FC = (props) => {
    // noinspection NonAsciiCharacters
    const tabs = {
        "Сложение": <SumPage />,
        "Вычитание": <SubPage />,
        "Умножение": <MulPage />,
        "Деление": <DivPage />,
        "Остаток": <ModPage />,
        //"НОД": <GcfPage />,
        "Производная": <DerPage />,
        "Кратн в прост": <NmrPage />,
    };

    return (
        <Page tabs={tabs} />
    )
};

export default PPage;