# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :neighborhood do
    name "MyString"
    description "MyText"
    longitude 1.5
    latitude 1.5
  end
end
