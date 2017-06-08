define(["require", "exports", "lodash", "jquery"], function (require, exports, _, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var View = (function () {
        function View(tag, ns) {
            this.data = {};
            this.tag = tag;
            this.namespace = ns;
        }
        View.prototype.attr = function (obj) {
            this.attrData = obj;
            if (this.$el) {
                this.$el.attr(obj);
            }
            return this;
        };
        View.prototype.style = function (obj) {
            this.styleDate = obj;
            if (this.$el) {
                this.$el.css(obj);
            }
            return this;
        };
        View.prototype.addClass = function (cls) {
            var _this = this;
            _.each(cls, function (c) {
                _this.$el.addClass(c);
            });
            return this;
        };
        View.prototype.setClass = function (cls) {
            this.$el.removeClass();
            this.$el.attr("class", cls);
        };
        View.prototype.removeClass = function (cls) {
            var _this = this;
            _.each(cls, function () {
                _this.$el.removeClass(cls);
            });
            return this;
        };
        View.prototype.getNode$ = function () {
            return this.$el;
        };
        View.prototype.getNode = function () {
            return this.el;
        };
        View.prototype.render = function () {
            this.$el = this.renderer();
            this.$el.css(this.styleDate || {});
            this.$el.attr(this.attrData || {});
            this.el = this.$el.get(0);
            return this.el;
        };
        View.prototype.remove = function () {
            if (this.$el) {
                this.$el.remove();
            }
        };
        View.prototype.renderer = function () {
            var ns = this.namespace, tag = this.tag, _ns, _tag;
            if (ns == "svg") {
                _ns = "http://www.w3.org/2000/svg";
            }
            else {
                _ns = "http://www.w3.org/1999/xhtml";
            }
            _tag = tag == undefined ? "div" : tag;
            var el = document.createElementNS(_ns, _tag);
            return $(el);
        };
        View.prototype.appendTo = function (s) {
            this.$el.appendTo(s);
        };
        View.prototype.setWatcher = function (fn) {
            ///newdata ,oldData,property
            this._wathcher = fn;
        };
        View.prototype.bindElement = function ($el, dataKey) {
            var _this = this;
            new MutationObserver(function () {
                _this.data[dataKey] = $el.html();
            }).observe($el.get(0), {
                'childList': true,
                'subtree': true
            });
            Object.defineProperty(this.data, dataKey, {
                enumerable: true,
                set: function (d) {
                    if (d !== _this.data["_" + dataKey]) {
                        if (_this._wathcher) {
                            _this._wathcher(d, _this.data["_" + dataKey], dataKey);
                        }
                        _this.data["_" + dataKey] = d;
                        $el.html(d);
                    }
                },
                get: function () {
                    return _this.data["_" + dataKey];
                }
            });
        };
        return View;
    }());
    exports.View = View;
});
