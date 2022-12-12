const items = [
	// { label: 'Home', hash: '#home', directory: './components/home' },
	// { label: 'Voorbeeld', hash: '#voorbeeld', directory: './components/voorbeeld' },
	{ label: 'Afbeeldingen', hash: '#afbeeldingen', directory: './components/afbeeldingen' },
	// { label: 'Animatie', alias: 'animatie', hash: '#animatie', directory: './components/animatie' },
	{ label: 'Berichtgeving', alias: 'berichtgeving', hash: '#berichtgeving', directory: './components/berichtgeving' },
	// { label: 'Blokken', alias: 'blokken', hash: '#blokken', directory: './components/blokken' },
	{ label: 'Formulieren', alias: 'formulieren', hash: '#formulieren', directory: './components/formulieren' },
	{ label: 'Globals', alias: 'globals', hash: '#globals', directory: './components/globals' },
	{ label: 'Headings', alias: 'headings', hash: '#headings', directory: './components/headings' },
	{ label: 'Iconen', alias: 'iconen', hash: '#iconen', directory: './components/iconen' },
	{ label: 'Interactieve-componenten', alias: 'interactieve-componenten', hash: '#interactieve-componenten', directory: './components/interactieve-componenten' },
	{ label: 'Kleuren', alias: 'kleuren', hash: '#kleuren', directory: './components/kleuren' },
	{ label: 'Knoppen', alias: 'knoppen', hash: '#knoppen', directory: './components/knoppen' },
	{ label: 'Lijsten', alias: 'lijsten', hash: '#lijsten', directory: './components/lijsten' },
	// { label: 'Media', alias: 'media', hash: '#media', directory: './components/media' },
	// { label: 'Navigatie', alias: 'navigatie', hash: '#navigatie', directory: './components/navigatie' },
	// { label: 'Reclame', alias: 'reclame', hash: '#reclame', directory: './components/reclame' }
]

function getNavigationList() {
	const list = document.getElementById('main-nav-items')
	items.forEach((item) => {
		const ancor = document.createElement('a')
		ancor.id = `menu-item-${item.hash}`
		ancor.innerHTML = `${item.label}`
		ancor.href = item.hash
		ancor.onclick = toggleMenu
		list.appendChild(ancor)
	})
}

function toggleMenu() {
	const element = document.getElementById('main-nav')
	element.classList.toggle('visible')
}

window.toggleMenu = toggleMenu
getNavigationList()