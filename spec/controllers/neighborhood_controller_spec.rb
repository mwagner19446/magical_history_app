require 'spec_helper'

describe NeighborhoodsController do 
  let(:neighborhood_0){FactoryGirl.create(:neighborhood)}
  let(:neighborhood_1){FactoryGirl.create(:neighborhood)}
  let(:place_0) {FactoryGirl.create(:place, :neighborhood => neighborhood_0)} 
  let(:place_1) {FactoryGirl.create(:place, :neighborhood => neighborhood_0)}
  let(:place_2) {FactoryGirl.create(:place, :neighborhood => neighborhood_1)}
  let(:place_3) {FactoryGirl.create(:place, :neighborhood => neighborhood_2)}

  describe "GET index" do 
    it "has a 200 status code" do 
      get :index
      expect(response.status).to eq(200)

    end 
    it "has all neighborhoods"do 
      neighborhood_0
      neighborhood_1
      get :index
      expect(assigns(:neighborhoods).count).to eq(2)
    end 
  end 


  describe "GET show/:id" do 
    it "has a 200 status code"do 
      get :show, id: neighborhood_0.id
      expect(response.status).to eq(200)

    end 

    it "displays all the places"do
      neighborhood_0
      place_0
      place_1
      get :show, id: neighborhood_0.id
      expect(assigns(:places).count).to eq(2)      
    end
  end

end 


# http://stackoverflow.com/questions/1484374/how-to-create-has-and-belongs-to-many-associations-in-factory-girl
# http://stackoverflow.com/questions/15433271/how-to-test-controller-with-rspec-show-action
# http://guides.rubyonrails.org/testing.html#functional-tests-for-your-controllers
# http://betterspecs.org/
# https://www.relishapp.com/rspec/rspec-rails/docs/controller-specs
