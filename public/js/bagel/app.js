const p1 = document.querySelector('#lb1')
const p2 = document.querySelector('#lb2')
const p3 = document.querySelector('#lb3')
const p4 = document.querySelector('#lb4')
const p5 = document.querySelector('#lb5')

let bagel = fetch(`/bagel-json`).then((responce) => {
    responce.json().then((data) => {
        let bagelData = data.bagel;
        let bagelArr = []
        let i = 0

        while (i < bagelData.length) {
            bagelArr.push({
                nickName: bagelData[i].nickName,
                money: bagelData[i].money
            })
            i++
        }
    
        bagelArr.sort((a, b) => {return a.money - b.money})
        bagelArr.reverse()

        p1.textContent = `1.${bagelArr[0].nickName} bagels:${bagelArr[0].money}`
        p2.textContent = `2.${bagelArr[1].nickName} bagels:${bagelArr[1].money}`
        p3.textContent = `3.${bagelArr[2].nickName} bagels:${bagelArr[2].money}`
        p4.textContent = `4.${bagelArr[3].nickName} bagels:${bagelArr[3].money}`
        p5.textContent = `5.${bagelArr[4].nickName} bagels:${bagelArr[4].money}`
    })
})
