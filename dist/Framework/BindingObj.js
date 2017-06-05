define(["require", "exports", "lodash"], function (require, exports, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BindingObj = (function () {
        function BindingObj() {
            this.data = {};
        }
        BindingObj.prototype.setWatcher = function (fn) {
            ///newdata ,oldData,property
            this._wathcher = fn;
        };
        BindingObj.prototype.bindElement = function ($el, dataKey) {
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
        BindingObj.prototype.setData = function (d) {
            var _this = this;
            _.each(d, function (v, k) {
                if (_.has(_this.data, k)) {
                    _this.data[k] = v;
                }
            });
        };
        return BindingObj;
    }());
    exports.BindingObj = BindingObj;
});
