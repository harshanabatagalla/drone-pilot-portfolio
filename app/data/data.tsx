import { features } from "process";

const social_media_links = {
    facebook : "https://www.facebook.com/sankalpabandara01",
    instagram : "https://www.instagram.com/sankalpa_bandara_/",
    tiktok : "https://www.tiktok.com/@sankalpa_bandara",
    whatsapp: ""
}

const aboutMe = {
    name : "Sankalpa Bandara",
    background : "With over 4 years of experience in drone piloting, I’m a licensed and certified operator offering tailored solutions for aerial photography, mapping, and inspections. My passion for capturing the world from above drives every project I take on, ensuring professional and stunning results.",
    card : [
        {
            sort: 1,
            title : "Experience",
            description : "With over 4 years of experience in drone piloting, I’m a licensed and certified operator offering tailored solutions for aerial photography, mapping, and inspections.",
            svg: "drone_remote.svg"
        },
        {
            sort: 2,
            title : "4K Quality",
            description : "I use the latest drone technology and software to provide high-quality aerial images and videos that meet your project’s needs.",
            svg: "icon_4k.svg"
        },
        {
            sort: 3,
            title : "Customization",
            description : "I work closely with you to understand your project requirements and deliver customized solutions that exceed your expectations.",
            svg: "drone_icon.svg"
        }
    ]
}

const eqipments = [
    {
        sort : 1,
        name : "Dji Air 3",
        id: "dji_air_3",
        image : "/assets/images/equipments/DJIAir3.png",
        description : "The DJI Air 3 is a compact and powerful drone that captures stunning aerial images and videos with ease. It features a 4K camera, intelligent flight modes, and a long battery life for extended flight time.",
        features : [
            {
                sort: 1,
                name : "Dual Camera System",
                icon : "/assets/svgs/camera.svg",
            },
            {
                sort: 2,
                name : "Omnidirectional Obstacle Sensing",
                icon : "/assets/svgs/obstacle.svg",
            },
            {
                sort: 3,
                name : "46-Minute Max Flight Time",
                icon : "/assets/svgs/time.svg",
            },
            {
                sort: 4,
                name : "Intelligent Shooting Modes",
                icon : "/assets/svgs/intelligent.svg",
            },
            {
                sort: 5,
                name : "O4 HD Video Transmission (20km)",
                icon : "/assets/svgs/transmission.svg",
            },
            {
                sort: 6,
                name : "4K HDR Video",
                icon : "/assets/svgs/fullhd.svg",
            }
        ]
    },
    {
        sort : 2,
        name : "Dji Mini 2",
        id: "dji_mini_2",
        image : "/assets/images/equipments/DJIMini2.png",
        description : "The DJI Air 3 is a compact and powerful drone that captures stunning aerial images and videos with ease. It features a 4K camera, intelligent flight modes, and a long battery life for extended flight time.",
        features : [
            {
                sort: 1,
                name : "Dual Camera System",
                icon : "/assets/svgs/camera.svg",
            },
            {
                sort: 2,
                name : "Omnidirectional Obstacle Sensing",
                icon : "/assets/svgs/obstacle.svg",
            },
            {
                sort: 3,
                name : "46-Minute Max Flight Time",
                icon : "/assets/svgs/time.svg",
            },
            {
                sort: 4,
                name : "Intelligent Shooting Modes",
                icon : "/assets/svgs/intelligent.svg",
            },
            {
                sort: 5,
                name : "O4 HD Video Transmission (20km)",
                icon : "/assets/svgs/transmission.svg",
            },
            {
                sort: 6,
                name : "4K HDR Video",
                icon : "/assets/svgs/fullhd.svg",
            }
        ]
    },
    {
        sort : 3,
        name : "Insta 360",
        id: "insta360",
        image : "/assets/images/equipments/insta360.webp",
        description : "The DJI Air 3 is a compact and powerful drone that captures stunning aerial images and videos with ease. It features a 4K camera, intelligent flight modes, and a long battery life for extended flight time.",
        features : [
            {
                sort: 1,
                name : "Dual Camera System",
                icon : "/assets/svgs/camera.svg",
            },
            {
                sort: 2,
                name : "Omnidirectional Obstacle Sensing",
                icon : "/assets/svgs/obstacle.svg",
            },
            {
                sort: 3,
                name : "46-Minute Max Flight Time",
                icon : "/assets/svgs/time.svg",
            },
            {
                sort: 4,
                name : "Intelligent Shooting Modes",
                icon : "/assets/svgs/intelligent.svg",
            },
            {
                sort: 5,
                name : "O4 HD Video Transmission (20km)",
                icon : "/assets/svgs/transmission.svg",
            },
            {
                sort: 6,
                name : "4K HDR Video",
                icon : "/assets/svgs/fullhd.svg",
            }
        ]
    },

];
export  {social_media_links, aboutMe, eqipments}  ;