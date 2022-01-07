class Product < ApplicationRecord
  belongs_to :seller

  def self.products_from_seller
    select('products.id AS product_id, category, price, 
    description, s.id AS seller_id, name AS seller_name, email AS seller_email')
    .joins('INNER JOIN sellers s ON s.id = products.seller_id')
    .order('s.id')
  end

  def self.products_by_category
    select('products.id, seller_id, price, description, category, s.name, s.email')
    .joins('JOIN seller AS s
    ON s.id = products.seller_id')
  end

  def self.get_categories
    select('DISTINCT category')
  end

  # def self.by_category
  #   select('products.id, seller_id, price, description, category, s.name, s.email')
  #   .joins('JOIN sellers AS s ON s.id = products.seller_id')
  #   # .where('products.category = ?', category)
  # end

end
