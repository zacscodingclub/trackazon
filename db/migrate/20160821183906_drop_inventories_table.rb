class DropInventoriesTable < ActiveRecord::Migration[5.0]
  def change
    drop_table :inventories
  end
end
