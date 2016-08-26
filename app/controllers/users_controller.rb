class UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    @user = current_user

    respond_to do |f|
      f.html { render :index }
      f.json { render json: @user }
    end
  end
end
