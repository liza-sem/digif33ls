$(document).ready(function() {

    const tagDescriptions = {
    "kirby": {
        "name": "Kirby",
        "description": "Kirby is a file-based CMS that provides developers with full flexibility and control over the design and functionality of their websites, leveraging a simple and intuitive interface.",
        "link": "https://getkirby.com"
    },
    "squarespace": {
        "name": "Squarespace",
        "description": "Squarespace is a popular website builder known for its elegant templates and all-in-one platform, making it easy to create professional and responsive websites without coding knowledge.",
        "link": "https://squarespace.com"
    },
    "readymag": {
        "name": "ReadyMag",
        "description": "ReadyMag is a design tool for creating visually compelling web projects such as websites, portfolios, and presentations, emphasizing creativity and ease of use.",
        "link": "https://my.readymag.com/inv/u3558437206"
    },
    "shopify": {
        "name": "Shopify",
        "description": "Shopify is a comprehensive e-commerce platform that allows users to set up, manage, and grow their online stores with a range of customizable templates and tools.",
        "link": "https://shopify.com"
    },
    "wix": {
        "name": "Wix",
        "description": "Wix is a versatile website builder that offers drag-and-drop functionality, allowing users to create stunning, mobile-optimized websites with minimal technical skills.",
        "link": "https://wix.com"
    },
    "webflow": {
        "name": "Webflow",
        "description": "Webflow is a powerful web design tool and CMS that enables designers to build fully responsive websites visually, without writing code, and to manage content with ease.",
        "link": "https://webflow.com"
    },
    "netlify": {
        "name": "Netlify",
        "description": "Netlify is a cloud-based platform for deploying and managing modern web projects, offering features like continuous deployment, custom domains, and serverless functions.",
        "link": "https://netlify.com"
    },
    "nextjs": {
        "name": "Next.js",
        "description": "Next.js is a React-based framework that allows developers to build server-side rendered and statically generated websites and applications with ease.",
        "link": "https://nextjs.org"
    },
    "nodejs": {
        "name": "Node.js",
        "description": "Node.js is a JavaScript runtime that enables developers to build scalable and high-performance network applications by executing JavaScript code on the server side.",
        "link": "https://nodejs.org"
    },
    "github-pages": {
        "name": "GitHub Pages",
        "description": "GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files directly from a GitHub repository, optionally runs the files through a build process, and publishes a website.",
        "link": "https://pages.github.com"
    },
    "wordpress": {
        "name": "WordPress",
        "description": "WordPress is a widely-used open-source CMS that allows users to create, manage, and customize websites and blogs with a vast library of themes and plugins.",
        "link": "https://wordpress.org"
    },
    "vercel": {
        "name": "Vercel",
        "description": "Vercel is a cloud platform for static sites and serverless functions that enables developers to deploy and scale modern web applications with ease, focusing on high performance and speed.",
        "link": "https://vercel.com"
    },
    "nuxtjs": {
        "name": "Nuxt.js",
        "description": "Nuxt.js is a powerful framework built on top of Vue.js that simplifies the development of universal, server-side rendered, and static websites with an intuitive, modular architecture.",
        "link": "https://nuxtjs.org"
    },
    "vuejs": {
        "name": "Vue.js",
        "description": "Vue.js is a progressive JavaScript framework for building user interfaces and single-page applications, offering a flexible and easy-to-integrate approach to front-end development.",
        "link": "https://vuejs.org"
    },
    "react": {
        "name": "React",
        "description": "React is a popular JavaScript library for building dynamic user interfaces, primarily for single-page applications, allowing developers to create reusable UI components.",
        "link": "https://reactjs.org"
    },
    "gsap": {
        "name": "GSAP",
        "description": "GSAP (GreenSock Animation Platform) is a robust JavaScript library for creating high-performance animations and interactive elements on the web, offering a range of tools and plugins.",
        "link": "https://greensock.com/gsap"
    },
    "sanity": {
        "name": "Sanity",
        "description": "Sanity is a headless CMS that provides real-time collaborative editing, structured content, and a flexible API, enabling developers to create and manage content-rich digital experiences.",
        "link": "https://sanity.io"
    },
    "threejs": {
        "name": "Three.js",
        "description": "Three.js is a powerful JavaScript library used to create and display 3D graphics in a web browser, making it easier for developers to build immersive and interactive visual experiences.",
        "link": "https://threejs.org"
    },
    "tilda": {
        "name": "Tilda",
        "description": "Tilda is a user-friendly website builder focused on creating visually appealing and content-rich websites, featuring a block-based design system for intuitive customization.",
        "link": "https://tilda.cc"
    },
    "cargo": {
        "name": "Cargo",
        "description": "Cargo is a web publishing platform that offers a range of templates and customization options, ideal for creating visually rich and creative portfolios, blogs, and personal websites.",
        "link": "https://cargo.site"
    },
    "google-sheets": {
        "name": "Google Sheets",
        "description": "Google Sheets is a cloud-based spreadsheet application that allows users to create, edit, and collaborate on spreadsheets in real-time, with powerful data analysis and visualization tools.",
        "link": "https://www.google.com/sheets/about/"
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

                $('.content .blog-basic-grid').prepend(newDiv);
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
