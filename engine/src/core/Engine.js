import { Scene } from "../ecs/Scene.js";

export class Engine {
    constructor() {
        this.scene = new Scene("Main Scene");

        this.running = false;
        this.lastTime = 0;
    }

    start() {
        if (this.running) return;

        this.running = true;
        this.lastTime = performance.now();

        console.log("ForgeJS Engine Started");

        requestAnimationFrame(this.loop.bind(this));
    }

    stop() {
        this.running = false;

        console.log("ForgeJS Engine Stopped");
    }

    loop(currentTime) {
        if (!this.running) return;

        const deltaTime = (currentTime - this.lastTime) / 1000;

        this.lastTime = currentTime;

        this.update(deltaTime);
        this.render();

        requestAnimationFrame(this.loop.bind(this));
    }

    update(deltaTime) {
        // Systems will be added here.
    }

    render() {
        // Renderer will be added here.
    }
}