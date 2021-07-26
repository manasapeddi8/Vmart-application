var notes = [];
var key = "ecommstorekey";
let totalProducts = 0;
window.onload = function() {
    if (!window.localStorage) {
        alert("You are using a web browser that is too old for this program. Please upgrade your web browser if you wish to get the full experience.");
    } else {
        cartsQuantityfun();
    }
}
let total_items = 0;

function cartsQuantityfun() {

    var jsonNotes = localStorage.getItem(key);
    let varcartsQuantity = 0;
    if (jsonNotes != null) {
        notes = JSON.parse(jsonNotes);
        for (i = 0; i < notes.length; i++) {
            if (notes[i].visibility == 1) {
                varcartsQuantity = varcartsQuantity + parseInt(notes[i].quantity);
            }
        }
        document.getElementById('cartsQuantity').innerHTML = parseInt(varcartsQuantity);
    }
}

function addItem(img, name, quantity, price) {

    let updatevalue = 0;
    var getjsonNotes = localStorage.getItem(key);
    if (getjsonNotes != null) {
        notes = JSON.parse(getjsonNotes);
        for (i = 0; i < notes.length; i++) {
            if (notes[i].name == name && notes[i].visibility == 1) {
                updatevalue = 1;
                notes[i].quantity = parseInt(notes[i].quantity) + 1;
                notes[i].price = parseInt(notes[i].price) +
                    parseInt(price);
                var updatedjsonNotes = JSON.stringify(notes);
                localStorage.setItem(key, updatedjsonNotes);
                cartsQuantityfun();
                alert("ITEM Added Successfully!!")
            }
        }

    }

    if (getjsonNotes = null || updatevalue == 0) {
        var note = {};
        note.img = img;
        note.name = name;
        note.quantity = quantity;
        note.price = price;
        note.visibility = 1;
        notes.push(note);
        storeNotes();
        cartsQuantityfun();

    }
    totalItems()

}

function storeNotes() {
    var jsonNotes = JSON.stringify(notes);
    localStorage.setItem(key, jsonNotes);
    storeNotes();
}


/* --------------For displaying items in Restaurant cart menu---------------------- */
function displayCart() {

    var jsonNotes = localStorage.getItem(key);

    if (jsonNotes != null) {
        notes = JSON.parse(jsonNotes);
    }
    cartdata = '<table bgcolor="white" border="0" cellpadding="8" cellspacing="8"><tr><th>Image<hr></th><th>Quantity<hr></th><th colspan="1" style="text-align: left">Price<hr></th><th colspan="1" style="text-align: left">SubTotal<hr></th></tr>';
    total = 0;

    for (i = 0; i < notes.length; i++) {
        if (notes[i].visibility == 1) {
            cartdata += '<tr style="font-size: 15px;""><td> <img width="130px" height="100px" src="' + notes[i].img + '"/></td><td>' + notes[i].quantity + '</td><td>' +
                ((notes[i].price) / notes[i].quantity) + "$" + '</td><td>' +
                notes[i].price + "$" + '</td><td> <button style="background-color: red; color: white;  cursor: pointer;  border-radius: 50%"  onclick=delElement(' + i + ")> X </button></td></tr>"

        }
    }
    cartsQuantityfun();
    cartdata += '<tr style="font-size: 20px;"><td></td><td></td><td>Total : ' + totalPrice() + ' $' + ' </td></tr></table>';

    document.getElementById("cartt").innerHTML = cartdata;
}

/* --------------For deleting items from cart ---------------------- */

function delElement(a) {

    notes[a].visibility = 0;
    var jsonNotes = JSON.stringify(notes);
    localStorage.setItem(key, jsonNotes);
    displayCart();
}

function totalPrice() {
    let totalPrice = 0;
    var getjsonNotes = localStorage.getItem(key);
    if (getjsonNotes != null) {
        notes = JSON.parse(getjsonNotes);
        for (i = 0; i < notes.length; i++) {
            if (notes[i].visibility == 1) {
                totalPrice = totalPrice + parseInt(notes[i].price);
            }
        }
    }
    return totalPrice;
}

function totalItems() {
    let totalquantity = 0;
    var getjsonNotes = localStorage.getItem(key);
    if (getjsonNotes != null) {
        notes = JSON.parse(getjsonNotes);
        for (i = 0; i < notes.length; i++) {
            if (notes[i].visibility == 1) {
                totalquantity = totalquantity + parseInt(notes[i].quantity);
            }
        }
    }

    document.getElementById("cartsQuantity").innerHTML = totalquantity;
}




function OpenCart() {
    window.location.href = "cart.html";
}

function OpenHome() {
    window.location.href = "products.html";
}

function productDetail() {
    window.location.href = "product_detail.html";
}