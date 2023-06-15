import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './main/Calculator';

class Title extends React.Component {
  componentDidMount() {
    document.title = "Calculator"
  }

  render() {
    return <h1>Calculator</h1>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Title/>
    <Calculator />
    </>
  </React.StrictMode>
);

