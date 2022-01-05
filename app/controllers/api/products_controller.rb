class Api::ProductsController < ApplicationController
  def index
    render json: Product.products_from_seller
  end
end
