require 'spec_helper'

describe "user is on the tourpage" do 

  it "can select a place" do 
    visit('/neighborhoods/:id')
    # click_link('Upper East Side')
    # expect(page).to have_content('Upper East Side')
  end

end 
