import {Avatar, Button, CardContent, Grid, GridList, GridListTile} from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { Card } from "@material-ui/core";
import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import Author from "../api/Author";
import {ModuleInfo} from "../api/ModuleInfo";

interface InfoCardProps {
    modules: ModuleInfo[]
}

const InfoCard: React.FC<InfoCardProps> = (props) => {
    const cards = [];
    for(const module of props.modules){
        const author = module.author;

        cards.push(
            <Grid item sm style={{width: 300}}>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar onClick={() => window.open(author.link)} src={author.avatar}/>
                        }
                        title={module.author.name}
                        subheader={
                            <span>Автор функции <b>{module.name}</b></span>
                        }
                    />
                    <CardContent>
                        <Button
                            href={module.githubUrl}
                            target="_blank"
                            variant="contained"
                            color="default"
                            startIcon={<GitHubIcon/>}
                        >
                            Код на GitHub
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        );
    }

    return (
        <Grid container spacing={3}>
            {cards}
        </Grid>
    );
}

export default InfoCard;