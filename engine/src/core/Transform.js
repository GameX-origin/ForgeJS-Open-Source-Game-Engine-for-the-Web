export class Transform {
    constructor() {
        this.position = {
            x: 0,
            y: 0,
            z: 0
        };

        this.rotation = {
            x: 0,
            y: 0,
            z: 0
        };

        this.scale = {
            x: 1,
            y: 1,
            z: 1
        };
    }

    setPosition(x, y, z = 0) {
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    }

    setRotation(x, y, z = 0) {
        this.rotation.x = x;
        this.rotation.y = y;
        this.rotation.z = z;
    }

    setScale(x, y, z = 1) {
        this.scale.x = x;
        this.scale.y = y;
        this.scale.z = z;
    }
}