import React, { Component } from "react";

import CarAnimation from "./CarAnimation";

class CarContainer extends Component {
    constructor(props) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.state = {
            rerender: false,
            windowWidth: 0,
            windowHeight: 0
        };
    }
    componentDidMount = () => {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    };

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
        clearInterval(this.intervalId);
    }

    updateWindowDimensions() {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
    }

    switch = () => {
        this.intervalId = setInterval(() => {
            this.setState({ test: !this.state.rerender });
        }, 2000);
    };

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render() {
        return (
            <CarAnimation
                src={require(`../Assets/car${this.getRandomInt(1, 4)}.svg`)}
                rand={this.getRandomInt(0, 1000)}
                windowWidth={this.state.windowWidth}
                switch={this.switch}
                test={this.state.test}
            />
        );
    }
}

export default CarContainer;
