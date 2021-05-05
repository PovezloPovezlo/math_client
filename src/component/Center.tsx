import React, {PropsWithChildren} from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    marginAutoContainer: {
        display: 'flex',
    },
    marginAutoItem: {
        width: '70vw',
        margin: 'auto'
    },
}))

const Center: React.FC<PropsWithChildren<any>> = ({children}) => {
    const classes = useStyles();
    return (
        <div className={classes.marginAutoContainer}>
            <div className={classes.marginAutoItem}>
                {children}
            </div>
        </div>
    )
}

export default Center;