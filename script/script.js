let count = 1
let count2 = 1

document.getElementById('radio1').checked = true

setInterval ( function () {
    nextImage()
}, 4000)

function nextImage() {
    count++
    if( count > 4) {
        count = 1
    }

    document.getElementById('radio'+count).checked = true
}

document.getElementById('radioM1').checked = true

setInterval ( function () {
    nextImage2()
}, 4000)

function nextImage2() {
    count2++
    if( count2 > 4) {
        count2 = 1
    }

    document.getElementById('radioM'+count).checked = true
}