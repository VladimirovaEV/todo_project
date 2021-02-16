import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class Item extends React.Component {

  render () {
    const { value, isDone, onClickDone, id, onClickDelete } = this.props;
    return (
      <span className={
    classnames({
    [styles.item]: true,
    [styles.done]: isDone
  })
}>
<Checkbox className={classnames({
  [styles.checkbox]:true,
  [styles.checkboxCheck]:isDone
})}
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        onClick={() => onClickDone(id)}
      />
<IconButton className={styles.icon} 
        aria-label="delete" 
        color="primary">
        <DeleteIcon        
        onClick={() => onClickDelete(id)}
      />
      </IconButton>
{value}
</span>);
  }
}

Item.defaultProps = {
  isDone: false
  }




	export default Item;

