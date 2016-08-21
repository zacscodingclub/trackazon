class ProductsController < ApplicationController
  before_action :authenticate_user!

  def index
    @products = current_user.products

    respond_to do |f|
      f.html { render :index }
      f.json { render json: @products}
    end
  end

  def show
    @product = Product.find(params[:id])
  end

  def create
    @product = current_user.products.create(product_params)

    redirect_to inventory_path
  end

  private
    def product_params
      params.require(:product).permit(:name, :item_price, :sell_price, :quantity)
    end
end
