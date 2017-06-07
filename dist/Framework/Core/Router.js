define(["require", "exports", "jquery"], function (require, exports, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HashRouter = (function () {
        function HashRouter() {
            this.data = {};
        }
        HashRouter.prototype.enable = function () {
            $(window).bind("hashchange", this.hashChange.bind(this));
            this.hashChange();
        };
        HashRouter.prototype.hashChange = function () {
            var hash = window.location.hash;
            if (hash) {
                hash = hash.toString().slice(1);
                if (typeof this.data[hash] == "function") {
                    this.data[hash].call(null);
                }
            }
        };
        HashRouter.prototype.addRule = function (str, fn) {
            this.data[str] = fn;
        };
        HashRouter.prototype.routerTo = function (str) {
            window.location.hash = "#" + str;
        };
        return HashRouter;
    }());
    exports.HashRouter = HashRouter;
});
