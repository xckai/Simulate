define(["require", "exports", "jquery", "lodash", "./Util"], function (require, exports, $, _, Util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var styles = Util_1.Util.d3Invoke("style");
    var attrs = Util_1.Util.d3Invoke("attr");
    var BallLoader = (function () {
        function BallLoader() {
        }
        BallLoader.prototype.setConfig = function (c) {
            this.config = _.assign({
                $root: undefined
            }, c);
        };
        BallLoader.prototype.initAnimation = function (i) {
            // this.$container=$("<div class='busyContainer'></div>").css({
            //     position:"absolute",
            //     top:"0px",
            //     bottom:"0px",
            //     left:"0px",
            //     right:"0px",
            //     display:"flex",
            //     "align-items":"center",
            //     "justify-content":"center",
            //     "z-index":1000
            // })
            // this.svg=d3.select(document.createDocumentFragment()).append("svg")
            //                                                         .attr("viewBox","0,0,20,20")
            //                                                         .style("width","100%")
            //                                                         .style("height","100%").node()
            // this.$container.append(this.svg)
            // // this.$svg=$("<svg></svg>").css({
            // //     background:"blue",
            // //     width:"100%",
            // //     height:"100%"
            // // }).appendTo(this.$container)
            // // d3.select(this.$svg.get(0)).call(attrs({
            // //   viewBox:"0,0,20,20"
            // // }))
            // this.d3Circle=d3.select(this.svg).append("defs")
            //                                     .append("clipPath").attr("id","clip")
            //                                     .append("svg:circle").call(attrs({
            //                                                             cx:10,
            //                                                             cy:10,
            //                                                             r:10,
            //                                                             fill:"red"
            //                                                         }))
            var $div;
            this.$container = $div = $("<div class='busyContainer'></div>").css({
                position: "absolute",
                top: "0px",
                bottom: "0px",
                left: "0px",
                right: "0px",
                display: "flex",
                "align-items": "center",
                "justify-content": "center",
                "z-index": 1000,
                background: "rgba(0,0,0,.5)"
            });
            var c = $("<div></div>").css({
                display: "inline-flex"
            });
            var w = 10;
            for (var ii = 0; ii < i; ++ii) {
                var t = $("<div></div>");
                t.css({
                    width: w + "px",
                    height: w + "px",
                    background: "blue",
                    margin: 0.6 * w + "px",
                    "border-radius": "100%",
                    animation: "shake 1s ease-in-out+" + 2 * ii / i + "s infinite  alternate"
                });
                c.append(t);
            }
            var beginkey = 100 / i + "%", endkey = 300 / i + "%", frame = {
                name: "shake",
                from: { "-webkit-transform": "scale(1); " },
                "to": { "-webkit-transform": "scale(2); " }
            };
            // frame[beginkey]={ "-webkit-transform":"scale(2); "}
            // frame[endkey]={ "-webkit-transform":"scale(1); "}
            Util_1.Util.addKeyFrames(frame);
            $div.append(c);
            // d3.select(this.svg).append("rect").call(attrs({
            //     x:0,y:0,width:20,height:20,"clip-path":"url(#clip)"
            // })).style("background","blue")
        };
        BallLoader.prototype.show = function () {
            var _this = this;
            this.initAnimation(3);
            this.$container.css({ opacity: 0, "transition": "all 1s" });
            requestAnimationFrame(function () {
                _this.$container.css({ opacity: .8 });
            });
            // .css({
            // })
            this.config.$root.append(this.$container);
        };
        return BallLoader;
    }());
    exports.BallLoader = BallLoader;
});
