document.addEventListener('DOMContentLoaded', () => {
  // console.log('welcome');
  const restaurantForm = document.querySelector('#form');
  restaurantForm.addEventListener('submit', handleRestaurantForm);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAll);


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


  const restaurant = document.createElement('p')
  restaurant.textContent = `Restaurant: ${form.restaurant.value}`;
  restaurantReviewed.appendChild(restaurant);

  const meal = document.createElement('p')
  meal.textContent = `Meal Ordered: ${form.meal.value}`;
  restaurantReviewed.appendChild(meal);


  const rate = document.createElement('p')

  rate.textContent = `Rating Overall: ${form.rate.value}`;
  restaurantReviewed.appendChild(rate);



  const recommendYes = document.createElement('p')
  recommendYes.textContent = form.recommendYes.value;
  restaurantReviewed.appendChild(recommendYes);



  // const recommendNo = document.createElement('p')
  // recommendNo.textContent = form.recommendNo.value;
  // restaurantReviewed.appendChild(recommendNo);

  return restaurantReviewed;

}


const handleDeleteAll = function (event) {
  const list = document.querySelector('#reviewed-list')
  list.innerHTML= "";
}
