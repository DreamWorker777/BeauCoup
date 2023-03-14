import {
  Html,
  PerspectiveCamera,
  SpotLight,
  useAnimations,
  useGLTF,
  useScroll,
  useTexture,
  Cloud,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import {
//   EffectComposer,
//   Bloom,
//   Noise,
//   SelectiveBloom,
// } from "@react-three/postprocessing";
import { useEffect, useLayoutEffect, useRef, useState, useCallback } from "react";
import THREE, {
  ShaderMaterial,
  MeshStandardMaterial,
  LoopPingPong,
  Vector3,
  DoubleSide,
  FrontSide,
  BackSide,
  AlwaysDepth,
  NotEqualDepth,
  LessEqualDepth,
  LessDepth,
  Color,
  BoxBufferGeometry,
  PointLight,
} from "three";
import styles from "../styles/Component.module.scss";
import { damp } from "three/src/math/MathUtils";
import { motion } from "framer-motion";
import { FaTwitter } from "react-icons/fa";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCreative, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import Image from "next/image";

let position = 1;
const Model = (props) => {

  const roadMap = useRef();
  const team = useRef();
  const handleScroll = useCallback((e) => {
    var myEvt = new e.constructor(e.type, e);
    scroll.el['scrollTop'] += e.deltaY;
  }, [])

  const handleScrollUpMark = useCallback((e) => {
    if(scroll.scroll.current >= position && scroll.scroll.current >= 1 && e.deltaY > 0){
      props.direction.current.className = 'scroll-up warn';
    }
    else{
      props.direction.current.className = 'scroll-up';

    }
  }, [])

  useEffect(() => {
    roadMap.current.onmousewheel = handleScroll;
    team.current.onmousewheel = handleScroll;
    window.document.onmousewheel = handleScrollUpMark;

  }, [handleScroll])



  let init = true;
  useFrame((state, delta) => {
    const action = actions["CameraAction"];
    if(init && scroll.el['scrollHeight'] > 10){
      console.log("check", scroll.el['scrollHeight']);
      scroll.el['scrollTop'] = scroll.el['scrollHeight'];
      scroll.scroll.current = 1;
      init = false;
    }

    

    action.time = damp(
      action.time,
      2.1 + action.getClip().duration * (1- scroll.scroll.current),
      10,
      delta
    );
    state.camera.position.set(
      cameras[0].position.x,
      cameras[0].position.y,
      cameras[0].position.z
    );
    state.camera.rotation.set(
      cameras[0].rotation.x,
      cameras[0].rotation.y,
      cameras[0].rotation.z
    );
      position = scroll.scroll.current;
  });

  // useEffect(() => {
  //   const action = actions["CameraAction"];
  //   scroll.scroll.current += props.delta * 0.0001;
  //   const offset = scroll.offset;
  //   action.time = damp(
  //     action.time,
  //     action.getClip().duration * offset,
  //     10,
  //     frameDelta
  //   );
  //   frameState.camera.position.set(
  //     cameras[0].position.x,
  //     cameras[0].position.y,
  //     cameras[0].position.z
  //   );
  //   frameState.camera.rotation.set(
  //     cameras[0].rotation.x,
  //     cameras[0].rotation.y,
  //     cameras[0].rotation.z
  //   );
  //   console.log('delta', props.delta);
  // }, [props.event]);

  const { scene, nodes, animations, cameras, materials } = useGLTF("fin.gltf");
  const { actions } = useAnimations(animations, cameras[0]);

  const windowMap = new MeshStandardMaterial({
    color: "#111111",
    side: DoubleSide,
  });

  const text = new MeshStandardMaterial({
    color: "#642402",
    transparent: true,
    opacity: 0.6,
  });

  const greyColor = new MeshStandardMaterial({
    color: "#0f0f0f",
  });

  const lightColor = new MeshStandardMaterial({
    color: "#3e3c3c",
  });

  var effect,
    cube,
    plane015,
    cube_text1,
    cube_text2,
    cube_text3,
    cube_139,
    cube_33,
    shadow_1,
    shadow_2,
    text_017,
    text_1,
    text_2,
    text_3,
    text_4,
    text_5,
    text_6,
    text_7;

  const text_index = nodes.Scene.children.findIndex((x) => x.name === "Text");
  const text1_index = nodes.Scene.children.findIndex(
    (x) => x.name === "Text001"
  );
  const text2_index = nodes.Scene.children.findIndex(
    (x) => x.name === "Text002"
  );
  const text022_index = nodes.Scene.children.findIndex(
    (x) => x.name === "Text022"
  );
  nodes.Scene.children[text022_index].visible = false;
  cube_text1 = nodes.Scene.children[text_index];
  cube_text1.material = text;
  cube_text2 = nodes.Scene.children[text1_index];
  cube_text2.material = text;
  cube_text3 = nodes.Scene.children[text2_index];
  cube_text3.material = text;

  const cube028_index = nodes.Scene.children.findIndex(
    (x) => x.name === "Cube028"
  );
  nodes.Scene.children[cube028_index].visible = false;

  const plane015_index = nodes.Scene.children.findIndex(
    (x) => x.name === "Plane015"
  );
  plane015 = nodes.Scene.children[plane015_index];

  const cylinder004_index = nodes.Scene.children.findIndex(
    (x) => x.name === "Cylinder004"
  );
  nodes.Scene.children[cylinder004_index].material = greyColor;
  const cylinder005_index = nodes.Scene.children.findIndex(
    (x) => x.name === "Cylinder005"
  );
  nodes.Scene.children[cylinder005_index].material = greyColor;
  const cylinder006_index = nodes.Scene.children.findIndex(
    (x) => x.name === "Cylinder006"
  );
  nodes.Scene.children[cylinder006_index].material = greyColor;
  // const cylinder035_index = nodes.Scene.children.findIndex(x => x.name === "Cylinder035");
  // nodes.Scene.children[cylinder035_index].material = coloronly6;
  const cylinder017_index = nodes.Scene.children.findIndex(
    (x) => x.name === "Cylinder017"
  );
  nodes.Scene.children[cylinder017_index].children[0].material = lightColor;
  nodes.Scene.children[cylinder017_index].children[1].material = lightColor;

  const cylinder022_index = nodes.Scene.children.findIndex(
    (x) => x.name === "Cylinder022"
  );
  nodes.Scene.children[cylinder022_index].material = lightColor;

  const cylinder019_index = nodes.Scene.children.findIndex(
    (x) => x.name === "Cylinder019"
  );
  nodes.Scene.children[cylinder019_index].material.color.set("#5c5757");

  const cube020_index = nodes.Scene.children.findIndex(
    (x) => x.name === "Cube020"
  );
  nodes.Scene.children[cube020_index].children[7].visible = false;

  const cube_139_index = nodes.Scene.children.findIndex(
    (x) => x.name === "Cube047"
  );
  cube_139 = nodes.Scene.children[cube_139_index];
  cube_139.children[4].material = windowMap;

  const cube_33_index = nodes.Scene.children.findIndex(
    (x) => x.name === "Cube033"
  );
  cube_33 = nodes.Scene.children[cube_33_index];

  const text_index_017 = nodes.Scene.children.findIndex(
    (x) => x.name === "Text017"
  );
  text_017 = nodes.Scene.children[text_index_017];

  const text_index_1 = nodes.Scene.children.findIndex(
    (x) => x.name === "Text003"
  );
  text_1 = nodes.Scene.children[text_index_1];

  const text_index_2 = nodes.Scene.children.findIndex(
    (x) => x.name === "Text004"
  );
  text_2 = nodes.Scene.children[text_index_2];

  const text_index_3 = nodes.Scene.children.findIndex(
    (x) => x.name === "Text005"
  );
  text_3 = nodes.Scene.children[text_index_3];

  const text_index_4 = nodes.Scene.children.findIndex(
    (x) => x.name === "Text012"
  );
  text_4 = nodes.Scene.children[text_index_4];

  const text_index_5 = nodes.Scene.children.findIndex(
    (x) => x.name === "Text010"
  );
  text_5 = nodes.Scene.children[text_index_5];

  const text_index_6 = nodes.Scene.children.findIndex(
    (x) => x.name === "Text009"
  );
  text_6 = nodes.Scene.children[text_index_6];

  const text_index_7 = nodes.Scene.children.findIndex(
    (x) => x.name === "Text008"
  );
  text_7 = nodes.Scene.children[text_index_7];

  const shadow_index_1 = nodes.Scene.children.findIndex(
    (x) => x.name === "Text014"
  );
  shadow_1 = nodes.Scene.children[shadow_index_1];

  const shadow_index_2 = nodes.Scene.children.findIndex(
    (x) => x.name === "Text015"
  );
  shadow_2 = nodes.Scene.children[shadow_index_2];

  const index = nodes.Scene.children.findIndex((x) => x.name === "Plane006");
  effect = nodes.Scene.children[index];

  const cubeIndex = nodes.Scene.children.findIndex((x) => x.name === "Cube027");
  nodes.Scene.children[cubeIndex].visible = false;

  const PlaneIndex = nodes.Scene.children.findIndex(
    (x) => x.name === "Plane057"
  );
  nodes.Scene.children[PlaneIndex].visible = false;
  cube = nodes.Scene.children[PlaneIndex];

  const x = useAnimations(animations, scene);
  // const material2 = new MeshStandardNodeMaterial();
  // console.log(materials["ProceduralScifiPanels"])
  // Load Textures
  const Body = useTexture([
    "/Assets/Final_Sneak_Peek.png",
    "/Assets/ludvig-wiese-d-MfHM-jHwc-unsplash.jpg",
    "/Assets/Asset_4.png",
    "/Assets/Asset_5.png",
    "/Assets/x_alb2x.png",
    "/Assets/love_alb2x.png",
    "/Assets/text2x_1.png",
    "/Assets/concrete.png",
    "/Assets/metal.png",
    "/Assets/slider.png",
    "/Assets/space_ao.png",
    "/Assets/space_color.png",
    "/Assets/space_displace.png",
    "/Assets/space_normal.png",
    "/Assets/space_roughness.png",
    "/Assets/wood.jpg",
  ]);
  // Create Materials
  let map0, map1, map2, map3, map4, map5, map6, map7, map8;
  const effect_map1 = new MeshStandardMaterial({
    map: Body[6],
    transparent: true,
    color: "#696969",
  });
  let coloronly = new MeshStandardMaterial({
    color: "#cb21ff",
    transparent: true,
    opacity: 0.3,
    side: DoubleSide,
  });
  let coloronly1 = new MeshStandardMaterial({
    color: "#bb5500",
    transparent: true,
    side: DoubleSide,
    opacity: 0.35,
    // defines: materials.Coffee,
  });
  let coloronly23 = new MeshStandardMaterial({
    color: "#8a2900",
    transparent: true,
    side: DoubleSide,
    opacity: 0.5,
    // defines: materials.Coffee,
  });
  let coloronly13 = new MeshStandardMaterial({
    // color: "#cf33ff",
    color: "#ffffff",
    transparent: true,
    side: DoubleSide,
    depthFunc: AlwaysDepth,
    opacity: 0.17,
    // defines: materials.Coffee,
  });
  let coloronly14 = new MeshStandardMaterial({
    color: "#cf33ff",
    // color: "#ffffff",
    transparent: true,
    side: DoubleSide,
    depthFunc: AlwaysDepth,
    opacity: 1,
    // defines: materials.Coffee,
  });
  let coloronly16 = new MeshStandardMaterial({
    color: "#bA3904",
    transparent: true,
    side: DoubleSide,
    opacity: 0.35,
    // defines: materials.Coffee,
  });
  let coloronly17 = new MeshStandardMaterial({
    color: "#cf33ff",
    transparent: true,
    side: DoubleSide,
    opacity: 0.35,
    // defines: materials.Coffee,
  });
  let coloronly19 = new MeshStandardMaterial({
    color: "#e48aff",
    transparent: true,
    side: DoubleSide,
    depthFunc: LessDepth,
    opacity: 0.3,
    // defines: materials.Coffee,
  });
  let coloronly20 = new MeshStandardMaterial({
    color: "#434242",
    transparent: true,
    side: DoubleSide,
    depthFunc: LessDepth,
    opacity: 0.3,
    // defines: materials.Coffee,
  });
  let coloronly21 = new MeshStandardMaterial({
    color: "#220b2d",
  });
  let coloronly22 = new MeshStandardMaterial({
    color: "#555555",
  });
  let coloronly18 = new MeshStandardMaterial({
    color: "#cf33ff",
    transparent: true,
    side: DoubleSide,
    opacity: 0.4,
    // defines: materials.Coffee,
  });
  let coloronly15 = new MeshStandardMaterial({
    color: "#b0A0A0",
    transparent: true,
    side: DoubleSide,
    depthFunc: LessDepth,
    opacity: 0.3,
    // defines: materials.Coffee,
  });
  let coloronly8 = new MeshStandardMaterial({
    color: "#ff2500",
  });
  let shadow = new MeshStandardMaterial({
    color: "#000000",
    transparent: true,
    opacity: 0.35,
  });
  let coloronly9 = new MeshStandardMaterial({
    color: "#ff1500",
  });
  let coloronly2 = new MeshStandardMaterial({
    color: "#0d0d0d",
    map: Body[7],
  });
  let coloronly3 = new MeshStandardMaterial({
    color: "#00ff00",
    // map:
  });
  let coloronly4 = new MeshStandardMaterial({
    color: "#0a0a0a",
    map: Body[8],
  });
  let coloronly5 = new MeshStandardMaterial({
    color: "#000000",
    map: Body[8],
  });
  let coloronly6 = new MeshStandardMaterial({
    // color: "#0a0a0a",
    color: "#222222",
    // aoMap: Body[10],
    map: Body[11],
    // displacementMap: Body[12],
    normalMap: Body[13],
    // roughnessMap: Body[14],
  });
  let coloronly7 = new MeshStandardMaterial({
    // map: Body[15],
    color: "#2e2929",
  });
  let coloronly10 = new MeshStandardMaterial({
    color: "#ffffff",
    side: FrontSide,
    opacity: 0.2,
    transparent: true,
  });
  let coloronly11 = new MeshStandardMaterial({
    color: "#000000",
    side: FrontSide,
  });
  let coloronly12 = new MeshStandardMaterial({
    color: "#111111",
    side: FrontSide,
  });
  // let coloronlylvl = materials['ProceduralScifiPanels']
  // map: materials.LVL,;
  map0 = new MeshStandardMaterial({
    map: Body[1],
    // color: "#ff0000",
  });
  map1 = new MeshStandardMaterial({
    map: Body[0],
    color: "#333333",
  });
  map2 = new MeshStandardMaterial({
    map: Body[2],
    color: "#0055ff",
    transparent: true,
    opacity: 0.5,
    side: FrontSide,
  });
  map3 = new MeshStandardMaterial({
    map: Body[3],
    color: "#0055ff",
    transparent: true,
    opacity: 0.5,
    side: FrontSide,
  });
  map4 = new MeshStandardMaterial({
    map: Body[4],
    transparent: true,
    opacity: 1,
    color: "#004422",
  });
  map5 = new MeshStandardMaterial({
    map: Body[5],
    transparent: true,
    opacity: 0.45,
    // side: DoubleSide,
    color: "#00ff33",
  });
  map6 = new MeshStandardMaterial({
    map: Body[6],
    transparent: true,
  });
  map7 = new MeshStandardMaterial({
    map: Body[6],
    transparent: true,
    color: "#00ff00",
  });
  map8 = new MeshStandardMaterial({
    map: Body[9],
    transparent: true,
    opacity: 0.7,
    // depthFunc: NotEqualDepth,
    side: DoubleSide,
  });
  const WithoutMAP = [
    { childID: "Plane", mtl: coloronly2 },
    { childID: "Cylinder016", mtl: coloronly3 },
    { childID: "1thfloor", mtl: coloronly4 },
    { childID: "2thfloor", mtl: coloronly4 },
    { childID: "3thfloor", mtl: coloronly4 },
    { childID: "4thfloor", mtl: coloronly4 },
    { childID: "Cube005", mtl: coloronly4 },
    { childID: "Cylinder021", mtl: coloronly3 },
    { childID: "Cube007", mtl: coloronly4 },
    { childID: "Cube008", mtl: coloronly3 },
    { childID: "Cube014", mtl: coloronly2 },
    { childID: "Cube010", mtl: coloronly2 },
    { childID: "Cube011", mtl: coloronly2 },
    { childID: "Cube013", mtl: coloronly2 },
    { childID: "Cube080", mtl: coloronly2 },
    { childID: "Plane009", mtl: coloronly2 },
    { childID: "Cube076", mtl: coloronly2 },
    { childID: "Cube077", mtl: coloronly2 },
    { childID: "Cube078", mtl: coloronly2 },
    { childID: "Road2", mtl: coloronly2 },
    { childID: "Road3", mtl: coloronly2 },
    { childID: "Road4", mtl: coloronly2 },
    { childID: "Road5", mtl: coloronly2 },
    { childID: "Cube012", mtl: coloronly6 },
    { childID: "Cube014", mtl: coloronly6 },
    { childID: "Cube029", mtl: coloronly6 },
    { childID: "Cube128", mtl: coloronly6 },
    { childID: "Cube121", mtl: coloronly6 },
    { childID: "Cube123", mtl: coloronly6 },
    { childID: "Cube122", mtl: coloronly6 },
    { childID: "Cube125", mtl: coloronly6 },
    { childID: "Cube127", mtl: coloronly6 },
    { childID: "Cube017", mtl: coloronly4 },
    { childID: "Cube019", mtl: coloronly4 },
    { childID: "Cube006", mtl: coloronly4 },
    { childID: "Cube021", mtl: coloronly4 },
    { childID: "Cube023", mtl: coloronly4 },
    { childID: "Cube053", mtl: coloronly10 },
    { childID: "Cube137_1", mtl: coloronly10 },
    { childID: "Cube084_1", mtl: coloronly10 },
    // { childID: "Cube061_1", mtl: coloronly10 },
    // { childID: "Cube136_1", mtl: coloronly10 },
    { childID: "Cube025", mtl: materials.Metal_Aluminum_Anodized },
    { childID: "Cube074", mtl: materials.Upperfog },
    { childID: "Text003", mtl: coloronly13 },
    { childID: "Text006", mtl: coloronly18 },
    { childID: "Text008", mtl: coloronly17 },
    { childID: "Text018", mtl: coloronly22 },
    { childID: "Text019", mtl: coloronly22 },
    { childID: "Text020", mtl: coloronly },
    { childID: "Text021", mtl: coloronly },
    { childID: "Plane010", mtl: coloronly },
    { childID: "Plane011", mtl: coloronly },
    { childID: "Plane012", mtl: coloronly },
    { childID: "Plane015", mtl: coloronly19 },
    { childID: "Text004", mtl: coloronly1 },
    { childID: "Text005", mtl: coloronly1 },
    { childID: "Text009", mtl: coloronly1 },
    { childID: "Text010", mtl: coloronly16 },
    { childID: "Text011", mtl: coloronly1 },
    { childID: "Text012", mtl: coloronly1 },
    { childID: "Text014", mtl: coloronly8 },
    { childID: "Text015", mtl: coloronly9 },
    { childID: "Text016", mtl: coloronly1 },
    { childID: "Text017", mtl: coloronly23 },
    { childID: "Text013", mtl: coloronly3 },
    { childID: "Text022", mtl: coloronly3 },
    { childID: "G-__556086.005", mtl: coloronly },
    { childID: "G-__557724", mtl: coloronly4 },
    { childID: "Balcony_Strips", mtl: coloronly2 },
    { childID: "G-Difference", mtl: coloronly12 },
    { childID: "G-Difference002", mtl: coloronly12 },
    { childID: "G-__557724", mtl: coloronly7 },
    { childID: "G-__556122", mtl: coloronly7 },
    { childID: "G-__556095", mtl: coloronly7 },
    { childID: "G-__556095001", mtl: coloronly7 },
    { childID: "G-__556095002", mtl: coloronly7 },
    { childID: "G-__556095003", mtl: coloronly7 },
    { childID: "G-__556095004", mtl: coloronly7 },
    { childID: "G-__556095005", mtl: coloronly7 },
    { childID: "G-__556095006", mtl: coloronly7 },
    { childID: "G-__556104", mtl: coloronly7 },
    { childID: "G-__556104001", mtl: coloronly7 },
    { childID: "G-__556104002", mtl: coloronly7 },
    { childID: "G-__556104003", mtl: coloronly7 },
    { childID: "G-__556104004", mtl: coloronly7 },
    { childID: "G-__556104005", mtl: coloronly7 },
    { childID: "G-__556104006", mtl: coloronly7 },
    { childID: "G-__556131", mtl: coloronly7 },
    { childID: "G-__556131001", mtl: coloronly7 },
    { childID: "G-__556131002", mtl: coloronly7 },
    { childID: "G-__556131003", mtl: coloronly7 },
    { childID: "G-__556131004", mtl: coloronly7 },
    { childID: "G-__556131005", mtl: coloronly7 },
    { childID: "G-__556131006", mtl: coloronly7 },
    { childID: "G-__556113", mtl: coloronly7 },
    { childID: "G-__556113001", mtl: coloronly7 },
    { childID: "G-__556113002", mtl: coloronly7 },
    { childID: "G-__556113003", mtl: coloronly7 },
    { childID: "G-__556113004", mtl: coloronly7 },
    { childID: "G-__556113005", mtl: coloronly7 },
    { childID: "G-__556113006", mtl: coloronly7 },
    { childID: "G-__556077", mtl: coloronly7 },
    { childID: "G-__556077001", mtl: coloronly7 },
    { childID: "G-__556077002", mtl: coloronly7 },
    { childID: "G-__556077003", mtl: coloronly7 },
    { childID: "G-__556077004", mtl: coloronly7 },
    { childID: "G-__556077005", mtl: coloronly7 },
    { childID: "G-__556077006", mtl: coloronly7 },
    { childID: "G-__556068", mtl: coloronly7 },
    { childID: "G-__556068001", mtl: coloronly7 },
    { childID: "G-__556068002", mtl: coloronly7 },
    { childID: "G-__556068003", mtl: coloronly7 },
    { childID: "G-__556068004", mtl: coloronly7 },
    { childID: "G-__556068005", mtl: coloronly7 },
    { childID: "G-__556068006", mtl: coloronly7 },
    { childID: "G-__556122", mtl: coloronly7 },
    { childID: "G-__556122001", mtl: coloronly7 },
    { childID: "G-__556122002", mtl: coloronly7 },
    { childID: "G-__556122003", mtl: coloronly7 },
    { childID: "G-__556122004", mtl: coloronly7 },
    { childID: "G-__556122005", mtl: coloronly7 },
    { childID: "G-__556122006", mtl: coloronly7 },
    { childID: "G-__556086001", mtl: coloronly11 },
    { childID: "G-__556167001", mtl: coloronly11 },
    { childID: "G-__556086002", mtl: coloronly11 },
    { childID: "G-__556086003", mtl: coloronly11 },
    { childID: "G-__556086004", mtl: coloronly11 },
    { childID: "G-__556086005", mtl: coloronly11 },
    { childID: "G-__556086006", mtl: coloronly11 },
  ];
  const WithMAP = [
    { childID: "GroundFog", mtl: coloronly5 },
    // beau
    { childID: "Plane001", mtl: map2 },
    // coup
    { childID: "Plane008", mtl: map3 },
    // team1
    { childID: "Plane013", mtl: map0 },
    // team2
    { childID: "Plane014", mtl: map1 },
    // cross
    { childID: "Plane004", mtl: map4 },
    // love
    { childID: "Plane005", mtl: map5 },
    // imgbytext
    { childID: "Plane003", mtl: map1 },
    // txt
    { childID: "Plane006", mtl: map7 },
    // slider
    { childID: "Slider", mtl: map8 },
  ];

  const withTexture = (parent, type, mtl) => {
    parent.traverse((o) => {
      if (o.isMesh) {
        if (o.name == type) {
          o.material = mtl;
          o.material.map.flipY = false;
        }
      }
    });
  };

  const withoutTexture = (parent, type, mtl) => {
    parent.traverse((o) => {
      if (o.isMesh) {
        if (o.name == type) {
          o.material = mtl;
        }
      }
    });
  };

  if (scene) {
    for (let object of WithMAP) {
      withTexture(scene, object.childID, object.mtl);
    }
  }

  if (scene) {
    for (let object of WithoutMAP) {
      withoutTexture(scene, object.childID, object.mtl);
    }
  }

  useLayoutEffect(() =>
    Object.values(nodes).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    )
  );

  function animate() {
    requestAnimationFrame(animate);
    nodes.Slider.rotation.z += 0.01;
    nodes.Text017.position.x += 0.1;
  }

  const scroll = useScroll();

  useEffect(() => {
    void (actions["CameraAction"].play().paused = true), [actions];
    // window.scrollTo({ top: 0, left: 0});
  });
  x.actions["Text.017Action"].play();

  // var offset;

  // useFrame((state, delta) => {
  //   const action = actions["CameraAction"];
  //   // deltaY
  //   const offset = scroll.offset;
  //   // var offset = 0;
  //   // offset += deltaY * 0.001;
  //   console.log('offset state-->', offset);
  //   action.time = damp(
  //     action.time,
  //     action.getClip().duration * offset,
  //     10,
  //     delta
  //   );
  //   state.camera.position.set(
  //     cameras[0].position.x,
  //     cameras[0].position.y,
  //     cameras[0].position.z
  //   );
  //   state.camera.rotation.set(
  //     cameras[0].rotation.x,
  //     cameras[0].rotation.y,
  //     cameras[0].rotation.z
  //   );
  // });

  animate();

  function onMouseWheel(e) {
    // console.log('scroll->', scroll.offset);
    var delta = e.deltaY;
    console.log("scroll-->", scroll);
    scroll.scroll.current += delta * 0.0001;
    // scroll.offset += delta * 0.0001;
    // console.log('scroll->', scroll.offset);
    // if (scroll.offset >= 0.5 && scroll.offset <= 0.72) {
    //   scroll.scroll.current += delta * 0.0001;
    // }
    // else if (scroll.offset > 0.72) {
    //   // console.log('here--->');
    //   scroll.offset = 0.725;
    //   scroll.scroll.current = 0.725;
    // }
  }

  function RoadMap() {
    const ButtonsComponent = () => {
      const swiper = useSwiper()
      console.error(swiper)

      return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 44,
          transform: `translate3d(-50%, 0, 0)`,
          left: '50%',
          zIndex: 999,
        }}>
          <button 
            onClick={() => { swiper.slidePrev() }}
            style={{
              cursor: 'pointer',
              background: `url('/Assets/prevArrow.png')`,
              outline: 'none',
              border: 'none',
              width: 96,
              height: 54,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}
          >
          </button>

          <button 
            onClick={() => { swiper.slideNext() }}
            style={{
              cursor: 'pointer',
              background: `url('/Assets/nextArrow.png')`,
              outline: 'none',
              border: 'none',
              width: 96,
              height: 54,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}
          >
          </button>
        </div>
      )
    }

    return (
      <mesh>
        <Html
          // transform
          ref={roadMap}
          occlude
          position={[3, -13.3, 29.601]}
          rotation={[1.571, 0, 0]}
        >
          <div className={styles.roadmap}>
            <Swiper
              grabCursor={true}
              effect={"creative"}
              pagination={{
                clickable: true,
              }}
              creativeEffect={{
                prev: {
                  // shadow: true,
                  translate: ["-100%", 0, -1],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              modules={[EffectCreative, Pagination]}
              className="roadmapSwiper"
            >
              <SwiperSlide>
                <div className={styles.collection} style={{ width: '100%' }}>
                  <div className="teamWrapper1"  style={{ width: '100%' }}>
                    <div className={styles.roadMapImage}>
                      <Image
                        src="/Assets/roadmap/1.png"
                        alt=""
                        layout='fill'
                        objectFit='contain'
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.collection} style={{ width: '100%' }}>
                  <div className="teamWrapper1" style={{ width: '100%' }}>
                    <div className={styles.roadMapImage}>
                      <Image
                        src="/Assets/roadmap/2.png"
                        alt=""
                        layout='fill'
                        objectFit='contain'
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.collection} style={{ width: '100%' }}>
                  <div className="teamWrapper1" style={{ width: '100%' }}>
                    <div className={styles.roadMapImage}>
                      <Image
                        src="/Assets/roadmap/3.png"
                        alt=""
                        layout='fill'
                        objectFit='contain'
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.collection} style={{ width: '100%' }}>
                  <div className="teamWrapper1" style={{ width: '100%' }}>
                    <div className={styles.roadMapImage}>
                      <Image
                        src="/Assets/roadmap/4.png"
                        alt=""
                        layout='fill'
                        objectFit='contain'
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.collection} style={{ width: '100%' }}>
                  <div className="teamWrapper1" style={{ width: '100%' }}>
                    <div className={styles.roadMapImage}>
                      <Image
                        src="/Assets/roadmap/5.png"
                        alt=""
                        layout='fill'
                        objectFit='contain'
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <ButtonsComponent />
            </Swiper>
          </div>
        </Html>
      </mesh>
    );
  }

  function Team() {

    const ButtonsComponent = () => {
      const swiper = useSwiper()
      console.error(swiper)
    
      return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 30,
          transform: `translate3d(-50%, 0, 0)`,
          left: '50%',
          zIndex: 999,
        }}>
          <button 
            onClick={() => { swiper.slidePrev() }}
            style={{
              cursor: 'pointer',
              background: `url('/Assets/prevArrow.png')`,
              outline: 'none',
              border: 'none',
              width: 96,
              height: 40,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left',
            }}
          >
          </button>

          <button 
            onClick={() => { swiper.slideNext() }}
            style={{
              cursor: 'pointer',
              background: `url('/Assets/nextArrow.png')`,
              outline: 'none',
              border: 'none',
              width: 96,
              height: 40,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right',
            }}
          >
          </button>
        </div>
      )
    }
    return (
      <mesh>
        <Html ref={team}  occlude position={[4, -2, 24]} rotation={[1.6, 1.6, 0]}>
          <div className={styles.teamContainer}>
            <Swiper
              grabCursor={true}
              effect={"creative"}
              pagination={{
                clickable: true,
              }}
              creativeEffect={{
                prev: {
                  // shadow: true,
                  translate: ["-100%", 0, -1],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              modules={[EffectCreative, Pagination]}
              className="teamSwiper"
            >
              <SwiperSlide>
                <div className={styles.collection} style={{ width: '100%' }}>
                  <div className={styles.teamWrapper} style={{ width: '100%' }}>
                    <div className={styles.teamImage}>
                      <Image
                        src="/Assets/team/1.png"
                        alt=""
                        layout='fill'
                        objectFit='contain'
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.collection} style={{ width: '100%' }}>
                  <div className={styles.teamWrapper} style={{ width: '100%' }}>
                    <div className={styles.teamImage}>
                      <Image
                        src="/Assets/team/2.png"
                        alt=""
                        layout='fill'
                        objectFit='contain'
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.collection} style={{ width: '100%' }}>
                  <div className={styles.teamWrapper} style={{ width: '100%' }}>
                    <div className={styles.teamImage}>
                      <Image
                        src="/Assets/team/3.png"
                        alt=""
                        layout='fill'
                        objectFit='contain'
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.collection} style={{ width: '100%' }}>
                  <div className={styles.teamWrapper} style={{ width: '100%' }}>
                    <div className={styles.teamImage}>
                      <Image
                        src="/Assets/team/4.png"
                        alt=""
                        layout='fill'
                        objectFit='contain'
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.collection} style={{ width: '100%' }}>
                  <div className={styles.teamWrapper} style={{ width: '100%' }}>
                    <div className={styles.teamImage}>
                      <Image
                        src="/Assets/team/5.png"
                        alt=""
                        layout='fill'
                        objectFit='contain'
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <ButtonsComponent />
            </Swiper>
          </div>
        </Html>
      </mesh>
    );
  }

  return (
    <>
      <group name="team">
        <Team />
      </group>
      <group name="roadmap">
        <RoadMap />
      </group>
      <group>
        <PerspectiveCamera makeDefault name="Camera" fov={22.89} far={1000} />
        {/* <Nav /> */}
        <SpotLight
          position={[20, -20, 7]}
          distance={14}
          angle={2}
          attenuation={5}
          color={"#ffffff"}
          anglePower={4}
          name={"light_1"}
          castShadow={true}
        />
        <SpotLight
          position={[22.01, -21.38, 7]}
          intensity={0.3}
          distance={14}
          angle={2}
          attenuation={5}
          color={"#ffffff"}
          anglePower={4}
          name={"light_2"}
          castShadow={true}
        />
        <group name="light_3" position={[10.03, -2.54, 14.75]}>
          <pointLight
            color={"#fb00ff"}
            power={50}
            intensity={3}
            distance={15}
            decay={2}
          />
        </group>
        <group name="light_3" position={[8, -2, 19]}>
          <pointLight
            color={"#fb00ff"}
            power={50}
            intensity={3}
            distance={15}
            decay={2}
          />
        </group>
        <group name="spot_light_0_0" position={[10.1, -15.86, 4.84]}>
          <SpotLight
            distance={5.45}
            angle={1.271}
            intensity={1.453}
            attenuation={4}
            color={"#c9c9c9"}
            anglePower={6}
            penumbra={0.04}
          />
        </group>
        <group name="spot_light_0_0_1" position={[10.04, -15.58, 2.584]}>
          <SpotLight
            distance={3.36}
            angle={1.261}
            intensity={2.59}
            attenuation={4}
            color={"#c9c9c9"}
            anglePower={6}
            penumbra={0.04}
          />
        </group>
        <group name="spot_light_0_0_2" position={[5.96, -15.8, 2.584]}>
          <SpotLight
            distance={1.92}
            angle={1.511}
            intensity={4.0}
            attenuation={4}
            color={"#c9c9c9"}
            anglePower={6}
            penumbra={0.04}
          />
        </group>
        <group name="point_light_0_1" position={[11, -16, 3.35]}>
          <pointLight
            color={"#00ff00"}
            power={50}
            intensity={6}
            distance={2.07}
            decay={2}
          />
        </group>
        <group name="point_light_0" position={[14.3, -16.6, 4.6]}>
          <pointLight
            color={"#00ff00"}
            power={50}
            intensity={6}
            distance={2.07}
            decay={2}
          />
        </group>
        <group name="point_light_1" position={[15.209, -17.196, 1.846]}>
          <pointLight
            color={"#aa3500"}
            power={50}
            intensity={6}
            distance={2.07}
            decay={2}
          />
        </group>
        <group name="point_light_2" position={[13.659, -17.036, 0.636]}>
          <SpotLight
            distance={3}
            angle={3}
            intensity={1.27}
            attenuation={4}
            color={"#fb00ff"}
            anglePower={6}
          />
        </group>
        <group name="point_light_3" position={[10.439, -17.126, 1.516]}>
          <SpotLight
            distance={3}
            angle={3}
            intensity={1}
            attenuation={4}
            color={"#ffa629"}
            anglePower={6}
          />
        </group>
        <group name="point_light_4" position={[6.67, -18.156, 1.685]}>
          <SpotLight
            distance={3}
            angle={3}
            intensity={1.23}
            attenuation={4}
            color={"#fb00ff"}
            anglePower={6}
          />
        </group>
        <group name="point_light_5" position={[3.5, 4.41, 11.72]}>
          <SpotLight
            distance={3}
            angle={3}
            intensity={1.23}
            attenuation={4}
            color={"#fb00ff"}
            anglePower={6}
          />
          {/* <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={"#464343"} />
          </mesh> */}
        </group>
        <group name="point_light_6" position={[-0.97, -11.52, 16.38]}>
          <pointLight
            intensity={1.839}
            color={"#fb00ff"}
            power={25}
            distance={15}
            decay={2}
          />
        </group>
        <group name="point_light_7" position={[6.5, -15, 30]}>
          <pointLight color={"#fb00ff"} power={100} distance={6} decay={2} />
        </group>
        <group
          name="point_light_8"
          position={[0.71, -8.75, 25.23]}
          rotation={[0, 0.1, 0]}
        >
          <pointLight
            color={"#fb00ff"}
            intensity={12}
            power={200}
            distance={4}
            decay={2}
          />
        </group>
        <pointLight
          position={[-0.5, 20, 115]}
          color={"#fb00ff"}
          power={100}
          distance={40}
        />

        {/* <EffectComposer> */}
        {/* <SelectiveBloom
          selection={[
            // nodes.Cube008,
            // nodes.Plane001,
            // nodes.Plane008,
            // nodes.Plane005,
            // nodes.Plane004,
            // nodes.Text,
            // nodes.Text001,
            // nodes.Text002,
            // nodes.Text004,
            // nodes.Text005,
            // nodes.Text009,
            // nodes.Text010,
            // nodes.Text011,
            // nodes.Text012,
            // nodes.Text014,
            // nodes.Text015,
            // nodes.Text003,
            // nodes.Text008,
            // nodes.Text017,
            // nodes.Text018,
            // nodes.Text019,
            // nodes.Text020,
            // nodes.Text021,
            // nodes.Plane010,
            // nodes.Plane011,
            // nodes.Plane006,
            // nodes.Plane012,
            // nodes.Plane015,
            // nodes.Cube012,
          ]}
          luminanceThreshold={-0.5}
          luminanceSmoothing={-500}
          height={1000}
        /> */}
        {/* <Noise premultiply={true} opacity={6} /> */}
        <primitive object={scene} {...props}>
          <mesh />
        </primitive>
        {/* <mesh  position={[20.127, -10.159, 7.288]} rotation={[Math.PI / 2, 0, 0]} name="effect_plane_1">
            <planeBufferGeometry attach="geometry" args={[2.770, 5.770]} />
            <meshStandardMaterial attach="material" color={'#00ff00'} map={EffectTexture[0]} />
          </mesh> */}
        {/* <mesh name="effect_plane_1" geometry={effect.geometry} material={effect_map1} position={[20.137, -10.179, 7.283]} rotation={[Math.PI / 2, 0, 0]} scale={[1.361, 2.849, 2.849]} />
        <mesh name="effect_plane_2" geometry={cube.geometry} position={[10.046, -10.179, 11.528]} rotation={[Math.PI / 2, 0, 0]} scale={[1.361, 2.849, 2.849]} /> */}
        <mesh
          name="shadow_1"
          geometry={shadow_1.geometry}
          material={shadow}
          position={[11.388, -19.92, -0.23]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[2.246, 2.246, 2.246]}
        />
        <mesh
          name="shadow_1"
          geometry={shadow_2.geometry}
          material={shadow}
          position={[23.188, -19.92, -0.23]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[2.246, 2.246, 2.246]}
        />
        <mesh
          name="text_1"
          geometry={text_1.geometry}
          material={coloronly14}
          position={[5.086, -15.828, 1.195]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.182, 1.182, 0.01]}
        />
        <mesh
          name="text_2"
          geometry={text_2.geometry}
          material={coloronly15}
          position={[8.094, -15.848, 1.67]}
          rotation={[Math.PI / 2, 0, 0.054]}
          scale={[0.623, 0.623, 0.01]}
        />
        <mesh
          name="text_3"
          geometry={text_3.geometry}
          material={coloronly15}
          position={[9.641, -15.858, 1.725]}
          rotation={[Math.PI / 2, 0, -0.019]}
          scale={[0.902, 0.902, 0.01]}
        />
        <mesh
          name="text_4"
          geometry={text_4.geometry}
          material={coloronly15}
          position={[11.455, -15.878, 1.67]}
          rotation={[Math.PI / 2, 0, 0.041]}
          scale={[0.771, 0.771, 0.01]}
        />
        <mesh
          name="text_6"
          geometry={text_6.geometry}
          material={coloronly15}
          position={[7.578, -16.675, 1.597]}
          rotation={[0.061, 1.562, 1.514]}
          scale={[1, 1, 0.01]}
        />
        <mesh
          name="text_5"
          geometry={text_5.geometry}
          material={coloronly16}
          position={[15.433, -17.255, 1.504]}
          rotation={[-2.872, 0.001, 3.035]}
          scale={[1.126, 1.296, 0.31]}
        />
        <mesh
          name="text_7"
          geometry={text_7.geometry}
          material={coloronly19}
          position={[13.179, -15.916, 0.446]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.455, 0.455, 0.01]}
        />
        <mesh
          name="cube_text1"
          geometry={cube_text1.geometry}
          material={coloronly20}
          position={[15.632, -12.846, 11.316]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[1.638, 1.638, 1.638]}
        />
        <mesh
          name="cube_text2"
          geometry={cube_text2.geometry}
          material={coloronly20}
          position={[9.418, -13.985, 11.316]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.638, 1.638, 1.638]}
        />
        <mesh
          name="cube_text3"
          geometry={cube_text3.geometry}
          material={coloronly20}
          position={[14.676, -13.944, 11.316]}
          rotation={[Math.PI / 2, Math.PI / 4, 0]}
          scale={[2.249, 2.249, 2.249]}
        />
        <mesh
          name="plane015"
          geometry={plane015.geometry}
          material={coloronly21}
          position={[0.74, 6, 15]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[5.46, 10.421, 1.421]}
        />
        {/* <mesh name="text_017" geometry={text_017.geometry} material={lightColor} position={[32.573, -8.238, 110.366]} rotation={[-1.484, 0, 3.141]} scale={[13.055, 13.055, 13.055]} /> */}
        {/* <mesh name="cube_33" geometry={cube_33.geometry} material={coloronly20} position={[5.757, -15.060, 1.119]} rotation={[0, 0, 0]} scale={[11.106, 0.883, 1.236]} /> */}
        {/* </EffectComposer> */}
      </group>
    </>
  );
};

export default Model;
