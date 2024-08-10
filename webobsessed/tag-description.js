$(document).ready(function() {
    const tagDescriptions = {
        //i want to insert the string here
  
"prestige-12-pitch": {
    "name": "Prestige 12 Pitch",
    "description": "By Clayton Smith",
    "link": "https://www.myfonts.com/collections/prestige-12-pitch-font-bitstream?ref=laz-i.com"
},

"eb-garamond": {
    "name": "EB Garamond",
    "description": "By Georg Duffner <br> Available in Squarespace",
    "link": "https://fonts.google.com/specimen/EB+Garamond?ref=laz-i.com"
},

"junicode": {
    "name": "Junicode",
    "description": "By Peter S. Baker",
    "link": "https://www.fontsquirrel.com/fonts/junicode?ref=laz-i.com"
},

"fluxisch": {
    "name": "Fluxisch",
    "description": "By Gregoire Vigneron",
    "link": "https://osp.kitchen/foundry/fluxisch-else/?ref=laz-i.com"
},

"times-now": {
    "name": "Times Now",
    "description": "By Jan Henrik Arnold",
    "link": "https://globalfonts.pro/font/times-now?ref=laz-i.com"
},
      "rhymes": {
    "name": "Rhymes",
    "description": "By Jakub Samek",
    "link": "https://maxitype.com/typeface/rhymes/?ref=laz-i.com"
},
"san-francisco": {
    "name": "San Francisco",
    "description": "By Apple",
    "link": "https://developer.apple.com/fonts/?ref=laz-i.com"
},
"astro": {
    "name": "Astro",
    "description": "Astro is a JavaScript web framework optimized for building fast, content-driven websites by rendering components on the server and delivering lightweight HTML to the browser. ",
    "link": "https://astro.build/?ref=laz-i.com"
},
"svelte": {
    "name": "Svelte",
    "description": "Svelte is a modern web framework that compiles your code into highly efficient vanilla JavaScript at build time.",
    "link": "https://svelte.dev/?ref=laz-i.com"
},
        "wix": {
            "name": "Wix",
            "description": "Wix is a versatile website builder that offers drag-and-drop functionality, allowing users to create stunning, mobile-optimized websites with minimal technical skills.",
            "link": "https://wix.com?ref=laz-i.com"
        },
        "kirby": {
            "name": "Kirby",
            "description": "Kirby CMS is a flexible, file-based content management system that enables developers to create custom websites with a focus on simplicity and user-friendly content management.",
            "link": "https://getkirby.com/?ref=laz-i.com"
        },
        "gatsby": {
            "name": "Gatsby",
            "description": "Gatsby is a modern website framework that builds performance-optimized websites with React.",
            "link": "https://www.gatsbyjs.com/?ref=laz-i.com"
        },
        "squarespace": {
            "name": "Squarespace",
            "description": "Squarespace is a popular website builder known for its elegant templates and all-in-one platform, making it easy to create professional and responsive websites without coding knowledge.",
            "link": "https://squarespace.com?ref=laz-i.com"
        },
        "readymag": {
            "name": "Readymag",
            "description": "ReadyMag is a design tool for creating visually compelling web projects such as websites, portfolios, and presentations, emphasizing creativity and ease of use.",
            "link": "https://my.readymag.com/inv/u3558437206"
        },
        "shopify": {
            "name": "Shopify",
            "description": "Shopify is a comprehensive e-commerce platform that allows users to set up, manage, and grow their online stores with a range of customizable templates and tools.",
            "link": "https://shopify.com?ref=laz-i.com"
        },

        "webflow": {
            "name": "Webflow",
            "description": "Webflow is a powerful web design tool and CMS that enables designers to build fully responsive websites visually, without writing code, and to manage content with ease.",
            "link": "https://webflow.com?ref=laz-i.com"
        },
        "netlify": {
            "name": "Netlify",
            "description": "Netlify is a cloud-based platform for deploying and managing modern web projects, offering features like continuous deployment, custom domains, and serverless functions.",
            "link": "https://netlify.com?ref=laz-i.com"
        },
        "next.js": {
            "name": "Next.js",
            "description": "Next.js is a React-based framework that allows developers to build server-side rendered and statically generated websites and applications with ease.",
            "link": "https://nextjs.org?ref=laz-i.com"
        },
        "nginx": {
            "name": "Nginx",
            "description": "Nginx is a popular web server software known for its high performance and scalability.",
            "link": "https://www.nginx.com/?ref=laz-i.com"
        },
        "nodejs": {
            "name": "Node.js",
            "description": "Node.js is a JavaScript runtime that enables developers to build scalable and high-performance network applications by executing JavaScript code on the server side.",
            "link": "https://nodejs.org?ref=laz-i.com"
        },
        "github-pages": {
            "name": "GitHub Pages",
            "description": "GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files directly from a GitHub repository, optionally runs the files through a build process, and publishes a website.",
            "link": "https://pages.github.com?ref=laz-i.com"
        },
        "wordpress": {
            "name": "WordPress",
            "description": "WordPress is a widely-used open-source CMS that allows users to create, manage, and customize websites and blogs with a vast library of themes and plugins.",
            "link": "https://wordpress.org?ref=laz-i.com"
        },
        "vercel": {
            "name": "Vercel",
            "description": "Vercel is a cloud platform for static sites and serverless functions that enables developers to deploy and scale modern web applications with ease, focusing on high performance and speed.",
            "link": "https://vercel.com?ref=laz-i.com"
        },
        "nuxt.js": {
            "name": "Nuxt.js",
            "description": "Nuxt.js is a powerful framework built on top of Vue.js that simplifies the development of universal, server-side rendered, and static websites with an intuitive, modular architecture.",
            "link": "https://nuxtjs.org?ref=laz-i.com"
        },
        "vue.js": {
            "name": "Vue.js",
            "description": "Vue.js is a progressive JavaScript framework for building user interfaces and single-page applications, offering a flexible and easy-to-integrate approach to front-end development.",
            "link": "https://vuejs.org?ref=laz-i.com"
        },
        "react": {
            "name": "React",
            "description": "React is a popular JavaScript library for building dynamic user interfaces, primarily for single-page applications, allowing developers to create reusable UI components.",
            "link": "https://reactjs.org?ref=laz-i.com"
        },
        "gsap": {
            "name": "GSAP",
            "description": "GSAP (GreenSock Animation Platform) is a robust JavaScript library for creating high-performance animations and interactive elements on the web, offering a range of tools and plugins.",
            "link": "https://greensock.com/gsap?ref=laz-i.com"
        },
        "sanity": {
            "name": "Sanity",
            "description": "Sanity is a headless CMS that provides real-time collaborative editing, structured content, and a flexible API, enabling developers to create and manage content-rich digital experiences.",
            "link": "https://sanity.io?ref=laz-i.com"
        },
        "three.js": {
            "name": "Three.js",
            "description": "Three.js is a powerful JavaScript library used to create and display 3D graphics in a web browser, making it easier for developers to build immersive and interactive visual experiences.",
            "link": "https://threejs.org?ref=laz-i.com"
        },
        "tilda": {
            "name": "Tilda",
            "description": "Tilda is a user-friendly website builder focused on creating visually appealing and content-rich websites, featuring a block-based design system for intuitive customization.",
            "link": "https://tilda.cc?ref=laz-i.com"
        },
        "cargo": {
            "name": "Cargo",
            "description": "Cargo is a web publishing platform that offers a range of templates and customization options, ideal for creating visually rich and creative portfolios, blogs, and personal websites.",
            "link": "https://cargo.site?ref=laz-i.com"
        },
        "google-sheets": {
            "name": "Google Sheets",
            "description": "Google Sheets is a cloud-based spreadsheet application that allows users to create, edit, and collaborate on spreadsheets in real-time, with powerful data analysis and visualization tools.",
            "link": "https://www.google.com/sheets/about/"
        },
    
            //font
        "karla": {
    "name": "Karla",
    "description": "By Jonny Pinhorn <br> Available in Squarespace",
    "link": "https://fonts.google.com/specimen/Karla?ref=laz-i.com"
},
        "scto-grotesk-a": {
    "name": "Scto Grotesk A",
    "description": "By Schick Toikka",
    "link": "https://www.schick-toikka.com/scto-grotesk-a?ref=laz-i.com"
},
        "whyte": {
    "name": "Whyte",
    "description": "By Dinamo",
    "link": "https://abcdinamo.com/typefaces/whyte?ref=laz-i.com"
},
        "everett": {
    "name": "Everett",
    "description": "By Nolan Paparelli",
    "link": "https://www.weltkern.com/shop/detail-typeface/everett?ref=laz-i.com"
},
        "baikal": {
    "name": "Baikal",
    "description": "By Ian Party",
    "link": "https://newglyph.com/typeface/baikal/?ref=laz-i.com"
},
        "lyon": {
    "name": "Lyon",
    "description": "By Kai Bernau",
    "link": "https://commercialtype.com/catalog/lyon?ref=laz-i.com"
},
         "necto":{
            "name":"Necto",
            "description":"By Marco Condello",
            "link":"https://www.collletttivo.it/typefaces/necto-mono?ref=laz-i.com"
        },        
         "suisse":{
            "name":"Suisse",
            "description":"By Swiss Typefaces",
            "link":"https://www.swisstypefaces.com/fonts/suisse/#font?ref=laz-i.com"
        },        
         "next-mono":{
            "name":"Next Mono",
            "description":"By Ludovic Balland",
            "link":"https://optimo.ch/typefaces/next?ref=laz-i.com"
        },        
         "adobe-garamond":{
            "name":"Adobe Garamond",
            "description":"By Adobe <br> Available on Squarespace",
            "link":"https://www.myfonts.com/collections/garamond-font-adobe"
        },
         "century-schoolbook":{
            "name":"Century Schoolbook",
            "description":"By URW Type Foundry <br> Alternative 'Schoolbook' Available on Squarespace",
            "link":"https://www.myfonts.com/collections/century-schoolbook-font-urw"
        },        
         "syne-mono":{
            "name":"Syne Mono",
            "description":"By Bonjour Monde, Lucas Descroix <br> Available on Squarespace",
            "link":"https://fonts.google.com/specimen/Syne+Mono?ref=laz-i.com"
        },        
        "neue-haas-grotesk":{
            "name":"Neue Haas Grotesk",
            "description":"By Linotype <br> Available on Squarespace",
            "link":"https://www.myfonts.com/collections/neue-haas-grotesk-font-linotype"
        },
        "classic-grotesque-pro-regular":{
            "name":"Classic Grotesque Pro Regular",
            "description":"By Monotype",
            "link":"https://www.myfonts.com/products/regular-classic-grotesque-346022"
        },
        "compagnon-roman":{
            "name":"Compagnon Roman",
            "description":"By Velvetyne",
            "link":"https://velvetyne.fr/fonts/compagnon/?ref=laz-i.com"
        },
        "times-new-arial":{
            "name":"Times New Arial",
            "description":"By Liebermann Kiepe Reddemann",
            "link":"https://timesnewarial.liebermannkiepereddemann.de/?ref=laz-i.com"
        },        
        "vt323":{
            "name":"VT323",
            "description":"By Peter Hull <br> Available on Squarespace",
            "link":"https://fonts.google.com/specimen/VT323?ref=laz-i.com"
        },
        "bureau-grot":{
            "name":"Bureau Grot",
            "description":"By Font Bureau",
            "link":"https://www.myfonts.com/collections/bureau-grot-font-font-bureau"
        },
        "caslon-ionic":{
            "name":"Caslon Ionic",
            "description":"By Paul Barnes, Greg Gazdowicz",
            "link":"https://commercialtype.com/catalog/caslon_ionic?ref=laz-i.com"
        },
        "dotgothic16":{
            "name":"DotGothic16",
            "description":"By Fontworks Inc. <br> Available on Squarespace",
            "link":"https://fonts.google.com/specimen/DotGothic16?ref=laz-i.com"
        },
        "antique":{
            "name":"Antique",
            "description":"By Fran?ois Rappo",
            "link":"https://optimo.ch/typefaces/antique_legacy?ref=laz-i.com"
        },
        "helvetica":{
            "name":"Helvetica",
            "description":"By Linotype <br> Available on Squarespace",
            "link":"https://www.myfonts.com/collections/helvetica-font-linotype"
        },
        "neue-haas-unica":{
            "name":"Neue Haas Unica",
            "description":"By Linotype <br> Available on Squarespace",
            "link":"https://www.myfonts.com/collections/neue-haas-unica-font-linotype"
        },
        "monument-grotesk":{
            "name":"Monument Grotesk",
            "description":"By Dinamo",
            "link":"https://abcdinamo.com/typefaces/monument-grotesk?ref=laz-i.com"
        },
        "chikarego2":{
            "name":"ChiKareGo2",
            "description":"By Giles Booth",
            "link":"https://www.pentacom.jp/pentacom/bitfontmaker2/gallery/?id=3780?ref=laz-i.com"
        },
        "pixel-arial-11":{
            "name":"Pixel Arial 11",
            "description":"By Max",
            "link":"https://www.dafont.com/pixel-arial-11.font?ref=laz-i.com"
        }        
    };



    function insertTagDescriptions() {
        $('.tag-description').remove();
        const activeLinks = $('.archive-group-name-link.active');

        activeLinks.each(function() {
            const filterValue = $(this).attr('data-filter-val');

            if (filterValue) {
                let { name, description, link } = tagDescriptions[filterValue] || {};

                if (!name) {
                    name = $(this).text().trim();
                }

                if (!name) {
                    return;
                }

                const newDiv = `
                    <div class="tag-description" df-filter-value="${filterValue}">
                        <a href="${link || '#'}" class="cf-df-name" target="_blank">${name}</a>
                        <div class="cf-df-description">${description || ''}</div>
                    </div>
                `;

                $('section[data-section-id="6653647cd826b0589a746654"] .content .collection-content-wrapper').prepend(newDiv);
            }
        });
    }

    const observer = new MutationObserver(function(mutationsList, observer) {
        let relevantChangeDetected = false;

        for (let mutation of mutationsList) {
            if (mutation.type === 'childList' || mutation.type === 'attributes') {
                if ($(mutation.target).find('.archive-group-name-link.active').length > 0 || $(mutation.target).hasClass('archive-group-name-link')) {
                    relevantChangeDetected = true;
                    break;
                }
            }
        }

        if (relevantChangeDetected) {
            clearTimeout(window.tagDescriptionUpdateTimeout);
            window.tagDescriptionUpdateTimeout = setTimeout(insertTagDescriptions, 100);
        }
    });

    observer.observe(document.body, { childList: true, subtree: true, attributes: true });

    insertTagDescriptions();
});
