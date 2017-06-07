var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../../Framework/Core/Component", "../../Framework/Core/Controller", "lodash"], function (require, exports, Component_1, Controller_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dropDown = (function (_super) {
        __extends(dropDown, _super);
        function dropDown() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return dropDown;
    }(Controller_1.Controller));
    var Bar = (function (_super) {
        __extends(Bar, _super);
        function Bar(id, c) {
            var _this = _super.call(this, id == undefined ? _.uniqueId("Bar") : id, c) || this;
            // renderer() {
            //     //let c=document.createDocumentFragment()
            //     this.$el.append(template)
            //     this.initHook()
            //     return this.el
            // }
            _this.config = {
                class: [],
                style: {
                    position: "absolute",
                    left: "0px",
                    right: "0px",
                    top: "0px",
                    bottom: "0px",
                    display: "inhert"
                }
            };
            return _this;
            // let watch=(newData)=>{
            //     console.log("change" ,newData)
            //     this.fire("optionChange", {
            //         id: newData
            //     })
            // }
        }
        return Bar;
    }(Component_1.Component));
    exports.Bar = Bar;
});
