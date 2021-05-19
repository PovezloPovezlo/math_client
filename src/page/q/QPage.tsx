import React from 'react';
import Page from "../Page";
import SumPage from "./SumPage";
import SubPage from "./SubPage";
import MulPage from "./MulPage";
import DivPage from "./DivPage";

const QPage: React.FC = (props) => {
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

export default QPage;