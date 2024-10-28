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
    para1: 'This research delves into the examination and analysis of Cooling Centers, vital welfare facilities catering to the needs of vulnerable elderly populations confronting extreme summer climate conditions in Seoul, South Korea. The primary objective of this study was to evaluate the effectiveness of Cooling Centers in each administrative district, with a focus on their capacities to meet the rising demand. By doing so, this research aims to contribute valuable insights to the provision of welfare services in appropriate locations.',
    para2: 'The analysis revealed that several administrative districts in Seoul struggled to secure Cooling Centers with capacities matching the elderly vulnerable population. Additionally, the availability of overnight accommodations in these facilities was generally limited across the city. These findings emphasize the urgent need for solutions to assist elderly vulnerable populations in coping with prolonged tropical heat in Seoul. Furthermore, the research highlights that Cooling Centers should consider other vulnerable groups in addition to the elderly in their services.',
    footer: 'Source: Bae, Min-Ki, Bo-Eun Kim, and Chae-Yeon Lee. 2020. “Analysis on the Spatial Relationship between the Residential Area of the Vulnerable Groups and the Hazardous Area during the Heat Wave.” Journal of Environmental Policy and Administration 28 (3): 243~80. \n Hyunmi, Kang, and Park Sohyun. 2007. “Characteristics of Walking Environment in Apartment Complexes on Gradient Sites.” Architecutre & Urban Research Information Center, November. \n Jenerette, G. Darrel, Sharon L. Harlan, William L. Stefanov, and Chris A. Martin. 2011. “Ecosystem Services and Urban Heat Riskscape Moderation: Water, Green Spaces, and Social Inequality in Phoenix, USA.” Ecological Applications: A Publication of the Ecological Society of America 21 (7): 2637~51. \n Jung, Sangyun, and Dong-Wook Sohn. 2019. “An Evaluation of Pedestrian Environments based on the Criteria of Universal Design Theory - A case study of old town area in Seoul -.” Journal of the architectural institute of Korea planning & design 35 (1): 117~25. \n Kim, Jin-Wook. 2008. “A Study on the Cooling Center Manual of Facility and Maintenance for Extreme Heat Disaster.” Journal of the Korean Society of Hazard Mitigation 8 (4): 17~22. \n Lee, Min. 2022. Establishing Guideline for Elderly Peoples Healthy Life. National Evidence-based Healthcare Collaborating Agency. \n Park, Seongwoo, Joo-Yeon Hwang, Hyoeun Kim, Youngju Lee, JongHee Kim, and Younjhin Ahn. 2023. “Results of the 2022 Heat-Related Illness Surveillance.” Public Health Weekly Report 16 (Issue: 9): Pages: 241-252. \n Son, Ho-Hee, and Eun-Jung Kim. 2013. “Analysis of Spatio-Temporal Parameters of Gait in Elderly by Various Walking Pathways Width.” The Journal of the Korea Contents Association 13 (10): 444~51. \n Song, Gowook. 2013. “Emergency Measures for Vulnerable Populations to Heatwaves.” Busan Development Institute, no. BDI Focus (June). \n Yoon, Yongseon, Sanggweon Lee, and Hwenghwan Ahn. 2016. “A long-term counterproposal of Heat wave damage measures for climate change.” Journal of disaster prevention v.18 no.5, pp.12-35. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    
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
                document.getElementById("capacity_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
                document.getElementById("walking_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'tompkins', opacity: 0},
                {layer: 'newyork', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},       
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
                document.getElementById("capacity_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
                document.getElementById("walking_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},
            ],
            onChapterExit: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},
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
                document.getElementById("capacity_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
                document.getElementById("walking_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},
            ],
            onChapterExit: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},
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
                document.getElementById("capacity_legend").style.visibility = "visible";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
                document.getElementById("walking_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},
            ],
            onChapterExit: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},
            ],     
        },
        {
            id: '5th-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Chronology of Ithaca Downtown',
            image: 'https://github.com/Synn-Arch/Seoul-is-too-hot/blob/main/images/coolingCenter2.jpg?raw=true',
            location: {
                center: [-76.49942, 42.43908],
                zoom: 16.09,
                pitch: 60.31,
                bearing: -45.57
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback:() => {
                document.getElementById("capacity_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
                document.getElementById("walking_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},
            ],
            onChapterExit: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},
            ],     
        },
        {
            id: '6th-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Vibrant Atmosphere has been faded',
            image: 'https://github.com/Synn-Arch/Seoul-is-too-hot/blob/main/images/SleepingCoolingCenter.jpeg?raw=true',
            description: 'A total of 164 administrative districts (comprising 38% of the sample) failed to secure any Cooling Centers with lodging capabilities, while 354 administrative districts (constituting 83% of the sample) exhibited accommodation capacities that fell below 50% concerning the elderly population.',
            location: {
                center: [-76.4967, 42.43962],
                zoom: 20,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("capacity_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "visible";
                document.getElementById("walking_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},
            ],
            onChapterExit: [
                {layer: 'tompkins', opacity: 1},
                {layer: 'newyork', opacity: 1},
            ],        
        },

        
    ]
};
