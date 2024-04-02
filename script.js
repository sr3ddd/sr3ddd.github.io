// font controller
const FONTS = ['Roboto','Fjord One','Montserrat','Inconsolata','Kufam','Oswald','Reem Kufi Fun','Ubuntu','Playfair Display','Lora','Ms Madi','Dancing Script','Anton','Varela Round','Fjalla One','Exo 2','Pacifico','Black Han Sans','Source Code Pro','Indie Flower','Caveat','Jost','Rajdhani','Zilla Slab','Tiro Bangla','Cormorant Garamond','Signika','Permanent Marker','Acme','Bree Serif','Solway','Cinzel','Archivo Black','DM Serif Display','Kalam','Crete Round','Noto Sans Display','Courgette','Volkhov','Orbitron','Antic Slab','Prata','Space Mono','Imprima','Spectral','Sora','Alata','Cantarell','Sen','Hammersmith One'];
const FONT = FONTS[parseInt(Math.random() * FONTS.length)];
$('head').append(`<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=${FONT}">`);
$('*').css('font-family', FONT);

// color controller
const color = (1<<24) * Math.random() | 0;
$(':root').css('--color', 0.2126 * ((color >> 16) & 0xff) + 0.7152 * ((color >>  8) & 0xff) + 0.0722 * ((color >>  0) & 0xff) < 128 ? 'white' : 'black');
$(':root').css('--background', '#'+(color.toString(16).padStart(6, '0')));

// game list controller
const GAME_LISTS = {
	tylerpalko: [['1','1'],['1v1.lol','1v1.LOL'],['10minutestilldawn','10 Minutes Till Dawn'],['2048','2048'],['adanceoffireandice','A Dance of Fire And Ice'],['adarkroom','A Dark Room'],['adrenalinechallenge','Adrenaline Challenge'],['adventuredrivers','Adventure Drivers'],['asteroids','Asteroids'],['astray','Astray'],['backcountry','Backcountry'],['badicecream','Bad Ice Cream'],['badicecream2','Bad Ice Cream 2'],['badicecream3','Bad Ice Cream 3'],['basketrandom','Basket Random'],['bitlife','BitLife'],['bounceback','Bounceback'],['boxingrandom','Boxing Random'],['breaklock','BreakLock'],['breakout','Breakout'],['chess','Chess'],['chromedino','Chrome Dino'],['connect3','Connect 3'],['cookieclicker','Cookie Clicker'],['cubefield','Cubefield'],['doodlejump','Doodle Jump'],['ducklife','Duck Life'],['ducklife2','Duck Life 2'],['ducklife3','Duck Life 3'],['ducklife4','Duck Life 4'],['edgesurf','Edge Surf'],['evilglitch','Evil Glitch'],['factoryballsforever','Factory Balls Forever'],['fireboyandwatergirlintheforesttemple','Fireboy and Watergirl in the Forest Temple'],['flappybird','Flappy Bird'],['friendlyfire','Friendly Fire'],['geometrydash','Geometry Dash'],['gopherkart','Gopher Kart'],['hextris','Hextris'],['iceagebabyadventure','Ice Age Baby Adventure'],['konnekt','Konnekt'],['minecraft0.30','Minecraft 0.30'],['minecraft1.3','Minecraft 1.3'],['minecraft1.5.2','Minecraft 1.5.2'],['motox3m2','Moto X3M 2'],['ovo','OvO'],['pacman','Pac-Man'],['pushback','Pushback'],['racer','Racer'],['radiusraid','Radius Raid'],['retrobowl','Retro Bowl'],['retrohaunt','Retrohaunt'],['riddleschool','Riddle School'],['riddleschool2','Riddle School 2'],['riddleschool3','Riddle School 3'],['riddleschool4','Riddle School 4'],['riddleschool5','Riddle School 5'],['roadblocks','Roadblocks'],['sleepingbeauty','Sleeping Beauty'],['slope','Slope'],['snake','Snake'],['snowrider3d','Snow Rider 3D'],['soccerrandom','Soccer Random'],['spacecompany','Space Company'],['spaceinvaders','Space Invaders'],['tetris','Tetris'],['thechromaincident','The Chroma Incident'],['thereisnogame','THERE IS NO GAME!'],['towermaster','Tower Master'],['tunnelrush','Tunnel Rush'],['underrun','Under Run'],['vex3','Vex 3'],['vex4','Vex 4'],['vex5','Vex 5'],['vex6','Vex 6'],['vex7','Vex 7'],['volleyrandom','Volley Random'],['webretro','Webretro (retro console emulator)'],['worldshardestgame','World\'s Hardest Game'],['worldshardestgame2','World\'s Hardest Game 2'],['xx142b2.exe','xx142-b2.exe']]
}
function updateList() {
	let formattedList = [];
	for(let key in GAME_LISTS) {
		for(let el of GAME_LISTS[key]) {
			if(searchFilter(el[1]))
				 formattedList.push(`<a class="game" target="_blank" rel="noopener noreferrer" href="/${key}/${el[0]}">${key+' / '+el[1]}</a>`);
		}
	}
	$('#list').html(formattedList.join('') || '<p class="game">No results</p>')
}
updateList();

// search controller
$('#search').on('input paste', function() {
	updateList();
});
function searchFilter(title) {
	const QUERY = $('#search').val();
	return !QUERY || title.toLowerCase().includes(QUERY.toLowerCase());
}
