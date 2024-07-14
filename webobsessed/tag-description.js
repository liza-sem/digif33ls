$(document).ready(function() {
    const tagDescriptions = {
        //i want to insert the string here
        "rhymes": {
    "name": "Rhymes",
    "description": "By Jakub Samek",
    "link": "https://maxitype.com/typeface/rhymes/?ref=digif33ls.com"
},
"san-francisco": {
    "name": "San Francisco",
    "description": "By Apple",
    "link": "https://developer.apple.com/fonts/?ref=digif33ls.com"
},
"astro": {
    "name": "Astro",
    "description": "Astro is a JavaScript web framework optimized for building fast, content-driven websites by rendering components on the server and delivering lightweight HTML to the browser. ",
    "link": "https://astro.build/?ref=digif33ls.com"
},
"svelte": {
    "name": "Svelte",
    "description": "Svelte is a modern web framework that compiles your code into highly efficient vanilla JavaScript at build time.",
    "link": "https://svelte.dev/?ref=digif33ls.com"
},
        "wix": {
            "name": "Wix",
            "description": "Wix is a versatile website builder that offers drag-and-drop functionality, allowing users to create stunning, mobile-optimized websites with minimal technical skills.",
            "link": "https://wix.com?ref=digif33ls.com"
        },
        "kirby": {
            "name": "Kirby",
            "description": "Kirby CMS is a flexible, file-based content management system that enables developers to create custom websites with a focus on simplicity and user-friendly content management.",
            "link": "https://getkirby.com/?ref=digif33ls.com"
        },
        "gatsby": {
            "name": "Gatsby",
            "description": "Gatsby is a modern website framework that builds performance-optimized websites with React.",
            "link": "https://www.gatsbyjs.com/?ref=digif33ls.com"
        },
        "squarespace": {
            "name": "Squarespace",
            "description": "Squarespace is a popular website builder known for its elegant templates and all-in-one platform, making it easy to create professional and responsive websites without coding knowledge.",
            "link": "https://squarespace.com?ref=digif33ls.com"
        },
        "readymag": {
            "name": "Readymag",
            "description": "ReadyMag is a design tool for creating visually compelling web projects such as websites, portfolios, and presentations, emphasizing creativity and ease of use.",
            "link": "https://my.readymag.com/inv/u3558437206"
        },
        "shopify": {
            "name": "Shopify",
            "description": "Shopify is a comprehensive e-commerce platform that allows users to set up, manage, and grow their online stores with a range of customizable templates and tools.",
            "link": "https://shopify.com?ref=digif33ls.com"
        },

        "webflow": {
            "name": "Webflow",
            "description": "Webflow is a powerful web design tool and CMS that enables designers to build fully responsive websites visually, without writing code, and to manage content with ease.",
            "link": "https://webflow.com?ref=digif33ls.com"
        },
        "netlify": {
            "name": "Netlify",
            "description": "Netlify is a cloud-based platform for deploying and managing modern web projects, offering features like continuous deployment, custom domains, and serverless functions.",
            "link": "https://netlify.com?ref=digif33ls.com"
        },
        "next.js": {
            "name": "Next.js",
            "description": "Next.js is a React-based framework that allows developers to build server-side rendered and statically generated websites and applications with ease.",
            "link": "https://nextjs.org?ref=digif33ls.com"
        },
        "nginx": {
            "name": "Nginx",
            "description": "Nginx is a popular web server software known for its high performance and scalability.",
            "link": "https://www.nginx.com/?ref=digif33ls.com"
        },
        "nodejs": {
            "name": "Node.js",
            "description": "Node.js is a JavaScript runtime that enables developers to build scalable and high-performance network applications by executing JavaScript code on the server side.",
            "link": "https://nodejs.org?ref=digif33ls.com"
        },
        "github-pages": {
            "name": "GitHub Pages",
            "description": "GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files directly from a GitHub repository, optionally runs the files through a build process, and publishes a website.",
            "link": "https://pages.github.com?ref=digif33ls.com"
        },
        "wordpress": {
            "name": "WordPress",
            "description": "WordPress is a widely-used open-source CMS that allows users to create, manage, and customize websites and blogs with a vast library of themes and plugins.",
            "link": "https://wordpress.org?ref=digif33ls.com"
        },
        "vercel": {
            "name": "Vercel",
            "description": "Vercel is a cloud platform for static sites and serverless functions that enables developers to deploy and scale modern web applications with ease, focusing on high performance and speed.",
            "link": "https://vercel.com?ref=digif33ls.com"
        },
        "nuxt.js": {
            "name": "Nuxt.js",
            "description": "Nuxt.js is a powerful framework built on top of Vue.js that simplifies the development of universal, server-side rendered, and static websites with an intuitive, modular architecture.",
            "link": "https://nuxtjs.org?ref=digif33ls.com"
        },
        "vue.js": {
            "name": "Vue.js",
            "description": "Vue.js is a progressive JavaScript framework for building user interfaces and single-page applications, offering a flexible and easy-to-integrate approach to front-end development.",
            "link": "https://vuejs.org?ref=digif33ls.com"
        },
        "react": {
            "name": "React",
            "description": "React is a popular JavaScript library for building dynamic user interfaces, primarily for single-page applications, allowing developers to create reusable UI components.",
            "link": "https://reactjs.org?ref=digif33ls.com"
        },
        "gsap": {
            "name": "GSAP",
            "description": "GSAP (GreenSock Animation Platform) is a robust JavaScript library for creating high-performance animations and interactive elements on the web, offering a range of tools and plugins.",
            "link": "https://greensock.com/gsap?ref=digif33ls.com"
        },
        "sanity": {
            "name": "Sanity",
            "description": "Sanity is a headless CMS that provides real-time collaborative editing, structured content, and a flexible API, enabling developers to create and manage content-rich digital experiences.",
            "link": "https://sanity.io?ref=digif33ls.com"
        },
        "three.js": {
            "name": "Three.js",
            "description": "Three.js is a powerful JavaScript library used to create and display 3D graphics in a web browser, making it easier for developers to build immersive and interactive visual experiences.",
            "link": "https://threejs.org?ref=digif33ls.com"
        },
        "tilda": {
            "name": "Tilda",
            "description": "Tilda is a user-friendly website builder focused on creating visually appealing and content-rich websites, featuring a block-based design system for intuitive customization.",
            "link": "https://tilda.cc?ref=digif33ls.com"
        },
        "cargo": {
            "name": "Cargo",
            "description": "Cargo is a web publishing platform that offers a range of templates and customization options, ideal for creating visually rich and creative portfolios, blogs, and personal websites.",
            "link": "https://cargo.site?ref=digif33ls.com"
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
    "link": "https://fonts.google.com/specimen/Karla?ref=digif33ls.com"
},
        "scto-grotesk-a": {
    "name": "Scto Grotesk A",
    "description": "By Schick Toikka",
    "link": "https://www.schick-toikka.com/scto-grotesk-a?ref=digif33ls.com"
},
        "whyte": {
    "name": "Whyte",
    "description": "By Dinamo",
    "link": "https://abcdinamo.com/typefaces/whyte?ref=digif33ls.com"
},
        "everett": {
    "name": "Everett",
    "description": "By Nolan Paparelli",
    "link": "https://www.weltkern.com/shop/detail-typeface/everett?ref=digif33ls.com"
},
        "baikal": {
    "name": "Baikal",
    "description": "By Ian Party",
    "link": "https://newglyph.com/typeface/baikal/?ref=digif33ls.com"
},
        "lyon": {
    "name": "Lyon",
    "description": "By Kai Bernau",
    "link": "https://commercialtype.com/catalog/lyon?ref=digif33ls.com"
},
         "necto":{
            "name":"Necto",
            "description":"By Marco Condello",
            "link":"https://www.collletttivo.it/typefaces/necto-mono?ref=digif33ls.com"
        },        
         "suisse":{
            "name":"Suisse",
            "description":"By Swiss Typefaces",
            "link":"https://www.swisstypefaces.com/fonts/suisse/#font?ref=digif33ls.com"
        },        
         "next-mono":{
            "name":"Next Mono",
            "description":"By Ludovic Balland",
            "link":"https://optimo.ch/typefaces/next?ref=digif33ls.com"
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
            "link":"https://fonts.google.com/specimen/Syne+Mono?ref=digif33ls.com"
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
            "link":"https://velvetyne.fr/fonts/compagnon/?ref=digif33ls.com"
        },
        "times-new-arial":{
            "name":"Times New Arial",
            "description":"By Liebermann Kiepe Reddemann",
            "link":"https://timesnewarial.liebermannkiepereddemann.de/?ref=digif33ls.com"
        },        
        "vt323":{
            "name":"VT323",
            "description":"By Peter Hull <br> Available on Squarespace",
            "link":"https://fonts.google.com/specimen/VT323?ref=digif33ls.com"
        },
        "bureau-grot":{
            "name":"Bureau Grot",
            "description":"By Font Bureau",
            "link":"https://www.myfonts.com/collections/bureau-grot-font-font-bureau"
        },
        "caslon-ionic":{
            "name":"Caslon Ionic",
            "description":"By Paul Barnes, Greg Gazdowicz",
            "link":"https://commercialtype.com/catalog/caslon_ionic?ref=digif33ls.com"
        },
        "dotgothic16":{
            "name":"DotGothic16",
            "description":"By Fontworks Inc. <br> Available on Squarespace",
            "link":"https://fonts.google.com/specimen/DotGothic16?ref=digif33ls.com"
        },
        "antique":{
            "name":"Antique",
            "description":"By Fran?ois Rappo",
            "link":"https://optimo.ch/typefaces/antique_legacy?ref=digif33ls.com"
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
            "link":"https://abcdinamo.com/typefaces/monument-grotesk?ref=digif33ls.com"
        },
        "chikarego2":{
            "name":"ChiKareGo2",
            "description":"By Giles Booth",
            "link":"https://www.pentacom.jp/pentacom/bitfontmaker2/gallery/?id=3780?ref=digif33ls.com"
        },
        "pixel-arial-11":{
            "name":"Pixel Arial 11",
            "description":"By Max",
            "link":"https://www.dafont.com/pixel-arial-11.font?ref=digif33ls.com"
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
