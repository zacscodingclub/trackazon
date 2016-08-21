class InventoriesController < ApplicationController
  before_action :authenticate_user!

  def index
    @inventory = current_user.inventory
    binding.pry
  end
end
