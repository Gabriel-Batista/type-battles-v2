import React, { Component } from "react";
import posed from "react-pose";

class CarAnimation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        };
    }

    CarImage = posed.img({
        top: {
            x: -1500,
            y: ({ rand }) => rand,
            height: "150px",
            width: "150px",
            transition: {
                duration: 0,
                ease: [0.2, 0.4, 0.6, 0.8]
            }
        },
        bottom: {
            x: ({ windowWidth }) => windowWidth,
            y: ({ rand }) => rand,
            height: "150px",
            width: "150px",
            transition: {
                duration: 2000,
                ease: "easeIn"
            }
        }
    });

    componentDidMount= () => {
        this.intervalId = setInterval(() => {
            this.setState({
                isVisible: !this.state.isVisible
            });
        }, 2000);
        this.carRef = React.createRef();
        this.props.switch();
    }

    componentWillUnmount= () =>  {
      clearInterval(this.intervalId)
    }

    render() {
        return (
            <this.CarImage
                ref={this.carRef}
                className="box"
                pose={this.state.isVisible ? "top" : "bottom"}
                {...this.props}
            />
        );
    }
}

export default CarAnimation;
