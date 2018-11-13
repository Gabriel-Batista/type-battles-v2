import React from "react";
import { connect } from "react-redux";

import GameActions from "../Actions/GameActions";

import { Icon, Grid } from "semantic-ui-react";
import {
    ParagraphStyles,
    ParagraphWrapperStyle
} from "../Styles/ParagraphStyles";

const Paragraph = props => {
    return (
        <div>
            <span style={ParagraphStyles}>
                <Icon name="quote left" size="small" />
                {props.paragraph}
                <Icon name="quote right"size="small" />
            </span>

            <span style={{ color: "green" }}>{props.right}</span>
            <span style={{ color: "red" }}>{props.wrong}</span>
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
