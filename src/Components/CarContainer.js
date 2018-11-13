import React, { Component } from "react";
import ReactDOM from "react-dom";

import CarAnimation from "./CarAnimation";

class CarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rerender: false
        };
    }

    switch = () => {
        setInterval(() => {
            this.setState({ test: !this.state.rerender });
        }, 2000);
    };

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render() {
        return (
            <CarAnimation
                src={require(`../Assets/car${this.getRandomInt(1,4)}.svg`)}
                rand={this.getRandomInt(0, 1000)}
                switch={this.switch}
                test={this.state.test}
            />
        );
    }
}

export default CarContainer;
