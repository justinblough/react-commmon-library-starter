import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Note.sass'
//import styles from './Note.sass'
//const cx = cn.bind(styles)

const propTypes = {
    children: PropTypes.node
}

const Header =  props => <div className="note__header">{props.children}</div>;
const Footer =  props => <div className="note__footer">{props.children}</div>;
const Body   =  props => <div className="note__body">{props.children}</div>;

Header.propTypes = propTypes;
Footer.propTypes = propTypes;
Body.propTypes   = propTypes;

export class Note extends Component {
    static propTypes = propTypes
    static Header = Header;
    static Footer = Footer;
    static Body = Body;

    render() {
        return (
            <div className="note">
                {this.props.children}
            </div>
        )
    }
}

export default Note
