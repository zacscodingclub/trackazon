class PagesController < ApplicationController
  def index
    if user_signed_in?
      redirect_to products_path
    else
      render :index
    end
  end
end
