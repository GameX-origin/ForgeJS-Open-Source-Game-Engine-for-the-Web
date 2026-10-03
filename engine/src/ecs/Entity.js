import { Transform } from "../core/Transform.js";

let nextEntityId = 1;

export class Entity {
    constructor(name = "Entity") {
        this.id = nextEntityId++;
        this.name = name;

        this.components = new Map();

        this.addComponent("Transform", new Transform());
    }

    addComponent(name, component) {
        this.components.set(name, component);
        return component;
    }

    getComponent(name) {
        return this.components.get(name);
    }

    hasComponent(name) {
        return this.components.has(name);
    }

    removeComponent(name) {
        this.components.delete(name);
    }
}