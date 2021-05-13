import {Card, CardContent, Typography} from '@material-ui/core';
import React from 'react';
import Center from "../component/Center";

const EmptyPage: React.FC = (props) => {
    return (
        <Center>
            <Card style={{maxWidth: '500px'}}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Привет!
                    </Typography>
                    <Typography>
                        Это приложение для работы с длинными числами, рациональными дробями и многочленами.<br />
                        Выбери нужный раздел в левом меню и начни работу!
                    </Typography>
                </CardContent>
            </Card>
        </Center>
    );
};

export default EmptyPage;