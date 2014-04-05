# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Neighborhood.delete_all
Place.delete_all

upper_east_side = Neighborhood.create(name: "Upper East Side", description: "The Upper East Side is a neighborhood in the borough of Manhattan in New York City, between Central Park and the East River. The Upper East Side lies within an area bounded by 59th Street to 96th Street, and the East River to Fifth Avenue-Central Park.")

grace_mansion = Place.create(name: "Gracie Mansion", address: "East End Ave. at 88th St., Manhattan, New York City, New York", latitude: 40.7761101, longitude: -73.9432478, description: "Fun Facts: /n 1)  The mansion can only be used for city business.  Only visiting public officials or the mayor's family can reside there.  As a result, Rudy Giuliani was unable to live there with his then girlfriend since they were not married. /n 2) The mansion is featured in the movie Ghostbusters II when the gang meets with the mayor.", neighborhood_id: upper_east_side.id)
frick = Place.create(name: "Frick Collection", address: "1 East 70th Street, at Fifth Avenue, New York", latitude: 40.771181, longitude: -73.96735, description: "Fun Facts: /n1) There exists a bowling alley that is closed to the public.  (It only has one exit, in violation of firecodes).  It was constructed in 1914 for $850. /n 2) H Frick and his wife were scheduled to be on the Titantic, however they cancelled their travel plans when she twisted her ankle prior to the trip commencing./n 3) The HC Frick Collection is a private collection. /n 4) Saturdays are pay what you'd like.   ", neighborhood_id: upper_east_side.id)
neue_gallery = Place.create(name: "Neue Gallery New York", address: "1048 5th Avenue and 86th Street, Manhattan, New York", latitude: 40.7813, longitude: -73.9603, description: "Fun Facts: /n 1) Gustav Klimt's 'The Portrait of Adele Bloch Blauer' is on display here. /n 2) The Cafe Sabarsky imports many of its pastries from Austria/n 3) The museum is an excellent example of 'Beaux Arts Architecture'", neighborhood_id: upper_east_side.id)
waldorf = Place.create(name: "Waldorf Astoria", address: "301 Park Avenue New York City, New York", latitude: 40.7565, longitude: -73.97413, description: "Fun Facts: /n 1) The building is one of the oldest examples of Art Deco Architecture in the World. /n 2) It was named a official New York City Landmark in 1993. /n 3) While there are 1,416 guest rooms, no two rooms are exactly alike. /n 4) The Waldorf Astoria was the first Hotel in the world to offer room service for its guests. /n 5) Every president since Herbert Hoover has stayed in the presidential suite.  It is custom for each to leave a gift in the room.  (JFK left a rocking chair)/n 6) The hotel is now owned and managed by the Hilton Family", neighborhood_id: upper_east_side.id)
breakfast_tiffanys = Place.create(name: "Apartment for Breakfast at Tiffany's", address: "169 East 71st Street New York, NY 10021", latitude: 40.76964, longitude: -73.961886, description: "Fun Facts:  /n 1) It was previously owned by Peter E. Bacanovic, who was infamously involved in the Martha Stewart Insider Trading Case.  It was sold in 2012 for $5.89 M/n 2) Even though the film was nominated for 5 Academy Awards, Truman Capote was very vocal about his disdain for the film.  One of his complaints was that  the role of Holly Golightly was miscast.  Capote envisioned it going to Marilyn Monroe. ", neighborhood_id: upper_east_side.id)

