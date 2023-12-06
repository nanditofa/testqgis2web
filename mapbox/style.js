
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "ESRISatelite_0": {
            "type": "raster",
            "tiles": ["https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"],
            "tileSize": 256
        },
        "Admin_DIYKabKotamerged_1": {
            "type": "geojson",
            "data": json_Admin_DIYKabKotamerged_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_ESRISatelite_0_0",
            "type": "raster",
            "source": "ESRISatelite_0"
        },
        {
            "id": "lyr_Admin_DIYKabKotamerged_1_0",
            "type": "line",
            "source": "Admin_DIYKabKotamerged_1",
            "layout": {},
            "paint": {'line-width': 1.2857142857142856, 'line-opacity': 1.0, 'line-color': '#ffffff'}
        }
],
}