import React, { Component } from "react";
import posed from "react-pose";
import { easing, tween, styler } from "popmotion";

class CarAnimation extends Component {
    state = {
        isVisible: true
    };

    componentWillMount() {
        this.carRef = React.createRef();
    }

    CarImage = posed.img({
        top: {
            x: -1500,
            y: ({ rand }) => rand,
            height: "150px",
            width: "150px",
            transition: {
                duration: 0,
                ease: [0.2, 0.4, 0.6, 0.99]
            }
        },
        bottom: {
            x: 1500,
            y: ({ rand }) => rand,
            height: "150px",
            width: "150px",
            transition: {
                duration: 2000,
                ease: "easeIn"
            }
        }
    });

    componentDidMount() {
        setInterval(() => {
            this.setState({
                isVisible: !this.state.isVisible
            });
        }, 2000);
      this.props.switch()
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
