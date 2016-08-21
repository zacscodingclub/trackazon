class Product < ApplicationRecord
  belongs_to :inventories

  validates_presence_of :name, :item_price, :sell_price, :quanitity
end
