"use strict";

exports.__esModule = true;
exports.default = exports.search = exports.clock = exports.calendar = exports.chevronLeft = exports.chevronRight = exports.caretDown = exports.caretUp = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _jsxFileName = "/Users/jarezvani/workspace/react-widgets/packages/react-widgets/src/Icon.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  icon: _propTypes.default.string.isRequired
};

var Icon = function Icon(_ref) {
  var icon = _ref.icon;
  return _react.default.createElement("span", {
    "aria-hidden": "true",
    className: "rw-i rw-i-" + icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  });
};

Icon.propTypes = propTypes;

var caretUp = _react.default.createElement(Icon, {
  icon: "caret-up",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: void 0
});

exports.caretUp = caretUp;

var caretDown = _react.default.createElement(Icon, {
  icon: "caret-down",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: void 0
});

exports.caretDown = caretDown;

var chevronRight = _react.default.createElement(Icon, {
  icon: "chevron-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: void 0
});

exports.chevronRight = chevronRight;

var chevronLeft = _react.default.createElement(Icon, {
  icon: "chevron-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: void 0
});

exports.chevronLeft = chevronLeft;

var calendar = _react.default.createElement(Icon, {
  icon: "calendar",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: void 0
});

exports.calendar = calendar;

var clock = _react.default.createElement(Icon, {
  icon: "clock-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: void 0
});

exports.clock = clock;

var search = _react.default.createElement(Icon, {
  icon: "search",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: void 0
});

exports.search = search;
var _default = Icon;
exports.default = _default;