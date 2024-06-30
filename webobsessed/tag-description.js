$(document).ready(function() {

    const tagDescriptions = {
        "custom": {
            "name": "Example Name 1",
            "description": "This is the description for example value 1.",
            "link": "https://example.com/1"
        },
        "kirby": {
            "name": "Example Name 2",
            "description": "This is the description for example value 2.",
            "link": "https://example.com/2"
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
                        <a href="${link || '#'}" class="cf-df-name">${name}</a>
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
