const data = [
    {id : 0,
    name : "Michael Hough Beach",
    nickname:"Michael Hough Beach",
    type : "beach",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    coordinates : [43.627464,-79.420820],
    meta : {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.2,
        radius: 25
    },
    facilities : {
        bathroom : false,
        parking : true,
        },
    docks : {
        access : true,
        kayak : true,
        ball : true
        },
    scores : {
        access : 5,
        traffic : 5, 
    },
    images : ["beach.png",],
    imagetypes : ['card'],
    },
    {id : 1,
    name : "Bike Rack & Public Dock",
    nickname: "Public Dock",
    type : "dock",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    coordinates : [43.629748,-79.425775],
    meta : {
        color: 'blue',
        fillColor: '#30f',
        fillOpacity: 0.2,
        radius: 25
    },
    facilities : {
        bathroom : false,
        parking : true,
        },
    docks : {
        access : true,
        kayak : true,
        ball : true
        },
    scores : {
        access : 3,
        traffic : 5, 
    },
    images : ["dock.png"],
    imagetypes : ['card'],
    },
    {id : 2,
    name : "Breakwall",
    nickname:"Breakwall",
    type : "other",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    coordinates : [
        [43.628968,-79.422763],
        [43.628757,-79.425094],
        [43.628909,-79.427263],
        [43.629007,-79.427230],
        [43.628898,-79.425154],
        [43.629089,-79.422852]],
    meta : {
        fillOpacity: 0.2,
    },
    facilities : {
        bathroom : false,
        parking : true,
        },
    docks : {
        access : true,
        kayak : true,
        ball : true
        },
    scores : {
        access : 5,
        traffic : 3, 
    },
    images : ["cap_20220828_162235_00.00.05_01c_patrick_jumping_off_breakwall_highpoint.jpg",
        "20240127_155216.jpg", 
        "20230904_144731.jpg",],
    imagetypes : ['card card-very-tall', 'card card-very-wide', 'card'],
    },
    {id : 3,
    name : "Foot Bridge",
    nickname:"Foot Bridge",
    type : "other",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    coordinates :   [
        [43.630265,-79.423294],
        [43.630025,-79.423246],
        [43.630040,-79.423165],
        [43.630257,-79.423206]],
    meta : {
        color: 'orange',
        fillColor: '#f90',
        fillOpacity: 0.2,
    }, 
    facilities : {
        bathroom : false,
        parking : true,
        },
    docks : {
        access : true,
        kayak : true,
        ball : true
        },
    scores : {
        access : 5,
        traffic : 5, 
    },
    images : [],
    imagetypes : []
    },
    {id : 4,
    name : "Swim Dock",
    nickname: "Swim Dock",
    type : "dock",
    description : "Dock for swimming & Kayak launch",
    coordinates : [43.631076, -79.409648],
    meta : {
        color: 'blue',
        fillColor: '#30f',
        fillOpacity: 0.2,
        radius: 25
    },
    facilities : {
        bathroom : true,
        parking : true,
        },
    docks : {
        access : true,
        kayak : true,
        ball : true
        },
    scores : {
        access : 5,
        traffic : 4, 
    },
    images : [],
    imagetypes : [],
    },
    {id : 5,
        name : "Firepit Swim Area",
        nickname:"Firepit",
        type : "beach",
        description : "",
        coordinates : [43.629352,-79.410150],
        meta : {
            color: 'red',
            fillColor: '#AA0000',
            fillOpacity: 0.2,
            radius: 25
        },
        facilities : {
            bathroom : false,
            parking : false,
            },
        docks : {
            access : false,
            kayak : true,
            ball : true
            },
        scores : {
            access : 2,
            traffic : 2, 
        },
        images : [],
        imagetypes : [],
        },
        {id : 6,
        name : "Flatrock Kayak Launch",
        nickname: "Flatrock",
        type : "dock",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        coordinates :   [43.627390,-79.411997],
        meta : {
            color: 'blue',
            fillColor: '#0000AA',
            fillOpacity: 0.2,
            radius: 25
        }, 
        facilities : {
            bathroom : false,
            parking : false,
            },
        docks : {
            access : false,
            kayak : true,
            ball : false,
            },
        scores : {
            access : 2,
            traffic : 2, 
        },
        images : [],
        imagetypes : []
        },
]