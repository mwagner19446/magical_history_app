class AddCoordinatesToNeighborhoods < ActiveRecord::Migration
  def change
    add_column :neighborhoods, :longitude, :float
    add_column :neighborhoods, :latitude, :float
  end
end
