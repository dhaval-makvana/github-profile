import React from 'react';
import styles from './index.module.scss';
import Item from '../listItem/index';

const List = (props) => {
  const { list } = props;
  return (
    <div className={styles.listContainer}>
      {list && list.map((item) => {
        return <Item key={item.id} {...item} />
      })}
    </div>
  )
}

export default List;