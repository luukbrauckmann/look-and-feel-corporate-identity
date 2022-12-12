const routes = [
	{ title: '404', alias: '404', hash: '#404', directory: './components/404' },
	{ title: 'Voorbeeld', alias: 'voorbeeld', hash: '#voorbeeld', directory: './components/voorbeeld' },
	{ title: 'Home', alias: 'home', hash: '#home', directory: './components/home' },
	{ title: 'Afbeeldingen', alias: 'afbeeldingen', hash: '#afbeeldingen', directory: './components/afbeeldingen' },
	{ title: 'animatie', alias: 'animatie', hash: '#animatie', directory: './components/animatie' },
	{ title: 'berichtgeving', alias: 'berichtgeving', hash: '#berichtgeving', directory: './components/berichtgeving' },
	{ title: 'blokken', alias: 'blokken', hash: '#blokken', directory: './components/blokken' },
	{ title: 'formulieren', alias: 'formulieren', hash: '#formulieren', directory: './components/formulieren' },
	{ title: 'globals', alias: 'globals', hash: '#globals', directory: './components/globals' },
	{ title: 'headings', alias: 'headings', hash: '#headings', directory: './components/headings' },
	{ title: 'iconen', alias: 'iconen', hash: '#iconen', directory: './components/iconen' },
	{ title: 'interactieve-componenten', alias: 'interactieve-componenten', hash: '#interactieve-componenten', directory: './components/interactieve-componenten' },
	{ title: 'kleuren', alias: 'kleuren', hash: '#kleuren', directory: './components/kleuren' },
	{ title: 'Knoppen', alias: 'knoppen', hash: '#knoppen', directory: './components/knoppen' },
	{ title: 'lijsten', alias: 'lijsten', hash: '#lijsten', directory: './components/lijsten' },
	{ title: 'media', alias: 'media', hash: '#media', directory: './components/media' },
	{ title: 'navigatie', alias: 'navigatie', hash: '#navigatie', directory: './components/navigatie' },
	{ title: 'reclame', alias: 'reclame', hash: '#reclame', directory: './components/reclame' }
];

const locationHandler = async () => {
	window.location.hash = window.location.hash ? window.location.hash : '#home';
	const hash = window.location.hash;
	let route = routes.find((item) => item.hash === hash)
	if (!route) {
		route = routes[0]
		window.location.hash = route.hash
	}

	const html = await fetch(`${route.directory}/${route.alias}.html`)
		.then((data) => {
			if (data.status === 404) window.location.hash = routes[0]
			return data.text()
		})

	const content = document.getElementById('main-content')
	content.innerHTML = html

	const menuItems = document.getElementById('main-nav-items')
	if (menuItems) menuItems.childNodes.forEach((item) => item.classList.remove('active'))

	const activeMenuItem = document.getElementById(`menu-item-${route.hash}`)
	if (activeMenuItem) {
		activeMenuItem.classList.add('active')
		// activeMenuItem.scrollIntoView()
	}

	document.title = route.title

	const link = document.getElementById('component-styles')
	link.href = `${route.directory}/${route.alias}.css`

	const script = document.getElementById('component-script')
	script.src = `${route.directory}/${route.alias}.js`
};

window.addEventListener('hashchange', locationHandler)
locationHandler()
