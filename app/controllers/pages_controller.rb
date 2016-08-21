class PagesController < ApplicationController
  def index
    if user_signed_in?
      redirect_to inventory_path
    else
      render :index
    end
  end
end
