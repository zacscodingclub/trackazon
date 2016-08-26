class UsersController < ApplicationController
  def index
    @user = current_user

    respond_to do |f|
      f.html { render :index }
      f.json { render json: @user }
    end
  end
end
