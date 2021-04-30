const itemForm = document.getElementById('item-form')
const itemsAdapter = new ItemsAdapter
const categoriesAdapter = new CategoriesAdapter
const newFormButton = document.getElementById('new-form-btn')
const itemList = document.getElementById('item-list')
const searchBtn = document.getElementById('searchBtn')
const searchBar = document.getElementById('searchBar')
let filteredItems = []

function hideBtnLoadForm(e){
    e.target.hidden = true
    const newForm = document.getElementById('new-form-container')
    newForm.hidden = false
}

document.addEventListener('DOMContentLoaded', () => {
    itemsAdapter.fetchItems()
    //console.log(filteredItems)
    categoriesAdapter.fetchCategories()
    itemForm.addEventListener('submit', itemsAdapter.handleFormSubmit)
    newFormButton.addEventListener('click', hideBtnLoadForm)
  
})


// create a search bar filtering through the name of the drinks, alpha from a-z
// in the index.html create the button and the form
// grab the element and add an event listener 
// create the function to filter/sort the data - manipulating the data
// add the input/result on the dom - update the DOM

//google each synx along the way.

searchBar.addEventListener('keyup', (e) =>{
  const searchString = e.target.value.toLowerCase();

  const filtered = filteredItems.filter(item => item.name.toLowerCase().includes(searchString));
  
  displayItems(filtered)
})

const displayItems = (items) => {
  const htmlString = items.map((item) => {
    return  `
    <li class='item'>
    $<span class="price">${item.price}</span>
    <strong class="name">${item.name}</strong>:
    <span class="description">${item.description}</span>
    </li>
    `;
  })
  .join('');
  itemList.innerHTML = htmlString;
}


// function itemSearch() {
//   let searchBar = document.getElementById('searchBar')
//   let itemsArray = Array.from(Item.all)

//   searchBar.addEventListener('click', (e) => {
//       let search = e.target.value.toLowerCase()
//       let filteredItems = itemsArray.filter((itemName) => {
//           return (
//               itemName.name.toLowerCase().includes(search)
//           )
//       })
//       removeItems(itemAdapter)
//       filteredItems.forEach((item) => {
//           item.attachToDom()
//       })
//   })
// }

// let filterDivs = divs.filter(element => (element.querySelector('strong').innerText).toLowerCase)
// filterDivs.forEach(element => element.remove())
