import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: '#f0f0f0', // MUI background color
  },
  textField: {
    flex: 1,
    marginRight: theme.spacing(2),
  },
  addButton: {
    marginLeft: theme.spacing(2),
  },
}));

const TodoForm = ({ onAdd }) => {
  const classes = useStyles();
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddClick = () => {
    if (inputText.trim() !== '') {
      onAdd(inputText.trim());
      setInputText('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddClick();
    }
  };

  return (
    <Paper className={classes.root} elevation={3}>
      <TextField
        className={classes.textField}
        variant="outlined"
        placeholder="Add new todo"
        value={inputText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <Button
        className={classes.addButton}
        variant="contained"
        color="primary"
        onClick={handleAddClick}
      >
        Add
      </Button>
    </Paper>
  );
};

export default TodoForm;
  