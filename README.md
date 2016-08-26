# Trackazon

## What is This?

Trackazon is a user friendly way to keep some basic info on the items a user has in their store inventory.  This application is built on a Ruby on Rails backend with a AngularJS front end.

This is my final project for the [Flatiron School's Learn Verified Program](http://learn.co/with/zacscodingclub).

## Want to check it out?
For now, you'll have to add this code locally and spin up a Rails server.  To do that, follow the instructions below:

```ruby
  # Move to your code directory, I am using a default in the example
  # but you can use any  directory.
  cd ~/Development/code

  # Clone the project code
  git clone git@github.com:zacscodingclub/trackazon.git

  # Move into the new directory we just cloned
  cd trackazon

  # Install the necessary gems
  bundle install

  # Seed with some sample data
  rake db:migrate

  # Startup the server
  rails s

  # Visit the webpage in your browser at localhost:3000
```

## To-Do
1. Bootstrap login forms
2. Deploy to Heroku

## Done
1. Basic UI Setup
2. User Login system
3. Build out Product class
  *  Validations
  *  Routes

5. Add Angular
  *  Add gems
  *  Attach to products#index view
  *  Setup service to interact with back end
  *  Display products in table
  *  User Filter for currency amounts
  *  Show updates to in stock and profit values on quantity sold change
  *  New Product form Validations
    *  Name: required, length > 5
    *  Item Cost: required, numbers
    *  Sell Price: required, numbers
    *  Quantity: required, numbers

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/zacscodingclub/trackazon.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
