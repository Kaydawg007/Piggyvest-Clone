"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Blings = _interopRequireDefault(require("../../../Images/Blings.png"));

var _Clerk = _interopRequireDefault(require("../../../Images/Clerk.png"));

var _dave = _interopRequireDefault(require("../../../Images/dave.jpg"));

var _hannah = _interopRequireDefault(require("../../../Images/hannah.jpg"));

var _Jones = _interopRequireDefault(require("../../../Images/Jones.png"));

var _steve = _interopRequireDefault(require("../../../Images/steve.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Testimonial = function Testimonial() {
  var testimonies = [{
    Name: "Sharon Carter",
    DaMe: "Tuesday, 4th of October, 2022 by 12 PM",
    Testimony: "Thanks to piggyvest I've saved enough money to start up a really large business",
    CustomerImage: {
      CustomerImageOne: _Blings["default"]
    }
  }, {
    Name: "Clark Johnson",
    DaMe: "Monday, 7th of October, 2022 by 11:08 AM",
    Testimony: "I just joined tho and I believe piggyVest won't disappoint me 😊❤️",
    CustomerImage: {
      CustomerImageTwo: _Clerk["default"]
    }
  }, {
    Name: "Dave",
    DaMe: "Tuesday, 7th of October, 2022 by 10:28 AM",
    Testimony: "PiggyVest was introduced to me some years back and I have been able to save multiple millions over the years. I look forward to more from Piggyvest.",
    CustomerImage: {
      CustomerImageThree: _dave["default"]
    }
  }, {
    Name: "Hannah",
    DaMe: "Tuesday, 4th of October, 2022 by 12 PM",
    Testimony: "Thanks to piggyvest I've saved enough money to start up a really large business",
    CustomerImage: {
      CustomerImageFour: _hannah["default"]
    }
  }, {
    Name: "Jones",
    DaMe: "Monday, 7th of October, 2022 by 11:08 AM",
    Testimony: "Piggvest has helped me with buying my new iPhone and it is the most reliable app.",
    CustomerImage: {
      CustomerImageFive: _Jones["default"]
    }
  }, {
    Name: "Steve",
    DaMe: "Tuesday, 7th of October, 2022 by 10:28 AM",
    Testimony: "Lorem Ipsum Dolor sadhisa juasoare yuesne",
    CustomerImage: {
      CustomerImageSix: _steve["default"]
    }
  }];
};

var _default = Testimonial;
exports["default"] = _default;