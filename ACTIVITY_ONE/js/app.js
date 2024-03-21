import {func} from "./img.js"
import {func2} from "./info.js"


let a = document.getElementById("sectionOne")

let Obj1 ={
    title: "LIGHTFURY",
    desc: "The Light Fury is an engine of change in our story, representing the call of the wild, which is key to Toothless' destiny. Dean DeBlois. Director Dean DeBlois describes the Light Fury's role as a call to the wild for Toothless, who lacks many primal instincts regarding love.",
    btn1:"Text me",
    btn2:"Call me",
    btn3:"Email me",
    btn4:"Miss me?",
    myImg: "../image/qqq.jpg"
}


let {title, desc, btn1, btn2, btn3, btn4, myImg} = Obj1
a.append(func2(title,desc,btn1, btn2, btn3, btn4,))
a.append(func(myImg))

