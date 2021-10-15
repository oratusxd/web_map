var wms_layers = [];


        var lyr_OpenStreetMapmonochrome_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap monochrome',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });
var format_Pontos_Turisticosv1_1 = new ol.format.GeoJSON();
var features_Pontos_Turisticosv1_1 = format_Pontos_Turisticosv1_1.readFeatures(json_Pontos_Turisticosv1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pontos_Turisticosv1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pontos_Turisticosv1_1.addFeatures(features_Pontos_Turisticosv1_1);
var lyr_Pontos_Turisticosv1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pontos_Turisticosv1_1, 
                style: style_Pontos_Turisticosv1_1,
                interactive: true,
                title: '<img src="styles/legend/Pontos_Turisticosv1_1.png" /> Pontos_Turisticosv1'
            });
var format_arruamento_sirgas_2 = new ol.format.GeoJSON();
var features_arruamento_sirgas_2 = format_arruamento_sirgas_2.readFeatures(json_arruamento_sirgas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arruamento_sirgas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arruamento_sirgas_2.addFeatures(features_arruamento_sirgas_2);
var lyr_arruamento_sirgas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_arruamento_sirgas_2, 
                style: style_arruamento_sirgas_2,
                interactive: true,
                title: '<img src="styles/legend/arruamento_sirgas_2.png" /> arruamento_sirgas'
            });
var format_caminho_1_3 = new ol.format.GeoJSON();
var features_caminho_1_3 = format_caminho_1_3.readFeatures(json_caminho_1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caminho_1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caminho_1_3.addFeatures(features_caminho_1_3);
var lyr_caminho_1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_caminho_1_3, 
                style: style_caminho_1_3,
                interactive: true,
                title: '<img src="styles/legend/caminho_1_3.png" /> caminho_1'
            });
var format_caminho_2_4 = new ol.format.GeoJSON();
var features_caminho_2_4 = format_caminho_2_4.readFeatures(json_caminho_2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caminho_2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caminho_2_4.addFeatures(features_caminho_2_4);
var lyr_caminho_2_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_caminho_2_4, 
                style: style_caminho_2_4,
                interactive: true,
                title: '<img src="styles/legend/caminho_2_4.png" /> caminho_2'
            });
var format_caminho_3_5 = new ol.format.GeoJSON();
var features_caminho_3_5 = format_caminho_3_5.readFeatures(json_caminho_3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caminho_3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caminho_3_5.addFeatures(features_caminho_3_5);
var lyr_caminho_3_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_caminho_3_5, 
                style: style_caminho_3_5,
                interactive: true,
                title: '<img src="styles/legend/caminho_3_5.png" /> caminho_3'
            });
var format_caminho_4_6 = new ol.format.GeoJSON();
var features_caminho_4_6 = format_caminho_4_6.readFeatures(json_caminho_4_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caminho_4_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caminho_4_6.addFeatures(features_caminho_4_6);
var lyr_caminho_4_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_caminho_4_6, 
                style: style_caminho_4_6,
                interactive: true,
                title: '<img src="styles/legend/caminho_4_6.png" /> caminho_4'
            });

lyr_OpenStreetMapmonochrome_0.setVisible(true);lyr_Pontos_Turisticosv1_1.setVisible(true);lyr_arruamento_sirgas_2.setVisible(true);lyr_caminho_1_3.setVisible(true);lyr_caminho_2_4.setVisible(true);lyr_caminho_3_5.setVisible(true);lyr_caminho_4_6.setVisible(true);
var layersList = [lyr_OpenStreetMapmonochrome_0,lyr_Pontos_Turisticosv1_1,lyr_arruamento_sirgas_2,lyr_caminho_1_3,lyr_caminho_2_4,lyr_caminho_3_5,lyr_caminho_4_6];
lyr_Pontos_Turisticosv1_1.set('fieldAliases', {'Name': 'Name', 'Descriçã': 'Descriçã', 'Endereço': 'Endereço', 'Contato': 'Contato', 'icon_url': 'icon_url', });
lyr_arruamento_sirgas_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_caminho_1_3.set('fieldAliases', {'Distancia': 'Distancia', });
lyr_caminho_2_4.set('fieldAliases', {'Distancia': 'Distancia', });
lyr_caminho_3_5.set('fieldAliases', {});
lyr_caminho_4_6.set('fieldAliases', {'Distancia': 'Distancia', '1': '1', '2': '2', '3': '3', '4': '4', });
lyr_Pontos_Turisticosv1_1.set('fieldImages', {'Name': '', 'Descriçã': '', 'Endereço': '', 'Contato': '', 'icon_url': '', });
lyr_arruamento_sirgas_2.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_caminho_1_3.set('fieldImages', {'Distancia': '', });
lyr_caminho_2_4.set('fieldImages', {'Distancia': '', });
lyr_caminho_3_5.set('fieldImages', {});
lyr_caminho_4_6.set('fieldImages', {'Distancia': '', '1': '', '2': '', '3': '', '4': '', });
lyr_Pontos_Turisticosv1_1.set('fieldLabels', {'Name': 'no label', 'Descriçã': 'no label', 'Endereço': 'no label', 'Contato': 'no label', 'icon_url': 'no label', });
lyr_arruamento_sirgas_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_caminho_1_3.set('fieldLabels', {'Distancia': 'no label', });
lyr_caminho_2_4.set('fieldLabels', {'Distancia': 'no label', });
lyr_caminho_3_5.set('fieldLabels', {});
lyr_caminho_4_6.set('fieldLabels', {'Distancia': 'no label', '1': 'no label', '2': 'no label', '3': 'no label', '4': 'no label', });
lyr_caminho_4_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});