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
	kodub: [['polytrack','PolyTrack']],
	tylerpalko: [['1','1'],['1v1.lol','1v1.LOL'],['10minutestilldawn','10 Minutes Till Dawn'],['2048','2048'],['adanceoffireandice','A Dance of Fire And Ice'],['adarkroom','A Dark Room'],['adrenalinechallenge','Adrenaline Challenge'],['adventuredrivers','Adventure Drivers'],['asteroids','Asteroids'],['astray','Astray'],['backcountry','Backcountry'],['badicecream','Bad Ice Cream'],['badicecream2','Bad Ice Cream 2'],['badicecream3','Bad Ice Cream 3'],['basketrandom','Basket Random'],['bitlife','BitLife'],['bounceback','Bounceback'],['boxingrandom','Boxing Random'],['breaklock','BreakLock'],['breakout','Breakout'],['chess','Chess'],['chromedino','Chrome Dino'],['connect3','Connect 3'],['cookieclicker','Cookie Clicker'],['cubefield','Cubefield'],['doodlejump','Doodle Jump'],['ducklife','Duck Life'],['ducklife2','Duck Life 2'],['ducklife3','Duck Life 3'],['ducklife4','Duck Life 4'],['edgesurf','Edge Surf'],['evilglitch','Evil Glitch'],['factoryballsforever','Factory Balls Forever'],['fireboyandwatergirlintheforesttemple','Fireboy and Watergirl in the Forest Temple'],['flappybird','Flappy Bird'],['friendlyfire','Friendly Fire'],['geometrydash','Geometry Dash'],['gopherkart','Gopher Kart'],['hextris','Hextris'],['iceagebabyadventure','Ice Age Baby Adventure'],['konnekt','Konnekt'],['minecraft0.30','Minecraft 0.30'],['minecraft1.3','Minecraft 1.3'],['minecraft1.5.2','Minecraft 1.5.2'],['motox3m2','Moto X3M 2'],['ovo','OvO'],['pacman','Pac-Man'],['pushback','Pushback'],['racer','Racer'],['radiusraid','Radius Raid'],['retrobowl','Retro Bowl'],['retrohaunt','Retrohaunt'],['riddleschool','Riddle School'],['riddleschool2','Riddle School 2'],['riddleschool3','Riddle School 3'],['riddleschool4','Riddle School 4'],['riddleschool5','Riddle School 5'],['roadblocks','Roadblocks'],['sleepingbeauty','Sleeping Beauty'],['slope','Slope'],['snake','Snake'],['snowrider3d','Snow Rider 3D'],['soccerrandom','Soccer Random'],['spacecompany','Space Company'],['spaceinvaders','Space Invaders'],['tetris','Tetris'],['thechromaincident','The Chroma Incident'],['thereisnogame','THERE IS NO GAME!'],['towermaster','Tower Master'],['tunnelrush','Tunnel Rush'],['underrun','Under Run'],['vex3','Vex 3'],['vex4','Vex 4'],['vex5','Vex 5'],['vex6','Vex 6'],['vex7','Vex 7'],['volleyrandom','Volley Random'],['webretro','Webretro (retro console emulator)'],['worldshardestgame','World\'s Hardest Game'],['worldshardestgame2','World\'s Hardest Game 2'],['xx142b2.exe','xx142-b2.exe']],
	coolubg: [['1v1.lol','1v1.LOL'],['2048','2048'],['a-dark-room','A Dark Room'],['among-us-online-2','Among Us Online 2'],['among-us-online-scratch','Among Us Online Scratch'],['appel-multiplayer','Appel Multiplayer'],['appel','Appel'],['awesome-tanks-2','Awesome Tanks 2'],['awesome-tanks','Awesome Tanks'],['bitlife','Bitlife'],['bob-the-robber-2','Bob The Robber 2'],['circloo','Circloo'],['cloud-platformer-fun','Cloud Platformer Fun'],['cookie-clicker','Cookie Clicker'],['crossy-road','Crossy Road'],['cut-the-rope','Cut The Rope'],['doom','Doom'],['drift-boss','Drift Boss'],['drive-mad','Drive Mad'],['earn-to-die-2','Earn To Die 2'],['eggy-car','Eggy Car'],['fireboy-and-watergirl-2','Fireboy And Watergirl 2'],['fireboy-and-watergirl-3','Fireboy And Watergirl 3'],['fireboy-and-watergirl-4','Fireboy And Watergirl 4'],['fnaf-2','FNAF 2'],['fnaf','FNAF'],['friday-night-funkin','Friday Night Funkin'],['getaway-shootout','Getaway Shootout'],['jelly-truck','Jelly Truck'],['johnny-upgrade','Johnny Upgrade'],['merge-melon','Merge Melon'],['minecraftish-MMO','Minecraftish MMO'],['mini-golf-online','Mini Golf Online'],['moto-x3m-2','Moto X3M 2'],['moto-x3m-3','Moto X3M 3'],['moto-x3m-pool-party','Moto X3M Pool Party'],['moto-x3m-spooky-land','Moto X3M Spooky Land'],['moto-x3m-winter','Moto X3M Winter'],['moto-x3m','Moto X3M'],['neverball','Neverball'],['ovo','OvO'],['paper.io-2','Paper.io 2'],['plants-vs.-zombies-web-demo','Plants vs. Zombies Web Demo'],['polytrack','PolyTrack'],['pong','Pong'],['retro-bowl','Retro Bowl'],['rooftop-snipers','Rooftop Snipers'],['run-3','Run 3'],['slither.io-online','Slither.io Online'],['slope','Slope'],['snow-rider-3d','Snow Rider 3D'],['stack','Stack'],['stickman-hook','Stickman Hook'],['subway-surfers','Subway Surfers'],['tanuki-sunset','Tanuki Sunset'],['temple-run-2','Temple Run 2'],['tennis-physics','Tennis Physics'],['tetris/jstetris-1.20','Tetris/jstetris 1.20'],['the-final-earth-2','The Final Earth 2'],['tiny-fishing','Tiny Fishing'],['tomb-of-the-mask','Tomb Of The Mask'],['vex-3','Vex 3']]
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
$('#search').on('input paste', updateList);
function searchFilter(title) {
	const QUERY = $('#search').val();
	return !QUERY || title.toLowerCase().includes(QUERY.toLowerCase());
}

// clear search bar unfocus
$(window).blur(function() {
	$('#search').val('');
	updateList();
});
