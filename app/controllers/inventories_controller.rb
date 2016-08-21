class InventoriesController < ApplicationController
  before_action :authenticate_user!

  def index
    @inventory = current_user.inventory

    # if inventory is empty aka nil, it will return as "null"
  end
end
