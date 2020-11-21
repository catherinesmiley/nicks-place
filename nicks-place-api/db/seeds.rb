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