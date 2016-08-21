class ProductsController < ApplicationController
  before_action :authenticate_user!

  def index
    binding.pry
    @products = current_user.products

  end

  def show
    @product = Product.find(params[:id])
  end

  def create
    binding.pry
  end

  private
    def product_params
      params.require(:product).permit(:name, :item_price, :sell_price, :quantity)
    end
end
