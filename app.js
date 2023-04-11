class Shape{
    area(){

    }
}
class Circle extends Shape{
    constructor(radius){
        super()
        this.radius =radius
    }

    area(){
       return `The area of Circle: ${Math.PI*this.radius*this.radius}`
    }
}
class Rectangle extends Shape{
    constructor(width, height){
        super()
        this.width = width
        this.height = height
    }
    area(){
        return `The area of Rectangle: ${this.width*this.height}`
    }
}

const shapes = [new Circle(5), new Rectangle(10, 20)];
shapes.forEach(shape => console.log(shape.area()));