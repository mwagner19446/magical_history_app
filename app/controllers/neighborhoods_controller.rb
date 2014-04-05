class NeighborhoodsController < ApplicationController

  def index
    @neighborhoods = Neighborhood.all
  end

  def show
    @neighborhood = Neighborhood.find_by(id: params[:id])
    @places = Place.where(neighborhood_id: params[:id])
  end 

end 