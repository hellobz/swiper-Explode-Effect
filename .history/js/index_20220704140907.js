//图片
var imgs = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"]
//z-index的值
var z = 999999
//显示第几张图片
var index = 0
var box = document.getElementById('box')

boom(10, 10)
//l 传进来几行：t传进来几列
function boom(l, t) {
    //创建一个新的div
    var oParentNode = document.createElement("div")
    //设置z-index的值
    oParentNode.style.zIndex = z
    z--
    box.appendChild(oParentNode)

    var x = l,
        y = t;
    for (var i = 0; i < y; i++) {
        for (var j = 0; j < x; j++) {
            //创建碎片
            var oDiv = document.createElement("div")
            //添加背景图片
            oDiv.style.background = "url(" + imgs[index] + ")"
            oDiv.style.width = box.clientWidth / x + 'px'
            oDiv.style.height = box.clientHeight / y + 'px'
            oDiv.style.left = (box.clientWidth / x) * j + 'px'
            oDiv.style.top = (box.clientHeight / y) * i + 'px'
            oDiv.style.backgroundPositionX = (box.clientWidth / x) * -j + 'px'
            oDiv.style.backgroundPositionY = (box.clientHeight / y) * -i + 'px'
            oDiv.style.transition = (Math.random() * 1 + 0.5) + "s"
            oParentNode.appendChild(oDiv)
        }
    }

    var allDiv = oParentNode.children;
    setTimeout(() => {
        index++
        index == imgs.length && (index = 0)

        boom(l, t);
        for (var i = 0; i < allDiv.length; i++) {
            allDiv[i].style.transform = 'perspective(800px) rotateX(' + (Math.random() * 500 - 250) + 'deg) rotateY(' + (Math.random() * 500 - 250) + 'deg) translateX(' + (Math.random() * 500 - 250) + 'px) translateY(' + (Math.random() * 500 - 250) + 'px) translateZ(' + (Math.random() * 1000 - 500) + 'px)'
            allDiv[i].style.opacity = 0
        }
    }, 2000)

    setTimeout(() => {
        oParentNode.remove()
    }, 3500)

}