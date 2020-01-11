document.addEventListener('DOMContentLoaded', () => {
  // console.log('welcome');
  const restaurantForm = document.querySelector('#form');
  restaurantForm.addEventListener('submit', handleRestaurantForm);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAll);


  // const radioButton = document.querySelector('#form[name="recommend"]')
  // radioButton.addEventListener('input', handleRadio)

});
//////////////////////////////////////////////////////

const handleRestaurantForm = function (event) {
  event.preventDefault();

  const restaurantReviewed = createRestaurantReviewed(event.target)
  const list = document.querySelector('ul#reviewed-list')
  list.appendChild(restaurantReviewed);

  event.target.reset();

};

const createRestaurantReviewed = function (form) {
  const restaurantReviewed = document.createElement('li')
  restaurantReviewed.classList.add('restaurantReviewed')


  const restaurant = document.createElement('h3')
  restaurant.textContent = `Restaurant: ${form.restaurant.value}`;
  restaurantReviewed.appendChild(restaurant);

  // const location = document.createElement('p')
  // restaurant.textContent = form['location'].checked;
  // restaurantReviewed.appendChild(location)

  const meal = document.createElement('p')
  meal.textContent = `Meal Ordered: ${form.meal.value}`;
  restaurantReviewed.appendChild(meal);


  const rate = document.createElement('p')
  rate.textContent = `Overall Rating: ${form.rate.value}`;
  restaurantReviewed.appendChild(rate);


  const recommend = document.createElement('p')
  recommend.textContent = `Recommend: ${form['recommend'].value}`;
  restaurantReviewed.appendChild(recommend);

  const comment = document.createElement('p')
  comment.textContent = `Comments: ${form.comment.value}`
  restaurantReviewed.appendChild(comment)




  return restaurantReviewed;

}


const handleDeleteAll = function (event) {
  const list = document.querySelector('#reviewed-list')
  list.innerHTML= "";
}
