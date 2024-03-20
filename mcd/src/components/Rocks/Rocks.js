import React, { Component } from 'react';
import Rock from './Rock/Rock';
import styles from './Rocks.module.css';

class Rocks extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Lista skał</h2>
        <Rock />
        <Rock />
        <Rock />
        <Rock />
      </div>
    );
  }
}

export default Rocks;
