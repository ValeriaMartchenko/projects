var mainMenu = {
    "items": [
        {
            "id": "home",
            "link": "index.html",
            "text": "Home"
        },
        {
            "id": "laptops",
            "link": "PaperLaptops.html",
            "text": "Paper Laptops"
        },
        {
            "id": "blog",
            "link": "Blog.html",
            "text": "Blog"
        },
        {
            "id": "contact",
            "link": "mailto:s-olaksberg@lwsd.org",
            "text": "Contact Us",
            "dropdown": {
                "link": "mailto:s-olaksberg@lwsd.org",
                "text": "s-olaksberg@lwsd.org"
            }
        },
        {
            "id": "order",
            "link": "Form.html",
            "text": "Get Your Keyboard"
        },
    ]
};

function renderMenu(menuId, active) {
    var menu = document.getElementById(menuId);

    var html = '<ul class="NavigationBar">';

    for (let i = 0; i < mainMenu.items.length; i++) {
        let item = mainMenu.items[i];
        html += `<li class="${active == item.id ? 'active' : 'NavLi'}"><div class="dropdown"><a class="NavA" href="${item.link}">${item.text}</a>`;
        if (!!item.dropdown) {
            html += `<div class="dropdown-content"><a href="${item.dropdown.link}" target="_blank">${item.dropdown.text}</a></div>`
        }
        html += '</div></li>';
    }

    html += '</ul>';

    menu.innerHTML = html;
}
