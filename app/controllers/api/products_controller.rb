class Api::ProductsController < ApplicationController
  def index
    render json: Product.products_from_seller
  end

  def categories
    render json: Product.products_by_category
  end

  def get_categories
    render json: Product.get_categories
  end

  def by_category
    render json: Product.by_category(params[:category])
  end

end