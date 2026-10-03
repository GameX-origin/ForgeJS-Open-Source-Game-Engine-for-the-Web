import { Engine } from "./src/index.js";

const engine = new Engine();

const player = engine.scene.createEntity("Player");

player.getComponent("Transform").setPosition(5, 2);

console.log("Created Entity:", player);
console.log("Player Position:", player.getComponent("Transform").position);

engine.start();