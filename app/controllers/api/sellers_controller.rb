class Api::SellersController < ApplicationController
  def find_products
    render json: Seller.products_bought_buyers
  end
end
