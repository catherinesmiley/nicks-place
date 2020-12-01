# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

breakfast_menu = Menu.create(name: 'Breakfast Menu')
breakfast_menu.meals.create([{ name: 'Biscuits & Gravy', description: 'Served with Country Potatoes or Grits, Choice of Sausage or Bacon', price: '$6.50' }, 
{ name: 'Egg & Cheese Biscuit Sandwich', description: 'Served with Bacon or Sausage', price: '$3.50' },
{ name: 'Eggs any Style', description: 'Two Eggs served with Country Potatoes or Grits, Choice of Sausage or Bacon, Toast', price: '$6.50' },
{ name: 'Cheese Omelette', description: 'Filled with Sausage, Bacon or Ham, Served with Country Potatoes or Grits', price: '$7.50'},
{ name: 'Pancake Breakfast', description: 'Served with Bacon or Sausage', price: '$6.50' },
{ name: 'Breakfast Burrito', description: 'Tortilla filled with Scrambled Eggs, Potato, Cheese, Bacon or Sausage', price: '$3.50'},
{ name: 'Breakfast Quesadilla', description: 'Scrambled Eggs, Cheese, Bacon or Sausage', price: '$4.50' }])

lunch_menu = Menu.create(name: 'Lunch Menu')
lunch_menu.menutypes.create([{ title: 'Salads' }, { title: 'Baskets & Plates' }, { title: 'Sandwiches & Burgers' }])
lunch_menu.meals.create([{ name: 'Quesadilla or Texas Burrito', description: 'Chicken or Ground Beef in a Flour Tortilla with Cheese, Lettuce, Pico de Gallo & Sour Cream. Served with Rice and Black Beans', price: '$8.00' },
{ name: 'Grilled 8oz. Hamburger', description: 'Topped with Onion, Lettuce, Tomato, Pickle, Mayo & Mustard', price: '$8.50' }])

dinner_menu = Menu.create(name: 'Dinner Menu')
dinner_menu.meals.create([{ name: 'Steak Salad', description: '8 oz. NY Strip Steak sliced on a bed of Mixed Greens with tomato, onion, cucumber and green pepper. Garnished with Crispy Fried Onions. Choice of Dressing', price: '$16' }, 
{ name: 'Filet Mignon', description: '8 oz. Grilled Filet on a pool of Red Wine Demi-Glace, garnished with Crispy Fried Onions', price: '$20' },
{ name: 'New York Strip Steak', description: '8 oz. Grilled Strip Steak, garnished with Crispy Fried Onions and Red Wine Demi-Glace', price: '$18' },
{ name: 'Pan Seared Salmon', description: '8 oz. Fillet Seared with Garlic, Shallots, Summer Squash, Tomato, Capers, Onion & Cilantro, Garnished with a Citrus Cream Sauce', price: '$16' },
{ name: 'Pan Seared Pork Tenderloin', description: '7 oz. Tenderloin with a Brandy Cream Sauce', price: '$15' },
{ name: 'Four-Cheese Ravioli with Shrimp or Chicken', description: 'Tossed with garlic, fresh herbs, zucchini & yellow squash, Served with your choice of Sauce; Basil Plum Tomato Sauce or Parmesan Garlic Cream Sauce, Garlic Toast', price: '$16' }])