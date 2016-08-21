class Product < ApplicationRecord
  belongs_to :inventories

  validates :name, presence: true
  validates :name, presence: true
end
