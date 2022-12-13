var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDescriptionInput = document.getElementById('productDescriptionInput');
var searchInput = document.getElementById('searchInput');
var nameAlert = document.getElementById('nameAlert');
var addBtn = document.getElementById('addBtn');
var currentIndex = 0 ;
var productList = [];

if(localStorage.getItem('product') != null){
productList = JSON.parse(localStorage.getItem('product'));
displayProduct()

}

function addProduct() {
    if(addBtn.innerHTML == 'Update Product')
    {
        var product = {
            name : productNameInput.value ,
            price : productPriceInput.value ,
            category : productCategoryInput.value ,
            Description : productDescriptionInput.value 
    
        }
        productList.splice(currentIndex,1,product);
        displayProduct();
        clearForm();
        button();
        }
else{
    var product = {
        name : productNameInput.value ,
        price : productPriceInput.value ,
        category : productCategoryInput.value ,
        Description : productDescriptionInput.value 

    }
    productList.push(product);
    localStorage.setItem('product', JSON.stringify(productList))
    console.log(productList);
    clearForm()
    displayProduct();

}
  }


function clearForm() {
   productNameInput.value = '' ;
   productPriceInput.value = '' ;
   productCategoryInput.value = '' ;
   productDescriptionInput.value = '' ; 

}
function displayProduct(){
    var data = '' ;
    for (var i = 0; i < productList.length; i++) {
        data += ` <tr>
            <td>${productList[i].name}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].category}</td>
            <td>${productList[i].Description}</td>
            <td> <button onclick="deleteProduct(${i})" class="btn btn-sm btn-outline-danger" >Delete</button> </td>
            <td> <button onclick="updateProduct(${i})" class="btn btn-sm btn-outline-warning" >Update</button> </td>

                 </tr> `

    }
    document.getElementById('tableBody').innerHTML = data ;
}
function deleteProduct(deleteIndex)
{
    productList.splice(deleteIndex,1);
    localStorage.setItem('product', JSON.stringify(productList))
    displayProduct();


}
function searchProduct() {
    var term = searchInput.value;
    var data = '' ;

    for (var i = 0; i < productList.length; i++) {
        if (productList[i].name.toLowerCase().includes(term.toLowerCase())==true )
         {
            data += ` <tr>
            <td>${productList[i].name}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].category}</td>
            <td>${productList[i].Description}</td>
            <td> <button onclick="deleteProduct(${i})" class="btn btn-sm btn-outline-danger" >Delete</button> </td>
            <td> <button onclick="updateProduct(${i})" class="btn btn-sm btn-outline-warning" >Update</button> </td>

                 </tr> `
        
                }

    }
    document.getElementById('tableBody').innerHTML = data ;

}

searchProduct(''); 

function updateProduct(updateIndex){
    currentIndex = updateIndex;
    productNameInput.value = productList[updateIndex].name ;
    productPriceInput.value =  productList[updateIndex].price ;
    productCategoryInput.value =  productList[updateIndex].category ;
    productDescriptionInput.value =  productList[updateIndex].Description ; 
    addBtn.innerText = 'Update Product'
    currentIndex = index
    // updateProduct();

}
// function editProduct(){
//     var product = {
//         name : productNameInput.value ,
//         price : productPriceInput.value ,
//         category : productCategoryInput.value ,
//         Description : productDescriptionInput.value 

//     }
//     productList [currentIndex]=product
// }

function button(){
    addBtn.innerText = 'Add Product'
}
productNameInput.onkeyup = function (){
    var nameRejex = /^[A-Z][a-z]{3,8}$/;

    if (nameRejex.test(productNameInput.value)) {
        productNameInput.classList.add('is-valid');
        productNameInput.classList.remove('is-invalid');
        nameAlert.classList.replace('d-block','d-none')

    } else {

        productNameInput.classList.add('is-invalid');
        productNameInput.classList.remove('is-valid');
        nameAlert.classList.replace('d-none','d-block')
    }
    
}
productPriceInput.onkeyup = function (){
    var priceRejex = /^[0-9]{3}/;

    if (priceRejex.test(productPriceInput.value)) {
        productPriceInput.classList.add('is-valid');
        productPriceInput.classList.remove('is-invalid');
        priceAlert.classList.replace('d-block','d-none')
   

    
    } else {
        productPriceInput.classList.add('is-invalid');
        productPriceInput.classList.remove('is-valid');
        priceAlert.classList.replace('d-none','d-block')

    
    }
    
}
productCategoryInput.onkeyup = function (){
    var categoryRejex = /^(mobile|labtop|tv|computer)/i;

    if (categoryRejex.test(productCategoryInput.value)) {
        productCategoryInput.classList.add('is-valid');
        productCategoryInput.classList.remove('is-invalid');
        categoryAlert.classList.replace('d-block','d-none')

    
    } else {
        productCategoryInput.classList.add('is-invalid');
        productCategoryInput.classList.remove('is-valid');
        categoryAlert.classList.replace('d-none','d-block')

    
    }
    
}
$(document).ready(function(){
    $('#loading').fadeOut(2000,function(){
        $('body').css('overflow','visible')
    })
})