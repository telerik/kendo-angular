(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/action-buttons/action-buttons.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/action-buttons/action-buttons.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"action-buttons\">\n    <a class=\"k-button k-flat k-text-left\" href=\"https://github.com/telerik/kendo-angular/tree/master/examples-standalone/grid-charts-integration\" target=\"_blank\"\n    role=\"button\"><span class=\"k-icon k-i-download\"></span>Download on Github</a>\n    <a class=\"k-button k-flat k-text-left\" href=\"https://www.telerik.com/kendo-angular-ui/components/grid/how-to/grid-charts-integration/\" target=\"_blank\"\n    role=\"button\"><span class=\"k-icon k-i-file-txt\"></span>Documentation</a>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/charts/common/stocks-chart.template.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/charts/common/stocks-chart.template.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kendo-drawer-container>\n    <kendo-drawer #drawer [mode]=\"'push'\" position=\"end\" [(expanded)]=\"expanded\">\n        <ng-template kendoDrawerTemplate>\n            <h3> Configuration</h3>\n            <select-chart-type [data]=\"seriesTypes\" [chartName]=\"chartConfiguration.chartName\" (valueChange)=\"onValueChange($event)\"></select-chart-type>\n            <select-series [data]=\"series\" (valueChange)=\"selectedSeries = $event\"></select-series>\n        </ng-template>\n    </kendo-drawer>\n\n    <kendo-drawer-content>\n        <div class=\"drawer-content\">\n            <kendo-chart #chart>\n                <kendo-chart-title text=\"Details per Stock\"></kendo-chart-title>\n                <kendo-chart-series>\n                    <kendo-chart-series-item *ngFor=\"let series of selectedSeries\" [type]=\"chartConfiguration.seriesType\"\n                        [stack]=\"chartConfiguration.stack\" [gap]=\"2\" [spacing]=\"0.25\" [data]=\"data\" [field]=\"series\"\n                        [name]=\"getTitle(series)\" [categoryField]=\"'symbol'\">\n                        <kendo-chart-series-item-tooltip>\n                            <ng-template let-value=\"value\">\n                                {{getTitle(series)}}: {{value}}\n                            </ng-template>\n                        </kendo-chart-series-item-tooltip>\n                    </kendo-chart-series-item>\n                </kendo-chart-series>\n\n                <kendo-chart-category-axis>\n                    <kendo-chart-category-axis-item [labels]=\"{ rotation: 'auto' }\">\n                    </kendo-chart-category-axis-item>\n                </kendo-chart-category-axis>\n\n                <kendo-chart-value-axis>\n                    <kendo-chart-value-axis-item [labels]=\"{ rotation: 'auto' }\">\n                    </kendo-chart-value-axis-item>\n                </kendo-chart-value-axis>\n                <kendo-chart-legend position=\"bottom\" orientation=\"horizontal\">\n                </kendo-chart-legend>\n            </kendo-chart>\n\n            <div kendoTooltip class=\"window-icon-buttons\" [offset]=\"1\">\n                <button kendoButton [iconClass]=\"'k-i-download k-icon'\" title=\"Export as PNG\" (click)=\"exportChart(chart)\"></button>\n                <button kendoButton [iconClass]=\"'k-i-gear k-icon'\" title=\"Configuration\" (click)=\"drawer.toggle()\"></button>\n            </div>\n        </div>\n    </kendo-drawer-content>\n</kendo-drawer-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/charts/day/day-chart.template.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/charts/day/day-chart.template.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kendo-chart class=\"charts-height\" [transitions]=\"false\" [chartArea]=\"{ background: 'transparent' }\">\n    <kendo-chart-value-axis>\n        <kendo-chart-value-axis-item [visible]=\"false\" [majorGridLines]=\"{ visible: false }\">\n        </kendo-chart-value-axis-item>\n    </kendo-chart-value-axis>\n    <kendo-chart-category-axis>\n        <kendo-chart-category-axis-item [visible]=\"false\" [majorGridLines]=\"{ visible: false }\">\n        </kendo-chart-category-axis-item>\n    </kendo-chart-category-axis>\n    <kendo-chart-series>\n        <kendo-chart-series-item [type]=\"'line'\" [data]=\"data\" [markers]=\"{ visible: false }\" [color]=\"changePct > 0 ? 'green' : 'red'\">\n        </kendo-chart-series-item>\n        <kendo-chart-series-item [type]=\"'area'\" [data]=\"data\" [markers]=\"{ visible: false }\" [color]=\"changePct > 0 ? 'green' : 'red'\"\n            [opacity]=\"0.2\">\n        </kendo-chart-series-item>\n    </kendo-chart-series>\n    <kendo-chart-tooltip></kendo-chart-tooltip>\n</kendo-chart>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/charts/pie-donut/pie-donut-chart.template.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/charts/pie-donut/pie-donut-chart.template.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kendo-drawer-container>\n    <kendo-drawer #drawer [mode]=\"'push'\" position=\"end\" [(expanded)]=\"expanded\">\n        <ng-template kendoDrawerTemplate>\n            <h3> Configuration</h3>\n            <select-chart-type [data]=\"seriesTypes\" [chartName]=\"chartConfiguration.chartName\" (valueChange)=\"onValueChange($event)\"></select-chart-type>\n            <label>Series:\n                <kendo-dropdownlist [data]=\"series\" [valuePrimitive]=\"true\" [textField]=\"'title'\" [valueField]=\"'field'\"\n                    [(value)]=\"selectedSeries\">\n                </kendo-dropdownlist>\n            </label>\n        </ng-template>\n    </kendo-drawer>\n\n    <kendo-drawer-content>\n        <div class=\"drawer-content\">\n            <kendo-chart #chart>\n                <kendo-chart-title [text]=\"getTitle(selectedSeries) + ' per stock'\"></kendo-chart-title>\n                <kendo-chart-series>\n                    <kendo-chart-series-item [type]=\"chartConfiguration.seriesType\" [data]=\"data\" [field]=\"selectedSeries\"\n                        [name]=\"selectedSeries\" [categoryField]=\"'symbol'\">\n                        <kendo-chart-series-item-tooltip>\n                            <ng-template let-dataItem=\"dataItem\" let-value=\"value\">\n                                {{dataItem.symbol}} {{getTitle(selectedSeries)}}: {{value}}\n                            </ng-template>\n                        </kendo-chart-series-item-tooltip>\n                    </kendo-chart-series-item>\n                </kendo-chart-series>\n                <kendo-chart-legend position=\"right\" orientation=\"vertical\">\n                </kendo-chart-legend>\n            </kendo-chart>\n\n            <div class=\"window-icon-buttons\">\n                <button kendoButton [iconClass]=\"'k-i-download k-icon'\" title=\"Export as PNG\" (click)=\"exportChart(chart)\"></button>\n                <button kendoButton [iconClass]=\"'k-i-gear k-icon'\" title=\"Configuration\" (click)=\"drawer.toggle()\"></button>\n            </div>\n        </div>\n    </kendo-drawer-content>\n</kendo-drawer-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/charts/scatter-bubble/scatter-bubble.template.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/charts/scatter-bubble/scatter-bubble.template.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kendo-drawer-container>\n    <kendo-drawer #drawer [mode]=\"'push'\" position=\"end\" [(expanded)]=\"expanded\">\n        <ng-template kendoDrawerTemplate>\n            <h3> Configuration</h3>\n            <select-chart-type [data]=\"seriesTypes\" [chartName]=\"chartConfiguration.chartName\" (valueChange)=\"onValueChange($event)\"></select-chart-type>\n            <select-series [data]=\"series\" (valueChange)=\"selectedSeries = $event;\"></select-series>\n        </ng-template>\n    </kendo-drawer>\n\n    <kendo-drawer-content>\n        <div class=\"drawer-content\">\n            <kendo-chart #chart>\n                <kendo-chart-title text=\"Details per Stock\"></kendo-chart-title>\n                <kendo-chart-x-axis>\n                    <kendo-chart-x-axis-item [max]=\"stockData.length - 1\" [majorUnit]=\"1\" [labels]=\"{ content: labelContent, rotation: 'auto' }\">\n                    </kendo-chart-x-axis-item>\n                </kendo-chart-x-axis>\n                <kendo-chart-series>\n                    <kendo-chart-series-item *ngFor=\"let series of selectedSeries\" [data]=\"stockData\" [type]=\"chartConfiguration.seriesType\"\n                        [xField]=\"'index'\" [yField]=\"series\" [name]=\"getTitle(series)\" [sizeField]=\"series\"\n                        [negativeValues]=\"{ visible: true }\">\n                        <kendo-chart-series-item-tooltip>\n                            <ng-template let-dataItem=\"dataItem\" let-value=\"value\">\n                                {{dataItem.symbol}} {{getTitle(series)}}: {{dataItem[series]}}\n                            </ng-template>\n                        </kendo-chart-series-item-tooltip>\n                    </kendo-chart-series-item>\n                </kendo-chart-series>\n                <kendo-chart-legend position=\"right\" orientation=\"vertical\">\n                </kendo-chart-legend>\n            </kendo-chart>\n\n            <div class=\"window-icon-buttons\">\n                <button kendoButton [iconClass]=\"'k-i-download k-icon'\" title=\"Export as PNG\" (click)=\"exportChart(chart)\"></button>\n                <button kendoButton [iconClass]=\"'k-i-gear k-icon'\" title=\"Configuration\" (click)=\"drawer.toggle()\"></button>\n            </div>\n        </div>\n    </kendo-drawer-content>\n</kendo-drawer-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/common/select-chart-type/select-chart-type.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/common/select-chart-type/select-chart-type.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>Type:\n    <kendo-dropdownlist [data]=\"data\" [value]=\"chartName\" (valueChange)=\"onChange($event)\">\n    </kendo-dropdownlist>\n</label>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/common/select-series/select-series.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/common/select-series/select-series.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>\n    Series:\n    <kendo-multiselect kendoMultiSelectSummaryTag [clearButton]=\"false\" [autoClose]=\"false\" [data]=\"data\"\n        [valuePrimitive]=\"true\" [textField]=\"'title'\" [valueField]=\"'field'\" [value]=\"selectedSeries\" (valueChange)=\"onChange($event)\"\n        [placeholder]=\"'Select the desired series'\">\n        <ng-template kendoMultiSelectGroupTagTemplate let-dataItems>\n            <span class=\"k-icon k-i-arrow-s\"></span>\n            {{ dataItems.length }} series selected\n        </ng-template>\n    </kendo-multiselect>\n</label>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/common/window/window.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/common/window/window.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<stocks-component *ngIf=\"isSimpleChart()\" [data]=\"data\" [chartConfiguration]=\"chartConfiguration\">\n</stocks-component>\n\n<pie-donut-stocks *ngIf=\"isCircularChart()\" [data]=\"data\" [chartConfiguration]=\"chartConfiguration\">\n</pie-donut-stocks>\n\n<scatter-bubble-charts *ngIf=\"isBubbleOrSeriesChart()\" [data]=\"data\" [chartConfiguration]=\"chartConfiguration\">\n</scatter-bubble-charts>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"container-fluid footer text-center d-flex align-items-center\">\n    <div class=\"w-100\">\n        <span class=\"footer-copyright text-center\">Copyright © 2019 Progress Software Corporation and/or its subsidiaries or affiliates.</span>\n        <span class=\"progress-logo d-inline-flex\"></span>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar d-flex align-items-center navbar-expand-lg py-3 header\">\n    <div class=\"container d-flex justify-content-between\">\n        <div class=\"align-self-center\">\n            <h1 class=\"mb-0 header-title\">My Stocks Portfolio</h1>\n        </div>\n        <div class=\"profile-wrapper d-flex flex-column align-self-center\">\n            <div class=\"profile-image\"></div>\n            <div class=\"text-white-50\">Collin Johnson</div>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/stock-list/stock-list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/stock-list/stock-list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"k-custom-notification\">\n    <div class=\"k-widget k-notification k-notification-info\">\n        <div class=\"k-notification-wrap\">\n            <span class=\"k-icon k-i-info\"></span>\n            <div class=\"k-notification-content\">Select rows and right click the Grid in order to choose the desired\n                Chart and generate it.</div>\n        </div>\n    </div>\n</div>\n\n<kendo-grid #grid [data]=\"gridData\" [selectable]=\"selectableSettings\" [height]=\"500\" [kendoGridSelectBy]=\"selectBy\"\n    [selectedKeys]=\"mySelection\" (cellClick)=\"onCellClick($event)\" (selectionChange)=\"onSelectionChange()\">\n    <kendo-grid-checkbox-column [showSelectAll]=\"true\" [width]=\"30\"></kendo-grid-checkbox-column>\n\n    <kendo-grid-column class=\"grid-symbol-col\" field=\"symbol\" title=\"Symbol\" [width]=\"80\"></kendo-grid-column>\n    <kendo-grid-column field=\"name\" title=\"Name\" [width]=\"140\"></kendo-grid-column>\n\n    <kendo-grid-column class=\"price-col\" field=\"price\" title=\"Price\" [width]=\"80\">\n        <ng-template kendoGridHeaderTemplate let-dataItem>\n            Price\n            <span class=\"grid-header-subtitle\">(Intraday)</span>\n        </ng-template>\n        <ng-template kendoGridCellTemplate let-dataItem>\n            {{ dataItem.price | currency: 'USD' }}\n        </ng-template>\n    </kendo-grid-column>\n\n    <kendo-grid-column field=\"day_change\" title=\"Change\" media=\"(min-width: 768px)\">\n        <ng-template kendoGridCellTemplate let-dataItem>\n            <span [ngClass]=\"{ 'grid-cell-positive' : dataItem.day_change > 0, 'grid-cell-negative' : dataItem.day_change < 0 }\">\n                {{ dataItem.day_change > 0 ? ('+' + dataItem.day_change) : dataItem.day_change }}\n            </span>\n        </ng-template>\n    </kendo-grid-column>\n\n    <kendo-grid-column field=\"change_pct\" title=\"%Change\" media=\"(min-width: 768px)\">\n        <ng-template kendoGridCellTemplate let-dataItem>\n            <span [ngClass]=\"{ 'grid-cell-positive' : dataItem.change_pct > 0, 'grid-cell-negative' : dataItem.change_pct < 0 }\">\n                {{ dataItem.change_pct > 0 ? ('+' + dataItem.change_pct) : dataItem.change_pct }}%\n            </span>\n        </ng-template>\n    </kendo-grid-column>\n\n    <kendo-grid-column field=\"volume\" title=\"Volume\" [width]=\"100\" media=\"(min-width: 768px)\">\n        <ng-template kendoGridCellTemplate let-dataItem>\n            {{ dataItem.volume | numberFormat }}\n        </ng-template>\n    </kendo-grid-column>\n\n    <kendo-grid-column class=\"grid-avg-volume-col\" field=\"volume_avg\" title=\"Avg Vol\" media=\"(min-width: 768px)\">\n        <ng-template kendoGridHeaderTemplate let-dataItem>\n            Avg Vol\n            <span class=\"grid-header-subtitle\">(3 month)</span>\n        </ng-template>\n\n        <ng-template kendoGridCellTemplate let-dataItem>\n            {{ dataItem.volume_avg | numberFormat }}\n        </ng-template>\n    </kendo-grid-column>\n\n    <kendo-grid-column field=\"market_cap\" title=\"Market Cap\" media=\"(min-width: 1200px)\">\n        <ng-template kendoGridCellTemplate let-dataItem>\n            {{dataItem.market_cap | numberFormat}}\n        </ng-template>\n    </kendo-grid-column>\n\n    <kendo-grid-column class=\"grid-pe-ratio-col\" media=\"(min-width: 1200px)\" field=\"pe\" title=\"PE Ratio\">\n        <ng-template kendoGridHeaderTemplate let-dataItem>\n            PE Ratio\n            <span class=\"grid-header-subtitle\">(TTM)</span>\n        </ng-template>\n    </kendo-grid-column>\n\n    <kendo-grid-column class=\"grid-one-day-chart\" media=\"(min-width: 992px)\" field=\"intraday\" title=\"1 Day Chart\"\n        [width]=\"170\" [sortable]=\"false\">\n        <ng-template kendoGridCellTemplate let-dataItem>\n            <day-chart [data]=\"dataItem.intraday\" [changePct]=\"dataItem.change_pct\">\n            </day-chart>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-excel fileName=\"Stocks.xlsx\" [fetchData]=\"allData\">\n        <kendo-excelexport-column field=\"symbol\" title=\"Symbol\"></kendo-excelexport-column>\n        <kendo-excelexport-column field=\"Name\" title=\"Name\"></kendo-excelexport-column>\n        <kendo-excelexport-column field=\"price_col\" title=\"Price\"></kendo-excelexport-column>\n        <kendo-excelexport-column field=\"day_change\" title=\"Change\"></kendo-excelexport-column>\n        <kendo-excelexport-column field=\"change_pct\" title=\"% Change\"></kendo-excelexport-column>\n        <kendo-excelexport-column field=\"volume\" title=\"Volume\"></kendo-excelexport-column>\n        <kendo-excelexport-column field=\"volume_avg\" title=\"Average Volume\"></kendo-excelexport-column>\n        <kendo-excelexport-column field=\"market_cap\" title=\"Market Capital\"></kendo-excelexport-column>\n        <kendo-excelexport-column field=\"pe\" title=\"PE Ratio\"></kendo-excelexport-column>\n    </kendo-grid-excel>\n</kendo-grid>\n\n<kendo-contextmenu #gridmenu [items]=\"items\" (select)=\"onSelect($event)\" [openOnClick]=\"{toggle:'click'}\">\n    <ng-template kendoMenuItemTemplate let-item=\"item\" let-index=\"index\">\n        <span *ngIf=\"item.iconClass\" [ngClass]=\"item.iconClass\" class=\"chart-png\"></span>\n        <div class=\"menu-item\">{{ item.text }}</div>\n    </ng-template>\n</kendo-contextmenu>\n\n<kendo-window title=\"Stock Portfolio Details\" *ngIf=\"opened\" (close)=\"close()\" [top]=\"150\" [minWidth]=\"250\" [width]=\"700\"\n    [height]=\"550\">\n    <window-component [data]=\"mySelection\" [chartConfiguration]=\"chartConfiguration\"></window-component>\n</kendo-window>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `
        <app-header></app-header>

        <main class='container-fluid px-0'>
            <div class='container'>
                <app-stock-list></app-stock-list>
                <app-action-buttons></app-action-buttons>
            </div>
        </main>

        <app-footer></app-footer>
    `
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-charts */ "./node_modules/@progress/kendo-angular-charts/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-popup */ "./node_modules/@progress/kendo-angular-popup/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-menu */ "./node_modules/@progress/kendo-angular-menu/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var _components_charts_scatter_bubble_scatter_bubble_chart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/charts/scatter-bubble/scatter-bubble-chart.component */ "./src/app/components/charts/scatter-bubble/scatter-bubble-chart.component.ts");
/* harmony import */ var _components_charts_pie_donut_pie_donut_chart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/charts/pie-donut/pie-donut-chart.component */ "./src/app/components/charts/pie-donut/pie-donut-chart.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/stock-list/stock-list.component */ "./src/app/components/stock-list/stock-list.component.ts");
/* harmony import */ var _components_charts_common_stocks_chart_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/charts/common/stocks-chart.component */ "./src/app/components/charts/common/stocks-chart.component.ts");
/* harmony import */ var _components_charts_day_day_chart_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/charts/day/day-chart.component */ "./src/app/components/charts/day/day-chart.component.ts");
/* harmony import */ var _components_common_window_window_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/common/window/window.component */ "./src/app/components/common/window/window.component.ts");
/* harmony import */ var _components_common_select_series_select_series_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/common/select-series/select-series.component */ "./src/app/components/common/select-series/select-series.component.ts");
/* harmony import */ var _components_common_select_chart_type_select_chart_type_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/common/select-chart-type/select-chart-type.component */ "./src/app/components/common/select-chart-type/select-chart-type.component.ts");
/* harmony import */ var _components_action_buttons_action_buttons_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/action-buttons/action-buttons.component */ "./src/app/components/action-buttons/action-buttons.component.ts");
/* harmony import */ var _pipes_number_format_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pipes/number-format.pipe */ "./src/app/pipes/number-format.pipe.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_28__);





























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"],
            _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
            _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_7__["WindowModule"],
            _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__["DropDownsModule"],
            _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_8__["PopupModule"],
            _progress_kendo_angular_menu__WEBPACK_IMPORTED_MODULE_9__["ContextMenuModule"],
            _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_11__["InputsModule"],
            _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_12__["ButtonsModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_5__["ExcelModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_13__["LayoutModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
            _components_charts_common_stocks_chart_component__WEBPACK_IMPORTED_MODULE_21__["StocksChartComponent"],
            _components_charts_pie_donut_pie_donut_chart_component__WEBPACK_IMPORTED_MODULE_16__["PieDonutStockComponent"],
            _components_charts_scatter_bubble_scatter_bubble_chart_component__WEBPACK_IMPORTED_MODULE_15__["ScatterBubbleChartComponent"],
            _components_charts_day_day_chart_component__WEBPACK_IMPORTED_MODULE_22__["DayChartComponent"],
            _components_common_window_window_component__WEBPACK_IMPORTED_MODULE_23__["WindowComponent"],
            _components_common_select_series_select_series_component__WEBPACK_IMPORTED_MODULE_24__["SelectSeriesComponent"],
            _components_common_select_chart_type_select_chart_type_component__WEBPACK_IMPORTED_MODULE_25__["SelectChartTypeComponent"],
            _pipes_number_format_pipe__WEBPACK_IMPORTED_MODULE_27__["NumberFormatPipe"],
            _components_stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_20__["StockListComponent"],
            _components_action_buttons_action_buttons_component__WEBPACK_IMPORTED_MODULE_26__["ActionButtonsComponent"]
        ],
        entryComponents: [
            _components_charts_common_stocks_chart_component__WEBPACK_IMPORTED_MODULE_21__["StocksChartComponent"],
            _components_charts_pie_donut_pie_donut_chart_component__WEBPACK_IMPORTED_MODULE_16__["PieDonutStockComponent"],
            _components_charts_scatter_bubble_scatter_bubble_chart_component__WEBPACK_IMPORTED_MODULE_15__["ScatterBubbleChartComponent"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/action-buttons/action-buttons.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/action-buttons/action-buttons.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action-buttons {\n  padding: 20px;\n  position: fixed;\n  right: 25px;\n  bottom: 70px;\n  border-radius: 5px;\n  background-color: #fff;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n}\n.action-buttons > a {\n  display: block;\n  margin-bottom: 5px;\n}\n.action-buttons > a:last-child {\n  margin-bottom: 0;\n}\n.action-buttons .k-icon {\n  margin: -3px 8px 0 0;\n}\n@media (max-width: 767px) {\n  .action-buttons {\n    position: relative;\n    right: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcG9wb3YvcmVwb3Mva2VuZG8tYW5ndWxhci9ncmlkLWNoYXJ0cy1pbnRlZ3JhdGlvbi9zcmMvYXBwL2NvbXBvbmVudHMvYWN0aW9uLWJ1dHRvbnMvYWN0aW9uLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXBvcG92L3JlcG9zL2tlbmRvLWFuZ3VsYXIvZ3JpZC1jaGFydHMtaW50ZWdyYXRpb24vc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWN0aW9uLWJ1dHRvbnMvYWN0aW9uLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQ29EcUI7RURuRHJCLGVBQUE7RUFDQSxXQ21EbUI7RURsRG5CLFlDbURvQjtFRGxEcEIsa0JDbUQyQjtFRGxEM0Isc0JDREk7RURFSix5Q0NrRG9CO0FDbkR4QjtBRkdJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FFRFI7QUZHUTtFQUNJLGdCQUFBO0FFRFo7QUZLSTtFQUNJLG9CQUFBO0FFSFI7QUZPQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0VFSk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWN0aW9uLWJ1dHRvbnMvYWN0aW9uLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4uYWN0aW9uLWJ1dHRvbnMge1xuICAgIHBhZGRpbmc6ICRhY3Rpb24tYnV0dG9ucy1wYWRkaW5nO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogJGFjdGlvbi1idXR0b25zLXJpZ2h0O1xuICAgIGJvdHRvbTogJGFjdGlvbi1idXR0b25zLWJvdHRvbTtcbiAgICBib3JkZXItcmFkaXVzOiAkYWN0aW9uLWJ1dHRvbnMtYm9yZGVyLXJhZGl1cztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgYm94LXNoYWRvdzogJGFjdGlvbi1idXR0b25zLXNoYWRvdztcblxuICAgID4gYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuay1pY29uIHtcbiAgICAgICAgbWFyZ2luOiAtM3B4IDhweCAwIDA7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuYWN0aW9uLWJ1dHRvbnMge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgIH1cbn1cbiIsIi8vIHR5cG9ncmFwaHlcclxuJHJvYm90bzogJ1JvYm90bycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiR1YnVudG86ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG5cclxuJGZvbnQtd2VpZ2h0LTIwMDogMjAwO1xyXG5cclxuLy8gY29sb3JzXHJcbiR3aGl0ZTogI2ZmZjtcclxuJGJsYWNrOiAjMDAwO1xyXG4kd2hpdGUtNTA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xyXG4kdGV4dC1iYXNlOiAjMzczQTNDO1xyXG4kYm9yZGVyLWJhc2U6ICNkZGQ7XHJcbiRhY3RpdmUtc3RhdGUtYmFzZTogIzFDN0NENTtcclxuJGhvdmVyLWJnOiAjZTZlNmU2O1xyXG4kbmVnYXRpdmUtdmFsdWU6ICNEOTUzNEY7XHJcbiRwb3NpdGl2ZS12YWx1ZTogIzVDQjg1QztcclxuJGJvZHktYmFzZS1iZzogcmdiYSgyMzYsIDIzOCwgMjM5LCAwLjUpO1xyXG5cclxuLy8gbWFyZ2luc1xyXG4kbWFyZ2luLXNtOiA0cHg7XHJcbiRtYXJnaW4tbTogMiAqICRtYXJnaW4tc207XHJcblxyXG4vLyBmb250c1xyXG4kZm9udC1zaXplLWRlZmF1bHQ6IDE2cHg7XHJcblxyXG4vLyBoZWFkZXJcclxuJGhlYWRlci1oZWlnaHQ6IDE0MHB4O1xyXG4kcHJvZmlsZS1pbWFnZS13aWR0aDogNThweDtcclxuJHByb2ZpbGUtaW1hZ2UtaGVpZ2h0OiA1OHB4O1xyXG5cclxuLy8gZm9vdGVyXHJcbiRmb290ZXItcGFkZGluZzogMTBweDtcclxuJGZvb3Rlci1oZWlnaHQ6IDQzcHg7XHJcbiRmb290ZXItZm9udC1zaXplOiAkZm9udC1zaXplLWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1sb2dvLWhlaWdodDogMjBweDtcclxuJHByb2dyZXNzLWxvZ28td2lkdGg6IDEwMHB4O1xyXG5cclxuLy8gZHJvcGRvd25saXN0XHJcbiRkcm9wZG93bmxpc3QtZm9udC1zaXplOiAkZm9udC1zaXplLWRlZmF1bHQ7XHJcbiRkcm9wZG93bmxpc3QtaXRlbS1zZWxlY3RlZC1iZzogI0U5RUNFRjtcclxuJGRyb3Bkb3dubGlzdC1pdGVtLXNlbGVjdGVkLXRleHQ6ICRhY3RpdmUtc3RhdGUtYmFzZTtcclxuXHJcbiRkcm9wb3dubGlzdC1hZGQtbmV3LXBhZGRpbmc6IDhweDtcclxuJGRyb3Bvd25saXN0LWFkZC1uZXctd2lkdGg6IDEyNXB4O1xyXG4kZHJvcG93bmxpc3QtYWRkLW5ldy1oZWlnaHQ6IDQwcHg7XHJcblxyXG4vLyBncmlkXHJcbiRncmlkLWhlYWRlci1zdWJ0aXRsZTogMTNweDtcclxuJGdyaWQtcm93LXNlbGVjdGlvbi1iZzogIzAwN0JGRjtcclxuJGdyaWQtY2VsbC1wb3NpdGl2ZS1jb2xvcjogJHBvc2l0aXZlLXZhbHVlO1xyXG4kZ3JpZC1jZWxsLW5lZ2F0aXZlLWNvbG9yOiAkbmVnYXRpdmUtdmFsdWU7XHJcbiRncmlkLXNvcnRpbmctaWNvbi1tYXJnaW46ICRtYXJnaW4tc207XHJcbiRncmlkLXNvcnRpbmctaWNvbi1yaWdodC1wb3NpdGlvbjogMjBweDtcclxuXHJcbi8vIGFjdGlvbiBidXR0b25zXHJcbiRhY3Rpb24tYnV0dG9ucy1wYWRkaW5nOiAyMHB4O1xyXG4kYWN0aW9uLWJ1dHRvbnMtcmlnaHQ6IDI1cHg7XHJcbiRhY3Rpb24tYnV0dG9ucy1ib3R0b206IDcwcHg7XHJcbiRhY3Rpb24tYnV0dG9ucy1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiRhY3Rpb24tYnV0dG9ucy1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsMCwwLDAuMDgpO1xyXG5cclxuLy8gbm90aWZpY2F0aW9uXHJcbiRub3RpZmljYXRpb24tbWFyZ2luOiAzMHB4O1xyXG4iLCIuYWN0aW9uLWJ1dHRvbnMge1xuICBwYWRkaW5nOiAyMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAyNXB4O1xuICBib3R0b206IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG4uYWN0aW9uLWJ1dHRvbnMgPiBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5hY3Rpb24tYnV0dG9ucyA+IGE6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uYWN0aW9uLWJ1dHRvbnMgLmstaWNvbiB7XG4gIG1hcmdpbjogLTNweCA4cHggMCAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFjdGlvbi1idXR0b25zIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IGF1dG87XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/action-buttons/action-buttons.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/action-buttons/action-buttons.component.ts ***!
  \***********************************************************************/
/*! exports provided: ActionButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionButtonsComponent", function() { return ActionButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ActionButtonsComponent = class ActionButtonsComponent {
};
ActionButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-action-buttons',
        template: __webpack_require__(/*! raw-loader!./action-buttons.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/action-buttons/action-buttons.component.html"),
        styles: [__webpack_require__(/*! ./action-buttons.component.scss */ "./src/app/components/action-buttons/action-buttons.component.scss")]
    })
], ActionButtonsComponent);



/***/ }),

/***/ "./src/app/components/charts/common/stocks-chart.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/charts/common/stocks-chart.component.ts ***!
  \********************************************************************/
/*! exports provided: StocksChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksChartComponent", function() { return StocksChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data */ "./src/app/data.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./src/app/utils.ts");
/* harmony import */ var _progress_kendo_file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-file-saver */ "./node_modules/@progress/kendo-file-saver/dist/es2015/main.js");





let StocksChartComponent = class StocksChartComponent {
    constructor() {
        this.series = _data__WEBPACK_IMPORTED_MODULE_2__["series"];
        this.selectedSeries = ['price', 'pe'];
        this.seriesTypes = _data__WEBPACK_IMPORTED_MODULE_2__["seriesTypes"].simpleSeries;
        this.getTitle = _utils__WEBPACK_IMPORTED_MODULE_3__["getTitle"];
        this.expanded = false;
    }
    onValueChange(chartName) {
        this.chartConfiguration.stack = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getChartStack"])(chartName);
        this.chartConfiguration.seriesType = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getChartType"])(chartName);
    }
    exportChart(chart) {
        chart.exportImage().then((data) => {
            Object(_progress_kendo_file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(data, 'chart.png');
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StocksChartComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StocksChartComponent.prototype, "chartConfiguration", void 0);
StocksChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'stocks-component',
        template: __webpack_require__(/*! raw-loader!./stocks-chart.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/charts/common/stocks-chart.template.html")
    })
], StocksChartComponent);



/***/ }),

/***/ "./src/app/components/charts/day/day-chart.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/charts/day/day-chart.component.ts ***!
  \**************************************************************/
/*! exports provided: DayChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayChartComponent", function() { return DayChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DayChartComponent = class DayChartComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DayChartComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DayChartComponent.prototype, "changePct", void 0);
DayChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'day-chart',
        template: __webpack_require__(/*! raw-loader!./day-chart.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/charts/day/day-chart.template.html")
    })
], DayChartComponent);



/***/ }),

/***/ "./src/app/components/charts/pie-donut/pie-donut-chart.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/charts/pie-donut/pie-donut-chart.component.ts ***!
  \**************************************************************************/
/*! exports provided: PieDonutStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieDonutStockComponent", function() { return PieDonutStockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data */ "./src/app/data.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./src/app/utils.ts");
/* harmony import */ var _progress_kendo_file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-file-saver */ "./node_modules/@progress/kendo-file-saver/dist/es2015/main.js");





let PieDonutStockComponent = class PieDonutStockComponent {
    constructor() {
        this.selectedSeries = 'price';
        this.series = _data__WEBPACK_IMPORTED_MODULE_2__["series"];
        this.seriesTypes = _data__WEBPACK_IMPORTED_MODULE_2__["seriesTypes"].circularSeries;
        this.getTitle = _utils__WEBPACK_IMPORTED_MODULE_3__["getTitle"];
    }
    onValueChange(chartName) {
        this.chartConfiguration.seriesType = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getChartType"])(chartName);
    }
    exportChart(chart) {
        chart.exportImage().then((data) => {
            Object(_progress_kendo_file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(data, 'chart.png');
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PieDonutStockComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PieDonutStockComponent.prototype, "chartConfiguration", void 0);
PieDonutStockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'pie-donut-stocks',
        template: __webpack_require__(/*! raw-loader!./pie-donut-chart.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/charts/pie-donut/pie-donut-chart.template.html")
    })
], PieDonutStockComponent);



/***/ }),

/***/ "./src/app/components/charts/scatter-bubble/scatter-bubble-chart.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/charts/scatter-bubble/scatter-bubble-chart.component.ts ***!
  \************************************************************************************/
/*! exports provided: ScatterBubbleChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterBubbleChartComponent", function() { return ScatterBubbleChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data */ "./src/app/data.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./src/app/utils.ts");
/* harmony import */ var _progress_kendo_file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-file-saver */ "./node_modules/@progress/kendo-file-saver/dist/es2015/main.js");





let ScatterBubbleChartComponent = class ScatterBubbleChartComponent {
    constructor() {
        this.stockData = [];
        this.series = _data__WEBPACK_IMPORTED_MODULE_2__["series"];
        this.selectedSeries = ['price', 'pe'];
        this.seriesTypes = _data__WEBPACK_IMPORTED_MODULE_2__["seriesTypes"].complexSeries;
        this.getTitle = _utils__WEBPACK_IMPORTED_MODULE_3__["getTitle"];
        this.labelContent = this.labelContent.bind(this);
    }
    set data(value) {
        this.stockData = value.map((item, index) => {
            item.index = index;
            return item;
        });
    }
    labelContent(args) {
        if (args.value >= 0) {
            return this.stockData[args.value].symbol;
        }
        else {
            return '';
        }
    }
    onValueChange(chartName) {
        this.chartConfiguration.seriesType = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getChartType"])(chartName);
    }
    exportChart(chart) {
        chart.exportImage().then((data) => {
            Object(_progress_kendo_file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(data, 'chart.png');
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScatterBubbleChartComponent.prototype, "chartConfiguration", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScatterBubbleChartComponent.prototype, "data", null);
ScatterBubbleChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'scatter-bubble-charts',
        template: __webpack_require__(/*! raw-loader!./scatter-bubble.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/charts/scatter-bubble/scatter-bubble.template.html")
    })
], ScatterBubbleChartComponent);



/***/ }),

/***/ "./src/app/components/common/select-chart-type/select-chart-type.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/common/select-chart-type/select-chart-type.component.ts ***!
  \************************************************************************************/
/*! exports provided: SelectChartTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectChartTypeComponent", function() { return SelectChartTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SelectChartTypeComponent = class SelectChartTypeComponent {
    constructor() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onChange(chartName) {
        this.valueChange.emit(chartName);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectChartTypeComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectChartTypeComponent.prototype, "chartName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectChartTypeComponent.prototype, "valueChange", void 0);
SelectChartTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'select-chart-type',
        template: __webpack_require__(/*! raw-loader!./select-chart-type.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/common/select-chart-type/select-chart-type.component.html")
    })
], SelectChartTypeComponent);



/***/ }),

/***/ "./src/app/components/common/select-series/select-series.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/common/select-series/select-series.component.ts ***!
  \****************************************************************************/
/*! exports provided: SelectSeriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectSeriesComponent", function() { return SelectSeriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SelectSeriesComponent = class SelectSeriesComponent {
    constructor() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedSeries = ['price', 'pe'];
    }
    onChange(value) {
        this.selectedSeries = value;
        this.valueChange.emit(value);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectSeriesComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectSeriesComponent.prototype, "valueChange", void 0);
SelectSeriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'select-series',
        template: __webpack_require__(/*! raw-loader!./select-series.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/common/select-series/select-series.component.html")
    })
], SelectSeriesComponent);



/***/ }),

/***/ "./src/app/components/common/window/window.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/common/window/window.component.ts ***!
  \**************************************************************/
/*! exports provided: WindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowComponent", function() { return WindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WindowComponent = class WindowComponent {
    isBubbleOrSeriesChart() {
        return this.chartConfiguration.seriesType === 'scatter' || this.chartConfiguration.seriesType === 'bubble';
    }
    isCircularChart() {
        return this.chartConfiguration.seriesType === 'pie' || this.chartConfiguration.seriesType === 'donut';
    }
    isSimpleChart() {
        return this.chartConfiguration.seriesType !== 'pie' && this.chartConfiguration.seriesType !== 'donut' &&
            this.chartConfiguration.seriesType !== 'scatter' && this.chartConfiguration.seriesType !== 'bubble';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WindowComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WindowComponent.prototype, "chartConfiguration", void 0);
WindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'window-component',
        template: __webpack_require__(/*! raw-loader!./window.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/common/window/window.component.html")
    })
], WindowComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: fixed;\n  bottom: 0;\n  padding: 10px;\n  background: url('footer-bg.svg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: blue;\n  z-index: 999;\n  font-size: 16px;\n  color: #fff;\n}\n.footer .progress-logo {\n  width: 100px;\n  height: 20px;\n  vertical-align: middle;\n  background-image: url('progress-logo.svg');\n  background-position: center;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcG9wb3YvcmVwb3Mva2VuZG8tYW5ndWxhci9ncmlkLWNoYXJ0cy1pbnRlZ3JhdGlvbi9zcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hcG9wb3YvcmVwb3Mva2VuZG8tYW5ndWxhci9ncmlkLWNoYXJ0cy1pbnRlZ3JhdGlvbi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxhQzBCYTtFRHpCYixnQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQ1lnQjtFRFhoQixXQ0xJO0FDSVI7QUZHSTtFQUNJLFlDb0JjO0VEbkJkLFlDa0JlO0VEakJmLHNCQUFBO0VBQ0EsMENBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FFRFIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLy92YXJpYWJsZXNcIjtcblxuLmZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiAkZm9vdGVyLXBhZGRpbmc7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvZm9vdGVyLWJnLnN2ZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBmb250LXNpemU6ICRmb290ZXItZm9udC1zaXplO1xuICAgIGNvbG9yOiAkd2hpdGU7XG5cbiAgICAucHJvZ3Jlc3MtbG9nbyB7XG4gICAgICAgIHdpZHRoOiAkcHJvZ3Jlc3MtbG9nby13aWR0aDtcbiAgICAgICAgaGVpZ2h0OiAkcHJvZ3Jlc3MtbG9nby1oZWlnaHQ7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3Byb2dyZXNzLWxvZ28uc3ZnJyk7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB9XG59XG4iLCIvLyB0eXBvZ3JhcGh5XHJcbiRyb2JvdG86ICdSb2JvdG8nLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kdWJ1bnRvOiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxuXHJcbiRmb250LXdlaWdodC0yMDA6IDIwMDtcclxuXHJcbi8vIGNvbG9yc1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRibGFjazogIzAwMDtcclxuJHdoaXRlLTUwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcclxuJHRleHQtYmFzZTogIzM3M0EzQztcclxuJGJvcmRlci1iYXNlOiAjZGRkO1xyXG4kYWN0aXZlLXN0YXRlLWJhc2U6ICMxQzdDRDU7XHJcbiRob3Zlci1iZzogI2U2ZTZlNjtcclxuJG5lZ2F0aXZlLXZhbHVlOiAjRDk1MzRGO1xyXG4kcG9zaXRpdmUtdmFsdWU6ICM1Q0I4NUM7XHJcbiRib2R5LWJhc2UtYmc6IHJnYmEoMjM2LCAyMzgsIDIzOSwgMC41KTtcclxuXHJcbi8vIG1hcmdpbnNcclxuJG1hcmdpbi1zbTogNHB4O1xyXG4kbWFyZ2luLW06IDIgKiAkbWFyZ2luLXNtO1xyXG5cclxuLy8gZm9udHNcclxuJGZvbnQtc2l6ZS1kZWZhdWx0OiAxNnB4O1xyXG5cclxuLy8gaGVhZGVyXHJcbiRoZWFkZXItaGVpZ2h0OiAxNDBweDtcclxuJHByb2ZpbGUtaW1hZ2Utd2lkdGg6IDU4cHg7XHJcbiRwcm9maWxlLWltYWdlLWhlaWdodDogNThweDtcclxuXHJcbi8vIGZvb3RlclxyXG4kZm9vdGVyLXBhZGRpbmc6IDEwcHg7XHJcbiRmb290ZXItaGVpZ2h0OiA0M3B4O1xyXG4kZm9vdGVyLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1kZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtbG9nby1oZWlnaHQ6IDIwcHg7XHJcbiRwcm9ncmVzcy1sb2dvLXdpZHRoOiAxMDBweDtcclxuXHJcbi8vIGRyb3Bkb3dubGlzdFxyXG4kZHJvcGRvd25saXN0LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1kZWZhdWx0O1xyXG4kZHJvcGRvd25saXN0LWl0ZW0tc2VsZWN0ZWQtYmc6ICNFOUVDRUY7XHJcbiRkcm9wZG93bmxpc3QtaXRlbS1zZWxlY3RlZC10ZXh0OiAkYWN0aXZlLXN0YXRlLWJhc2U7XHJcblxyXG4kZHJvcG93bmxpc3QtYWRkLW5ldy1wYWRkaW5nOiA4cHg7XHJcbiRkcm9wb3dubGlzdC1hZGQtbmV3LXdpZHRoOiAxMjVweDtcclxuJGRyb3Bvd25saXN0LWFkZC1uZXctaGVpZ2h0OiA0MHB4O1xyXG5cclxuLy8gZ3JpZFxyXG4kZ3JpZC1oZWFkZXItc3VidGl0bGU6IDEzcHg7XHJcbiRncmlkLXJvdy1zZWxlY3Rpb24tYmc6ICMwMDdCRkY7XHJcbiRncmlkLWNlbGwtcG9zaXRpdmUtY29sb3I6ICRwb3NpdGl2ZS12YWx1ZTtcclxuJGdyaWQtY2VsbC1uZWdhdGl2ZS1jb2xvcjogJG5lZ2F0aXZlLXZhbHVlO1xyXG4kZ3JpZC1zb3J0aW5nLWljb24tbWFyZ2luOiAkbWFyZ2luLXNtO1xyXG4kZ3JpZC1zb3J0aW5nLWljb24tcmlnaHQtcG9zaXRpb246IDIwcHg7XHJcblxyXG4vLyBhY3Rpb24gYnV0dG9uc1xyXG4kYWN0aW9uLWJ1dHRvbnMtcGFkZGluZzogMjBweDtcclxuJGFjdGlvbi1idXR0b25zLXJpZ2h0OiAyNXB4O1xyXG4kYWN0aW9uLWJ1dHRvbnMtYm90dG9tOiA3MHB4O1xyXG4kYWN0aW9uLWJ1dHRvbnMtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4kYWN0aW9uLWJ1dHRvbnMtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLDAsMCwwLjA4KTtcclxuXHJcbi8vIG5vdGlmaWNhdGlvblxyXG4kbm90aWZpY2F0aW9uLW1hcmdpbjogMzBweDtcclxuIiwiLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9vdGVyLWJnLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgei1pbmRleDogOTk5O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmZvb3RlciAucHJvZ3Jlc3MtbG9nbyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvcHJvZ3Jlc3MtbG9nby5zdmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  height: 140px;\n  background: url('header-bg.svg');\n  background-position: bottom;\n  background-repeat: no-repeat;\n}\n.header h1 {\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: 200;\n  color: #fff;\n}\n.header .profile-wrapper {\n  outline: none;\n}\n.header .profile-image {\n  align-self: center;\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  background-image: url('user.jpg');\n  background-size: cover;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcG9wb3YvcmVwb3Mva2VuZG8tYW5ndWxhci9ncmlkLWNoYXJ0cy1pbnRlZ3JhdGlvbi9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hcG9wb3YvcmVwb3Mva2VuZG8tYW5ndWxhci9ncmlkLWNoYXJ0cy1pbnRlZ3JhdGlvbi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUN1Qlk7RUR0QlosZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FFREo7QUZHSTtFQUNJLGlDQ1BDO0VEUUQsZ0JDTlU7RURPVixXQ0pBO0FDR1I7QUZJSTtFQUNJLGFBQUE7QUVGUjtBRktJO0VBQ0ksa0JBQUE7RUFDQSxXQ09jO0VETmQsWUNPZTtFRE5mLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FFSFIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLy92YXJpYWJsZXNcIjtcblxuLmhlYWRlciB7XG4gICAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9oZWFkZXItYmcuc3ZnJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkdWJ1bnRvO1xuICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LTIwMDtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICB9XG5cbiAgICAucHJvZmlsZS13cmFwcGVyIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICAucHJvZmlsZS1pbWFnZSB7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6ICRwcm9maWxlLWltYWdlLXdpZHRoO1xuICAgICAgICBoZWlnaHQ6ICRwcm9maWxlLWltYWdlLWhlaWdodDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy91c2VyLmpwZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgfVxufVxuIiwiLy8gdHlwb2dyYXBoeVxyXG4kcm9ib3RvOiAnUm9ib3RvJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuJHVidW50bzogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcblxyXG4kZm9udC13ZWlnaHQtMjAwOiAyMDA7XHJcblxyXG4vLyBjb2xvcnNcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmxhY2s6ICMwMDA7XHJcbiR3aGl0ZS01MDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XHJcbiR0ZXh0LWJhc2U6ICMzNzNBM0M7XHJcbiRib3JkZXItYmFzZTogI2RkZDtcclxuJGFjdGl2ZS1zdGF0ZS1iYXNlOiAjMUM3Q0Q1O1xyXG4kaG92ZXItYmc6ICNlNmU2ZTY7XHJcbiRuZWdhdGl2ZS12YWx1ZTogI0Q5NTM0RjtcclxuJHBvc2l0aXZlLXZhbHVlOiAjNUNCODVDO1xyXG4kYm9keS1iYXNlLWJnOiByZ2JhKDIzNiwgMjM4LCAyMzksIDAuNSk7XHJcblxyXG4vLyBtYXJnaW5zXHJcbiRtYXJnaW4tc206IDRweDtcclxuJG1hcmdpbi1tOiAyICogJG1hcmdpbi1zbTtcclxuXHJcbi8vIGZvbnRzXHJcbiRmb250LXNpemUtZGVmYXVsdDogMTZweDtcclxuXHJcbi8vIGhlYWRlclxyXG4kaGVhZGVyLWhlaWdodDogMTQwcHg7XHJcbiRwcm9maWxlLWltYWdlLXdpZHRoOiA1OHB4O1xyXG4kcHJvZmlsZS1pbWFnZS1oZWlnaHQ6IDU4cHg7XHJcblxyXG4vLyBmb290ZXJcclxuJGZvb3Rlci1wYWRkaW5nOiAxMHB4O1xyXG4kZm9vdGVyLWhlaWdodDogNDNweDtcclxuJGZvb3Rlci1mb250LXNpemU6ICRmb250LXNpemUtZGVmYXVsdDtcclxuJHByb2dyZXNzLWxvZ28taGVpZ2h0OiAyMHB4O1xyXG4kcHJvZ3Jlc3MtbG9nby13aWR0aDogMTAwcHg7XHJcblxyXG4vLyBkcm9wZG93bmxpc3RcclxuJGRyb3Bkb3dubGlzdC1mb250LXNpemU6ICRmb250LXNpemUtZGVmYXVsdDtcclxuJGRyb3Bkb3dubGlzdC1pdGVtLXNlbGVjdGVkLWJnOiAjRTlFQ0VGO1xyXG4kZHJvcGRvd25saXN0LWl0ZW0tc2VsZWN0ZWQtdGV4dDogJGFjdGl2ZS1zdGF0ZS1iYXNlO1xyXG5cclxuJGRyb3Bvd25saXN0LWFkZC1uZXctcGFkZGluZzogOHB4O1xyXG4kZHJvcG93bmxpc3QtYWRkLW5ldy13aWR0aDogMTI1cHg7XHJcbiRkcm9wb3dubGlzdC1hZGQtbmV3LWhlaWdodDogNDBweDtcclxuXHJcbi8vIGdyaWRcclxuJGdyaWQtaGVhZGVyLXN1YnRpdGxlOiAxM3B4O1xyXG4kZ3JpZC1yb3ctc2VsZWN0aW9uLWJnOiAjMDA3QkZGO1xyXG4kZ3JpZC1jZWxsLXBvc2l0aXZlLWNvbG9yOiAkcG9zaXRpdmUtdmFsdWU7XHJcbiRncmlkLWNlbGwtbmVnYXRpdmUtY29sb3I6ICRuZWdhdGl2ZS12YWx1ZTtcclxuJGdyaWQtc29ydGluZy1pY29uLW1hcmdpbjogJG1hcmdpbi1zbTtcclxuJGdyaWQtc29ydGluZy1pY29uLXJpZ2h0LXBvc2l0aW9uOiAyMHB4O1xyXG5cclxuLy8gYWN0aW9uIGJ1dHRvbnNcclxuJGFjdGlvbi1idXR0b25zLXBhZGRpbmc6IDIwcHg7XHJcbiRhY3Rpb24tYnV0dG9ucy1yaWdodDogMjVweDtcclxuJGFjdGlvbi1idXR0b25zLWJvdHRvbTogNzBweDtcclxuJGFjdGlvbi1idXR0b25zLWJvcmRlci1yYWRpdXM6IDVweDtcclxuJGFjdGlvbi1idXR0b25zLXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwwLDAsMC4wOCk7XHJcblxyXG4vLyBub3RpZmljYXRpb25cclxuJG5vdGlmaWNhdGlvbi1tYXJnaW46IDMwcHg7XHJcbiIsIi5oZWFkZXIge1xuICBoZWlnaHQ6IDE0MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaGVhZGVyLWJnLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmhlYWRlciBoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMjAwO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkZXIgLnByb2ZpbGUtd3JhcHBlciB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uaGVhZGVyIC5wcm9maWxlLWltYWdlIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogNThweDtcbiAgaGVpZ2h0OiA1OHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy91c2VyLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/stock-list/stock-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/stock-list/stock-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".k-grid {\n  margin-bottom: 100px;\n  border-width: 0;\n}\n.k-grid td:first-child {\n  text-overflow: unset;\n}\n.k-grid .k-grid-header .k-header {\n  vertical-align: middle;\n}\n.k-grid .k-grid-header .k-header .grid-header-subtitle {\n  display: block;\n  margin: 0;\n  font-weight: normal;\n  font-size: 13px;\n}\n.k-grid .k-grid-header .k-header .k-link > .k-icon.k-i-sort-asc-sm,\n.k-grid .k-grid-header .k-header .k-link > .k-icon.k-i-sort-desc-sm {\n  margin-left: 4px;\n}\n.k-grid .k-grid-header .k-header .grid-header-subtitle + .k-icon.k-i-sort-asc-sm,\n.k-grid .k-grid-header .k-header .grid-header-subtitle + .k-i-sort-desc-sm {\n  position: absolute;\n  top: 50%;\n  margin-top: -10px;\n  right: 20px;\n}\n.k-grid .k-grid-content tr td {\n  vertical-align: top;\n}\n.k-grid tr.k-state-selected > td {\n  color: inherit;\n}\n.k-grid tr.k-state-selected > td.symbol-col {\n  color: #007BFF;\n}\n.k-grid .symbol-col {\n  color: #007BFF;\n}\n.k-grid th,\n.k-grid .symbol-col,\n.k-grid .price-col {\n  font-weight: bold;\n}\n.k-grid .grid-cell-positive {\n  color: #5CB85C;\n}\n.k-grid .grid-cell-negative {\n  color: #D9534F;\n}\n.k-custom-notification {\n  margin: 30px 0;\n}\n.menu-item {\n  margin-left: 10px;\n}\n.chart-png {\n  width: 20px;\n  height: 20px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-bottom: 3px;\n}\n.k-menu-group .k-item > .k-link {\n  padding: 3px 40px 3px 10px;\n}\n.k-animation-container .k-menu.k-context-menu .k-item > .k-state-active,\n.k-animation-container .k-item > .k-state-active {\n  background-color: initial;\n  color: initial;\n}\n.icon-bar {\n  background-image: url('bar.png');\n}\n.icon-column {\n  background-image: url('column.png');\n}\n.icon-area {\n  background-image: url('area.png');\n}\n.icon-scatter {\n  background-image: url('scatter.png');\n}\n.icon-bubble {\n  background-image: url('bubble.png');\n}\n.icon-pie {\n  background-image: url('pie.png');\n}\n.icon-radar {\n  background-image: url('radar.png');\n}\n.icon-line {\n  background-image: url('line.png');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcG9wb3YvcmVwb3Mva2VuZG8tYW5ndWxhci9ncmlkLWNoYXJ0cy1pbnRlZ3JhdGlvbi9zcmMvYXBwL2NvbXBvbmVudHMvc3RvY2stbGlzdC9zdG9jay1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N0b2NrLWxpc3Qvc3RvY2stbGlzdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hcG9wb3YvcmVwb3Mva2VuZG8tYW5ndWxhci9ncmlkLWNoYXJ0cy1pbnRlZ3JhdGlvbi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtBQ0RKO0FER0k7RUFDSSxvQkFBQTtBQ0RSO0FESUk7RUFDSSxzQkFBQTtBQ0ZSO0FESVE7RUFDSSxjQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUU4Qlc7QURoQ3ZCO0FES1E7O0VBRUksZ0JFSEE7QURBWjtBRE1ROztFQUVJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0VzQnVCO0FEMUJuQztBRFFJO0VBQ0ksbUJBQUE7QUNOUjtBRFNJO0VBQ0ksY0FBQTtBQ1BSO0FEVUk7RUFDSSxjRUtnQjtBRGJ4QjtBRFdJO0VBQ0ksY0VDZ0I7QURWeEI7QURZSTs7O0VBR0ksaUJBQUE7QUNWUjtBRGFJO0VBQ0ksY0UxQ1M7QUQrQmpCO0FEY0k7RUFDSSxjRS9DUztBRG1DakI7QURnQkE7RUFDSSxjQUFBO0FDYko7QURnQkE7RUFDSSxpQkFBQTtBQ2JKO0FEZ0JBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ2JKO0FEZ0JBO0VBQ0ksMEJBQUE7QUNiSjtBRGdCQTs7RUFFSSx5QkFBQTtFQUNBLGNBQUE7QUNiSjtBRGdCQTtFQUNJLGdDQUFBO0FDYko7QURnQkE7RUFDSSxtQ0FBQTtBQ2JKO0FEZ0JBO0VBQ0ksaUNBQUE7QUNiSjtBRGdCQTtFQUNJLG9DQUFBO0FDYko7QURnQkE7RUFDSSxtQ0FBQTtBQ2JKO0FEZ0JBO0VBQ0ksZ0NBQUE7QUNiSjtBRGdCQTtFQUNJLGtDQUFBO0FDYko7QURnQkE7RUFDSSxpQ0FBQTtBQ2JKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdG9jay1saXN0L3N0b2NrLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcblxuLmstZ3JpZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgYm9yZGVyLXdpZHRoOiAwO1xuXG4gICAgdGQ6Zmlyc3QtY2hpbGQge1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiB1bnNldDtcbiAgICB9XG5cbiAgICAuay1ncmlkLWhlYWRlciAuay1oZWFkZXIge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgIC5ncmlkLWhlYWRlci1zdWJ0aXRsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXNpemU6ICRncmlkLWhlYWRlci1zdWJ0aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5rLWxpbms+LmstaWNvbi5rLWktc29ydC1hc2Mtc20sXG4gICAgICAgIC5rLWxpbms+LmstaWNvbi5rLWktc29ydC1kZXNjLXNtIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkZ3JpZC1zb3J0aW5nLWljb24tbWFyZ2luO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyaWQtaGVhZGVyLXN1YnRpdGxlKy5rLWljb24uay1pLXNvcnQtYXNjLXNtLFxuICAgICAgICAuZ3JpZC1oZWFkZXItc3VidGl0bGUrLmstaS1zb3J0LWRlc2Mtc20ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtICN7JGdyaWQtc29ydGluZy1pY29uLXJpZ2h0LXBvc2l0aW9uIC8gMn07XG4gICAgICAgICAgICByaWdodDogJGdyaWQtc29ydGluZy1pY29uLXJpZ2h0LXBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmstZ3JpZC1jb250ZW50IHRyIHRkIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB9XG5cbiAgICB0ci5rLXN0YXRlLXNlbGVjdGVkPnRkIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuXG4gICAgdHIuay1zdGF0ZS1zZWxlY3RlZD50ZC5zeW1ib2wtY29sIHtcbiAgICAgICAgY29sb3I6ICRncmlkLXJvdy1zZWxlY3Rpb24tYmc7XG4gICAgfVxuXG4gICAgLnN5bWJvbC1jb2wge1xuICAgICAgICBjb2xvcjogJGdyaWQtcm93LXNlbGVjdGlvbi1iZztcbiAgICB9XG5cbiAgICB0aCxcbiAgICAuc3ltYm9sLWNvbCxcbiAgICAucHJpY2UtY29sIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmdyaWQtY2VsbC1wb3NpdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAkZ3JpZC1jZWxsLXBvc2l0aXZlLWNvbG9yO1xuICAgIH1cblxuICAgIC5ncmlkLWNlbGwtbmVnYXRpdmUge1xuICAgICAgICBjb2xvcjogJGdyaWQtY2VsbC1uZWdhdGl2ZS1jb2xvcjtcbiAgICB9XG59XG5cbi5rLWN1c3RvbS1ub3RpZmljYXRpb24ge1xuICAgIG1hcmdpbjogJG5vdGlmaWNhdGlvbi1tYXJnaW4gMDtcbn1cblxuLm1lbnUtaXRlbSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5jaGFydC1wbmcge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxuLmstbWVudS1ncm91cCAuay1pdGVtPi5rLWxpbmsge1xuICAgIHBhZGRpbmc6IDNweCA0MHB4IDNweCAxMHB4O1xufVxuXG4uay1hbmltYXRpb24tY29udGFpbmVyIC5rLW1lbnUuay1jb250ZXh0LW1lbnUgLmstaXRlbT4uay1zdGF0ZS1hY3RpdmUsXG4uay1hbmltYXRpb24tY29udGFpbmVyIC5rLWl0ZW0+Lmstc3RhdGUtYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xuICAgIGNvbG9yOiBpbml0aWFsO1xufVxuXG4uaWNvbi1iYXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2NoYXJ0cy1wbmcvYmFyLnBuZycpO1xufVxuXG4uaWNvbi1jb2x1bW4ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2NoYXJ0cy1wbmcvY29sdW1uLnBuZycpO1xufVxuXG4uaWNvbi1hcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9jaGFydHMtcG5nL2FyZWEucG5nJyk7XG59XG5cbi5pY29uLXNjYXR0ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2NoYXJ0cy1wbmcvc2NhdHRlci5wbmcnKTtcbn1cblxuLmljb24tYnViYmxlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9jaGFydHMtcG5nL2J1YmJsZS5wbmcnKTtcbn1cblxuLmljb24tcGllIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9jaGFydHMtcG5nL3BpZS5wbmcnKTtcbn1cblxuLmljb24tcmFkYXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2NoYXJ0cy1wbmcvcmFkYXIucG5nJyk7XG59XG5cbi5pY29uLWxpbmUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2NoYXJ0cy1wbmcvbGluZS5wbmcnKTtcbn0iLCIuay1ncmlkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIGJvcmRlci13aWR0aDogMDtcbn1cbi5rLWdyaWQgdGQ6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LW92ZXJmbG93OiB1bnNldDtcbn1cbi5rLWdyaWQgLmstZ3JpZC1oZWFkZXIgLmstaGVhZGVyIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5rLWdyaWQgLmstZ3JpZC1oZWFkZXIgLmstaGVhZGVyIC5ncmlkLWhlYWRlci1zdWJ0aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5rLWdyaWQgLmstZ3JpZC1oZWFkZXIgLmstaGVhZGVyIC5rLWxpbmsgPiAuay1pY29uLmstaS1zb3J0LWFzYy1zbSxcbi5rLWdyaWQgLmstZ3JpZC1oZWFkZXIgLmstaGVhZGVyIC5rLWxpbmsgPiAuay1pY29uLmstaS1zb3J0LWRlc2Mtc20ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLmstZ3JpZCAuay1ncmlkLWhlYWRlciAuay1oZWFkZXIgLmdyaWQtaGVhZGVyLXN1YnRpdGxlICsgLmstaWNvbi5rLWktc29ydC1hc2Mtc20sXG4uay1ncmlkIC5rLWdyaWQtaGVhZGVyIC5rLWhlYWRlciAuZ3JpZC1oZWFkZXItc3VidGl0bGUgKyAuay1pLXNvcnQtZGVzYy1zbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICByaWdodDogMjBweDtcbn1cbi5rLWdyaWQgLmstZ3JpZC1jb250ZW50IHRyIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5rLWdyaWQgdHIuay1zdGF0ZS1zZWxlY3RlZCA+IHRkIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4uay1ncmlkIHRyLmstc3RhdGUtc2VsZWN0ZWQgPiB0ZC5zeW1ib2wtY29sIHtcbiAgY29sb3I6ICMwMDdCRkY7XG59XG4uay1ncmlkIC5zeW1ib2wtY29sIHtcbiAgY29sb3I6ICMwMDdCRkY7XG59XG4uay1ncmlkIHRoLFxuLmstZ3JpZCAuc3ltYm9sLWNvbCxcbi5rLWdyaWQgLnByaWNlLWNvbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmstZ3JpZCAuZ3JpZC1jZWxsLXBvc2l0aXZlIHtcbiAgY29sb3I6ICM1Q0I4NUM7XG59XG4uay1ncmlkIC5ncmlkLWNlbGwtbmVnYXRpdmUge1xuICBjb2xvcjogI0Q5NTM0Rjtcbn1cblxuLmstY3VzdG9tLW5vdGlmaWNhdGlvbiB7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuXG4ubWVudS1pdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5jaGFydC1wbmcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxuLmstbWVudS1ncm91cCAuay1pdGVtID4gLmstbGluayB7XG4gIHBhZGRpbmc6IDNweCA0MHB4IDNweCAxMHB4O1xufVxuXG4uay1hbmltYXRpb24tY29udGFpbmVyIC5rLW1lbnUuay1jb250ZXh0LW1lbnUgLmstaXRlbSA+IC5rLXN0YXRlLWFjdGl2ZSxcbi5rLWFuaW1hdGlvbi1jb250YWluZXIgLmstaXRlbSA+IC5rLXN0YXRlLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XG4gIGNvbG9yOiBpbml0aWFsO1xufVxuXG4uaWNvbi1iYXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvY2hhcnRzLXBuZy9iYXIucG5nXCIpO1xufVxuXG4uaWNvbi1jb2x1bW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvY2hhcnRzLXBuZy9jb2x1bW4ucG5nXCIpO1xufVxuXG4uaWNvbi1hcmVhIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2NoYXJ0cy1wbmcvYXJlYS5wbmdcIik7XG59XG5cbi5pY29uLXNjYXR0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvY2hhcnRzLXBuZy9zY2F0dGVyLnBuZ1wiKTtcbn1cblxuLmljb24tYnViYmxlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2NoYXJ0cy1wbmcvYnViYmxlLnBuZ1wiKTtcbn1cblxuLmljb24tcGllIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2NoYXJ0cy1wbmcvcGllLnBuZ1wiKTtcbn1cblxuLmljb24tcmFkYXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvY2hhcnRzLXBuZy9yYWRhci5wbmdcIik7XG59XG5cbi5pY29uLWxpbmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvY2hhcnRzLXBuZy9saW5lLnBuZ1wiKTtcbn0iLCIvLyB0eXBvZ3JhcGh5XHJcbiRyb2JvdG86ICdSb2JvdG8nLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kdWJ1bnRvOiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxuXHJcbiRmb250LXdlaWdodC0yMDA6IDIwMDtcclxuXHJcbi8vIGNvbG9yc1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRibGFjazogIzAwMDtcclxuJHdoaXRlLTUwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcclxuJHRleHQtYmFzZTogIzM3M0EzQztcclxuJGJvcmRlci1iYXNlOiAjZGRkO1xyXG4kYWN0aXZlLXN0YXRlLWJhc2U6ICMxQzdDRDU7XHJcbiRob3Zlci1iZzogI2U2ZTZlNjtcclxuJG5lZ2F0aXZlLXZhbHVlOiAjRDk1MzRGO1xyXG4kcG9zaXRpdmUtdmFsdWU6ICM1Q0I4NUM7XHJcbiRib2R5LWJhc2UtYmc6IHJnYmEoMjM2LCAyMzgsIDIzOSwgMC41KTtcclxuXHJcbi8vIG1hcmdpbnNcclxuJG1hcmdpbi1zbTogNHB4O1xyXG4kbWFyZ2luLW06IDIgKiAkbWFyZ2luLXNtO1xyXG5cclxuLy8gZm9udHNcclxuJGZvbnQtc2l6ZS1kZWZhdWx0OiAxNnB4O1xyXG5cclxuLy8gaGVhZGVyXHJcbiRoZWFkZXItaGVpZ2h0OiAxNDBweDtcclxuJHByb2ZpbGUtaW1hZ2Utd2lkdGg6IDU4cHg7XHJcbiRwcm9maWxlLWltYWdlLWhlaWdodDogNThweDtcclxuXHJcbi8vIGZvb3RlclxyXG4kZm9vdGVyLXBhZGRpbmc6IDEwcHg7XHJcbiRmb290ZXItaGVpZ2h0OiA0M3B4O1xyXG4kZm9vdGVyLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1kZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtbG9nby1oZWlnaHQ6IDIwcHg7XHJcbiRwcm9ncmVzcy1sb2dvLXdpZHRoOiAxMDBweDtcclxuXHJcbi8vIGRyb3Bkb3dubGlzdFxyXG4kZHJvcGRvd25saXN0LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1kZWZhdWx0O1xyXG4kZHJvcGRvd25saXN0LWl0ZW0tc2VsZWN0ZWQtYmc6ICNFOUVDRUY7XHJcbiRkcm9wZG93bmxpc3QtaXRlbS1zZWxlY3RlZC10ZXh0OiAkYWN0aXZlLXN0YXRlLWJhc2U7XHJcblxyXG4kZHJvcG93bmxpc3QtYWRkLW5ldy1wYWRkaW5nOiA4cHg7XHJcbiRkcm9wb3dubGlzdC1hZGQtbmV3LXdpZHRoOiAxMjVweDtcclxuJGRyb3Bvd25saXN0LWFkZC1uZXctaGVpZ2h0OiA0MHB4O1xyXG5cclxuLy8gZ3JpZFxyXG4kZ3JpZC1oZWFkZXItc3VidGl0bGU6IDEzcHg7XHJcbiRncmlkLXJvdy1zZWxlY3Rpb24tYmc6ICMwMDdCRkY7XHJcbiRncmlkLWNlbGwtcG9zaXRpdmUtY29sb3I6ICRwb3NpdGl2ZS12YWx1ZTtcclxuJGdyaWQtY2VsbC1uZWdhdGl2ZS1jb2xvcjogJG5lZ2F0aXZlLXZhbHVlO1xyXG4kZ3JpZC1zb3J0aW5nLWljb24tbWFyZ2luOiAkbWFyZ2luLXNtO1xyXG4kZ3JpZC1zb3J0aW5nLWljb24tcmlnaHQtcG9zaXRpb246IDIwcHg7XHJcblxyXG4vLyBhY3Rpb24gYnV0dG9uc1xyXG4kYWN0aW9uLWJ1dHRvbnMtcGFkZGluZzogMjBweDtcclxuJGFjdGlvbi1idXR0b25zLXJpZ2h0OiAyNXB4O1xyXG4kYWN0aW9uLWJ1dHRvbnMtYm90dG9tOiA3MHB4O1xyXG4kYWN0aW9uLWJ1dHRvbnMtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4kYWN0aW9uLWJ1dHRvbnMtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLDAsMCwwLjA4KTtcclxuXHJcbi8vIG5vdGlmaWNhdGlvblxyXG4kbm90aWZpY2F0aW9uLW1hcmdpbjogMzBweDtcclxuIl19 */"

/***/ }),

/***/ "./src/app/components/stock-list/stock-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/stock-list/stock-list.component.ts ***!
  \***************************************************************/
/*! exports provided: StockListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockListComponent", function() { return StockListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data */ "./src/app/data.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/utils.ts");





let StockListComponent = class StockListComponent {
    constructor() {
        this.items = _data__WEBPACK_IMPORTED_MODULE_2__["menuItems"];
        this.opened = false;
        this.gridData = _data__WEBPACK_IMPORTED_MODULE_2__["stocksInPortfolio"];
        this.selectableSettings = {
            checkboxOnly: false,
            mode: 'multiple'
        };
        this.mySelection = _data__WEBPACK_IMPORTED_MODULE_2__["stocksInPortfolio"].slice(0, 4);
        this.allData = this.allData.bind(this);
    }
    onCellClick(e) {
        if (e.type === 'contextmenu') {
            const originalEvent = e.originalEvent;
            originalEvent.preventDefault();
            this.gridContextMenu.show({
                left: originalEvent.pageX,
                top: originalEvent.pageY
            });
        }
    }
    selectBy(e) {
        return e.dataItem;
    }
    onSelectionChange() {
        if (this.opened) {
            setTimeout(() => {
                this.mySelection = [...this.mySelection];
            });
        }
    }
    onSelect(e) {
        if (e.item.text === 'Charts' || e.item.items !== undefined) {
            return;
        }
        if (e.item.text === 'Export Excel') {
            this.grid.saveAsExcel();
        }
        else {
            this.chartConfiguration = {
                chartName: e.item.text,
                seriesType: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getChartType"])(e.item.text),
                stack: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getChartStack"])(e.item.text)
            };
            if (!this.opened) {
                this.opened = true;
            }
            this.gridContextMenu.hide();
        }
    }
    allData() {
        const result = {
            data: this.mySelection,
        };
        return result;
    }
    close() {
        this.opened = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridmenu', { static: false })
], StockListComponent.prototype, "gridContextMenu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { static: false })
], StockListComponent.prototype, "grid", void 0);
StockListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stock-list',
        template: __webpack_require__(/*! raw-loader!./stock-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/stock-list/stock-list.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./stock-list.component.scss */ "./src/app/components/stock-list/stock-list.component.scss")]
    })
], StockListComponent);



/***/ }),

/***/ "./src/app/data.ts":
/*!*************************!*\
  !*** ./src/app/data.ts ***!
  \*************************/
/*! exports provided: series, seriesTypes, menuItems, stocksInPortfolio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "series", function() { return series; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seriesTypes", function() { return seriesTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuItems", function() { return menuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stocksInPortfolio", function() { return stocksInPortfolio; });
const series = [
    { field: 'price', title: 'Price' },
    { field: 'pe', title: 'PE Ratio' },
    { field: 'volume', title: 'Volume' },
    { field: 'volume_avg', title: 'Avg Volume' },
    { field: 'market_cap', title: 'Market Cap' },
    { field: 'day_change', title: 'Day Change' },
    { field: 'change_pct', title: '% Change' }
];
const seriesTypes = {
    simpleSeries: [
        'Bar', 'Stack Bar', '100% Stack Bar', 'Column', 'Stack Column', '100% Stack Column', 'Area', 'Stack Area', '100% Stack Area', 'Line', 'Radar'
    ],
    complexSeries: ['Scatter', 'Bubble'],
    circularSeries: ['Pie', 'Donut']
};
const menuItems = [
    {
        text: 'Charts', items: [{
                text: 'Bar',
                items: [{ text: 'Bar' }, { text: 'Stack Bar' }, { text: '100% Stack Bar' }],
                iconClass: 'icon-bar'
            },
            {
                text: 'Column',
                items: [
                    { text: 'Column' },
                    { text: 'Stack Column' },
                    { text: '100% Stack Column' }
                ],
                iconClass: 'icon-column'
            },
            {
                text: 'Area',
                items: [
                    { text: 'Area' },
                    { text: 'Stack Area' },
                    { text: '100% Stack Area' }
                ],
                iconClass: 'icon-area'
            },
            {
                text: 'Pie',
                items: [{ text: 'Pie' }, { text: 'Donut' }],
                iconClass: 'icon-pie'
            },
            { text: 'Line', iconClass: 'icon-line' },
            { text: 'Radar', iconClass: 'icon-radar' },
            { text: 'Scatter', iconClass: 'icon-scatter' },
            { text: 'Bubble', iconClass: 'icon-bubble' }
        ],
        icon: 'k-icon k-i-validation-data'
    },
    { text: 'Export Excel', icon: 'k-icon k-i-excel' }
];
const stocksInPortfolio = [
    {
        symbol: 'AAN',
        name: 'Aaron\'s, Inc.',
        price: 76.61,
        day_change: -1.18,
        change_pct: -1.52,
        volume: 710442,
        volume_avg: 837114,
        market_cap: 5174814208,
        pe: 25.94,
        intraday: [
            77.77,
            77.48,
            77.47,
            77.22,
            77.29,
            76.9,
            76.69,
            76.65,
            76.69,
            76.82,
            76.75,
            76.81,
            76.87,
            76.84,
            76.7,
            76.65,
            76.44,
            76.29,
            76.42,
            76.32,
            76.2,
            75.94,
            75.87,
            75.8,
            75.99,
            76.09,
            75.8,
            75.82,
            75.91,
            75.84,
            75.85,
            76.01,
            75.99,
            75.92,
            75.99,
            76.06,
            76.06,
            76.11,
            76.17,
            76.18,
            76.17,
            76.13,
            76.04,
            75.88,
            75.72,
            75.69,
            75.92,
            75.99,
            76.04,
            76.07,
            76.03,
            75.95,
            75.75,
            75.58,
            75.8,
            75.87,
            75.93,
            76.08,
            75.95,
            76.01,
            76.05,
            76.07,
            76.16,
            76.21,
            76.2,
            76.38,
            76.41,
            76.43,
            76.38,
            76.51,
            76.7,
            76.65,
            76.71,
            76.68,
            76.65,
            76.46,
            76.53,
            76.59
        ]
    },
    {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        price: 246.58,
        day_change: 2.49,
        change_pct: 1.02,
        volume: 15827692,
        volume_avg: 20028962,
        market_cap: 1114344259584,
        pe: 20.94,
        intraday: [
            243.75,
            243.54,
            243.32,
            243.47,
            243.74,
            243.43,
            243.34,
            243.39,
            243.47,
            243.66,
            243.68,
            244.43,
            244.53,
            244.25,
            244.16,
            243.93,
            244.41,
            244.69,
            244.52,
            244.52,
            244.62,
            244.88,
            245.07,
            245.7,
            245.31,
            245.34,
            245.48,
            245.54,
            245.28,
            245.43,
            245.41,
            245.2,
            245.33,
            245.31,
            245.34,
            245.56,
            245.59,
            245.47,
            245.1,
            245.18,
            245.29,
            245.24,
            245.35,
            245.26,
            245.16,
            245.38,
            245.31,
            245.3,
            245.3,
            245.25,
            245.39,
            245.45,
            245.38,
            245.37,
            245.25,
            244.81,
            245.05,
            245.07,
            245.1,
            245.2,
            245.18,
            245.13,
            245.18,
            245.35,
            245.34,
            245.31,
            245.39,
            245.46,
            245.57,
            245.65,
            245.67,
            245.76,
            245.68,
            245.77,
            245.79,
            245.86,
            245.9,
            246.24
        ]
    },
    {
        symbol: 'ACN',
        name: 'Accenture plc',
        price: 183.07,
        day_change: -0.77,
        change_pct: -0.42,
        volume: 1369124,
        volume_avg: 1892150,
        market_cap: 116597284864,
        pe: 24.87,
        intraday: [
            184.08,
            184.36,
            183.49,
            183.77,
            183.74,
            183.57,
            183.62,
            183.76,
            184.13,
            183.95,
            183.99,
            184.16,
            184.05,
            183.85,
            183.81,
            183.84,
            184.4,
            184.34,
            184.4,
            184.32,
            184.24,
            184.45,
            184.5,
            184.54,
            184.52,
            184.55,
            184.58,
            184.71,
            184.63,
            184.74,
            184.58,
            184.29,
            184.13,
            184.12,
            184.1,
            184.11,
            184.21,
            184.21,
            184.11,
            184.05,
            184.06,
            184,
            183.94,
            183.9,
            183.89,
            183.9,
            183.94,
            183.83,
            183.9,
            183.75,
            183.73,
            183.78,
            183.78,
            183.92,
            183.9,
            183.75,
            183.87,
            183.87,
            183.83,
            183.81,
            183.7,
            183.4,
            183.42,
            183.53,
            183.53,
            183.6,
            183.64,
            183.5,
            183.46,
            183.51,
            183.54,
            183.62,
            183.59,
            183.66,
            183.54,
            183.4,
            183.24,
            183.31
        ]
    },
    {
        symbol: 'ADBE',
        name: 'Adobe Inc.',
        price: 270.98,
        day_change: 2.93,
        change_pct: 1.09,
        volume: 1511852,
        volume_avg: 3342325,
        market_cap: 131175735296,
        pe: 48.22,
        intraday: [
            267.66,
            267.8,
            268.63,
            269.04,
            269.44,
            269.13,
            269.3,
            269.95,
            270.13,
            269.81,
            269.9,
            270.2,
            270.35,
            270.2,
            270.14,
            270.33,
            271.13,
            270.73,
            270.55,
            270.31,
            270.46,
            271.06,
            271.54,
            271.31,
            270.86,
            270.97,
            271.18,
            271.33,
            271.16,
            271.29,
            271.11,
            270.73,
            270.61,
            270.82,
            271.02,
            270.95,
            271.18,
            271.07,
            270.96,
            271.03,
            271.02,
            270.95,
            270.91,
            270.93,
            270.88,
            271.06,
            271.03,
            270.89,
            271.02,
            270.95,
            271.04,
            270.74,
            270.86,
            270.57,
            270.85,
            270.68,
            270.63,
            270.59,
            270.59,
            270.7,
            270.82,
            270.35,
            270.53,
            270.73,
            270.76,
            271,
            271.06,
            270.64,
            270.65,
            270.79,
            270.88,
            270.88,
            270.9,
            271.02,
            270.77,
            270.72,
            270.68,
            270.59
        ]
    },
    {
        symbol: 'AGM',
        name: 'Federal Agricultural Mortgage Corporation',
        price: 84.57,
        day_change: 0.17,
        change_pct: 0.2,
        volume: 22444,
        volume_avg: 22114,
        market_cap: 890445952,
        pe: 9.46,
        intraday: [
            84.42,
            84.87,
            84.87,
            84.02,
            84.02,
            84.18,
            84.11,
            83.5,
            82.7,
            82.7,
            82.97,
            82.97,
            82.97,
            83.08,
            83.08,
            83.29,
            83.29,
            83.01,
            83.01,
            83.21,
            83.21,
            83.18,
            83.38,
            83.08,
            83.08,
            83.34,
            83.34,
            83.39,
            83.39,
            83.35,
            83.35,
            83.32,
            83.32,
            83.28,
            83.28,
            83.28,
            83.58,
            83.58,
            83.58,
            83.26,
            83.26,
            83.49,
            83.49,
            84.52,
            84.52,
            84.1,
            84.1,
            84.1,
            83.41,
            84.77,
            83.53,
            83.53,
            83.92,
            83.92,
            83.76,
            83.76,
            84.44,
            84.44,
            84.44,
            84.33,
            84.72,
            84.59
        ]
    },
    {
        symbol: 'AMZN',
        name: 'Amazon.com, Inc.',
        price: 1779.99,
        day_change: 17.78,
        change_pct: 1.01,
        volume: 2173743,
        volume_avg: 3771314,
        market_cap: 882513674240,
        pe: 78.87,
        intraday: [
            1762.22,
            1762,
            1763.11,
            1768.61,
            1768.02,
            1766.44,
            1764.64,
            1766.46,
            1767.14,
            1768.17,
            1767.75,
            1769.02,
            1768.68,
            1771.99,
            1771.46,
            1774.6,
            1778.5,
            1778.76,
            1776.4,
            1773.73,
            1774.49,
            1771.65,
            1772.55,
            1773.22,
            1773.5,
            1770.94,
            1769.19,
            1770.69,
            1771.39,
            1772.2,
            1770.41,
            1771.65,
            1769.62,
            1769.5,
            1769.54,
            1768.72,
            1768.31,
            1767.99,
            1767.33,
            1766.14,
            1765.66,
            1765.45,
            1765.79,
            1765.99,
            1767.82,
            1767.14,
            1768.4,
            1768.29,
            1767.83,
            1767.51,
            1769.12,
            1767.93,
            1768.07,
            1768.5,
            1769.81,
            1769.46,
            1775.4,
            1774.97,
            1772.7,
            1771,
            1768.94,
            1769.56,
            1774.53,
            1775.34,
            1778.57,
            1779.69,
            1780.34,
            1779.24,
            1778.32,
            1780,
            1781,
            1779.16,
            1778.02,
            1777.22,
            1777.04,
            1778.57,
            1780.24,
            1780
        ]
    },
    {
        symbol: 'ASML',
        name: 'ASML Holding N.V.',
        price: 263.99,
        day_change: 1.26,
        change_pct: 0.48,
        volume: 549797,
        volume_avg: 1164687,
        market_cap: 110834614272,
        pe: 37.94,
        intraday: [
            262.8,
            262.63,
            262.18,
            261.98,
            262.34,
            262.23,
            262.23,
            262.21,
            262.78,
            262.62,
            262.75,
            262.74,
            262.88,
            262.85,
            263.11,
            263,
            263.38,
            263.45,
            263.63,
            263.23,
            263.45,
            263.16,
            263.29,
            263.48,
            263.52,
            263.89,
            264.08,
            264.5,
            264.54,
            264.38,
            263.95,
            263.82,
            263.78,
            263.93,
            264.13,
            264.16,
            263.97,
            263.94,
            264,
            263.84,
            263.98,
            263.95,
            264.11,
            264.15,
            264.26,
            264.06,
            264.49,
            264.02,
            264.08,
            264.6,
            264.65,
            264.27,
            264.36,
            263.92,
            263.75,
            264.29,
            264.09,
            264.24,
            264.33,
            263.92,
            263.77,
            263.74,
            264.02,
            263.88,
            263.82,
            263.79,
            263.6,
            263.43,
            263.58,
            263.57,
            263.61,
            263.55,
            263.57,
            263.41,
            264.06
        ]
    },
    {
        symbol: 'AVGO',
        name: 'Broadcom Inc.',
        price: 289.82,
        day_change: 5.87,
        change_pct: 2.07,
        volume: 1987976,
        volume_avg: 1691400,
        market_cap: 114963193856,
        pe: 40.79,
        intraday: [
            283.88,
            284.32,
            284.93,
            284.65,
            285.68,
            285.99,
            286.07,
            285.96,
            286.29,
            286.21,
            286.29,
            286.64,
            286.62,
            286.22,
            286.17,
            285.92,
            286.8,
            286.83,
            287.17,
            287.14,
            287.66,
            287.87,
            287.92,
            288.42,
            288.4,
            288.42,
            288.8,
            288.9,
            289.24,
            289.27,
            288.96,
            288.16,
            288.27,
            288.4,
            288.8,
            288.8,
            289.16,
            288.92,
            288.97,
            289.09,
            289.16,
            288.75,
            288.88,
            289.1,
            289.4,
            290.08,
            290.01,
            290.26,
            290.67,
            290.22,
            290.47,
            290.91,
            290.79,
            291.15,
            291.27,
            290.16,
            290.1,
            289.79,
            290.02,
            290.05,
            290.03,
            289.9,
            289.92,
            290.29,
            290.22,
            290.28,
            290.24,
            290.46,
            290.64,
            290.62,
            290.67,
            290.61,
            290.63,
            290.19,
            290.01,
            290.2,
            289.89,
            289.75
        ]
    },
    {
        symbol: 'BNPQY',
        name: 'BNP Paribas SA',
        price: 26.43,
        day_change: 0.43,
        change_pct: 1.65,
        volume: 103645,
        volume_avg: 193571,
        market_cap: 66021871616,
        pe: null,
        intraday: [
            26,
            25.97,
            25.97,
            25.98,
            25.95,
            25.95,
            25.89,
            25.91,
            25.89,
            25.85,
            25.91,
            25.93,
            25.89,
            25.94,
            25.94,
            25.94,
            25.94,
            25.91,
            25.9,
            25.89,
            25.92,
            25.97,
            25.97,
            25.94,
            25.94,
            25.94,
            25.94,
            25.99,
            26.07,
            26.07,
            26.01,
            26.01,
            26.04,
            26.03,
            26.03,
            26.03,
            25.99,
            25.99,
            26.08,
            26.08,
            26.06,
            26.05,
            26.05,
            26.05,
            25.99,
            25.99,
            25.99,
            26.06,
            25.99,
            26.02,
            26.05,
            26.05,
            26,
            26,
            26,
            25.98,
            26,
            26,
            26.03,
            26.11,
            26.22,
            26.26,
            26.36,
            26.41,
            26.41,
            26.29,
            26.41,
            26.4,
            26.35,
            26.35,
            26.42,
            26.43,
            26.43
        ]
    },
    {
        symbol: 'CACC',
        name: 'Credit Acceptance Corporation',
        price: 439.2,
        day_change: -0.69,
        change_pct: -0.16,
        volume: 57324,
        volume_avg: 84857,
        market_cap: 8255554560,
        pe: 13.4,
        intraday: [
            439.4,
            438.08,
            438.08,
            438.57,
            438.57,
            439.86,
            439.86,
            440.89,
            440.89,
            439.95,
            439.95,
            440,
            440.8,
            440.58,
            439.52,
            439.03,
            438.46,
            437.69,
            437.29,
            438.59,
            437.05,
            437.25,
            437.34,
            438.89,
            438.89,
            438.89,
            440,
            438.22,
            437.41,
            438.13,
            438.14,
            437.57,
            437.14,
            436.77,
            436.77,
            437.89,
            437.31,
            437.31,
            437.09,
            437.09,
            436.91,
            436.91,
            437.43,
            437.43,
            437.22,
            437.22,
            436.83,
            436.47,
            436.47,
            436.82,
            436.82,
            438.84,
            438.84,
            437.4,
            437.4,
            438.35,
            438.35,
            438.2,
            439.57,
            440.49,
            438.99,
            438.67,
            440.14,
            439.22,
            439.77,
            439.77,
            439.25,
            439.43,
            438.9,
            439.24,
            438.69,
            438.71
        ]
    }
];


/***/ }),

/***/ "./src/app/pipes/helpers.ts":
/*!**********************************!*\
  !*** ./src/app/pipes/helpers.ts ***!
  \**********************************/
/*! exports provided: formatCurrency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return formatCurrency; });
const formatCurrency = (value) => {
    if (value >= 1000000000) {
        return (value / 1000000000).toFixed(3) + 'B';
    }
    if (value >= 1000000) {
        return (value / 1000000).toFixed(3) + 'M';
    }
    if (value >= 1000) {
        return (value / 1000).toFixed(3) + 'K';
    }
    return value;
};


/***/ }),

/***/ "./src/app/pipes/number-format.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/number-format.pipe.ts ***!
  \*********************************************/
/*! exports provided: NumberFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberFormatPipe", function() { return NumberFormatPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/app/pipes/helpers.ts");



let NumberFormatPipe = class NumberFormatPipe {
    transform(value) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["formatCurrency"])(value);
    }
};
NumberFormatPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'numberFormat'
    })
], NumberFormatPipe);



/***/ }),

/***/ "./src/app/utils.ts":
/*!**************************!*\
  !*** ./src/app/utils.ts ***!
  \**************************/
/*! exports provided: getTitle, getChartStack, getChartType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTitle", function() { return getTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartStack", function() { return getChartStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartType", function() { return getChartType; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/app/data.ts");

function getTitle(fieldName) {
    return _data__WEBPACK_IMPORTED_MODULE_0__["series"].find((item) => item.field === fieldName).title;
}
function getChartStack(chartTitle) {
    switch (chartTitle) {
        case 'Stack Area':
            return { type: 'normal' };
        case '100% Stack Area':
            return { type: '100%' };
        case 'Stack Bar':
            return { type: 'normal' };
        case '100% Stack Bar':
            return { type: '100%' };
        case 'Stack Column':
            return { type: 'normal' };
        case '100% Stack Column':
            return { type: '100%' };
        default:
            return false;
    }
}
function getChartType(chartTitle) {
    switch (chartTitle) {
        case 'Stack Area':
            return 'area';
        case '100% Stack Area':
            return 'area';
        case 'Stack Bar':
            return 'bar';
        case '100% Stack Bar':
            return 'bar';
        case 'Stack Column':
            return 'column';
        case '100% Stack Column':
            return 'column';
        case 'Radar':
            return 'radarLine';
        default:
            return chartTitle.toLowerCase();
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/apopov/repos/kendo-angular/grid-charts-integration/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map