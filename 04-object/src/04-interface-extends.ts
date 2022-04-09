interface BasicAddress {
   country: string; // 国家
   province: string; // 省
   city: string; // 城市
}
interface DetailAddress extends BasicAddress{
   district: string; // 区
   street: string; // 街道
}

let myAddress: DetailAddress = {
   country: '中国',
   province: '山东',
   city: '青岛',
   district: '西海岸新区',
   street: '长江路街道'
}


interface Colorful {
   color: string;
}
interface Shape{
   getArea: () => number
}
// interface 可以继承多个 interface
interface Circle extends Shape, Colorful {
  radius: number
}

let circle: Circle = {
   color: 'red',
   radius: 10,
   getArea() {
      return Math.PI * this.radius ** 2
   }
}
