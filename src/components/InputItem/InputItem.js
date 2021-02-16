import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
    state = {
        inputValue: '',
        inputError: false,
    };
onButtonClick = () => {
  if(this.state.inputValue === '') {
    this.setState({inputError: true, helperText: 'Введите задание!'});
  } else if (this.props.items.find(item => item.value === this.state.inputValue.toUpperCase() )) {
      this.setState({inputError: true, helperText: 'Такое задание уже есть!'});
    } else {
      this.setState({
        inputValue: '',
        inputError: false,
        helperText: ''
      });
      this.props.onClickAdd(this.state.inputValue.toUpperCase());
    }
  };



render() {

    return (
        <div className={styles.inputWrap}>
                <TextField
                    className={styles.inputField}
                    id="outlined-full-width"
                    label="Задача"
                    style={{ margin: 0 }}
                    placeholder="Введите задачу"
                    fullWidth
                    value={this.state.inputValue.toUpperCase()}
                    onChange={event => this.setState({ inputValue: event.target.value })}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    inputError = {this.state.inputError}
                    helperText = {this.state.helperText}
                />
            <Button variant="contained"
                color="primary"
                fullWidth
                onClick={this.onButtonClick}>
                Добавить Задачу
      </Button>
        </div>
    );
    }
}



export default InputItem;