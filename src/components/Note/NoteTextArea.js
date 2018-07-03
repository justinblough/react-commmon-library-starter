import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NoteTextArea extends Component {
  static propTypes = {
    text: PropTypes.string,
    rowCount: PropTypes.number,
    isEdit: PropTypes.bool,
    onLostFocus: PropTypes.func,
    onChange: PropTypes.func
  }

  static defaultProps = {
    text: '',
    rowCount: 0,
    isEdit: false,
    onLostFocus: () => undefined,
    onChange: () => undefined
  }

  constructor(props) {
    super(props);
    this.textArea = React.createRef();
  }

  render () {
    const focusUsernameInputField = textArea => { textArea && textArea.focus(); };
    const { text, rowCount, isEdit, onLostFocus, onChange } = this.props;

    return (
      <textarea
        ref={focusUsernameInputField}
        className="note__textarea"
        rows={rowCount}
        disabled={!isEdit}
        value={text || ''}
        onBlur={onLostFocus}
        onChange={onChange}>
      </textarea>
    )
  }
}
