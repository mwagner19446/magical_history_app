require 'spec_helper'

describe "user is on the homepage" do 
  before do 
    ues = Neighborhood.create(:name =>"Upper East Side", :latitude => 40.7692, :longitude => -73.9656 )
    Place.create(:name=>"Gracie Mansion", :latitude=>40.7761101, :longitude=>-73.9432478, :neighborhood_id=> ues.id)
  end 

  it "can select a neighborhood" do 
    visit('/')
    click_link('Upper East Side')
    expect(page).to have_content('Upper East Side')
    expect(page).to have_content('Gracie Mansion')
  end

end 