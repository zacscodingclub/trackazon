class PagesController < ApplicationController
  def index
    if user_signed_in?
      render :index
    else
      render :index
    end
  end
end
