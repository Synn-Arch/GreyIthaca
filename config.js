var config = {
    style:  'mapbox://styles/synngatech/cm2tit89i00ix01qi8cq205c3',
    accessToken: 'pk.eyJ1Ijoic3lubmdhdGVjaCIsImEiOiJjbTF4dGF1cTkwdnZ1MmtxMWRwNDgwazVpIn0.aoTqmmjvf-wJDx-0zbBq5A',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: false,
    use3dTerrain: false,
    theme: 'light',
    introtitle: '2024 Fall Community Dynamics and Engagement \n Neighborhood Case Study \n Georgia Institute of Technology',
    title: 'Grey Ithaca Downtown',
    subtitle: "History of Ithaca Downtown \n and Problems.",
    author: "October 2024 \n SungHo Synn",
    byline: 'Introduction',
    para1: 'The Downtown area of Ithaca, located at the southern tip of Cayuga Lake in Upstate New York, has evolved from a modest commercial hub in the early 1800s to a significant center of economic and cultural activity. Since Ithaca became the county seat of Tompkins County in 1817, its growth has been closely tied to key institutions, notably Cornell University, established in 1868. Over the years, Downtown Ithaca has been a major source of tax revenue and commercial services. However, shifts in transportation and industrial developments in the mid-20th century sparked a migration away from the city, leading to a decline that the city sought to address through revitalization initiatives, including the construction of the pedestrian-only Ithaca Commons in 1974 and its redesign in 2015.',
    para2: 'Today, Downtown Ithaca faces contemporary challenges and opportunities, such as the need for urban revitalization and improvements in public safety. This study investigates the perspectives of various stakeholders—city officials, Cornell University, local merchants, and students—on these pressing issues. By examining their views on economic diversification, public safety concerns, and community engagement, this report aims to shed light on the potential pathways for Ithaca’s future growth and development.',
    footer: '',
    
    chapters: [
        {
            id: '1st-chapter',
            alignment: 'center',
            hidden: false,
            image: 'https://github.com/Synn-Arch/GreyIthaca/blob/main/images/ChaptersTitle1.jpg?raw=true',
            location: {
                center: [-76.4967, 42.43962],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("demographic_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
                document.getElementById("walking_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'tompkins', opacity: 0},
                {layer: 'newyork', opacity: 0},
                {layer: 'demographic', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},       
                {layer: 'demographic', opacity: 0},
            ],     
        },
        {
            id: '2nd-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Where is Ithaca?',
            image: 'https://github.com/Synn-Arch/GreyIthaca/blob/main/images/0.UpstateNewyork.jpg?raw=true',
            description: 'The City of Ithaca, where downtown Ithaca is located, originated as a small commercial hub at the southern tip of Cayuga Lake in Upstate New York.',
            location: {
                center: [-79.4967, 42.43962],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("demographic_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
                document.getElementById("walking_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},
                {layer: 'demographic', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},
                {layer: 'demographic', opacity: 0},
            ],      
        },
        {
            id: '3rd-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Tompkins County',
            image: 'https://github.com/Synn-Arch/GreyIthaca/blob/main/images/2.TompkinsCounty.jpg?raw=true',
            description: 'In 1817, when Tompkins County was formed, Ithaca became the county seat, establishing itself as the administrative center of Tompkins County. Later, Cornell University was founded here in 1868, and as the student-centered population grew, commerce further developed. In 1888, Ithaca was elevated to city status.',
            location: {
                center: [-76.75602, 42.45068],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("demographic_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
                document.getElementById("walking_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},
                {layer: 'demographic', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},
                {layer: 'demographic', opacity: 0},
            ],     
        },
        {
            id: '4th-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Downtown Ithaca',
            image: 'https://github.com/Synn-Arch/GreyIthaca/blob/main/images/1.IthacaCommons.jpg?raw=true',
            description: 'Downtown Ithaca is easily accessible from all areas of the city, and its location on flat land surrounded by lakes and mountains made it an ideal center. Since the 1800s, it has served as a primary source of tax revenue and commercial services for the city. However, after the 1960s, as transportation networks and secondary industries developed in cities around Ithaca, people began relocating, leading to a decline in Ithaca’s commercial activity. To prevent further decline, the City of Ithaca completed the Ithaca Commons, a pedestrian-only commercial street, in 1974. This project, initially proposed by Cornell University’s urban planning students, became the first pedestrian-only commercial street in New York State.',
            location: {
                center: [-76.49942, 42.43908],
                zoom: 16.09,
                pitch: 60.31,
                bearing: -45.57
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback:() => {
                document.getElementById("demographic_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
                document.getElementById("walking_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},
                {layer: 'demographic', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},
                {layer: 'demographic', opacity: 0},
            ],     
        },
        {
            id: '5th-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Chronology of Ithaca Downtown',
            image: 'https://github.com/Synn-Arch/GreyIthaca/blob/main/images/Chronology.jpg?raw=true',
            location: {
                center: [-76.49942, 42.43908],
                zoom: 16.09,
                pitch: 60.31,
                bearing: -45.57
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback:() => {
                document.getElementById("demographic_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
                document.getElementById("walking_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},
                {layer: 'demographic', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},
                {layer: 'demographic', opacity: 0},
            ],     
        },
        {
            id: '6th-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Vibrant Atmosphere has been faded',
            image: 'https://github.com/Synn-Arch/GreyIthaca/blob/main/images/Interview1.jpg?raw=true',
            description: 'Downtown Ithaca, true to its original purpose, still serves as a space for leisure activities for many students and residents. However, the economic downturn over time, coupled with the recent recession caused by the COVID-19 pandemic, has led to many vacant storefronts, casting a shadow over the economic future of Downtown Ithaca.',
            location: {
                center: [-76.49942, 42.43908],
                zoom: 16.09,
                pitch: 60.31,
                bearing: -45.57
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback:() => {
                document.getElementById("demographic_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
                document.getElementById("walking_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},
                {layer: 'demographic', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},
                {layer: 'demographic', opacity: 0},
            ],        
        },
        {
            id: '7th-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Demographic Status of Ithaca Downtown',
            image: 'https://github.com/Synn-Arch/GreyIthaca/blob/main/images/Interview1.jpg?raw=true',
            description: 'Downtown Ithaca, true to its original purpose, still serves as a space for leisure activities for many students and residents. However, the economic downturn over time, coupled with the recent recession caused by the COVID-19 pandemic, has led to many vacant storefronts, casting a shadow over the economic future of Downtown Ithaca.',
            location: {
                center: [-76.51128, 42.43947],
                zoom: 13.94,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("demographic_legend").style.visibility = "true";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
                document.getElementById("walking_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},
                {layer: 'demographic', opacity: 1},
            ],
            onChapterExit: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},
                {layer: 'demographic', opacity: 0},
            ],        
        },
        {
            id: '7th-chapter',
            alignment: 'center',
            hidden: false,
            image: 'https://github.com/Synn-Arch/GreyIthaca/blob/main/images/ChaptersTitle2.jpg?raw=true',
            location: {
                center: [-76.4967, 42.43962],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("demographic_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
                document.getElementById("walking_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'tompkins', opacity: 0},
                {layer: 'newyork', opacity: 0},
                {layer: 'demographic', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},      
                {layer: 'demographic', opacity: 0}, 
            ],     
        },
        {
            id: '8th-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Public Institution of Ithaca Downtown',
            image: 'https://github.com/Synn-Arch/GreyIthaca/blob/main/images/cityofithaca.jpeg?raw=true',
            description: 'City of Ithaca Government is responsible for the administrative management and public urban development of Downtown Ithaca, the City of Ithaca Government is currently striving to secure support from the New York State Downtown Revitalization Initiative (DRI), which focuses on diversifying Downtown Ithaca’s economy.',
            location: {
                center: [-76.5237, 42.43962],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("demographic_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
                document.getElementById("walking_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'tompkins', opacity: 0},
                {layer: 'newyork', opacity: 0},
                {layer: 'demographic', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'tompkins', opacity: 0},
                {layer: 'newyork', opacity: 0}, 
                {layer: 'demographic', opacity: 0},     
            ],     
        },
        {
            id: '9th-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Private Institution of Ithaca Downtown',
            image: 'https://github.com/Synn-Arch/GreyIthaca/blob/main/images/cornell.jpg?raw=true',
            description: 'Cornell University is established in 1868, Cornell University is a private institution providing high-quality education to numerous outstanding students, significantly influencing Ithaca’s economy. Despite owning 47% of the city’s real estate value, the university contributes little in taxes due to its status as an educational institution, complicating the city’s efforts to fund public development. ("The History and Future," 2024) However, Cornell has the potential to offer valuable guidance and research on Ithaca’s urban development through its academic resources and has already engaged in related studies focused on the city.',
            location: {
                center: [-76.5237, 42.43962],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("demographic_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
                document.getElementById("walking_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'tompkins', opacity: 0},
                {layer: 'newyork', opacity: 0},
                {layer: 'demographic', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'tompkins', opacity: 0},
                {layer: 'newyork', opacity: 0},   
                {layer: 'demographic', opacity: 0},    
            ],     
        },
    ]
};
