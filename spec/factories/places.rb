# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :place do
    name "MyString"
    longitude 1.5
    latitude 1.5
    description "MyText"
    address "MyText"
    neighborhood nil
  end
end
