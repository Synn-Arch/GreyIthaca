var config = {
    style:  'mapbox://styles/synngatech/cm2tit89i00ix01qi8cq205c3',
    accessToken: 'pk.eyJ1Ijoic3lubmdhdGVjaCIsImEiOiJjbTF4dGF1cTkwdnZ1MmtxMWRwNDgwazVpIn0.aoTqmmjvf-wJDx-0zbBq5A',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: false,
    use3dTerrain: false,
    theme: 'light',
    kortitle: '2024 Fall Community Dynamics and Engagement \n Neighborhood Case Study \n Georgia Institute of Technology',
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
            description: 'This timeline illustrates the transformation of Ithaca Commons from the 1960s to the 2010s. In the 1960s, downtown Ithaca struggled due to suburban expansion, urban renewal, and the rise of car culture, leaving many historic buildings replaced by vacant lots. In the 1970s, Mayor Ed Conley proposed a pedestrian mall on State Street, inspired by a Cornell planning students suggestion, leading to the construction of the Commons, completed in 1975. The 1980s saw the opening of Center Ithaca, a mixed-use building with retail, office spaces, and apartments. The 1990s brought economic downturns to Ithaca and surrounding areas, resulting in numerous storefront closures, including Rothschilds and CVS. In 2009, Sasaki Associates was commissioned to redesign the Commons, adding features like a central open lane, patterned pavement, improved lighting, and performance spaces. In the 2010s, Ithacas government sought New York State Downtown Revitalization Initiative funding to diversify its downtown economy, and, after several failed attempts, began considering self-sustaining solutions for revitalization.',
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
            image: 'https://github.com/Synn-Arch/GreyIthaca/blob/main/images/AgeDistribution.jpg?raw=true',
            description: 'This graph illustrates the age distribution of Ithaca Downtown. According to the data, people in their 40s and 50s represent the largest population groups, while younger age groups, particularly those in their teens and 20s, are significantly underrepresented. This trend suggests that the high cost of living, including expensive rent, is deterring younger people from moving into the Downtown area. Consequently, the area is gradually aging, with a demographic shift toward older populations that tend to have lower levels of economic activity. This trend implies a potential decline for Downtown in the long term, as it fails to attract the younger generation essential for vibrant economic growth.',
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
            },
            onChapterEnter: [
                {layer: 'tompkins', opacity: 0.3},
                {layer: 'newyork', opacity: 0.3},
                {layer: 'demographic', opacity: 0.8},
            ],
            onChapterExit: [
                {layer: 'tompkins', opacity: 0.3},
                {layer: 'newyork', opacity: 0.3},
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
                center: [-76.49908, 42.43889],
                zoom: 18.83,
                pitch: 56.50,
                bearing: -33.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("demographic_legend").style.visibility = "hidden";
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
                center: [-76.48477, 42.44820],
                zoom: 16.04,
                pitch: 56.50,
                bearing: -33.60,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback:() => {
                document.getElementById("demographic_legend").style.visibility = "hidden";
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
            id: '10th-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Informal Institutions and \n Everyday Practices',
            image: 'https://github.com/Synn-Arch/GreyIthaca/blob/main/images/Ithacanight.png?raw=true',
            description: 'Cornell University students are a major driving force in Downtown Ithacas economy. They reside in apartments within and around downtown and spend most of their leisure time in the Ithaca Commons. Students typically head to campus before 11 a.m., return to the Commons around 4 p.m. for social activities, and frequent downtown restaurants. Although less common, they also occasionally visit local clubs, bars, or the small movie theater in the Commons.',
            location: {
                center: [-76.48477, 42.44820],
                zoom: 16.04,
                pitch: 56.50,
                bearing: -33.60,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback:() => {
                document.getElementById("demographic_legend").style.visibility = "hidden";
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
            id: '11th-chapter',
            alignment: 'center',
            hidden: false,
            image: 'https://github.com/Synn-Arch/GreyIthaca/blob/main/images/ChaptersTitle3.jpg?raw=true',
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
            id: '12nd-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Urban Revitalization',
            image: 'https://github.com/Synn-Arch/GreyIthaca/blob/main/images/ithacavacantstore.png?raw=true',
            description: 'Downtown Ithaca faced severe challenges during the COVID-19 pandemic. As more than 40% of the citys population—primarily students—shifted to remote learning and tourists stopped visiting, the service industry-focused downtown economy rapidly collapsed. This crisis prompted both the Ithaca City Government and the local community to recognize the need for economic diversification. ',
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
            id: '13rd-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Urban Revitalization',
            image: 'https://github.com/Synn-Arch/GreyIthaca/blob/main/images/seekincentives.png?raw=true',
            description: 'The City of Ithaca is currently striving to secure funding from the New York State Downtown Revitalization Initiative (DRI) to expand the downtown area and promote new industries. ("City of Ithaca Seeks Input," 2024) However, after seven unsuccessful attempts to secure funding, it is evident that Ithaca must also explore self-reliant solutions to revitalize its downtown.',
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
            id: '14th-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Urban Revitalization',
            image: 'https://github.com/Synn-Arch/GreyIthaca/blob/main/images/Interview2.jpg?raw=true',
            description: 'Student reactions to this initiative have been mostly negative. Marcos noted that without fundamental changes to the industrial structure, simply providing incentives to small businesses and promoting tourist attractions will not address the root issues in Ithaca. \n \n In fact, Ithaca suffers from a significant lack of foundational industries. Unlike its historical reliance on dairy and agriculture, the growth of new service industries has been slow. This is despite the presence of Cornell University, which could serve as a catalyst for new industries. Contributing factors include the absence of large cities nearby, a fundamental shortage of jobs, and a lack of motivation for New York State to actively pursue economic development in such a small town.',
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
            id: '15th-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Public Safety',
            image: 'https://github.com/Synn-Arch/GreyIthaca/blob/main/images/ithacacrime.png?raw=true',
            description: 'Downtown Ithaca has recently been grappling with issues related to public safety, including an increase in homelessness and the presence of drug addicts around the Ithaca Commons, posing a threat to local merchants, citizens, tourists, and students. ("Safety a Priority," 2024) The community has attributed these problems to a decrease in police personnel, and this issue has become a topic of concern among local businesses and residents.',
            location: {
                center: [-76.49645, 42.43924],
                zoom: 18.52,
                pitch: 60.31,
                bearing: -45.57
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback:() => {
                document.getElementById("demographic_legend").style.visibility = "hidden";
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
            id: '16th-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Public Safety',
            image: 'https://github.com/Synn-Arch/GreyIthaca/blob/main/images/ithacahomelessshelter.jpg?raw=true',
            description: 'The issue of homelessness in Ithaca presents some unique characteristics. Despite being a small rural town, Ithaca hosts a significant number of homeless individuals who live in tents in the forests on the eastern and western outskirts of the city. During the day and evening, they come down to the downtown area, where they often smoke marijuana, beg for money, and occasionally get into altercations with passersby. In the early hours of the morning, they tend to return to the woods. The City of Ithaca government is aware of this issue and is attempting to address it by expanding shelters and welfare facilities to discourage them from coming into the downtown area.',
            location: {
                center: [-76.45468, 42.43575],
                zoom: 15.96,
                pitch: 60.31,
                bearing: -45.57
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback:() => {
                document.getElementById("demographic_legend").style.visibility = "hidden";
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
            id: '16-1th-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Public Safety',
            video: 'https://github.com/Synn-Arch/GreyIthaca/blob/main/images/Homeless_Video.mp4?raw=true',
            description: 'The issue of homelessness goes beyond merely addressing physical safety concerns. The City of Ithaca recently conducted a cleanup at a former homeless encampment near Six Mile Creek. This initiative involved removing debris that could potentially harm the environment after the homeless individuals had relocated. This action highlights that addressing homelessness also serves as a step towards reducing the risk of potential environmental pollution.(WENY TV News, 2024)',
            location: {
                center: [-76.45468, 42.43575],
                zoom: 15.96,
                pitch: 60.31,
                bearing: -45.57
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback:() => {
                document.getElementById("demographic_legend").style.visibility = "hidden";
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
            id: '17th-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Public Safety',
            image: 'https://github.com/Synn-Arch/GreyIthaca/blob/main/images/mayorithaca.jpg?raw=true',
            description: 'However, Ithacas response to the homelessness issue is facing limitations. Marcos, a student, relayed remarks from the Mayors lecture, where the Mayor explained that the City government wanted to construct essential facilities, like restrooms, as temporary structures in the forests around Ithaca. Unfortunately, due to regulations, even temporary installations in these nature preserves are prohibited, leaving the city with few viable solutions. This highlights the need for Ithaca to develop unique solutions to address its homelessness issue, distinct from approaches taken in other cities.',
            location: {
                center: [-76.45468, 42.43575],
                zoom: 15.96,
                pitch: 60.31,
                bearing: -45.57
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback:() => {
                document.getElementById("demographic_legend").style.visibility = "hidden";
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
            id: '18th-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Public Safety',
            image: 'https://github.com/Synn-Arch/GreyIthaca/blob/main/images/IthacaSmokeshop.jpg?raw=true',
            description: 'Marcos also mentioned that a smokeshop in downtown Ithaca is causing significant issues. Since marijuana was legalized in New York State, this smokeshop, located in one of the busiest areas downtown, has become a gathering spot for many homeless individuals. With numerous pedestrians passing by, people often feel threatened walking down this street at night.',
            location: {
                center: [-76.49855, 42.43954],
                zoom: 19.03,
                pitch: 39.48,
                bearing: 130.78
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback:() => {
                document.getElementById("demographic_legend").style.visibility = "hidden";
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
            id: '18th-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Bibliography',
            image: 'https://github.com/Synn-Arch/GreyIthaca/blob/main/images/bibliography.jpg?raw=true',
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
