var NavigationBar = {
    "items": [
        {
            "id": "home",
            "link": "index.html",
            "text": "Home"
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
            "text": "Get Your Laptop"
        }
    ]
};

var Catalog = {
    "services": [
        {
            "name": "Basic Lubing",
            "description": "Lubing switches",
            "price": "$1 for 10 switches + price of lube and film"
        },
        {
            "name": "Basic service",
            "description": "Buy the parts and assemble a keyboard customized for you, includes basic upgrade;",
            "price": "$10-$15"
        },
        {
            "name": "Premium service",
            "description": "Buy the parts and assemble a keyboard customized for you, but includes premium upgrade;",
            "price": "$15-$25"
        },
        {
            "name": "Basic Upgrade",
            "description": "Take an existing keyboard you have, and upgrade it with lube, foam, etc;",
            "price": "$5"
        },
        {
            "name": "Premium Upgrade",
            "description": "Take an existing keyboard you have, and upgrade it, includes lubing switches, desouldering, testing, etc;",
            "price": "$10-$15"
        },
        {
            "name": "Cleaning service",
            "description": "Basic cleaning/maintenace",
            "price": "$5 per cleaning <b>OR</b> monthly subscription cleaning $10 for 4 months"
        },
    ],
    "materials": [
        {
            "name": "The base",
            "description": ` is the bottom of the keybard, and is what holds all the keys in
            place and determines the sizing of the keyboard. They can come in a variety of different colors, sizes, and
            materials.`,
        },
        {
            "name": "The PCB",
            "description": ` is the electronics inside of the keyboard.`
        },
        {
            "name": "The plate",
            "description": ` is the part which mounts the switches and plays a big role in the
            pitch of the board, and how stiff or soft it is.`
        },
        {
            "name": "The switches",
            "description": ` determine the spring feel such as the bump, smoothness, and
            weight of the springs.`
        },
        {
            "name": "The stabilizers",
            "description": ` go on all keys bigger than two units wide. The keeyp the
            bigger keys, such as the space bar, or the shift key from wobbling.`
        },
        {
            "name": "The keycaps",
            "description": ` are the phyisical keys you press on top of the switches. They
            are responsible for the color and aesthetics as well as altering the sound of the keybaord.`
        },
        {
            "name": "Lube",
            "description": ` is used to makes switches smoother, and reduce rattle in the
            stabelizers. A regular keyboard typically uses 2-3 different kinds of lube.`
        },
        {
            "name": "Foam",
            "description": ` is used to dampen the sound of the keyboard, and reduces hollow sound
            from keypress.`
        },
        {
            "name": "Films",
            "description": ` are small plastic foam squares that are wedged between the top and
            bottom of a switch to reduce wobble and alter sound in the keys.`
        }
    ],
    "colors": [
        {
            "name": `Night`,
            "description": `blue and black`
        },
        {
            "name": `Sunset`,
            "description": `sky blue and orange`
        },
        {
            "name": `Sunrise`,
            "description": `blue and red`
        },
        {
            "name": `Ice`,
            "description": `white`
        },
        {
            "name": `Fire`,
            "description": `red and orange`
        },
        {
            "name": `Rose`,
            "description": `rose gold and copper`
        },
        {
            "name": `Evergreen`,
            "description": `different shades of green`
        },
        {
            "name": `Jungle`,
            "description": `teal and white`
        },
        {
            "name": `Ocean`,
            "description": `sky blue`
        },
        {
            "name": `Ash`,
            "description": `dark grey and black`
        },
        {
            "name": `Spring`,
            "description": `yellow and light green`
        }
    ],
    "laptops": [
        {
            "name": `Standard`,
            "description": `All our most important features`,
            "price": `$1`
        },
        {
            "name": `Premium`,
            "description": `Waterproof outer cover, and has more features`,
            "price": `$3`
        },
        {
            "name": `Deluxe`,
            "description": `Higher quality paper, much more exquisite and fancy`,
            "price": `$3`
        },
        {
            "name": `Ultimate`,
            "description": `Dulux and premium combined`,
            "price": `$5`
        },
        {
            "name": `Upgrade Combo`,
            "description": `A waterproof pouch for your laptop, and a replacement wallpaper of your choice`,
            "price": `$1`
        }
    ]
}

function renderNavBar(NavId, active) {
    var menu = document.getElementById(NavId);

    var html = '<ul class="NavigationBar">';

    for (let i = 0; i < NavigationBar.items.length; i++) {
        let item = NavigationBar.items[i];
        html += `<li class="${active == item.id ? 'active' : 'NavLi'}"><div class="dropdown"><a class="NavA" href="${item.link}">${item.text}</a>`;
        if (!!item.dropdown) {
            html += `<div class="dropdown-content"><a href="${item.dropdown.link}" target="_blank">${item.dropdown.text}</a></div>`
        }
        html += '</div></li>';
    }

    html += '</ul>';

    menu.innerHTML = html;
}

function renderServiceList(tableID) {
    var table = document.getElementById(tableID);
    var html = `<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Service</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>`;

    for (let i = 0; i < Catalog.services.length; i++) {
        let item = Catalog.services[i];
        html += `<tr><td>${item.name}</td><td>${item.description}</td><td>${item.price}</td></tr>`;
    }

    html += `</tbody>
</table>
<p id="TableNote"><br>*Please note that these prices are <b>only</b> for the build; materials are payed for
seperately.<br></p>`;

    table.innerHTML = html;
}

function renderMaterialsList(listID) {
    var materialsList = document.getElementById(listID);

    var html = `<ul>`;

    for (let i = 0; i < Catalog.materials.length; i++) {
        let item = Catalog.materials[i];
        html += `<li><span class="fancy-words">${item.name}</span>${item.description}</li>`;
    }

    html += `</ul>`;
    materialsList.innerHTML = html;
}

function renderColorOpts(colorListID) {
    var materialsList = document.getElementById(colorListID);

    var html = `<ul>`;

    for (let i = 0; i < Catalog.colors.length; i++) {
        let item = Catalog.colors[i];
        html += `<li>${item.name} - ${item.description}</li>`;
    }

    html += `</ul>`;
    materialsList.innerHTML = html;
}
function renderServiceList(laptopsTableId) {
    var table = document.getElementById(laptopsTableId);
    var html = `<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Service</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>`;

    for (let i = 0; i < Catalog.laptops.length; i++) {
        let item = Catalog.laptops[i];
        html += `<tr><td>${item.name}</td><td>${item.description}</td><td>${item.price}</td></tr>`;
    }

    table.innerHTML = html;
}