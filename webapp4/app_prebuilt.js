var defaultFill = new ol.style.Fill({
   color: 'rgba(255,255,255,0.4)'
 });
 var defaultStroke = new ol.style.Stroke({
   color: '#3399CC',
   width: 1.25
 });
 var defaultSelectionFill = new ol.style.Fill({
   color: 'rgba(255,255,0,0.4)'
 });
 var defaultSelectionStroke = new ol.style.Stroke({
   color: '#FFFF00',
   width: 1.25
 });



                    var textStyleCache_nrosswtshdg1={}
                    var clusterStyleCache_nrosswtshdg1={}
                    var style_nrosswtshdg1 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(177,38,96,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_nrosswtshdg1 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_nsclpowerl1={}
                    var clusterStyleCache_nsclpowerl1={}
                    var style_nsclpowerl1 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(162,169,244,1.0)", lineDash: null, width: 0})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_nsclpowerl1 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_nskagmilep1={}
                    var clusterStyleCache_nskagmilep1={}
                    var style_nskagmilep1 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(1,70,154,1.0)"})})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_nskagmilep1 = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var baseLayers = [new ol.layer.Tile({
                        type: 'base',
                        title: 'No base layer'
                    }),new ol.layer.Tile({
    type: 'base',
    title: 'CartoDB light',
    source: new ol.source.XYZ({
        url: 'http://s.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({ html: ['&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>']
        })]
    }),
    projection: 'EPSG:3857'
})
];var baseLayersGroup = new ol.layer.Group({showContent: true,'type':
                    'base-group', 'title': 'Base maps', layers: baseLayers});
var overlayLayers = [];var overlaysGroup = new ol.layer.Group({showContent: true, 'title': 'Overlays', layers: overlayLayers});
var lyr_nrosswtshdg1 = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_nrosswtshdg1,
                    selectedStyle: selectionStyle_nrosswtshdg1,
                    title: "nrosswtshdg1",
                    id: "nrosswtshdg120160429172124077",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
nrosswtshdg1_geojson_callback = function(geojson) {
                              lyr_nrosswtshdg1.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_nsclpowerl1 = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_nsclpowerl1,
                    selectedStyle: selectionStyle_nsclpowerl1,
                    title: "nsclpowerl1",
                    id: "nsclpowerl120160429172135024",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
nsclpowerl1_geojson_callback = function(geojson) {
                              lyr_nsclpowerl1.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_nskagmilep1 = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_nskagmilep1,
                    selectedStyle: selectionStyle_nskagmilep1,
                    title: "nskagmilep1",
                    id: "nskagmilep120160429172148611",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Rivermile</td><td style='text-align:right'>[Rivermile]</td></tr></table>"
                });
nskagmilep1_geojson_callback = function(geojson) {
                              lyr_nskagmilep1.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };

lyr_nrosswtshdg1.setVisible(true);
lyr_nsclpowerl1.setVisible(true);
lyr_nskagmilep1.setVisible(true);for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}baseLayers[1].setVisible(true);
var layersList = [lyr_nrosswtshdg1,lyr_nsclpowerl1,lyr_nskagmilep1];layersList.unshift(baseLayersGroup);
var legendData = {"nskagmilep120160429172148611": [{"href": "2_0.png", "title": ""}], "nrosswtshdg120160429172124077": [{"href": "0_0.png", "title": ""}], "nsclpowerl120160429172135024": [{"href": "1_0.png", "title": ""}]};
var view = new ol.View({ maxZoom: 32, minZoom: 1, projection: 'EPSG:3857'});
var originalExtent = [-13589235.765584, 6191134.642397, -13350290.334165, 6326436.311807];

var map = new ol.Map({
  layers: layersList,
  view: view,
  controls: [new ol.control.ScaleLine({"minWidth": 64, "units": "metric"}),
new ol.control.Zoom({"zoomOutTipLabel": "Zoom out", "zoomInTipLabel": "Zoom in", "delta": 1.2, "duration": 250, "zoomInLabel": "+", "zoomOutLabel": "-"})]
});



var BasicApp = React.createClass({
  componentDidMount() {
    map.setTarget(ReactDOM.findDOMNode(this.refs.map));
    view = map.getView();
    view.fit(originalExtent, map.getSize());
    
  },
  _toggle(el) {
    if (el.style.display === 'block') {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
    }
  },
  _toggleTable() {
    this._toggle(document.getElementById('table-panel'));
    this.refs.table.getWrappedInstance().setDimensionsOnState();
  },
  _toggleWFST() {
    this._toggle(document.getElementById('wfst'));
  },
  _toggleQuery() {
    this._toggle(document.getElementById('query-panel'));
  },
  _toggleEdit() {
    this._toggle(document.getElementById('edit-tool-panel'));
  },
  _toggleAboutPanel() {
    this._toggle(document.getElementById('about-panel'));
  },
  _toggleChartPanel(evt) {
    evt.preventDefault();
    this._toggle(document.getElementById('chart-panel'));
  },
  _navigationFunc() {
    ToolActions.activateTool(null, 'navigation');
  },
  render() {
    var options = [{exclude: true, jsx: React.createElement("a", {className:"navbar-brand", href:"#"}, "Neal3")}];
    return React.createElement("article", null,
      React.createElement(Toolbar, {options: options}
      ),
      React.createElement("div", {id: 'content'},
        React.createElement("div", {id: 'map', ref: 'map'}
          ,
React.createElement("div", {id: 'about-panel', className:'about-panel'},
                                        React.createElement("div", {dangerouslySetInnerHTML:{__html: '<h1>Neals</h1><br><p>This is Neals Webmap</p>'}})
                                    ),
React.createElement("div", {id: 'popup', className: 'ol-popup'},
                                    React.createElement(InfoPopup, {map: map, hover: false})
                                  )
        )
        ,
React.createElement("div",{id: "layerlist"},
                                    React.createElement(LayerList, {showOpacity:false, showDownload:false,
                                        showGroupContent:true, showZoomTo:false, allowReordering:false,
                                        allowFiltering:true, tipLabel:'layers', expandOnHover:true,
                                        downloadFormat:'GeoJSON', map:map})),
React.createElement("div",{id: "legend"},
                                React.createElement(QGISLegend, {map:map, legendBasePath:'./resources/legend/',showExpandedOnStartup:false, expandOnHover:true, legendData:legendData})
                            )
      )
    );
  }
});

ReactDOM.render(React.createElement(IntlProvider, {locale: 'en'}, React.createElement(BasicApp)), document.getElementById('main'));


