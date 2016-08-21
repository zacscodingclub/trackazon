class AddDefaultToProductsSold < ActiveRecord::Migration[5.0]
  def change
    change_column_default :products, :quantity_sold, 0
  end
end
