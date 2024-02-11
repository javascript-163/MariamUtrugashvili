class Shape {
    constructor(name) {
        this.name = name;
    }

    area() {
        return `Cannot calculate the area for an unspecified shape: ${this.name}`;
    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }

    area() {
        const circleArea = Math.PI * this.radius ** 2;
        return circleArea.toFixed(2);
    }
}

class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }

    area() {
        const rectangleArea = this.width * this.height;
        return rectangleArea;
    }
}

class Triangle extends Shape {
    constructor(name, base, height) {
        super(name);
        this.base = base;
        this.height = height;
    }

    area() {
        const triangleArea = (this.base * this.height) / 2;
        return triangleArea;
    }
}

function displayArea(shape) {
    const area = shape.area();
    console.log(`Area of ${shape.name}: ${area}`);
}

let rectangle = new Rectangle("rectangle", 2, 3);
let circle = new Circle("circle", 2);
let triangle = new Triangle("triangle", 2, 3);
let general = new Shape("general");

displayArea(rectangle);
displayArea(circle);
displayArea(triangle);
console.log(general.area());
