class CreateProducts2 < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name
      t.decimal :item_price, precision: 8, scale: 2
      t.decimal :sell_price, precision: 8, scale: 2
      t.integer :quantity
      t.integer :quantity_sold, default: 0
      t.timestamps
    end
  end
end
