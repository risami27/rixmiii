import {func} from "./img.js"
import {func2} from "./info.js"
import {func3} from "./card.js"


let b = document.getElementById("sectionTwo")

let Obj2={
    title2: "BABIES",
    img1: "../image/ruffruner.jpg",
    desc1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, est ratione aut veritatis placeat earum voluptatum blanditiis officiis soluta sunt quod atque modi dolor quibusdam, at illum commodi aspernatur quos.",
    btn1: "Ruffruner",
    img2: "../image/pouncer.jpg",
    desc2: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, est ratione aut veritatis placeat earum voluptatum blanditiis officiis soluta sunt quod atque modi dolor quibusdam, at illum commodi aspernatur quos.",
    btn2: "Pouncer",
    img3: "../image/dart.jpg",
    desc3: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, est ratione aut veritatis placeat earum voluptatum blanditiis officiis soluta sunt quod atque modi dolor quibusdam, at illum commodi aspernatur quos.",
    btn3: "Dart"
}

let {title2, img1, desc1, btn1, img2, desc2, btn2, img3, desc3, btn3} = Obj2
b.append(func3(title2,img1,desc1,btn1,img2,desc2,btn2,img3,desc3,btn3)) 


