# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

breakfast_menu = Menu.create(name: 'Breakfast Menu')
breakfast_menu.meals.create([{ name: 'Biscuits & Gravy', description: 'Served with Country Potatoes or Grits, Choice of Sausage or Bacon', price: '$6.50' }, 
{ name: 'Egg & Cheese Biscuit Sandwich', description: 'Served with Bacon or Sausage', price: '$3.50' }])

lunch_menu = Menu.create(name: 'Lunch Menu')
lunch_menu.menutypes.create([{ title: 'Salads' }, { title: 'Baskets & Plates' }, { title: 'Sandwiches & Burgers' }])
lunch_menu.meals.create([{ name: 'Quesadilla or Texas Burrito', description: 'Chicken or Ground Beef in a Flour Tortilla with Cheese, Lettuce, Pico de Gallo & Sour Cream. Served with Rice and Black Beans', price: '$8.00' },
{ name: 'Grilled 8oz. Hamburger', description: 'Topped with Onion, Lettuce, Tomato, Pickle, Mayo & Mustard', price: '$8.50' }])

dinner_menu = Menu.create(name: 'Dinner Menu')
dinner_menu.meals.create([{ name: 'Steak Salad', description: '8 oz. NY Strip Steak sliced on a bed of Mixed Greens with tomato, onion, cucumber and green pepper. Garnished with Crispy Fried Onions. Choice of Dressing', price: '$16' }, 
{ name: 'Filet Mignon', description: '8 oz. Grilled Filet on a pool of Red Wine Demi-Glace, garnished with Crispy Fried Onions', price: '$20' }])