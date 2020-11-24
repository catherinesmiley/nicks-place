class AddMenuIdToMenutypes < ActiveRecord::Migration[6.0]
  def change
    add_column :menutypes, :menu_id, :integer
  end
end
