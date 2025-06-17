class Shape {
  constructor(color, area) {
    this.color = color;
    this.area = area;
  }

  get() {
    document.writeln("the color is:" + this.color + "<br>");
  }
  calcarea() {
    document.writeln("the area is:" + this.area + "<br>");
  }
}

class circle extends Shape {
  constructor(radius, color) {
    super(color, 3.14 * radius * radius);
  }
}
class rectarea extends Shape {
  constructor(color, length, width) {
    super(color, length * width);
  }
}

const areas = new circle(2, "red");

areas.calcarea();
areas.get();
const re = new rectarea("pink", 2, 4);
re.calcarea();
re.get();
