define(["require", "exports", "lodash", "./View"], function (require, exports, _, View_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Controller = (function () {
        function Controller(conf) {
            this.config = {
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
            this.view = new View_1.View("div");
            this.invokeBeforeRender();
            this.setConfig(conf);
        }
        Controller.prototype.setStyle = function (s) {
            this.config.style = _.assign(this.config.style, s);
            this.updateStyle();
            return this;
        };
        Controller.prototype.renderAt = function (dom) {
            this.invokeBeforeRender();
            this.view.render();
            this.view.getNode$().appendTo(dom);
            this.invokeAterRender();
            return this;
        };
        Controller.prototype.onAfterRender = function () { };
        Controller.prototype.onBeforeRender = function () { };
        Controller.prototype.invokeAterRender = function () {
            if (this.onAfterRender) {
                this.onAfterRender();
            }
            return this;
        };
        Controller.prototype.invokeBeforeRender = function () {
            if (this.onBeforeRender) {
                this.onBeforeRender();
            }
        };
        Controller.prototype.setConfig = function (c) {
            this.config = _.assign(this.config, c);
            this.updateStyle();
            return this;
        };
        Controller.prototype.updateStyle = function () {
            this.view.style(this.config.style);
            this.view.setClass(this.config.class.join(" "));
            return this;
        };
        return Controller;
    }());
    exports.Controller = Controller;
});
