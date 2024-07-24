//

const lat = 43.628625;
const long = -79.422964;
const scale = 16;

// Generates and loads map section
var map = L.map('map').setView([lat,long], scale);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Loads in points of interest markers (poi) from data.js file
for (let i=0; i<data.length; i++) {
    let info = generate_info(data[i]);
    let popup = L.popup({maxHeight:200, maxWidth:400}).setContent(info);
    if (typeof data[i].coordinates[0] == 'number') {
        L.circle(data[i].coordinates, data[i].meta).addTo(map).bindPopup(popup);
    } else {
        L.polygon(data[i].coordinates, data[i].meta).addTo(map).bindPopup(popup);
    }
}


function generate_info(data){
    let title = "<h2 class='m-title'>" + data.name + "</h2>";
    let desc = "<p class='m-info'>" + data.description + "</p>";
    
    let dock_text = "<h4>Dock Properties</h4><ul>";

    dock = data.docks;
    if (dock.kayak) {
        dock_text += "<li>Kayak</li>";
    }
    if (dock.access) {
        dock_text += "<li>Wheelchair Accessible</li>";
    }
    if (dock.ball) {
        dock_text += "<li>Mersivity Ball</li>";
    }

    dock_text += "</ul>";

    // Will make this more good looking with svg images later, 
    // this is just for the sake of building things until I design,
    // a nicer looking interface

    let fac_text = "<h4> Facilities </h4><ul>";

    if (data.facilities.bathrooms == true) {
        fac_text += "<li>Bathrooms Available</li>";
    } else {
    };

    if (data.facilities.parking == true) {
        fac_text += "<li>Parking Available</li>";
    } else {    
    };
    fac_text += "</ul>";

    let ac = "<div><b>Accessibility: </b>" + data.scores.access + "/5</div>";
    let traf = "<div><b>Water Traffic: </b>" + data.scores.traffic + "/5</div>";

    let ac_vis = "<div><b>Accessibility: </b>" + add_svg("access", data.scores.access, 5, ["#007FFF", "#D3D3D3"]) + "</div>"; 
    let traf_vis = "<div><b>Water Traffic: </b>" + add_svg("traffic", data.scores.traffic, 5, ["#F28C28", "#D3D3D3"]) + "</div>";
    
    console.log(ac_vis);

    let image_gallery = '<div class = "image-gallery"><b>Photos: </b>';

    for (let i=0; i<data.images.length; i++) {
        console.log(data.images[i]);
        image_gallery += "<img class='image-gallery-item' src=";
        image_gallery += "'./poi/poi" + data.id + "/" + data.images[i] + "'>";
    }

   /*
    let image_gallery = '<div class = "image-grid"><b>Photos: </b>';
    for (let i=0; i<data.images.length; i++) {
        console.log(data.images[i]);
        let img_card = "<div class='" + data.imagetypes[i] + "'style='background-image:url(poi/poi" + data.id + "/" + data.images[i] + ")'></div>";
        image_gallery += img_card;
    }
    */


    image_gallery += '</div>';

    console.log(image_gallery);

    let info = title + desc + ac_vis + traf_vis + dock_text + fac_text + image_gallery;
    info.id = data.id;

    return info;
}

function add_svg(svg, score, total, color_map) {
    let icons = "<div class='icon-grid'>";
    let color = "";

    console.log("COLOR MAP");
    console.log(color_map);

    for (let i=0; i<total; i++) {
        if (i < score){
            color = color_map[0];
        } else {
            color = color_map[1];
        }

        console.log("COLOR", color);

        if (svg == "access") {
            icons += '<svg class="icon-grid-item" fill="'+ color +'" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>wheelchair</title><path d="M22.621 23.668c-0.172-0.096-0.378-0.152-0.597-0.152-0.471 0-0.882 0.262-1.093 0.648l-0.003 0.006c-1.512 2.749-4.389 4.581-7.694 4.581-4.833 0-8.751-3.918-8.751-8.751 0-2.853 1.366-5.388 3.479-6.985l0.022-0.016c0.304-0.23 0.499-0.592 0.499-0.999 0-0.69-0.56-1.25-1.25-1.25-0.283 0-0.545 0.094-0.754 0.253l0.003-0.002c-2.744 2.074-4.499 5.332-4.499 9 0 6.213 5.037 11.25 11.25 11.25 4.248 0 7.947-2.355 9.861-5.831l0.029-0.058c0.096-0.172 0.152-0.378 0.152-0.596 0-0.471-0.262-0.882-0.647-1.094l-0.006-0.003zM31.213 24.697c-0.139-0.549-0.628-0.948-1.211-0.948-0.108 0-0.213 0.014-0.313 0.040l0.009-0.002-2.885 0.721-2.701-7.912c-0.174-0.496-0.638-0.846-1.184-0.846h-8.855l-0.385-2.5h4.312c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0h-4.697l-0.603-3.92c0.967-0.59 1.604-1.639 1.604-2.837 0-1.828-1.482-3.311-3.311-3.311s-3.311 1.482-3.311 3.311c0 1.558 1.076 2.864 2.525 3.217l0.023 0.005 1.534 9.975c0.095 0.604 0.612 1.060 1.235 1.060 0 0 0 0 0 0h9.033l2.783 8.154c0.174 0.496 0.638 0.846 1.184 0.846 0.107 0 0.212-0.014 0.311-0.039l-0.009 0.002 4-1c0.548-0.14 0.947-0.63 0.947-1.213 0-0.108-0.014-0.212-0.039-0.312l0.002 0.009z"></path></svg>'; 
        } else if (svg == "traffic") {
            icons += '<svg class="icon-grid-item" viewBox="0 0 80 80" fill="'+ color + '" xmlns="http://www.w3.org/2000/svg"><path d="M39.9999 68L35.7793 66.5481C27.3731 63.6563 20.33 57.7638 15.9999 50M39.9999 68V26.9282M39.9999 68L44.2205 66.5481C52.6266 63.6563 59.6698 57.7638 63.9999 50" stroke="#C2CCDE" stroke-linecap="round" stroke-linejoin="round" /><path d="M16 42L21 50H11L16 42Z" stroke="#C2CCDE" stroke-linecap="round" stroke-linejoin="round" /><path d="M64 42L69 50H59L64 42Z" stroke="#C2CCDE" stroke-linecap="round" stroke-linejoin="round" /><path d="M36.5359 14C38.6795 12.7624 41.3205 12.7624 43.4641 14C45.6077 15.2376 46.9282 17.5248 46.9282 20C46.9282 22.4752 45.6077 24.7624 43.4641 26C41.3205 27.2376 38.6795 27.2376 36.5359 26C34.3923 24.7624 33.0718 22.4752 33.0718 20C33.0718 17.5248 34.3923 15.2376 36.5359 14Z" stroke="#C2CCDE" stroke-linecap="round" stroke-linejoin="round" /><path d="M32 36H48" stroke="#C2CCDE" stroke-linecap="round" stroke-linejoin="round" /></svg>'
        }
    }

    icons += "</div>";
    return icons;
}

function generate_modal() {
    
}
