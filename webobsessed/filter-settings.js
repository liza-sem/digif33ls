window.customFilterSettings = {
	'targets': [{
		container: '.view-list .page-section[class*="collection-type-blog-"] div[data-controller]',
		items: 'article',
		settings: {
			clearAllButton: {
				enabled: true, 
				text: 'All', 
				place: 'before'
			},
			sticky: {
				enabled: false,
			},
			requestAttrWithAjax: true,
			showItemsCount: false,
			position: 'top',
			align:'space-between',
			compatCatTagInQuery: true,
			urlQuery: true,
			useHistory: false,
			waitForAjax: true,
			accordionDropdowns: true,
			customClasses: '',
			placeFiltersTo:'.filters',
			view:'dropdowns',
			wrapFilterContainer: true,
			simpleFilter: {
				anim:'true',
				show: {
					effect: 'fade',
					transitionDuration: 300,
					stagger: 60,
					easing: 'ease-in-out'
				},
				hide: {
					effect: 'fade',
					transitionDuration: 100,
					stagger: 18,
					easing: 'ease-in-out'
				}
			},
			pagination: {
				enabled: true,
				pageSize: 40
			},
			mobilePanel: {
				enabled: true, 
        forceOnWidth: '500px',
        triggerButtonName: 'Directory',
        align: 'center',
        closeButtonPosition: 'bottom',
        closeButtonText: '',
        keepDropdownsOpen: null,
				closeOnSelect: true,
        closeOnSearch: true, 
        closeOnOutsideClick: true 
			},
			filter: {
				category: false,
				tag: false,
				items: [{
					name: 'Category',
					showAll:true,
					multiple: false,
					hideValueLabel:true,
					resetOthers: 'all',
					getAttr: 'categories'
				}, {
					name: 'Resource/Tool',
					allowedOptions:'Drawing, Graphic Design, Mac App, Productivity, Typeface, Courses, Design Inspo, Web Inspo, Workshop',
					sort:'asc',
					hideValueLabel:true,
					multiple: false,
					resetOthers: 'all',
					getAttr: 'tags'
				}, {
					name: 'Style',
          allowedOptions:'Bordered, Brutalism, Cards, Chat, Collage, Colorful, Creative, Creative HTML, Desktop, Digital Nature, Experimental, Frosted, Internet, Minimal, Modern, Motion, Old UI, One Page, Quirky, Simple, Sleek, Split, Unconventional, Visual Sitemap',
          multiple: false,
					sort:'asc',		
          hideValueLabel:true,
          resetOthers: 'all',
          getAttr: 'tags'
				}, {
          name: 'Features',
					allowedOptions:'Algorithm, Animation, Blur, Community, Custom Checkout, Custom Cursor, Custom Filter, Draggable, Draw, Dynamic Nav, Dynamic Reveal, Experimental Nav, Filter, Fixed Position, Gradients, Hover Effects, Hover Reveal, Iframes, Infinite Scroll, Interactive, Interactive Nav, Mix Blend Mode, Mobile Nav on Desktop, Motion, Overflow, Perspective, Playlists, Radio, Screen Saver, Scrolling Effects, Side Nav, Split View, Sticky Scroll, Type Effects',
					multiple: false,
					sort:'asc',
          hideValueLabel:true,
          resetOthers: 'all',
          getAttr: 'tags'
				}, {
					name: 'Technologies',
					allowedOptions:'Custom, Gatsby, Google Sheets, Kirby, Netlify, Next.js, Node.js, React, Shopify, Squarespace, Webflow, Wordpress',
					multiple: false,
					sort:'asc',
					hideValueLabel:true,
					resetOthers: 'all',
					getAttr: 'tags'
				}, {
					name: 'Font',
					allowedOptions:'AM Kosmos, Antique, Baikal, Bureau Grot, Caslon Ionic, Century Schoolbook, ChiKareGo2, Classic Grotesque Pro Regular, Compagnon-Roman, DotGothic16, Everett, Google Sans, Helvetica, JECAI-Regular, Karla, Lyon, MB, Necto, Neue Haas Grotesk, Neue Haas Unica, Next Mono, Panorama Therma, Pixel Arial 11, Rhymes, San Francisco, Scto Grotesk A, Squish, Suisse, Syne Mono, Times New Arial, Times Now, Times NR MT W01 Regular, VT323, Wazlon, Whyte',
					multiple: false,
					sort:'asc',
					hideValueLabel:true,
					resetOthers: 'all',
					getAttr: 'tags'
				}]
			},
			search: {
				text: 'Search',
				resetOthers: 'all',
				enabled: true
			}
		}
	}]
};
