import { Entity } from "./Entity.js";

export class Scene {
    constructor(name = "Scene") {
        this.name = name;
        this.entities = new Map();
    }

    createEntity(name = "Entity") {
        const entity = new Entity(name);

        this.entities.set(entity.id, entity);

        return entity;
    }

    destroyEntity(entity) {
        this.entities.delete(entity.id);
    }

    getEntity(id) {
        return this.entities.get(id);
    }

    getAllEntities() {
        return Array.from(this.entities.values());
    }

    clear() {
        this.entities.clear();
    }
}