class CreateMeals < ActiveRecord::Migration[6.0]
  def change
    create_table :meals do |t|
      t.string :name
      t.string :description
      t.string :price
      t.integer :menu_id

      t.timestamps
    end
  end
end
