describe("initialize", function(){
  it("finds the longitude of the neighborhood", function(){
    loadFixtures("show.html.erb")
    initialize()
    $("#tour-latitude").val(40.7692)
    $("#tour-longitude").val(-73.9656)
    expect($("#map-canvas").children().size()).toEqual(2)
  });

}); 