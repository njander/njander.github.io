define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dijit/form/Form',
    'dijit/form/FilteringSelect',
    'dijit/form/ValidationTextBox',
    'dijit/form/NumberTextBox',
    'dijit/form/Button',
    'dijit/form/CheckBox',
    'dijit/ProgressBar',
    'dijit/form/DropDownButton',
    'dijit/TooltipDialog',
    'dijit/form/RadioButton',
    'esri/tasks/PrintTask',
    'dojo/store/Memory',
    'dojo/_base/lang',
    'dojo/_base/array',
    'dojo/dom-style',
    'dojo/dom-construct',
    'dojo/dom-class',
    'dojo/text!./Print/templates/Print.html',
    'dojo/text!./Print/templates/PrintResult.html',
    'dojo/aspect'
], function(declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Form, FilteringSelect, ValidationTextBox, NumberTextBox, Button, CheckBox, ProgressBar, DropDownButton, TooltipDialog, RadioButton, PrintTask, Memory, lang, array, Style, domConstruct, domClass, printTemplate, printResultTemplate, aspect) {

    //anonymous function to load CSS files required for this module
    (function() {
        var css = [require.toUrl("src/js/Print/css/Print.css")];
        var head = document.getElementsByTagName("head").item(0),
            link;
        for (var i = 0, il = css.length; i < il; i++) {
            link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = css[i].toString();
            head.appendChild(link);
        }
    }());

    // Main print dijit
    var PrintDijit = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        widgetsInTemplate: true,
        templateString: printTemplate,
        map: null,
        count: 1,
        results: [],
        baseClass: "gis_PrintDijit",
        pdfIcon: require.toUrl("src/js/Print/images/pdf.png"),
        imageIcon: require.toUrl("src/js/Print/images/image.png"),
        printTaskURL: null,
        printTask: null,
        postCreate: function() {
            this.inherited(arguments);
            this.printTask = new esri.tasks.PrintTask(this.printTaskURL);
            this.printparams = new esri.tasks.PrintParameters();
            this.printparams.map = this.map;
            this.printparams.outSpatialReference = this.map.spatialReference;

            esri.request({
                url: this.printTaskURL,
                content: {
                    f: "json"
                },
                handleAs: "json",
                callbackParamName: 'callback',
                
                error: lang.hitch(this, '_handleError')
            });
            //aspect.after(this.printTask, '_createOperationalLayers', this.operationalLayersInspector, false);
        },
        operationalLayersInspector: function(opLayers) {
            console.log(opLayers);
            array.forEach(opLayers, function(layer) {
                if (layer.id == "Measurement_graphicslayer") {
                    array.forEach(layer.featureCollection.layers, function(fcLayer) {
                        array.forEach(fcLayer.featureSet.features, function(feature) {
                            delete feature.attributes;
                            feature.symbol.font.family = "Courier";
                            //feature.symbol.font.variant = esri.symbol.Font.VARIANT_NORMAL;
                            //feature.symbol.font.size = "32pt";
                        });
                    });
                }
            });
            return opLayers;
        },
        _handleError: function(err) {
            console.log(1, err);
        },
        
        print: function() {
            if (this.printSettingsFormDijit.isValid()) {
                var form = this.printSettingsFormDijit.get('value');

                var template = new esri.tasks.PrintTemplate();
                template.format = "PDF";
                template.layout = "Letter ANSI A Landscape";
                template.preserveScale = false;
                template.label = form.title;
                template.layoutOptions = {
                    authorText: this.authorText,
                    copyrightText: this.copyrightText,
                    legendLayers: true,
                    titleText: form.title,
                    scalebarUnit: "Miles"
                };
                this.printparams.template = template;
                var fileHandel = this.printTask.execute(this.printparams);

                var result = new printResultDijit({
                    count: this.count.toString(),
                    icon: this.pdfIcon,
                    docName: form.title,
                    title: ', ',
                    fileHandle: fileHandel
                }).placeAt(this.printResultsNode, 'last');
                result.startup();
                Style.set(this.clearActionBarNode, 'display', 'block');
                this.count++;
            } else {
                this.printSettingsFormDijit.validate();
            }
        },
        clearResults: function() {
            domConstruct.empty(this.printResultsNode);
            Style.set(this.clearActionBarNode, 'display', 'none');
            this.count = 1;
        }
    });

    // Print result dijit
    var printResultDijit = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        widgetsInTemplate: true,
        templateString: printResultTemplate,
        url: null,
        postCreate: function() {
            this.inherited(arguments);
            this.fileHandle.then(lang.hitch(this, '_onPrintComplete'), lang.hitch(this, '_onPrintError'));
        },
        _onPrintComplete: function(data) {
            if (data.url) {
                this.url = data.url;
                this.nameNode.innerHTML = '<span class="bold">' + this.docName + '</span>';
                domClass.add(this.resultNode, "printResultHover");
            } else {
                this._onPrintError('Error, try again');
            }
        },
        _onPrintError: function(err) {
            console.log(err);
            this.nameNode.innerHTML = '<span class="bold">Error, try again</span>';
            domClass.add(this.resultNode, "printResultError");
        },
        _openPrint: function() {
            if (this.url !== null) {
                window.open(this.url);
            }
        }
    });
    return PrintDijit;
});