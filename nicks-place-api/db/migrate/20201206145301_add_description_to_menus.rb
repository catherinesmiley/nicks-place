class AddDescriptionToMenus < ActiveRecord::Migration[6.0]
  def change
    add_column :menus, :description, :string
  end
end
