import React, { memo } from 'react';
import { Button, Grid, Paper, TextField } from '@material-ui/core';

const AddTodo = memo(props => (
    <Paper style={{ margin: 16, padding: 16 }}>
        <Grid container>
            <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
                <TextField
                    placeholder="Add Todo here"
                    value={props.inputValue}
                    onChange={props.onInputChange}
                    onKeyPress={props.onInputKeyPress}
                    fullWidth
                />
            </Grid>
            <Grid xs={2} md={1} item>
                <Button fullWidth color="primary" variant="text" onClick={props.onButtonClick}>
                    Add
                </Button>
            </Grid>
        </Grid>
    </Paper>
));

export default AddTodo;
