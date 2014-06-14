$('#sugarsnap').ready(function() {
  SugarSnap.initialize()
})

$('#demo').ready(function() {
  var demoPosition = {'coords': {'latitude': 37.7844932, 'longitude': -122.39699979999999}}
  SugarSnap.getCoordinatesSuccess(demoPosition)
})

$('#demo-sidescroll').ready(function() {
  var demoPosition = {'coords': {'latitude': 37.7844932, 'longitude': -122.39699979999999}}
  SugarSnap.getCoordinatesSuccess(demoPosition)
})