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
define(["require", "exports", "./Evented", "lodash", "./Animation", "./BaseElement"], function (require, exports, Evented_1, _, Animation_1, BaseElement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Component = (function (_super) {
        __extends(Component, _super);
        function Component(id, conf) {
            var _this = _super.call(this) || this;
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
            // protected el:any
            // protected $el:JQuery
            _this.isRendered = false;
            _this.children = [];
            if (id != undefined) {
                _this.id = id;
            }
            else {
                _this.id = _.uniqueId("component");
            }
            _this.setConfig(conf);
            _this.rootElement = new BaseElement_1.BaseElement("section");
            _this.rootElement.attr({ id: _this.id }).style(_this.config.style).addClass(_this.config.class);
            return _this;
            //let fragment=document.createDocumentFragment()
            // this.$el=$("<section></section>")
            // this.el=this.$el.get(0)
            /////init element
            // _.each(this.config.class,c=>this.$el.addClass(c))
            // this.$el.css(this.config.style)
            // this.$el.attr("id",this.id)
        }
        Component.prototype.setConfig = function (c) {
            this.config = _.assign(this.config, c);
            return this;
        };
        Component.prototype.setStyle = function (s) {
            this.config.style = _.assign(this.config.style, s);
            this.updateStyle();
        };
        Component.prototype.updateStyle = function () {
            this.rootElement.style(this.config.style);
            return this;
        };
        Component.prototype.addTo = function (c, listen) {
            this.parent = c;
            this.parent.add(this, listen);
            return this;
        };
        Component.prototype.add = function (nc, listen) {
            var i = _.findIndex(this.children, function (c) { return c.id == nc.id; });
            nc.parent = this;
            if (i == -1) {
                this.children.push(nc);
            }
            else {
                this.children[i] = nc;
            }
            if (listen) {
                this.listenTo(nc);
            }
            return this;
        };
        Component.prototype.getRootElement = function () {
            return this.rootElement;
        };
        Component.prototype.render = function () {
            this._beforeRender();
            _.each(this.children, function (c) {
                c.render();
            });
            this.rootElement.toHtml();
            if (this.parent) {
                this.parent.getRootElement().get$Node().append(this.rootElement.get$Node());
            }
            this._afterRender();
        };
        Component.prototype._beforeRender = function () {
            this.beforeRender();
            _.invoke(this.children, "beforeRender");
        };
        Component.prototype.beforeRender = function () {
        };
        Component.prototype._afterRender = function () {
            this.afterRender();
            _.invoke(this.children, "_afterRender");
        };
        Component.prototype.afterRender = function () {
        };
        // renderer(){
        //     this.updateStyle()
        //     return this.el
        // }
        Component.prototype.setBusy = function () {
            var a = new Animation_1.BallLoader();
            a.setConfig({ $root: this.rootElement.get$Node() });
            a.show();
            // this.$el.append(Util.BounceBusyDiv(200,200,3))
            this.rootElement.addClass("busy");
        };
        return Component;
    }(Evented_1.Evented));
    exports.Component = Component;
});
