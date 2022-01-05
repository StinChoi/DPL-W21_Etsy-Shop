# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# u1 = User.create(email: 'test@test.com', password:123456)

# p u1;

desired_categories = [
  'Bags',
  'Jewelery',
  'Tapestry',
  'Bracelets',
  'Clothing',
  'Home Decor',
  'DIY Craft Projects'
]

10.times do
  s = Seller.create(
    email: Faker::Internet.email,
    name: Faker::Name.name
  )

5.times do
  num_desired_categories = rand(0..desired_categories.length - 1);
  Buyer.create(
    name: Faker::FunnyName.name,
    max_price: rand(1..100000),
    desired_categories: desired_categories.sample(num_desired_categories),
    seller_id: s.id
  )
end

5.times do
  price = rand(1..100000)
  p = Product.create(
    price: price,
    category: desired_categories.sample,
    description: Faker::Hipster.sentence,
    seller_id: s.id
  )
end
end

