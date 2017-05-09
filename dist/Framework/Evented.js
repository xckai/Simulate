define(["require", "exports", "underscore"], function (require, exports, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Evented = (function () {
        function Evented() {
            this.events = {};
        }
        Evented.prototype.on = function (t, fn, ctx) {
            var _this = this;
            var st = t.split(" ");
            st.forEach(function (tt) {
                _this._on(tt, fn, ctx);
            });
            return this;
        };
        Evented.prototype._on = function (t, fn, ctx) {
            if (this.events[t]) {
                if (_.some(this.events[t], function (e) { return e.fn == fn && e.ctx == ctx; })) {
                    return;
                }
                else {
                    var obj = {};
                    obj.fn = fn;
                    obj.ctx = ctx;
                    this.events[t].push(obj);
                }
            }
            else {
                this.events[t] = [];
                var obj = {};
                obj.fn = fn;
                obj.ctx = ctx;
                this.events[t].push(obj);
            }
        };
        Evented.prototype._off = function (t, fn, ctx) {
            if (!this.events[t]) {
                return this;
            }
            else {
                var nEs_1 = [];
                if (fn) {
                    this.events[t].forEach(function (o) {
                        if (o.fn != fn && o.ctx != ctx) {
                            nEs_1.push(o);
                        }
                    });
                }
                this.events[t] = nEs_1;
            }
        };
        Evented.prototype.off = function (t, fn) {
            var _this = this;
            var st = t.split(" ");
            st.forEach(function (s) { return _this._off(s, fn); });
            return this;
        };
        Evented.prototype.fire = function (t, obj) {
            if (this.events[t]) {
                this.events[t].forEach(function (o) { return o.fn.call(o.ctx, obj); });
            }
            var p = this.event_parent;
            if (p) {
                p.fire(t, obj);
            }
            return this;
        };
        Evented.prototype.listenTo = function (e) {
            e.event_parent = this;
            return this;
        };
        return Evented;
    }());
    exports.Evented = Evented;
});
