/*
	Horizons by TEMPLATED
    templated.co @templatedco
    Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
skel.init({
	reset: 'full',
	breakpoints: {
		global:		{ range: '*', containers: 1400, grid: { gutters: 50 } },
		wide:			{ range: '-1680', containers: 1200, grid: { gutters: 40 } },
		normal:		{ range: '-1280', containers: 960 },
		narrow:		{ range: '-980', containers: '95%', grid: { gutters: 30 } },
		narrower:	{ range: '-840', grid: { collapse: 1 } },
		mobile:		{ range: '-640', containers: '90%', grid: { gutters: 15, collapse: 2 } }
	}
}, {
	layers: {
		layers: {
			navPanel: {
				animation: 'pushX',
				breakpoints: 'narrower',
				clickToClose: true,
				height: '100%',
				hidden: true,
				html: '<div data-action="navList" data-args="nav"></div>',
				orientation: 'vertical',
				position: 'top-left',
				side: 'left',
				width: 275
			},
			titleBar: {
				breakpoints: 'narrower',
				height: 44,
				html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
				position: 'top-left',
				side: 'top',
				width: '100%'
			}
		}
	}
});

smoothScroll.init();

$(document).ready(() => {
	const Colours = [ '#e67e22', '#bdc3c7', '#f1c40f', '#95a5a6', '#1ca7aa' ];
	const Elements = document.querySelectorAll('table.animated th, table.animated td');

	for (const Element of Elements) {
		const n = $(Element).index() + 1;

		Element.addEventListener("mouseover", () =>
			$('table.animated tr > td:nth-child(' + n + '):has(i)').css('background-color', Colours[n - 2]));
		Element.addEventListener("mouseout", () => 
			$('table.animated tr > td:nth-child(' + n + '):has(i)').css('background-color', 'transparent'));
	};
});
