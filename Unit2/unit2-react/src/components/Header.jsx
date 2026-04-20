import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>My App</h1>
      <nav>
        <a href="#" style={styles.link}>Home</a>
        <a href="#" style={styles.link}>About</a>
        <a href="#" style={styles.link}>Contact</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#282c34',
    padding: '10px 20px',
    color: 'white'
  },
  title: {
    margin: 0
  },
  link: {
    margin: '0 10px',
    color: 'white',
    textDecoration: 'none'
  }
};

export default Header;