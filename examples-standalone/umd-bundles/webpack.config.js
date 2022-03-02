const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',

    devtool: 'eval',

    output: {
        path: path.resolve('./dist'),
        publicPath: '/dist',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    optimization: {
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },

    devServer: {

    },

    entry: {
        main: './src/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],

    externals: {
        "@angular/core": "ng.core",
        "@angular/common": "ng.common",
        "@angular/common/http": "ng.common.http",
        "@angular/compiler": "ng.compiler",
        "@angular/forms": "ng.forms",
        "@angular/platform-browser": "ng.platformBrowser",
        "@angular/platform-browser-dynamic": "ng.platformBrowserDynamic",
        "@angular/animations": "ng.animations",
        "rxjs": "rxjs",
        "rxjs/operators": "rxjs.operators",
        "@progress/kendo-angular-barcodes": "KendoAngularBarcodes",
        "@progress/kendo-angular-buttons": "KendoAngularButtons",
        "@progress/kendo-angular-charts": "KendoAngularCharts",
        "@progress/kendo-angular-common": "KendoAngularCommon",
        "@progress/kendo-angular-conversational-ui": "KendoAngularConversationalUi",
        "@progress/kendo-angular-dateinputs": "KendoAngularDateinputs",
        "@progress/kendo-angular-dialog": "KendoAngularDialog",
        "@progress/kendo-angular-dropdowns": "KendoAngularDropdowns",
        "@progress/kendo-angular-editor": "KendoAngularEditor",
        "@progress/kendo-angular-excel-export": "KendoAngularExcelExport",
        "@progress/kendo-angular-filter": "KendoAngularFilter",
        "@progress/kendo-angular-gauges": "KendoAngularGauges",
        "@progress/kendo-angular-grid": "KendoAngularGrid",
        "@progress/kendo-angular-icons": "KendoAngularIcons",
        "@progress/kendo-angular-indicators": "KendoAngularIndicators",
        "@progress/kendo-angular-inputs": "KendoAngularInputs",
        "@progress/kendo-angular-intl": "KendoAngularIntl",
        "@progress/kendo-angular-l10n": "KendoAngularL10N",
        "@progress/kendo-angular-label": "KendoAngularLabel",
        "@progress/kendo-angular-layout": "KendoAngularLayout",
        "@progress/kendo-angular-listview": "KendoAngularListview",
        "@progress/kendo-angular-menu": "KendoAngularMenu",
        "@progress/kendo-angular-navigation": "KendoAngularNavigation",
        "@progress/kendo-angular-notification": "KendoAngularNotification",
        "@progress/kendo-angular-pager": "KendoAngularPager",
        "@progress/kendo-angular-pdf-export": "KendoAngularPdfExport",
        "@progress/kendo-angular-popup": "KendoAngularPopup",
        "@progress/kendo-angular-progressbar": "KendoAngularProgressbar",
        "@progress/kendo-angular-ripple": "KendoAngularRipple",
        "@progress/kendo-angular-scheduler": "KendoAngularScheduler",
        "@progress/kendo-angular-scrollview": "KendoAngularScrollview",
        "@progress/kendo-angular-sortable": "KendoAngularSortable",
        "@progress/kendo-angular-toolbar": "KendoAngularToolbar",
        "@progress/kendo-angular-tooltip": "KendoAngularTooltip",
        "@progress/kendo-angular-treelist": "KendoAngularTreelist",
        "@progress/kendo-angular-treeview": "KendoAngularTreeview",
        "@progress/kendo-angular-typography": "KendoAngularTypography",
        "@progress/kendo-angular-upload": "KendoAngularUpload",
        "@progress/kendo-charts": "KendoCharts",
        "@progress/kendo-common": "KendoCommon",
        "@progress/kendo-data-query": "KendoDataQuery",
        "@progress/kendo-date-math": "KendoDateMath",
        "@progress/kendo-drawing": "KendoDrawing",
        "@progress/kendo-editor-common": "KendoEditorCommon",
        "@progress/kendo-file-saver": "KendoFileSaver",
        "@progress/kendo-licensing": "KendoLicensing",
        "@progress/kendo-ooxml": "KendoOoxml",
        "@progress/kendo-popup-common": "KendoPopupCommon",
        "@progress/kendo-recurrence": "KendoRecurrence",
        "@progress/kendo-ripple": "KendoRipple",
        "@telerik/kendo-draggable": "KendoDraggable",
        "@telerik/kendo-intl": "KendoIntl"
    }
};
