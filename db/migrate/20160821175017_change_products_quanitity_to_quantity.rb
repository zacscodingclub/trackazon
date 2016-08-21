class ChangeProductsQuanitityToQuantity < ActiveRecord::Migration[5.0]
  def change
    change_column :products, :quanitity, :quantity
  end
end
