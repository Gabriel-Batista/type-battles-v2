import React from "react";
import { connect } from "react-redux";

import GameActions from "../Actions/GameActions";

import { Icon, Grid } from "semantic-ui-react";
import {
    ParagraphContainerStyles,
    RightStyle,
    WrongStyle,
    ParagraphStyle
} from "../Styles/ParagraphStyles";

const Paragraph = props => {
    const formatParagraph = () => {
        return props.paragraph.slice(props.right.length + props.wrong.length);
    };

    return (
        <div>
            <span style={ParagraphContainerStyles}>
                <Icon name="quote left" size="small" />
                <span style={{margin: "4em", lineHeight: "1em"}}>
                    <span style={RightStyle}>{props.right}</span>
                    <span style={WrongStyle}>{props.wrong}</span>|
                    {/*Temporarily use dangerouslySetInnerHTML, come back later and use regex to pull unicode char code.*/}
                    <span
                        style={ParagraphStyle}
                        dangerouslySetInnerHTML={{ __html: formatParagraph() }}
                    />
                </span>
                <Icon name="quote right" size="small" />
            </span>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        paragraph: state.game.paragraph,
        right: state.game.right,
        wrong: state.game.wrong
    };
};

export default connect(
    mapStateToProps,
    GameActions
)(Paragraph);
