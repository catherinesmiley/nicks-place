# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

breakfast_menu = Menu.create(name: 'Breakfast Menu',
description: '8:00 - 10:45 AM Fridays & Saturdays, 8:00 AM on Sundays')
breakfast_menu.meals.create([{ name: 'Biscuits & Gravy', description: 'Served with Country Potatoes or Grits, Choice of Sausage or Bacon', price: '$6.50' }, 
{ name: 'Egg & Cheese Biscuit Sandwich', description: 'Served with Bacon or Sausage', price: '$3.50' },
{ name: 'Eggs any Style', description: 'Two Eggs served with Country Potatoes or Grits, Choice of Sausage or Bacon, Toast', price: '$6.50' },
{ name: 'Cheese Omelette', description: 'Filled with Sausage, Bacon or Ham, Served with Country Potatoes or Grits', price: '$7.50'},
{ name: 'Pancake Breakfast', description: 'Served with Bacon or Sausage', price: '$6.50' },
{ name: 'Breakfast Burrito', description: 'Tortilla filled with Scrambled Eggs, Potato, Cheese, Bacon or Sausage', price: '$3.50'},
{ name: 'Breakfast Quesadilla', description: 'Scrambled Eggs, Cheese, Bacon or Sausage', price: '$4.50' },
{ name: 'Sides', description: 'Country Potatoes sauteed with Onion & Peppers • Grits topped with Butter • Biscuit • Toast', price: '$0.50 each' }])

lunch_menu = Menu.create(name: 'Lunch Menu',
description: 'Tues. - Sat. starting at 10:30 AM')
lunch_menu.menutypes.create([{ title: 'Salads' }, { title: 'Baskets & Plates' }, { title: 'Sandwiches & Burgers' }])
lunch_menu.meals.create([{ name: 'Quesadilla or Texas Burrito', description: 'Chicken or Ground Beef in a Flour Tortilla with Cheese, Lettuce, Pico de Gallo & Sour Cream. Served with Rice and Black Beans', price: '$8.00', menutype_id: 3 },
{ name: 'Grilled 8oz. Hamburger', description: 'Topped with Onion, Lettuce, Tomato, Pickle, Mayo & Mustard', price: '$8.50', menutype_id: 3 }, { name: 'Chef Salad', description: 'Mixed Greens, Ham, Tomato, Hardboiled Egg, Cucumber & Cheese', 
price: '$8.50', menutype_id: 1 }, { name: 'Taco Salad', description: "Chicken or Ground Beef in a Crispy Flour Tortilla Basket with Lettuce, Tomato, Black Olives & Sour Cream. Served with Chef Nick's Hot Sauce",
price: '$8.00', menutype_id: 1 }, { name: 'Fried Chicken Finger Basket', description: 'Served with Mac & Cheese, Green Beans or Fries', price: '$7.00', menutype_id: 2 },
{ name: '8-Piece Chicken Wing Basket', description: 'Spicy, Hot, Mild or Honey BBQ. Served with Fries', price: '$8.50', menutype_id: 2 }])

dinner_menu = Menu.create(name: 'Dinner Menu',
description: 'House Salad included with all Dinners except the Steak Salad •
Choice of Dressings: Peach Vinaigrette, Raspberry Vinaigrette, Ranch,
Blue Cheese, French, 1000 Island, Caesar, and Olive Oil & Vinegar •
Entrees include Garlic Mashed Potatoes and Green Beans, except Steak Salad & 4-Cheese Ravioli')
dinner_menu.meals.create([{ name: 'Steak Salad', description: '8 oz. NY Strip Steak sliced on a bed of Mixed Greens with tomato, onion, cucumber and green pepper. Garnished with Crispy Fried Onions. Choice of Dressing', price: '$16' }, 
{ name: 'Filet Mignon', description: '8 oz. Grilled Filet on a pool of Red Wine Demi-Glace, garnished with Crispy Fried Onions', price: '$20' },
{ name: 'New York Strip Steak', description: '8 oz. Grilled Strip Steak, garnished with Crispy Fried Onions and Red Wine Demi-Glace', price: '$18' },
{ name: 'Pan Seared Salmon', description: '8 oz. Fillet Seared with Garlic, Shallots, Summer Squash, Tomato, Capers, Onion & Cilantro, Garnished with a Citrus Cream Sauce', price: '$16' },
{ name: 'Pan Seared Pork Tenderloin', description: '7 oz. Tenderloin with a Brandy Cream Sauce', price: '$15' },
{ name: 'Four-Cheese Ravioli with Shrimp or Chicken', description: 'Tossed with garlic, fresh herbs, zucchini & yellow squash, Served with your choice of Sauce; Basil Plum Tomato Sauce or Parmesan Garlic Cream Sauce, Garlic Toast', price: '$16' }])

bev_menu = Menu.create(name: 'Beverages')
bev_menu.meals.create([{ name: 'Freshly Brewed Coffee', price: '$1.35' }, { name: 'Juices', 
description: 'Apple or Orange', price: '$1.30' }, { name: 'Coca-Cola Soft Drinks', description: '1 refill included. If more refills needed $2.00', 
price: '$1.45' }, { name: 'Sweet or Unsweet Tea', price: '$1.45' }])

Side.create(name: 'Green Beans')
Side.create(name: 'Mac & Cheese')
Side.create(name: 'Mashed Potatoes')
Side.create(name: 'Sliced Tomatoes')
Side.create(name: 'Collard Greens')
Side.create(name: 'Potato Salad')