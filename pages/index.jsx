import React from "react";
import Link from "next/link";
import { Upload, message, Button, List } from "antd";
import * as BABYLON from "babylonjs";
import "../style/index.css";
import dynamic from "next/dynamic";
import "../style/page_index.css";
import Ske from "../layout/Ske";
import { inject, observer } from "mobx-react";
@inject("store")
@observer
class Juicy extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.canvasShadow = React.createRef();
  }
  draw2canvas = (file, canvEle, shadow = null) => {
    console.log("here");
    let pic = document.createElement("img");
    pic.src = window.URL.createObjectURL(file);
    pic.onload = () => {
      canvEle.width = pic.width;
      canvEle.height = pic.height;
      canvEle.getContext("2d").drawImage(pic, 0, 0);
      if (shadow != null) {
        shadow.width = pic.width;
        shadow.height = pic.height;
        shadow.getContext("2d").drawImage(pic, 0, 0);
      }
    };
  };
  createTexture = (scene) => {
    //尝试创建材质
    let tex = new BABYLON.StandardMaterial("mt", scene);
    //tex.emissiveColor = new BABYLON.Color3(1,0,1) //红色 emmissive 代表本身的颜色 RGB
    tex.diffuseColor = new BABYLON.Color3(1, 0, 0); //绿色 漫反射
    //tex.specularColor = new BABYLON.Color3(0, 0, 1) //蓝色 镜面反射
    // tex.ambientColor = new BABYLON.Color3(0,0,1)
    window.__tex = tex;
    return tex;
  };
  createScene = (eng, canvas) => {
    let scene = new BABYLON.Scene(eng);
    //scene.ambientColor= new BABYLON.Color3(1,1,1);
    let camera = new BABYLON.FreeCamera(
      "camera1",
      new BABYLON.Vector3(10, 10, 0),
      scene
    );
    //let camera =  new BABYLON.ArcRotateCamera('c2',Math.PI/2, 0, 10,new BABYLON.Vector3.Zero(),scene);
    camera.setTarget(new BABYLON.Vector3(0, 0, 0)); //设定你要朝向哪个方向
    camera.attachControl(canvas, true); //让你可以控制
    //camera.setPosition(new BABYLON.Vector3(0,0,10))
    //camera.target=new BABYLON.Vector3(0,0,0);
    // Create a basic light, aiming 0, 1, 0 - meaning, to the sky
    {
      let light = new BABYLON.PointLight(
        "light1",
        new BABYLON.Vector3(0, 5, 0),
        scene
      );
      light.diffuse = new BABYLON.Color3(1, 1, 0); //光的基本颜色
      //light.specular = new BABYLON.Color3(0, 0, 1);
    }
    //light.specular = new BABYLON.Color3(1,1,1);
    let ground = BABYLON.MeshBuilder.CreateGround("jude", {
      width: 8,
      height: 8,
    });
    ground.material = this.createTexture();
    //let light2 = new BABYLON.SpotLight('s1',)
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
  render() {
    return (
      <Ske>
        <div id="index_wrapper">
          <div>
            {/*<Upload
            fileList={[]}
            beforeUpload={file=>{
              console.log(file)
              this.draw2canvas(file, this.canvasRef.current, this.canvasShadow.current)
            }}
          >
            <Button>
              Upload ur Pic
            </Button>
          </Upload>*/}
          </div>
          <div id="canvas_wrapper" width={1000} height={600}>
            <canvas ref={this.canvasRef} width={1000} height={600} />
            <canvas ref={this.canvasShadow} style={{ display: "none" }} />
          </div>
          <img id="shadow" />
        </div>
      </Ske>
    );
  }
  componentDidMount() {
    // console.log('canvas!', this.canvasRef)
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
}
export default Juicy;
