class Product < ApplicationRecord
  belongs_to :user

  validates_presence_of :name, :item_price, :sell_price, :quantity
end
