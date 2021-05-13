import React from 'react';
import Page from "../Page";
import MulPage from './MulPage';
import SubPage from './SubPage';
import SumPage from './SumPage';
import DivPage from "./DivPage";

const ZPage: React.FC = (props) => {
    // noinspection NonAsciiCharacters
    const tabs = {
        "Сложение": <SumPage />,
        "Вычитание": <SubPage />,
        "Умножение": <MulPage />,
        "Деление": <DivPage />,
    };

    return (
        <Page tabs={tabs} />
    )
};

export default ZPage;