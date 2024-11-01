var initLoad = true;
var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
}

function myCallbackFunction() {

}
map.on('load',function(){
    map.addSource('tompkinscounty',{
        'type':'vector',
        'url': 'mapbox://synngatech.6weab6u5' 
    });
    map.addSource('newyorkstate',{
        'type':'vector',
        'url': 'mapbox://synngatech.7mlrd95f' 
    });
    map.addSource('ithacademographic',{
        'type':'vector',
        'url': 'mapbox://synngatech.5du18l8s' 
    });
        

    map.addLayer({
        'id':'tompkins',
        'type':'line',
        'source':'tompkinscounty',
        'source-layer':'TompkinsCounty-7waxkv',
        'paint':{
            'line-color': '#000000',
            'line-width': [
                'interpolate', ['linear'], ['zoom'],
                5, 2,
                10, 1
                ],
        }
    });

    map.addLayer({
        'id':'newyork',
        'type':'line',
        'source':'newyorkstate',
        'source-layer':'Newyork-7uhnx7',
        'paint':{
            'line-color': '#000000',
            'line-width': [
                'interpolate', ['linear'], ['zoom'],
                5, 2,
                10, 1
                ],
        }
    });

    map.addLayer({
        'id':'demographic',
        'type':'fill',
        'source':'ithacademographic',
        'source-layer':'ithaca_demographic-7ob19d',
        'paint':{
            'fill-color': ['step',
                            ['to-number', ['get', 'under_30_percentage']],
                            'white',
                            0, '#290000',
                            8, '#420505', 
                            22, '#661414',
                            30, '#872727',
                            50, '#c76565',
                        ],
            'fill-opacity': 0.2,
        }
    });

    map.addLayer({
        'id':'accomorate',
        'type':'fill',
        'source':'analysis',
        'source-layer':'analysis-coolingcenter',
        'paint':{
            'fill-color': ['step',
                            ['to-number', ['get', 'analysis_SleepCapaRateFix']],
                            'white',
                            0,'#290000',
                            0.2, '#872727',
                            0.4, '#c76565', 
                            0.8, '#f0adad',
                            1, '#f7eded',
                        ],
            'fill-opacity': 0.3,
        }
    });


    map.addLayer({
        'id':'statustwo',
        'type':'circle',
        'source':'centerstatus',
        'source-layer':'cooling-centers',
        'paint': {
            'circle-radius': 3,       
            'circle-color': [
                'match',
                ['get', 'Fac_Type'],
                1, 'rgba(255, 255, 255, 0)', //senior community center
                2, '#008f2b', //welfare center
                4, '#a6a000', //Public Health center                
                5, '#cc6900', //Community Service center
                7, '#8c009e', //Religious Facility
                8, '#03005c', //Bank
                '#5c5c5c'],
        }
    });

    map.addLayer({
        'id':'expenditureforelder',
        'type':'fill',
        'source':'expenditure',
        'source-layer':'Expenditure-348lo0',
        'paint':{
            'fill-color': ['step',
                            ['to-number', ['get', 'BigBorough_1인당 재난지원']],
                            'white',
                            2475,'#ffedde',
                            5199, '#ffddbf',
                            6958, '#ffd0a8', 
                            10789, '#ffc594',
                            15027, '#ffb678',
                            23534, '#ffa75c',
                            31252, '#ff9942',
                            34247, '#ff8924',
                        ],
            'fill-opacity': 0.3,
        }
    });

    map.addLayer({
        'id':'status',
        'type':'circle',
        'source':'centerstatus',
        'source-layer':'cooling-centers',
        'paint': {
            'circle-radius': 3,
            'circle-color': [
                'match',
                ['get', 'Fac_Type'],
                1, '#006ebd', //senior community center
                2, '#008f2b', //welfare center
                4, '#a6a000', //Public Health center                
                5, '#cc6900', //Community Service center
                7, '#8c009e', //Religious Facility
                8, '#03005c', //Bank
                '#5c5c5c'
            ]
        }
    });

    map.addLayer({
        'id':'walking',
        'type':'fill',
        'source':'isochroneanalysis',
        'source-layer':'isochrones',
        'paint':{
            'fill-color': [
                'match',
                ['get', 'AA_METERS'],
                239, '#ad0000',
                478, 'rgba(59, 82, 139, 0)',
                '#ccc'
            ],
            'fill-opacity': 1,
        }
    });

    map.addLayer({
        'id':'newcenter',
        'type':'circle',
        'source':'newcoolingcenter',
        'source-layer':'newcoolingcenters-06uelf',
        'paint': {
            'circle-radius': 10,
            'circle-color': '#ab0000'
        }
    });    

    map.addLayer({
        'id':'topfive',
        'type':'fill',
        'source':'top5',
        'source-layer':'top5_dong-996sko',
        'paint':{
            'fill-color': '#ab0000',
            'fill-width': [
                'interpolate', ['linear'], ['zoom'],
                0, 3,
                16, 1
                ],
        }
    });

    map.addLayer({
        'id':'topfiveline',
        'type':'line',
        'source':'top5',
        'source-layer':'top5_dong-996sko',
        'paint':{
            'line-color': '#000000',
            'line-width': [
                'interpolate', ['linear'], ['zoom'],
                10, 1,
                16, 3
                ],
        }
    });    

    map.addLayer({
        'id':'newwalking',
        'type':'fill',
        'source':'newisochrone',
        'source-layer':'newisochrone-8ps6gl',
        'paint':{
            'fill-color': [
                'match',
                ['get', 'AA_METERS'],
                239, '#0067b0',
                '#ccc'
            ],
            'fill-opacity': 1,
        }
    });

    map.addLayer({
        'id':'seoul-fill1',
        'type':'fill',
        'source':'analysis',
        'source-layer':'analysis-coolingcenter',
        'paint':{
            'fill-color': '#ad0000',
        }
    });

    map.addLayer({
        'id':'seoul-fill2',
        'type':'fill',
        'source':'analysis',
        'source-layer':'analysis-coolingcenter',
        'paint':{
            'fill-color': '#5595c2',
        }
    });
    
    map.addLayer({
        'id':'dongline',
        'type':'line',
        'source':'analysis',
        'source-layer':'analysis-coolingcenter',
        'paint':{
            'line-color': '#000000',
            'line-width': [
                'interpolate', ['linear'], ['zoom'],
                10, 0.2,
                16, 1
                ],
        }
    });

    map.addLayer({
        'id':'seoul',
        'type':'line',
        'source':'seoulboundary',
        'source-layer':'seoul_boundary-960xnn',
        'paint':{
            'line-color': '#000000',
            'line-width': [
                'interpolate', ['linear'], ['zoom'],
                5, 5,
                16, 10
                ],
        }
    });


});