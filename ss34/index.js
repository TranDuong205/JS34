// // console.dir(document);

// // document.getElementById("demo-id")
// // console.log("The HTML co id demo=id", document.getElementById("demo-id"))
// // document.getElementById("demo-id2")
// // console.log(document.getElementById("demo-id2"))

// // let lits = document.getElementsByClassName("list=item")
// // console.log(lits)
 
// // let firstLi = lis[0]
// // let lastLi = Lis[lis.lenght - 1]
// // console.log("The li dau tien", firstLi)
// // console.log("The li cuoi cung", lastLi)

// // //lấy ra toàn bộ thẻ li nằm trong Lis
// // for (let i = 0; i < lis.lenght; i++) {
// //     console.log("cac the li", lis[i]);
// // } 

// let div = document.getElementById("demo-id")
// console.log(h1)

// h1.innerHTML = "<i>Hello World sau khi dc cap nhat</i>"

// let h1 = document.getElementById("demo-id")
// console.log(h1.style)

// h1.style.backgroundColor = "red";
// h1.style.fontSize = "20px";
// h1.style.fontWeight = "bold";
// h1.style.border = "10px solid black";
// h1.style.width = "200px";
// h1.style.height = "200px";
// h1.style.borderRadius = "50%";
// h1.style.textAlign = "center";
// h1.style.lineHeight = "200px";

// h1.style.lineHeight

// lấy theo id 
let headingElement = document.getElementById("heading");
//giá trị trả về sẽ là phần tử đầu tiên nó tìm thấy

// lấy theo class
let headingElement1 = document.getElementsByClassName("heading")
//giá trị trả về sẽ là 1 HTML Collection(giống mảng nhưng khác ở chỗ nó ko thể sử dụng đc các hàm như push)

//lấy theo selector
let boxElement = document.querySelector(".div");
//giá trị trả về sẽ là phần tử đầu tiên mà nó tìm thấy
console.log(boxElement)
//lấy theo quenySelector
let boxes = document.quenrySelectorAll("box-1")
//giá trị trả về sẽ là 1 node list
boxes.forEach(element) => {
    console.log(element)
});
//thêm 1 phần tử vào trong dom
let ulElement = document.createElement("ul");
document.body.append(ulElement);

let liElement = document.createElement("li");
ulElement.appendChild(liElement);//gắn thẻ li vào ul

const users = [
    {
        id: 1,
        users_name: "Nguyen van nam",
        age: 20,
        address: "ha noi",
        email: "nvnam@example.com",
    }
];
//b1: lấy ra phần tử tbody
let tbodyElement
//b2: dùng map() để lập qua từng phân tử của mảng và kèm dữ liệu trong mảng
users.map((user, index) => {
    reuturn 
}); 
//b3: ép mảng về dạng chuỗi HTML
//b4: lấy chuỗi HTML ở b3 đeer gán vào tbody

