import React from "react"
import { useEffect } from "react" //wie onChange listener
import * as THREE from "three"
import { OrbitControls } from "../../../node_modules/three/examples/jsm/controls/OrbitControls"
import { GeometryUtils } from "../../helpers/GeometryUtils"
import { gsap } from "gsap"
import helvetica from "../../../node_modules/three/examples/fonts/helvetiker_regular.typeface.json"

const Visualization = () => {
  useEffect(() => {
    init()

    const container = document.querySelector(".visualization")
    container.appendChild(renderer.domElement)

    createShard()
    updateParticles()
    animate()
  })

  let camera, scene, renderer, controls

  const font = new THREE.Font(helvetica)

  let posList = []
  let particleCount = 4500
  let shardColors = ["#212121", "#080808", "#262626", "#6b1010", "#6e2d2d"]
  let particles = []
  let randomPointsInSphere = []

  let counter = 0
  let numText = 0

  const phrases = []
  phrases.push(
    "You are so exotic!",
    "You're transgender? \n Wow, you don't \n look like it at all.",
    "Where are you from?",
    "You are so articulate.",
    "I believe the most \nqualified person should \nget the job."
  )

  function init() {
    // SCENE
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)

    // CAMERA
    const ratio = window.innerWidth / window.innerHeight
    camera = new THREE.PerspectiveCamera(75, ratio, 0.1, 1000)
    camera.position.z = 400 / ratio
    // camera.position.z = 200

    // RENDERER
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

    // make sure the scene adjusts to the browser window size
    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    })

    // CONTROLS FOR NAVIGATION
    // controls = new OrbitControls(camera, renderer.domElement)

    // LIGHTING
    let ambientLight = new THREE.AmbientLight(0xffffff, 1)
    scene.add(ambientLight)

    createText()

    for (let i = 0; i < particleCount; i++) {
      randomPointsInSphere.push(randomSpherePoint(200))
    }
  }

  function randomSpherePoint(maxRadius) {
    let vector = new THREE.Vector3()
    let radius = 25 + Math.random() * maxRadius

    let u = Math.random()
    let v = Math.random()
    let theta = 2 * Math.PI * u
    let phi = Math.acos(2 * v - 1)
    vector.x = radius * Math.sin(phi) * Math.cos(theta)
    vector.y = radius * Math.sin(phi) * Math.sin(theta)
    vector.z = radius * Math.cos(phi)

    return vector
  }

  function createText() {
    phrases.forEach((phrase, i) => {
      const textGeo = new THREE.TextGeometry(phrase, {
        font: font,
        size: 30,
        height: 1,
        curveSegments: 12,
      })

      //   let textMat = new THREE.MeshNormalMaterial()
      //   let textMesh = new THREE.Mesh(textGeo, textMat)
      //   scene.add(textMesh)
      textGeo.center()

      posList[i] = GeometryUtils.randomPointsInGeometry(textGeo, particleCount)
    })
  }

  function Shard() {
    this.randRotX = Math.random() * 0.01
    this.randRotY = Math.random() * 0.01
  }

  Shard.prototype.init = function (i) {
    let shardObject = new THREE.Object3D()

    const shardGeo = new THREE.SphereGeometry(0.5, 3, 3)
    const shardMat = new THREE.MeshBasicMaterial({
      color: shardColors[i % shardColors.length],
    })
    const shardMesh = new THREE.Mesh(shardGeo, shardMat)

    const pos = randomPointsInSphere[i]
    // const pos = posList[0][i];
    shardObject.position.set(pos.x, pos.y, pos.z)

    for (var j = 0; j < shardMesh.geometry.vertices.length; j++) {
      shardMesh.geometry.vertices[j].x += -2 + Math.random() * 2
      shardMesh.geometry.vertices[j].y += -2 + Math.random() * 2
      shardMesh.geometry.vertices[j].z += -2 + Math.random() * 2
    }

    shardObject.add(shardMesh)
    this.shardObject = shardObject
  }

  Shard.prototype.updatePosition = function (i) {
    const pos = posList[numText][i]
    const randPos = randomPointsInSphere[i]

    let tl = gsap.timeline({ repeat: 0, repeatDelay: 0, repeatRefresh: true })
    tl.to(this.shardObject.position, {
      duration: 4,
      ease: "expo.out",
      x: pos.x,
      y: pos.y,
      z: pos.z,
    })
    tl.to(this.shardObject.position, {
      duration: 6,
      ease: "expo.out",
      x: randPos.x,
      y: randPos.y,
      z: randPos.z,
      delay: 4,
    })
  }

  Shard.prototype.updateRotation = function () {
    this.shardObject.rotation.x += this.randRotX
    this.shardObject.rotation.y += this.randRotY
  }

  function createShard() {
    for (let i = 0; i < particleCount; i++) {
      const p = new Shard()
      p.init(i)
      scene.add(p.shardObject)
      particles[i] = p
    }
  }

  function updateParticles() {
    switchPhrase()
    for (var i = 0; i < particles.length; i++) {
      particles[i].updatePosition(i)
    }

    setInterval(() => {
      updateParticles()
    }, 14500)
  }

  function switchPhrase() {
    counter++
    numText = counter % phrases.length
    console.log("numText: " + numText)
  }

  function animate() {
    requestAnimationFrame(animate)

    for (let i = 0; i < particleCount; i++) {
      particles[i].updateRotation()
    }

    // controls.update()
    renderer.render(scene, camera)
  }

  return <div className="visualization"></div>
}

export default Visualization
