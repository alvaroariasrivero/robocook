const addToCar = (product) => {
    const id = product.charAt(product.length-1)
    const divId = document.getElementById(`producto_${id}`)

    const productUnits = document.querySelector(`#${divId.id} input[type='number']`).value
    const productName = document.querySelector(`#${divId.id} h3`).innerHTML
    const car = JSON.parse(localStorage.getItem('carrito'));

    if(productUnits >= 1){
        const productPrice = document.querySelector(`#${divId.id} p`).innerHTML.replace('$','').replace(',','')

        car[productName] = {
            price: productPrice,
            count: productUnits
        }
    }else {
        delete car[productName]
    }
    localStorage.setItem('carrito', JSON.stringify(car));
}

const createCar = () => {
    if(!localStorage.getItem('carrito')) localStorage.setItem('carrito', JSON.stringify({}))
}

const showCar = () => {
    const car = JSON.parse(localStorage.getItem('carrito'));
        let j = 1
        for(const i in car) {
            document.getElementById('car').innerHTML  += `
            <div class="carShop" id="product_${j}">
                <h3>${i}</h3>
                <p>$ ${car[i].price}</p>
                <div>
                    <label for="count">Unidades</label>
                    <input type="number" placeholder="${car[i].count}" min="0" id="count">
                </div>
                <span>total: $ ${car[i].price * car[i].count}</span>
                <button id="act_${j}">Actualizar</button>
                <button id="delete_${j}">Eliminar</button>
            </div>`;
            j++
        }

        for (const x of document.querySelectorAll('#car div')) {
            if(x.childNodes[9] != null){
                x.childNodes[9].addEventListener('click', () => {
                    updateCar(x.childNodes[9].id)
                })
            }
            if(x.childNodes[11] != null){
                x.childNodes[11].addEventListener('click', () => {
                    deleteCar(x.childNodes[11].id)
                })
            }
        }
}

const updateCar = (product) => {
    const id = product.charAt(product.length-1)
    const divId = document.getElementById(`product_${id}`)

    const productUnits = document.querySelector(`#${divId.id}>div input[type='number']`).value
    const productName = document.querySelector(`#${divId.id} h3`).innerHTML
    const car = JSON.parse(localStorage.getItem('carrito'));
    if(productUnits >= 1){
        const productPrice = document.querySelector(`#${divId.id} p`).innerHTML.replace('$','').replace(' ','')
        console.log(productPrice)
        car[productName] = {
            price: productPrice,
            count: productUnits
        }
    }else {
        delete car[productName]
    }
    localStorage.setItem('carrito', JSON.stringify(car));
}

const deleteCar = (product) => {
    const car = JSON.parse(localStorage.getItem('carrito'));
    const id = product.charAt(product.length-1)

    const productName = document.querySelector(`#product_${id} h3`).innerHTML
    delete car[productName]
    localStorage.setItem('carrito', JSON.stringify(car));
}

if(document.getElementById('car') != null) showCar()
if(document.getElementById('shop') != null) {
    for (const x of document.querySelectorAll('#shop div>button')) {
        x.addEventListener('click', () => {
            addToCar(x.id)
        })
    }
}

createCar()



