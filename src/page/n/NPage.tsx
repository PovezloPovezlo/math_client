import React from 'react';
import Page from "../Page";
import MulPage from './MulPage';
import SubPage from './SubPage';
import DivPage from "./DivPage";
import SumPage from './SumPage';
import GcfPage from "./GcfPage";
import LcmPage from "./LcmPage";
import ModPage from "./ModPage";

const NPage: React.FC = (props) => {
    // noinspection NonAsciiCharacters
    const tabs = {
        "Сложение": <SumPage />,
        "Вычитание": <SubPage />,
        "Умножение": <MulPage />,
        "Деление": <DivPage />,
        "Остаток": <ModPage />,
        "НОД": <GcfPage />,
        "НОК": <LcmPage />,
    };

    return (
        <Page tabs={tabs} />
    )
};

export default NPage;