class RemoveMenuTypeFromMenus < ActiveRecord::Migration[6.0]
  def change
    remove_column :menus, :menu_type, :string
  end
end
