(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types'], factory) :
  (factory((global.components = {}),global.React,global.PropTypes));
}(this, (function (exports,React,PropTypes) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ".note {\n  position: relative;\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  border-radius: 3px;\n  border: 1px solid #ecebe5; }\n  .note__body {\n    flex: 1 1 auto;\n    padding: 1.42rem 1.78rem;\n    background-color: white; }\n  .note__header {\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    border: 1px solid #ecebe5;\n    margin: -1px -1px 0.75rem -1px;\n    padding: 0.35rem; }\n  .note__textarea {\n    width: 100%;\n    resize: vertical; }\n  .note__footer {\n    padding: 0 1.78rem 1.42rem 1.78rem; }\n";
  styleInject(css);

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  //import styles from './Note.sass'
  //const cx = cn.bind(styles)

  var propTypes = {
      children: PropTypes.node
  };

  var Header = function Header(props) {
      return React__default.createElement(
          'div',
          { className: 'note__header' },
          props.children
      );
  };
  var Footer = function Footer(props) {
      return React__default.createElement(
          'div',
          { className: 'note__footer' },
          props.children
      );
  };
  var Body = function Body(props) {
      return React__default.createElement(
          'div',
          { className: 'note__body' },
          props.children
      );
  };

  Header.propTypes = propTypes;
  Footer.propTypes = propTypes;
  Body.propTypes = propTypes;

  var Note = function (_Component) {
      inherits(Note, _Component);

      function Note() {
          classCallCheck(this, Note);
          return possibleConstructorReturn(this, (Note.__proto__ || Object.getPrototypeOf(Note)).apply(this, arguments));
      }

      createClass(Note, [{
          key: 'render',
          value: function render() {
              return React__default.createElement(
                  'div',
                  { className: 'note' },
                  this.props.children
              );
          }
      }]);
      return Note;
  }(React.Component);

  Note.propTypes = propTypes;
  Note.Header = Header;
  Note.Footer = Footer;
  Note.Body = Body;

  var NoteTextArea = function (_Component) {
    inherits(NoteTextArea, _Component);

    function NoteTextArea(props) {
      classCallCheck(this, NoteTextArea);

      var _this = possibleConstructorReturn(this, (NoteTextArea.__proto__ || Object.getPrototypeOf(NoteTextArea)).call(this, props));

      _this.textArea = React__default.createRef();
      return _this;
    }

    createClass(NoteTextArea, [{
      key: 'render',
      value: function render() {
        var focusUsernameInputField = function focusUsernameInputField(textArea) {
          textArea && textArea.focus();
        };
        var _props = this.props,
            text = _props.text,
            rowCount = _props.rowCount,
            isEdit = _props.isEdit,
            onLostFocus = _props.onLostFocus,
            onChange = _props.onChange;


        return React__default.createElement('textarea', {
          ref: focusUsernameInputField,
          className: 'note__textarea',
          rows: rowCount,
          disabled: !isEdit,
          value: text || '',
          onBlur: onLostFocus,
          onChange: onChange });
      }
    }]);
    return NoteTextArea;
  }(React.Component);

  NoteTextArea.propTypes = {
    text: PropTypes.string,
    rowCount: PropTypes.number,
    isEdit: PropTypes.bool,
    onLostFocus: PropTypes.func,
    onChange: PropTypes.func
  };
  NoteTextArea.defaultProps = {
    text: '',
    rowCount: 0,
    isEdit: false,
    onLostFocus: function onLostFocus() {
      return undefined;
    },
    onChange: function onChange() {
      return undefined;
    }
  };

  exports.Note = Note;
  exports.NoteTextArea = NoteTextArea;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
