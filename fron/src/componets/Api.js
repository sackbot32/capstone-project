var xhr = new XMLHttpRequest()

export function createrUser(name,password){
    alert("vez")
    xhr.open('GET', 'http://localhost:5000/addUsuarios?name='+ name + "&pass=" + password)
    xhr.send()
}

export function buyItem(userId,itemId){
    alert("vez")
    xhr.open('GET', 'http://localhost:5000/buyItem?userid='+ userId+ "&itemid=" + itemId)
    xhr.send()
}

