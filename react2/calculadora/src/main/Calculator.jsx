import React, { Component } from "react";
import "./Calculator.css";
import Button from "../components/Button";
import Display from "../components/Display";

export default class Calculator extends Component {
  constructor(props) {
    super(props)

    this.clearMemory = this.clearMemory.bind(this)
    this.setOperation = this.setOperation.bind(this)
    this.addDgit = this.addDgit.bind(this)
  }

  clearMemory() {
    console.log("Clear");
  }

  setOperation(operation) {
    console.log(operation);
  }

  addDgit(n) {
    console.log();
  }

  render() {
    return (
      <div className="calculator">
        <Display value="8000" />
        <Button label="AC" click={this.clearMemory} triple/>
        <Button label="/" click={this.setOperation} operation/>
        <Button label="7" click={this.addDgit}/>
        <Button label="8" click={this.addDgit}/>
        <Button label="9" click={this.addDgit}/>
        <Button label="*" click={this.setOperation} operation/>
        <Button label="4" click={this.addDgit}/>
        <Button label="5" click={this.addDgit}/>
        <Button label="6" click={this.addDgit}/>
        <Button label="-" click={this.setOperation} operation/>
        <Button label="1" click={this.addDgit}/>
        <Button label="2" click={this.addDgit}/>
        <Button label="3" click={this.addDgit}/>
        <Button label="+" click={this.setOperation} operation />
        <Button label="0" click={this.addDgit} double/>
        <Button label="." click={this.addDgit}/>
        <Button label="=" click={this.setOperation} operation />
      </div>
    );
  }
}
