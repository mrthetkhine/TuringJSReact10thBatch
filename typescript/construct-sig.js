var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name) {
        console.log('Human Constructor');
        this.name = name;
    }
    return Human;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name) {
        var _this = _super.call(this, name) || this;
        console.log('Teacher Constructor');
        return _this;
    }
    return Teacher;
}(Human));
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(name) {
        var _this = _super.call(this, name) || this;
        console.log('Doctor Constructor');
        return _this;
    }
    return Doctor;
}(Human));
function fn(ctor) {
    return new ctor("hello");
}
fn(Human);
fn(Teacher);
fn(Doctor);
