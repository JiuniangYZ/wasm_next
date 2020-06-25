webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! babylonjs */ "./node_modules/_babylonjs@4.1.0@babylonjs/babylon.js");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../style/index.css */ "./style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _style_page_index_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../style/page_index.css */ "./style/page_index.css");
/* harmony import */ var _style_page_index_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_page_index_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _layout_Ske__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../layout/Ske */ "./layout/Ske.jsx");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! mobx-react */ "./node_modules/_mobx-react@6.1.8@mobx-react/dist/mobxreact.esm.js");







var _jsxFileName = "/Users/shaobozhang/my_codes/my_next/pages/index.jsx",
    _dec,
    _class,
    _temp;

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;








var RustComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()({
  loader: function loader() {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.async(function loader$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", function () {
              return __jsx(_layout_Ske__WEBPACK_IMPORTED_MODULE_12__["default"], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                },
                __self: this
              }, __jsx(Juicy, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
                },
                __self: this
              }));
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  }
});
var Juicy = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_13__["inject"])('store'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_13__["observer"])(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Juicy, _React$Component);

  function Juicy(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Juicy);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Juicy).call(this, props));

    _this.draw2canvas = function (file, canvEle) {
      var shadow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      console.log('here');
      var pic = document.createElement('img');
      pic.src = window.URL.createObjectURL(file);

      pic.onload = function () {
        canvEle.width = pic.width;
        canvEle.height = pic.height;
        canvEle.getContext('2d').drawImage(pic, 0, 0);

        if (shadow != null) {
          shadow.width = pic.width;
          shadow.height = pic.height;
          shadow.getContext('2d').drawImage(pic, 0, 0);
        }
      };
    };

    _this.createTexture = function (scene) {
      //尝试创建材质
      var tex = new babylonjs__WEBPACK_IMPORTED_MODULE_8__["StandardMaterial"]('mt', scene); //tex.emissiveColor = new BABYLON.Color3(1,0,1) //红色 emmissive 代表本身的颜色 RGB

      tex.diffuseColor = new babylonjs__WEBPACK_IMPORTED_MODULE_8__["Color3"](1, 0, 0); //绿色 漫反射
      //tex.specularColor = new BABYLON.Color3(0, 0, 1) //蓝色 镜面反射
      // tex.ambientColor = new BABYLON.Color3(0,0,1)

      window.__tex = tex;
      return tex;
    };

    _this.createScene = function (eng, canvas) {
      var scene = new babylonjs__WEBPACK_IMPORTED_MODULE_8__["Scene"](eng); //scene.ambientColor= new BABYLON.Color3(1,1,1);

      var camera = new babylonjs__WEBPACK_IMPORTED_MODULE_8__["FreeCamera"]('camera1', new babylonjs__WEBPACK_IMPORTED_MODULE_8__["Vector3"](10, 10, 0), scene); //let camera =  new BABYLON.ArcRotateCamera('c2',Math.PI/2, 0, 10,new BABYLON.Vector3.Zero(),scene);

      camera.setTarget(new babylonjs__WEBPACK_IMPORTED_MODULE_8__["Vector3"](0, 0, 0)); //设定你要朝向哪个方向

      camera.attachControl(canvas, true); //让你可以控制
      //camera.setPosition(new BABYLON.Vector3(0,0,10))
      //camera.target=new BABYLON.Vector3(0,0,0);
      // Create a basic light, aiming 0, 1, 0 - meaning, to the sky

      {
        var light = new babylonjs__WEBPACK_IMPORTED_MODULE_8__["PointLight"]('light1', new babylonjs__WEBPACK_IMPORTED_MODULE_8__["Vector3"](0, 5, 0), scene);
        light.diffuse = new babylonjs__WEBPACK_IMPORTED_MODULE_8__["Color3"](1, 1, 0); //光的基本颜色
        //light.specular = new BABYLON.Color3(0, 0, 1);
      } //light.specular = new BABYLON.Color3(1,1,1);

      var ground = babylonjs__WEBPACK_IMPORTED_MODULE_8__["MeshBuilder"].CreateGround('jude', {
        width: 8,
        height: 8
      });
      ground.material = _this.createTexture(); //let light2 = new BABYLON.SpotLight('s1',)
      //let light2  = new BABYLON.PointLight('l2',new BABYLON.Vector3(0,5,0),scene);
      //BABYLON.MeshBuilder.CreateSphere("sphere", {}, scene).position=new BABYLON.Vector3(0,0,2); //default sphere
      //BABYLON.MeshBuilder.CreateSphere("sphere", {}, scene).position=new BABYLON.Vector3(2,0,2); //default sphere
      //sphere.position=new BABYLON.Vector3(0,0,0)
      //var myPlane = BABYLON.MeshBuilder.CreatePlane("myPlane", {width: 2, height: 2, sourcePlane: new BABYLON.Plane(1,1,0,0) }, scene);
      // Create a built-in "sphere" shape; its constructor takes 6 params: name, segment, diameter, scene, updatable, sideOrientation
      // let sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene, false, BABYLON.Mesh.FRONTSIDE);
      // Move the sphere upward 1/2 of its height
      // sphere.position.y = 1;
      // Create a built-in "ground" shape; its constructor takes 6 params : name, width, height, subdivision, scene, updatable
      // let ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene, false);

      return scene;
    };

    _this.canvasRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.canvasShadow = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Juicy, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        id: "index_wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), __jsx("div", {
        id: "canvas_wrapper",
        width: 1000,
        height: 600,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("canvas", {
        ref: this.canvasRef,
        width: 1000,
        height: 600,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), __jsx("canvas", {
        ref: this.canvasShadow,
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      })), __jsx("img", {
        id: "shadow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {// console.log('canvas!', this.canvasRef)
      // console.log(this.props.www)
      // console.log(this.props.mmm)
      // window.__shadow = this.canvasShadow.current
      // window.__canvas = this.canvasRef.current
      // let _ = this.canvasRef.current
      // let eng = new BABYLON.Engine(_, true, { preserveDrawingBuffer: true, stencil: true })
      // let scene = this.createScene(eng, _);
      // eng.runRenderLoop(function () {
      //   scene.render();
      // })
    }
  }]);

  return Juicy;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component), _temp)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Juicy);

/***/ })

})
//# sourceMappingURL=index.js.72c7175433cc1a844eba.hot-update.js.map