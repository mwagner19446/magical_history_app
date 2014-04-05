require 'spec_helper'

describe "user is on the homepage" do 

  it "can select a neighborhood" do 
    visit('/')
    click_link('Upper East Side')
    expect(page).to have_content('Upper East Side')
  end

end 