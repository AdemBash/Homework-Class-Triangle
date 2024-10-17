class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b; 
        this.c = c; 
    }
    input() 
    {
        this.a = parseFloat(prompt("Введите длину первой стороны:"));
        this.b = parseFloat(prompt("Введите длину второй стороны:"));
        this.c = parseFloat(prompt("Введите длину третьей стороны:"));
    }
    output() 
    {
        console.log(`Стороны треугольника: a = ${this.a}, b = ${this.b}, c = ${this.c}`);
    }
    perimeter() 
    {
        return this.a + this.b + this.c;
    }
    geron() {
        const p = this.perimeter() / 2; 
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }
}

const triangle = new Triangle(3, 4, 5);
triangle.output();
console.log("Периметр треугольника - ", triangle.perimeter());
console.log("Площадь треугольника - ", triangle.geron());
