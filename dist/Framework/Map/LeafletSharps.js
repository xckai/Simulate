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
define(["require", "exports", "leaflet"], function (require, exports, L) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function latLngs2Path(map, latlngs) {
        var ds = latlngs.map(function (_t) {
            return map.latLngToLayerPoint([_t[1], _t[0]]);
        });
        return L.SVG.pointsToPath([ds], false);
    }
    L.SVG.include({
        _initNode: function (layer) {
            var container = layer._container = L.SVG.create('shape');
            L.DomUtil.addClass(container, 'leaflet-vml-shape ' + (this.options.className || ''));
            //container.coordsize = '1 1';
            if (layer.options.type === "image") {
                layer._node = L.SVG.create('image');
                container.appendChild(layer._node);
            }
            if (layer.options.type === "circle") {
                layer._node = L.SVG.create('ellipse');
                container.appendChild(layer._node);
            }
            if (layer.options.type === "square") {
                layer._node = L.SVG.create('rect');
                container.appendChild(layer._node);
            }
            if (layer.options.type === "text") {
                layer._node = L.SVG.create('g');
                layer._text = L.SVG.create('text');
                layer._textPath = L.SVG.create('textPath');
                layer._defs = L.SVG.create('defs');
                layer._textPaths = L.SVG.create('path');
                layer._defs.appendChild(layer._textPaths);
                layer._node.appendChild(layer._defs);
                layer._text.appendChild(layer._textPath);
                layer._node.appendChild(layer._text);
                container.appendChild(layer._node);
            }
            if (layer.options.type === "arrow") {
                layer._node = L.SVG.create("path");
                container.appendChild(layer._node);
            }
            this._updateStyle(layer);
        },
        _addNode: function (layer) {
            this._rootGroup.appendChild(layer._node);
            layer.addInteractiveTarget(layer._node);
        },
        _removeNode: function (layer) {
            L.DomUtil.remove(layer._node);
            layer.removeInteractiveTarget(layer._node);
        },
        _updateNode: function (layer) {
            var p, op, _t;
            if (layer.options.type === "image") {
                p = layer._point;
                op = layer.options;
                layer._node.setAttribute('x', p.x - op.width / 2);
                layer._node.setAttribute('y', p.y - op.height / 2);
                _t = layer._node.getAttribute("transform") ? layer._node.getAttribute("transform") : "";
                //layer._node.setAttribute("transform","translate("+p.x+","+p.y+")"+_t);
                layer._node.setAttribute('width', op.width);
                layer._node.setAttribute('height', op.height);
                layer._node.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", op.src);
            }
            if (layer.options.type === "circle") {
                p = layer._point;
                op = layer.options;
                layer._node.setAttribute('cx', p.x);
                layer._node.setAttribute('cy', p.y);
                _t = layer._node.getAttribute("transform") ? layer._node.getAttribute("transform") : "";
                //layer._node.setAttribute("transform", "translate(" + p.x + "," + p.y + ")" + _t);
                layer._node.setAttribute('rx', op.radius_x);
                layer._node.setAttribute('ry', op.radius_y);
            }
            if (layer.options.type === "square") {
                p = layer._point;
                op = layer.options;
                layer._node.setAttribute('x', p.x - op.width / 2);
                layer._node.setAttribute('y', p.y - op.height / 2);
                _t = layer._node.getAttribute("transform") ? layer._node.getAttribute("transform") : "";
                //layer._node.setAttribute("transform", "translate(" + p.x + "," + p.y + ")" + _t);
                layer._node.setAttribute('width', op.width);
                layer._node.setAttribute('height', op.height);
            }
            if (layer.options.type === "text") {
                p = layer._point;
                op = layer.options;
                //var _t=layer._node.getAttribute("transform")?layer._node.getAttribute("transform"):"";
                //layer._node.setAttribute("transform","translate("+p.x+","+p.y+")"+_t);
                if (op.path) {
                    layer._textPath.textContent = op.text;
                    layer._textPaths.setAttribute("id", op.id);
                    layer._textPaths.setAttribute("d", latLngs2Path(layer._map, op.path));
                    layer._textPath.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + op.id);
                    layer._textPath.setAttribute('alignment-baseline', op["alignment-baseline"]);
                }
                else {
                    layer._text.textContent = op.text;
                    layer._text.setAttribute('x', p.x);
                    layer._text.setAttribute('y', p.y);
                }
                layer._text.setAttribute('font-family', op.face);
                layer._text.setAttribute('font-size', op.size);
            }
            if (layer.options.type === "arrow") {
                var arrowPathGen = function (w, h) {
                    var str = "";
                    if (w && h) {
                        str += "M" + p.x + " " + (p.y + h / 2) + "L " + (p.x + w / 2) + " " + (p.y + h / 2) + "L" + p.x + " " + (p.y - h / 2) + "L " + (p.x - w / 2) + " " + (p.y + h / 2) + " Z";
                    }
                    return str ? str : "M 0 0";
                };
                p = layer._point;
                op = layer.options;
                layer._node.setAttribute("d", arrowPathGen(op.width, op.height));
                // var _t=layer._node.getAttribute("transform")?layer._node.getAttribute("transform"):"";
                // layer._node.setAttribute("transform","translate("+p.x+","+p.y+")"+_t);
            }
            this._updateTransform(layer);
        },
        _updateTransform: function (layer) {
            var _t = "", p = layer._point, path = layer._path || layer._node, options = layer.options;
            if (!options) {
                return;
            }
            if (options.offset) {
                _t += "translate(" + options.offset[0] + "," + options.offset[1] + ")";
            }
            if (options.rotate) {
                _t += "rotate(" + options.rotate + " " + p.x + " " + p.y + ")";
            }
            if (_t) {
                path.setAttribute("transform", _t);
            }
        },
        _updateStyle: function (layer) {
            var path = layer._path || layer._node, options = layer.options;
            if (!path) {
                return;
            }
            path.setAttribute("pointer-events", "auto");
            if (options.stroke) {
                path.setAttribute('stroke', options.color);
                path.setAttribute('stroke-opacity', options.opacity);
                path.setAttribute('stroke-width', options.weight);
                path.setAttribute('stroke-linecap', options.lineCap);
                path.setAttribute('stroke-linejoin', options.lineJoin);
                if (options.dashArray) {
                    path.setAttribute('stroke-dasharray', options.dashArray);
                }
                else {
                    path.removeAttribute('stroke-dasharray');
                }
                if (options.dashOffset) {
                    path.setAttribute('stroke-dashoffset', options.dashOffset);
                }
                else {
                    path.removeAttribute('stroke-dashoffset');
                }
            }
            else {
                path.setAttribute('stroke', 'none');
            }
            if (options.fill) {
                path.setAttribute('fill', options.fillColor || options.color);
                path.setAttribute('fill-opacity', options.fillOpacity);
                path.setAttribute('fill-rule', options.fillRule || 'evenodd');
            }
            else {
                path.setAttribute('fill', 'none');
            }
            if (options.offset) {
                var _t = path.getAttribute("transform") ? path.getAttribute("transform") + "translate(" + options.offset[0] + "," + options.offset[1] + ")" : "translate(" + options.offset[0] + "," + options.offset[1] + ")";
                path.setAttribute("transform", _t);
            }
        },
        clearAll: function () {
            this._rootGroup.innerHTML = "";
        }
    });
    var SVGNode = L.Path.extend({
        options: {
            opacity: 1,
            weight: 2,
            fillOpacity: 0.5
        },
        onAdd: function () {
            this._renderer._initNode(this);
            this._reset();
            this._renderer._addNode(this);
            this._renderer.on('update', this._update, this);
        },
        onRemove: function () {
            this._renderer._removeNode(this);
            this._renderer.off('update', this._update, this);
        }
    });
    var SvgMarker = SVGNode.extend({
        // @section
        // @aka CircleMarker options
        initialize: function (latlng, options) {
            L.Util.setOptions(this, options);
            this._latlng = L.latLng(latlng);
            this._radius = this.options.radius;
        },
        // @method setLatLng(latLng: LatLng): this
        // Sets the position of a circle marker to a new location.
        setLatLng: function (latlng) {
            this._latlng = L.latLng(latlng);
            this.redraw();
            return this.fire('move', {
                latlng: this._latlng
            });
        },
        // @method getLatLng(): LatLng
        // Returns the current geographical position of the circle marker
        getLatLng: function () {
            return this._latlng;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle marker. Units are in pixels.
        setRadius: function (radius) {
            this.options.radius = this._radius = radius;
            return this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of the circle
        getRadius: function () {
            return this._radius;
        },
        setStyle: function (options) {
            var radius = options && options.radius || this._radius;
            L.Path.prototype.setStyle.call(this, options);
            this.setRadius(radius);
            return this;
        },
        _project: function () {
            this._point = this._map.latLngToLayerPoint(this._latlng);
            this._updateBounds();
        },
        _updateBounds: function () {
            var r = this._radius, r2 = this._radiusY || r, w = this._clickTolerance(), p = [r + w, r2 + w];
            this._pxBounds = new L.Bounds(this._point.subtract(p), this._point.add(p));
        },
        _update: function () {
            if (this._map) {
                this._updateNode();
            }
        },
        _updateNode: function () {
            this._renderer._updateNode(this);
        },
        _empty: function () {
            return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
        }
    });
    var ImageMarker = SvgMarker.extend({
        // @section
        // @aka CircleMarker options
        options: {
            // @option radius: Number = 10
            // Radius of the circle marker, in pixels
            type: "image",
            width: 20,
            height: 20
        }
    });
    exports.imageMarker = function (latlng, option) {
        return new ImageMarker(latlng, option);
    };
    var CircleMarker = SvgMarker.extend({
        options: {
            stroke: true,
            fill: true,
            type: "circle",
            radius_x: 10,
            radius_y: 10,
            radius: 10
        },
        initialize: function (latlng, options) {
            L.Util.setOptions(this, options);
            this._latlng = L.latLng(latlng);
            if (options.radius_x === undefined) {
                this.radius_x = options.radius;
            }
            if (options.radius_y === undefined) {
                this.radius_y = options.radius;
            }
        }
    });
    exports.circleMarker = function (latlng, option) {
        return new L.CircleMarker(latlng, option);
    };
    var SquareMarker = SvgMarker.extend({
        options: {
            stroke: false,
            fill: true,
            type: "square",
            width: 10,
            height: 10
        }
    });
    exports.squareMarker = function (latlng, option) {
        return new SquareMarker(latlng, option);
    };
    var TextMarker = SvgMarker.extend({
        options: {
            type: "text",
            style: "normal",
            face: "Arial Unicode MS",
            weight: 0,
            fill: true,
            fillOpacity: 1
        }
    });
    exports.textMarker = function (latlng, option) {
        return new TextMarker(latlng, option);
    };
    var ArrowMarker = SvgMarker.extend({
        options: {
            type: "arrow",
            width: 10,
            height: 10,
            fill: true,
            weight: 0
        }
    });
    exports.arrowMarker = function (latlng, option) {
        return new ArrowMarker(latlng, option);
    };
    var Line = (function (_super) {
        __extends(Line, _super);
        function Line() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Line.prototype.setData = function (d) {
            this._data = d;
        };
        Line.prototype.getData = function () {
            return this._data;
        };
        return Line;
    }(L.Polyline));
    exports.Line = Line;
});
