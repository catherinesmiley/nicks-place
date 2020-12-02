class AddMenutypeIdtoMeals < ActiveRecord::Migration[6.0]
  def change
    add_column :meals, :menutype_id, :integer
  end
end
