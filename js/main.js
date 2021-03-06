var states = {};

var content = [
  { 
  	title: 'Mercury',
  	color: 1,
  	seats: '5',
  	id: 'mercury',
    floor: 1,
  },
  { 
  	title: 'Venus',
  	color: 1,
  	seats: '5',
  	id: 'venus',
    floor: 1,
  },
  { 
  	title: 'Earth',
  	color: 1,
  	seats: '5',
  	id: 'earth',
    floor: 1,
  },
  { 
  	title: 'Mars',
  	color: 1,
  	seats: '5',
  	id: 'mars',
    floor: 1,
  },
  { 
  	title: 'Jupiter',
  	color: 1,
  	seats: '12',
    tv: 1,
  	id: 'winterfell',
    floor: 1,
  },
  { 
  	title: 'Saturn',
  	color: 1,
  	seats: '12',
    tv: 1,
  	id: 'hardhome',
    floor: 1,
  },
  { 
  	title: 'Sun',
  	color: 1,
  	seats: '22',
    tv: 1,
  	id: 'sun',
    floor: 1,
  },




  { 
  	title: 'Krypton',
  	color: 2,
  	seats: '4',
  	id: 'krypton',
    floor: 1,
  },
  { 
  	title: 'Asgard',
  	color: 2,
  	seats: '4',
  	id: 'asgard',
    floor: 1,
  },
  { 
  	title: 'Vulcan',
  	color: 2,
  	seats: '3',
  	id: 'vulcan',
    floor: 1,
  },
  { 
  	title: 'Cybertron',
  	color: 2,
  	seats: '4',
  	id: 'cybertron',
    floor: 1,
  },

  { 
  	title: 'Neptune',
  	color: 1,
  	seats: '4',
  	id: 'neptune',
    floor: 1,
  },
  { 
  	title: 'Uranus',
  	color: 1,
  	seats: '4',
  	id: 'uranus',
    floor: 1,
  },
  { 
  	title: 'Pluto',
  	color: 1,
  	seats: '4',
  	id: 'pluto',
    floor: 1,
  },

  { 
    title: 'Planet X',
    color: 2,
    seats: '4',
    id: 'planetx',
    floor: 1,
  },
  { 
    title: 'Miller\'s Planet',
    color: 2,
    seats: '4',
    id: 'millers',
    floor: 1,
  },
  
  { 
  	title: 'Andromeda',
  	color: 2,
  	seats: '56',
    tv: 1,
  	id: 'matrix',
    floor: 1,
  },

  { 
    title: 'Tatooine',
    color: 2,
    seats: '5',
    id: 'tatooine',
    floor: 1,
  },
  { 
    title: 'Naboo',
    color: 2,
    seats: '5',
    id: 'naboo',
    floor: 1,
  },
  { 
  	title: 'Coruscant',
  	color: 2,
  	seats: '5',
  	id: 'coruscant',
    floor: 1,
  },

  { 
  	title: 'GST',
  	color: 6,
  	seats: '5',
  	id: 'gst',
    floor: 1,
  },
  { 
  	title: 'OMR',
  	color: 6,
  	seats: '5',
  	id: 'omr',
    floor: 1,
  },
  { 
  	title: 'ECR',
  	color: 6,
  	seats: '5',
  	id: 'ecr',
    floor: 1,
  },
  { 
  	title: 'Mount Road',
  	color: 6,
  	seats: '4',
  	id: 'mountroad',
    floor: 1,
  },
  { 
  	title: 'Greame\'s Road',
  	color: 6,
  	seats: '4',
  	id: 'greamesroad',
    floor: 1,
  },
  { 
  	title: 'TTK Road',
  	color: 6,
  	seats: '4',
  	id: 'ttkroad',
    floor: 1,
  },
  { 
    title: 'Cathedral Road',
    color: 6,
    seats: '4',
    id: 'cathedralroad',
    floor: 1,
  },

  { 
  	title: 'Light House',
  	color: 7,
  	seats: '4',
  	id: 'lighthouse',
    floor: 1,
  },
  { 
  	title: 'Napier Bridge',
  	color: 7,
  	seats: '4',
  	id: 'napierbridge',
    floor: 1,
  },
  { 
  	title: 'Valluvar Kottam',
  	color: 7,
  	seats: '5',
  	id: 'valluvarkottam',
    floor: 1,
  },
  { 
  	title: 'Theosophical Society',
  	color: 7,
  	seats: '6',
  	id: 'theosophicalsociety',
    floor: 1,
  },
  { 
  	title: 'Kapaleeshwar Temple',
  	color: 7,
  	seats: '10',
    tv: 1,
  	id: 'kapaleeshwartemple',
    floor: 1,
  },
  { 
    title: 'Rippon Building',
    color: 7,
    seats: '4',
    id: 'ripponbuilding',
    floor: 1,
  },
  { 
  	title: 'Fort St. George',
  	color: 7,
  	seats: '4',
  	id: 'fortstgeorge',
    floor: 1,
  },
  { 
  	title: 'Chennai Central',
  	color: 7,
  	seats: '5',
  	id: 'chennaicentral',
    floor: 1,
  },
  { 
  	title: 'Boat Club',
  	color: 7,
  	seats: '3',
  	id: 'boatclub',
    floor: 1,
  },
  { 
  	title: 'Spencer Plaza',
  	color: 7,
  	seats: '6',
  	id: 'spencerplaza',
    floor: 1,
  },

  { 
  	title: 'Santhome Beach',
  	color: 7,
  	seats: '3',
  	id: 'santhome',
    floor: 1,
  },
  { 
  	title: 'Golden Beach',
  	color: 7,
  	seats: '3',
  	id: 'golden',
    floor: 1,
  },
  { 
  	title: 'Marina Beach',
  	color: 7,
  	seats: '35',
    tv: 1,
  	id: 'gameofthrones',
    floor: 1,
  },
  { 
  	title: 'Kovalam Beach',
  	color: 7,
  	seats: '4',
  	id: 'kovalam',
    floor: 1,
  },
  { 
  	title: 'Elliot\'s Beach',
  	color: 7,
  	seats: '3',
  	id: 'elliots',
    floor: 1,
  },
  { 
    title: 'Amphitheater',
    color: 6,
    seats: 'a lot of people',
    id: 'amphitheater',
    floor: 1,
  },



  { 
    title: 'Sao Gabriel',
    color: 6,
    seats: '5',
    id: 'ship-1',
    floor: 0,
  },
  { 
    title: 'Santa Maria',
    color: 6,
    seats: '3',
    id: 'ship-2',
    floor: 0,
  },
  { 
    title: 'Seawise Giant',
    color: 6,
    seats: '3',
    id: 'ship-3',
    floor: 0,
  },
  { 
    title: 'Solar Sailor',
    color: 6,
    seats: '3',
    id: 'ship-4',
    floor: 0,
  },
  { 
    title: 'Sea Shadow',
    color: 6,
    seats: '3',
    id: 'ship-5',
    floor: 0,
  },
  { 
    title: 'Scorpion',
    color: 6,
    seats: '10',
    id: 'ship-6',
    floor: 0,
    tv: 1,
  },
  { 
    title: 'Seraph',
    color: 6,
    seats: '5',
    id: 'ship-7',
    floor: 0,
  },
  { 
    title: 'Seeadler',
    color: 6,
    seats: '5',
    id: 'ship-8',
    floor: 0,
  },

  { 
    title: 'Flying Dutchmen',
    color: 8,
    seats: '4',
    id: 'ship-9',
    floor: 0,
  },
  { 
    title: 'Black Pearl',
    color: 8,
    seats: '4',
    id: 'ship-10',
    floor: 0,
  },
  { 
    title: 'Unicorn',
    color: 8,
    seats: '3',
    id: 'ship-11',
    floor: 0,
  },
  { 
    title: 'Poseidon',
    color: 8,
    seats: '3',
    id: 'ship-12',
    floor: 0,
  },
  { 
    title: 'Titanic',
    color: 8,
    seats: '10',
    id: 'ship-13',
    floor: 0,
    tv: 1,
  },

  { 
    title: 'Argo',
    color: 7,
    seats: '3',
    id: 'ship-14',
    floor: 0,
  },
  { 
    title: 'Admiral',
    color: 7,
    seats: '3',
    id: 'ship-15',
    floor: 0,
  },
  { 
    title: 'Amethyst',
    color: 7,
    seats: '5',
    id: 'ship-16',
    floor: 0,
  },
  { 
    title: 'Beagle',
    color: 7,
    seats: '20',
    id: 'ship-17',
    floor: 0,
    tv: 1,
  },
  { 
    title: 'Batillus',
    color: 7,
    seats: '5',
    id: 'ship-18',
    floor: 0,
  },
  { 
    title: 'Bismarck',
    color: 7,
    seats: '3',
    id: 'ship-19',
    floor: 0,
  },
  { 
    title: 'Barzan',
    color: 7,
    seats: '3',
    id: 'ship-20',
    floor: 0,
  },
  { 
    title: 'INS S-21',
    color: 7,
    seats: '3',
    id: 'ship-21',
    floor: 0,
  },
  { 
    title: 'INS Chakra',
    color: 7,
    seats: '3',
    id: 'ship-22',
    floor: 0,
  },
  { 
    title: 'INS Arihant',
    color: 7,
    seats: '4',
    id: 'ship-23',
    floor: 0,
  },
  { 
    title: 'INS Viraat',
    color: 7,
    seats: '4',
    id: 'ship-24',
    floor: 0,
  },
  { 
    title: 'Challenger',
    color: 7,
    seats: '5',
    id: 'ship-25',
    floor: 0,
  },
  { 
    title: 'Color Magic',
    color: 7,
    seats: '3',
    id: 'ship-26',
    floor: 0,
  },
  { 
    title: 'Cutty Sark',
    color: 7,
    seats: '5',
    id: 'ship-27',
    floor: 0,
  },


];

$(document).ready(function(){

  // SET INITIAL FLOOR. REMEMBER LAST-USED FLOOR IF POSSIBLE.
  var currentFloor = 1;
  $('#ground-floor').hide();
	

  // SET INITIAL SCALE. REMEMBER LAST-USED SCALE IF POSSIBLE.
  var scale = 0.9;
  $('.mapcontainer').css('transform', 'scale('+scale+')');

  var count = 0;

  $('#selected-room').hide();

	$('.ui.dropdown').dropdown();

  console.log($(window).width(), $(window).height());

  // Show a room's details. That is, what happens when a room is selected.
	var showRoom = function(id){
		var result = $.grep(content, function(e){ return e.id == id; })[0];

		$('.room-name').text(result['title']);

    // var amenities = " - seats "+result['seats'];
    if(result['tv'] == 1)
      $('.room-tv').show();
    else
      $('.room-tv').hide();
      // amenities += " - has TV";

		$('.room-seats').text(result['seats']);

		$('#selected-room')
			.removeClass()
			.addClass('color'+result['color'])
			.show();

		$('.room, .big-room, .lifts').addClass('faded');
		$("#"+result['id']).removeClass('faded');

		// Scrolling logic
		var targetRoom = $("#"+result['id']);
		var moveLeft = $("#map").scrollLeft(), moveTop = $("#map").scrollTop();

		var minX = $("#map").scrollLeft();
    var maxX = $("#map").scrollLeft() + $(window).width();


    var minY = $("#map").scrollTop();
    var maxY = $("#map").scrollTop() + $(window).height();

    var halfWidth = $(window).width() / 2;
    var halfHeight = $(window).height() / 2;

    $('#map').animate({
        scrollTop: (350 * scale) + targetRoom.position().top - halfHeight,
        scrollLeft: (860 * scale) + targetRoom.position().left - halfWidth
    }, 300);

	};

  // Switch to Ground Floor
  var switchToGroundFloor = function(){
    currentFloor = 0;
    $('#first-floor').fadeOut(200);
    $('#ground-floor').fadeIn(200);
    $('#first-floor-button').removeClass('active');
    $('#ground-floor-button').addClass('active');
  }

  // Switch to First Floor
  var switchToFirstFloor = function(){
    currentFloor = 1;
    $('#ground-floor').fadeOut(200);
    $('#first-floor').fadeIn(200);
    $('#ground-floor-button').removeClass('active');
    $('#first-floor-button').addClass('active');
  }

  // Switch to Floors
  var switchFloors = function(){
    if(currentFloor == 1)
      switchToGroundFloor();
    else if(currentFloor == 0)
      switchToFirstFloor();
  }

  // On Clicking a meeting room
	$('.room, .big-room').click(function(){
		var id = $(this).attr('id');
		showRoom(id);
    return false;
	});

  // On Clicking a meeting room name in "Upcoming Meetings"
  $('.meeting-room').click(function(){
    var id = $(this).attr('name');
    showRoom(id);
    return false;
  });

  // On Search
	$('.ui.search').search({
		source: content,
    selectFirstResult: true,
		onSelect: function(result, response) {
      if(result['floor'] == 0) {
        switchToGroundFloor();
      } else if(result['floor'] == 1) {
        switchToFirstFloor();
      }
			showRoom(result['id']);
		}
	});

  // Deselecting a Selected Room
	$('#close-room, .mapcontainer').click(function(){
    if ($('.mapcontainer').hasClass('noclick')) {
      $('.mapcontainer').removeClass('noclick');
    }
    else {
      $('.room, .big-room, .lifts').removeClass('faded');
      $('#selected-room')
        .removeClass()
        .hide();
      $('.ui.search').search('set value', '');
      $('#searchbox').show();
    }
	});

  // Zoom Logic
  $('#zoom-in').click(function(){
    if(scale > 1.1) return false;
    scale = scale + 0.04 ;
    $('.mapcontainer').css('transform', 'scale('+scale+')');
  });
  $('#zoom-out').click(function(){
    if(scale < .5) return false;
    scale = scale - 0.04 ;
    $('.mapcontainer').css('transform', 'scale('+scale+')');
  });

  // Pinch Zoom on Desktop
  document.addEventListener('mousewheel', function(e) {
    // Zoom Out
    if(e.deltaY % 1 !== 0   &&   e.deltaY > 0) {
      e.preventDefault();
      if(scale < .5) return false;
      count += 1;
      if (count % 3 == 0) {
        scale = scale - 0.04 ;
        $('.mapcontainer').css('transform', 'scale('+scale+')');
      }
    }

    // Zoom In
    if(e.deltaY % 1 !== 0   &&   e.deltaY < 0) {
      e.preventDefault();
      if(scale > 1.1) return false;
      count += 1;
      if (count % 3 == 0) {
        scale = scale + 0.04 ;
        $('.mapcontainer').css('transform', 'scale('+scale+')');
      }
    }
  });

  // Pan and Pinch Zoom for Mobile
  var hammer = new Hammer(document.getElementById('map'), {
    domEvents: false
  });

  hammer.get('pinch').set({
    enable: true
  });

  var hscale = 0;

  hammer.on('pinchstart', function (e) {
    hscale = e.scale;
  });

  hammer.on('pinchmove', function (e) {
    var deltaScale = hscale - e.scale;

    if(deltaScale > 0)
    {
      // Zoom out
      if(scale < .4) return false;

      scale = scale - (0.5 * deltaScale);
      $('.mapcontainer').css('transform', 'scale('+scale+')');
    } else if(deltaScale < 0)
    {
      // Zoom in
      if(scale > 1.6) return false;

      scale = scale - (0.5 * deltaScale);
      $('.mapcontainer').css('transform', 'scale('+scale+')');
    }

    hscale = e.scale;
  });

  var iX = 0, iY = 0;

  hammer.on('panstart', function (e) {
    iX = e.center.x;
    iY = e.center.y;
  });
  hammer.on('panmove', function (e) {
    var cX = e.center.x;
    var cY = e.center.y;

    var deltaX = iX - cX;
    var deltaY = iY - cY;

    $('#map').scrollLeft($("#map").scrollLeft() + deltaX);
    $('#map').scrollTop($("#map").scrollTop() + deltaY);

    iX = cX;
    iY = cY;
  });

  // Floor switch Logic
  $('#first-floor-button').click(function(){
    switchToFirstFloor();
  });
  $('#ground-floor-button').click(function(){
    switchToGroundFloor();
  });

  // Lifts Floor Switch
  $('.lifts').click(function(){
    switchFloors();
  });
});

// Deselect room on Esc.
$(document).keydown(function(e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
  		$('.room, .big-room').removeClass('faded');
  		$('#selected-room')
  			.removeClass()
  			.hide();
  		$('.ui.search').search('set value', '');
  		$('#searchbox').show();
    }
});