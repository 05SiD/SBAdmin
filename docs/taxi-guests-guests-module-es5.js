(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taxi-guests-guests-module"],{

/***/ "./node_modules/primeng/fesm5/primeng-multiselect.js":
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm5/primeng-multiselect.js ***!
  \***********************************************************/
/*! exports provided: MULTISELECT_VALUE_ACCESSOR, MultiSelect, MultiSelectItem, MultiSelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MULTISELECT_VALUE_ACCESSOR", function() { return MULTISELECT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelect", function() { return MultiSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectItem", function() { return MultiSelectItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectModule", function() { return MultiSelectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ "./node_modules/primeng/fesm5/primeng-dom.js");
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/utils */ "./node_modules/primeng/fesm5/primeng-utils.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/fesm5/primeng-tooltip.js");










var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var MULTISELECT_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MultiSelect; }),
    multi: true
};
var MultiSelectItem = /** @class */ (function () {
    function MultiSelectItem() {
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MultiSelectItem.prototype.onOptionClick = function (event) {
        this.onClick.emit({
            originalEvent: event,
            option: this.option
        });
    };
    MultiSelectItem.prototype.onOptionKeydown = function (event) {
        this.onKeydown.emit({
            originalEvent: event,
            option: this.option
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelectItem.prototype, "option", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelectItem.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelectItem.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelectItem.prototype, "visible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelectItem.prototype, "itemSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelectItem.prototype, "template", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelectItem.prototype, "maxSelectionLimitReached", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
    ], MultiSelectItem.prototype, "onClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
    ], MultiSelectItem.prototype, "onKeydown", void 0);
    MultiSelectItem = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-multiSelectItem',
            template: "\n        <li class=\"ui-multiselect-item ui-corner-all\" (click)=\"onOptionClick($event)\" (keydown)=\"onOptionKeydown($event)\" [attr.aria-label]=\"option.label\"\n            [style.display]=\"visible ? 'block' : 'none'\" [attr.tabindex]=\"option.disabled ? null : '0'\" [ngStyle]=\"{'height': itemSize + 'px'}\"\n            [ngClass]=\"{'ui-state-highlight': selected, 'ui-state-disabled': (option.disabled || (maxSelectionLimitReached && !selected))}\">\n            <div class=\"ui-chkbox ui-widget\">\n                <div class=\"ui-chkbox-box ui-widget ui-corner-all ui-state-default\"\n                    [ngClass]=\"{'ui-state-active': selected}\">\n                    <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"{'pi pi-check': selected}\"></span>\n                </div>\n            </div>\n            <span *ngIf=\"!template\">{{option.label}}</span>\n            <ng-container *ngTemplateOutlet=\"template; context: {$implicit: option}\"></ng-container>\n        </li>\n    "
        })
    ], MultiSelectItem);
    return MultiSelectItem;
}());
var MultiSelect = /** @class */ (function () {
    function MultiSelect(el, renderer, cd) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.scrollHeight = '200px';
        this._defaultLabel = 'Choose';
        this.filter = true;
        this.displaySelectedLabel = true;
        this.maxSelectedLabels = 3;
        this.selectedItemsLabel = '{0} items selected';
        this.showToggleAll = true;
        this.emptyFilterMessage = 'No results found';
        this.resetFilterOnHide = false;
        this.dropdownIcon = 'pi pi-chevron-down';
        this.showHeader = true;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.filterBy = 'label';
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
        this.filterMatchMode = "contains";
        this.tooltip = '';
        this.tooltipPosition = 'right';
        this.tooltipPositionStyle = 'absolute';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPanelShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPanelHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
        this.disabledSelectedOptions = [];
    }
    Object.defineProperty(MultiSelect.prototype, "defaultLabel", {
        get: function () {
            return this._defaultLabel;
        },
        set: function (val) {
            this._defaultLabel = val;
            this.updateLabel();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiSelect.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (val) {
            var opts = this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_4__["ObjectUtils"].generateSelectItems(val, this.optionLabel) : val;
            this.visibleOptions = opts;
            this._options = opts;
            this.updateLabel();
            if (this.filterValue && this.filterValue.length) {
                this.activateFilter();
            }
        },
        enumerable: true,
        configurable: true
    });
    MultiSelect.prototype.ngOnInit = function () {
        this.updateLabel();
    };
    MultiSelect.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'item':
                    _this.itemTemplate = item.template;
                    break;
                case 'selectedItems':
                    _this.selectedItemsTemplate = item.template;
                    break;
                default:
                    _this.itemTemplate = item.template;
                    break;
            }
        });
    };
    MultiSelect.prototype.ngAfterViewInit = function () {
        if (this.overlayVisible) {
            this.show();
        }
    };
    MultiSelect.prototype.ngAfterViewChecked = function () {
        if (this.filtered) {
            this.alignOverlay();
            this.filtered = false;
        }
    };
    MultiSelect.prototype.writeValue = function (value) {
        this.value = value;
        this.updateLabel();
        this.updateFilledState();
        this.setDisabledSelectedOptions();
        this.checkSelectionLimit();
        this.cd.markForCheck();
    };
    MultiSelect.prototype.checkSelectionLimit = function () {
        if (this.selectionLimit && (this.value && this.value.length === this.selectionLimit)) {
            this.maxSelectionLimitReached = true;
        }
    };
    MultiSelect.prototype.updateFilledState = function () {
        this.filled = (this.valuesAsString != null && this.valuesAsString.length > 0);
    };
    MultiSelect.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    MultiSelect.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    MultiSelect.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    MultiSelect.prototype.onOptionClick = function (event) {
        var option = event.option;
        if (option.disabled) {
            return;
        }
        var optionValue = option.value;
        var selectionIndex = this.findSelectionIndex(optionValue);
        if (selectionIndex != -1) {
            this.value = this.value.filter(function (val, i) { return i != selectionIndex; });
            if (this.selectionLimit) {
                this.maxSelectionLimitReached = false;
            }
        }
        else {
            if (!this.selectionLimit || (!this.value || this.value.length < this.selectionLimit)) {
                this.value = __spread(this.value || [], [optionValue]);
            }
            this.checkSelectionLimit();
        }
        this.onModelChange(this.value);
        this.onChange.emit({ originalEvent: event.originalEvent, value: this.value, itemValue: optionValue });
        this.updateLabel();
        this.updateFilledState();
    };
    MultiSelect.prototype.isSelected = function (value) {
        return this.findSelectionIndex(value) != -1;
    };
    MultiSelect.prototype.findSelectionIndex = function (val) {
        var index = -1;
        if (this.value) {
            for (var i = 0; i < this.value.length; i++) {
                if (primeng_utils__WEBPACK_IMPORTED_MODULE_4__["ObjectUtils"].equals(this.value[i], val, this.dataKey)) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    MultiSelect.prototype.toggleAll = function (event) {
        if (this.isAllChecked()) {
            if (this.disabledSelectedOptions && this.disabledSelectedOptions.length > 0) {
                var value = [];
                value = __spread(this.disabledSelectedOptions);
                this.value = value;
            }
            else {
                this.value = [];
            }
        }
        else {
            var opts = this.getVisibleOptions();
            if (opts) {
                var value = [];
                if (this.disabledSelectedOptions && this.disabledSelectedOptions.length > 0) {
                    value = __spread(this.disabledSelectedOptions);
                }
                for (var i = 0; i < opts.length; i++) {
                    var option = opts[i];
                    if (!option.disabled) {
                        value.push(opts[i].value);
                    }
                }
                this.value = value;
            }
        }
        this.onModelChange(this.value);
        this.onChange.emit({ originalEvent: event, value: this.value });
        this.updateLabel();
    };
    MultiSelect.prototype.isAllChecked = function () {
        if (this.filterValue && this.filterValue.trim().length) {
            return this.value && this.visibleOptions && this.visibleOptions.length && this.isAllVisibleOptionsChecked();
        }
        else {
            var optionCount = this.getEnabledOptionCount();
            var disabledSelectedOptionCount = this.disabledSelectedOptions.length;
            return this.value && this.options && (this.value.length > 0 && this.value.length == optionCount + disabledSelectedOptionCount);
        }
    };
    MultiSelect.prototype.isAllVisibleOptionsChecked = function () {
        var e_1, _a;
        if (!this.visibleOptions || this.visibleOptions.length === 0) {
            return false;
        }
        else {
            try {
                for (var _b = __values(this.visibleOptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var option = _c.value;
                    if (!this.isSelected(option.value)) {
                        return false;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return true;
        }
    };
    MultiSelect.prototype.getEnabledOptionCount = function () {
        var e_2, _a;
        if (this.options) {
            var count = 0;
            try {
                for (var _b = __values(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var opt = _c.value;
                    if (!opt.disabled) {
                        count++;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return count;
        }
        else {
            return 0;
        }
    };
    MultiSelect.prototype.setDisabledSelectedOptions = function () {
        var e_3, _a;
        if (this.options) {
            this.disabledSelectedOptions = [];
            if (this.value) {
                try {
                    for (var _b = __values(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var opt = _c.value;
                        if (opt.disabled && this.isSelected(opt.value)) {
                            this.disabledSelectedOptions.push(opt.value);
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
    };
    MultiSelect.prototype.show = function () {
        var _this = this;
        if (!this.overlayVisible) {
            this.overlayVisible = true;
        }
        if (this.filter) {
            setTimeout(function () {
                if (_this.filterInputChild != undefined) {
                    _this.filterInputChild.nativeElement.focus();
                }
            }, 200);
        }
        this.bindDocumentClickListener();
    };
    MultiSelect.prototype.onOverlayAnimationStart = function (event) {
        switch (event.toState) {
            case 'visible':
                this.overlay = event.element;
                this.appendOverlay();
                if (this.autoZIndex) {
                    this.overlay.style.zIndex = String(this.baseZIndex + (++primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex));
                }
                this.alignOverlay();
                this.bindDocumentClickListener();
                this.bindDocumentResizeListener();
                this.onPanelShow.emit();
                break;
            case 'void':
                this.onOverlayHide();
                break;
        }
    };
    MultiSelect.prototype.appendOverlay = function () {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.overlay);
            else
                primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].appendChild(this.overlay, this.appendTo);
            this.overlay.style.minWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getWidth(this.containerViewChild.nativeElement) + 'px';
        }
    };
    MultiSelect.prototype.restoreOverlayAppend = function () {
        if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
        }
    };
    MultiSelect.prototype.alignOverlay = function () {
        if (this.overlay) {
            if (this.appendTo)
                primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].absolutePosition(this.overlay, this.containerViewChild.nativeElement);
            else
                primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].relativePosition(this.overlay, this.containerViewChild.nativeElement);
        }
    };
    MultiSelect.prototype.hide = function () {
        this.overlayVisible = false;
        this.unbindDocumentClickListener();
        if (this.resetFilterOnHide) {
            this.filterInputChild.nativeElement.value = '';
            this.onFilter();
        }
        this.onPanelHide.emit();
    };
    MultiSelect.prototype.close = function (event) {
        this.hide();
        event.preventDefault();
        event.stopPropagation();
    };
    MultiSelect.prototype.onMouseclick = function (event, input) {
        if (this.disabled || this.readonly) {
            return;
        }
        this.onClick.emit(event);
        if (!this.panelClick) {
            if (this.overlayVisible) {
                this.hide();
            }
            else {
                input.focus();
                this.show();
            }
        }
        this.selfClick = true;
    };
    MultiSelect.prototype.onInputFocus = function (event) {
        this.focus = true;
        this.onFocus.emit({ originalEvent: event });
    };
    MultiSelect.prototype.onInputBlur = function (event) {
        this.focus = false;
        this.onBlur.emit({ originalEvent: event });
        this.onModelTouched();
    };
    MultiSelect.prototype.onOptionKeydown = function (event) {
        if (this.readonly) {
            return;
        }
        switch (event.originalEvent.which) {
            //down
            case 40:
                var nextItem = this.findNextItem(event.originalEvent.target.parentElement);
                if (nextItem) {
                    nextItem.focus();
                }
                event.originalEvent.preventDefault();
                break;
            //up
            case 38:
                var prevItem = this.findPrevItem(event.originalEvent.target.parentElement);
                if (prevItem) {
                    prevItem.focus();
                }
                event.originalEvent.preventDefault();
                break;
            //enter
            case 13:
                this.onOptionClick(event);
                event.originalEvent.preventDefault();
                break;
        }
    };
    MultiSelect.prototype.findNextItem = function (item) {
        var nextItem = item.nextElementSibling;
        if (nextItem)
            return primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].hasClass(nextItem.children[0], 'ui-state-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].isHidden(nextItem.children[0]) ? this.findNextItem(nextItem) : nextItem.children[0];
        else
            return null;
    };
    MultiSelect.prototype.findPrevItem = function (item) {
        var prevItem = item.previousElementSibling;
        if (prevItem)
            return primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].hasClass(prevItem.children[0], 'ui-state-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].isHidden(prevItem.children[0]) ? this.findPrevItem(prevItem) : prevItem.children[0];
        else
            return null;
    };
    MultiSelect.prototype.onKeydown = function (event) {
        switch (event.which) {
            //down
            case 40:
                if (!this.overlayVisible && event.altKey) {
                    this.show();
                }
                break;
            //space
            case 32:
                if (!this.overlayVisible) {
                    this.show();
                    event.preventDefault();
                }
                break;
            //escape
            case 27:
                this.hide();
                break;
        }
    };
    MultiSelect.prototype.updateLabel = function () {
        if (this.value && this.options && this.value.length && this.displaySelectedLabel) {
            var label = '';
            for (var i = 0; i < this.value.length; i++) {
                var itemLabel = this.findLabelByValue(this.value[i]);
                if (itemLabel) {
                    if (label.length > 0) {
                        label = label + ', ';
                    }
                    label = label + itemLabel;
                }
            }
            if (this.value.length <= this.maxSelectedLabels) {
                this.valuesAsString = label;
            }
            else {
                var pattern = /{(.*?)}/;
                if (pattern.test(this.selectedItemsLabel)) {
                    this.valuesAsString = this.selectedItemsLabel.replace(this.selectedItemsLabel.match(pattern)[0], this.value.length + '');
                }
                else {
                    this.valuesAsString = this.selectedItemsLabel;
                }
            }
        }
        else {
            this.valuesAsString = this.defaultLabel;
        }
    };
    MultiSelect.prototype.findLabelByValue = function (val) {
        var label = null;
        for (var i = 0; i < this.options.length; i++) {
            var option = this.options[i];
            if (val == null && option.value == null || primeng_utils__WEBPACK_IMPORTED_MODULE_4__["ObjectUtils"].equals(val, option.value, this.dataKey)) {
                label = option.label;
                break;
            }
        }
        return label;
    };
    MultiSelect.prototype.onFilter = function () {
        var inputValue = this.filterInputChild.nativeElement.value;
        if (inputValue && inputValue.length) {
            this.filterValue = inputValue;
            this.activateFilter();
        }
        else {
            this.filterValue = null;
            this.visibleOptions = this.options;
            this.filtered = false;
        }
    };
    MultiSelect.prototype.activateFilter = function () {
        if (this.options && this.options.length) {
            var searchFields = this.filterBy.split(',');
            this.visibleOptions = primeng_utils__WEBPACK_IMPORTED_MODULE_4__["FilterUtils"].filter(this.options, searchFields, this.filterValue, this.filterMatchMode);
            this.filtered = true;
        }
    };
    MultiSelect.prototype.isItemVisible = function (option) {
        if (this.filterValue && this.filterValue.trim().length) {
            for (var i = 0; i < this.visibleOptions.length; i++) {
                if (this.visibleOptions[i].value == option.value) {
                    return true;
                }
            }
        }
        else {
            return true;
        }
    };
    MultiSelect.prototype.getVisibleOptions = function () {
        return this.visibleOptions || this.options;
    };
    MultiSelect.prototype.onHeaderCheckboxFocus = function () {
        this.headerCheckboxFocus = true;
    };
    MultiSelect.prototype.onHeaderCheckboxBlur = function () {
        this.headerCheckboxFocus = false;
    };
    MultiSelect.prototype.bindDocumentClickListener = function () {
        var _this = this;
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function () {
                if (!_this.selfClick && !_this.panelClick && _this.overlayVisible) {
                    _this.hide();
                }
                _this.selfClick = false;
                _this.panelClick = false;
                _this.cd.markForCheck();
            });
        }
    };
    MultiSelect.prototype.unbindDocumentClickListener = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    };
    MultiSelect.prototype.bindDocumentResizeListener = function () {
        this.documentResizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.documentResizeListener);
    };
    MultiSelect.prototype.unbindDocumentResizeListener = function () {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    };
    MultiSelect.prototype.onWindowResize = function () {
        if (!primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].isAndroid()) {
            this.hide();
        }
    };
    MultiSelect.prototype.onOverlayHide = function () {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.overlay = null;
    };
    MultiSelect.prototype.ngOnDestroy = function () {
        this.restoreOverlayAppend();
        this.onOverlayHide();
    };
    MultiSelect.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "scrollHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "defaultLabel", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "panelStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "panelStyleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "inputId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "readonly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "filter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "filterPlaceHolder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "overlayVisible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "tabindex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "appendTo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "dataKey", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "ariaLabelledBy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "displaySelectedLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "maxSelectedLabels", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "selectionLimit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "selectedItemsLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "showToggleAll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "emptyFilterMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "resetFilterOnHide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "dropdownIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "optionLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "showHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "autoZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "baseZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "filterBy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "virtualScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "itemSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "showTransitionOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "hideTransitionOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "ariaFilterLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "filterMatchMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "tooltip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "tooltipPosition", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "tooltipPositionStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "tooltipStyleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container', { static: true })
    ], MultiSelect.prototype, "containerViewChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('filterInput', { static: false })
    ], MultiSelect.prototype, "filterInputChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(primeng_api__WEBPACK_IMPORTED_MODULE_5__["Footer"], { static: true })
    ], MultiSelect.prototype, "footerFacet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(primeng_api__WEBPACK_IMPORTED_MODULE_5__["Header"], { static: true })
    ], MultiSelect.prototype, "headerFacet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeTemplate"])
    ], MultiSelect.prototype, "templates", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
    ], MultiSelect.prototype, "onChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
    ], MultiSelect.prototype, "onFocus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
    ], MultiSelect.prototype, "onBlur", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
    ], MultiSelect.prototype, "onClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
    ], MultiSelect.prototype, "onPanelShow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
    ], MultiSelect.prototype, "onPanelHide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], MultiSelect.prototype, "options", null);
    MultiSelect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-multiSelect',
            template: "\n        <div #container [ngClass]=\"{'ui-multiselect ui-widget ui-state-default ui-corner-all':true,'ui-multiselect-open':overlayVisible,'ui-state-focus':focus,'ui-state-disabled': disabled}\" [ngStyle]=\"style\" [class]=\"styleClass\"\n            (click)=\"onMouseclick($event,in)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #in type=\"text\" readonly=\"readonly\" [attr.id]=\"inputId\" [attr.name]=\"name\" (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\"\n                       [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\" (keydown)=\"onKeydown($event)\" aria-haspopup=\"listbox\" [attr.aria-expanded]=\"overlayVisible\" \n                       [attr.aria-labelledby]=\"ariaLabelledBy\">\n            </div>\n            <div class=\"ui-multiselect-label-container\" [pTooltip]=\"tooltip\" [tooltipPosition]=\"tooltipPosition\" [positionStyle]=\"tooltipPositionStyle\" [tooltipStyleClass]=\"tooltipStyleClass\">\n                <span class=\"ui-multiselect-label ui-corner-all\">\n                    <ng-container *ngIf=\"!selectedItemsTemplate\">{{valuesAsString}}</ng-container>\n                    <ng-container *ngTemplateOutlet=\"selectedItemsTemplate; context: {$implicit: value}\"></ng-container>\n                </span>\n            </div>\n            <div [ngClass]=\"{'ui-multiselect-trigger ui-state-default ui-corner-right':true}\">\n                <span class=\"ui-multiselect-trigger-icon ui-clickable\" [ngClass]=\"dropdownIcon\"></span>\n            </div>\n            <div *ngIf=\"overlayVisible\" [ngClass]=\"['ui-multiselect-panel ui-widget ui-widget-content ui-corner-all ui-shadow']\" [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\"\n                [ngStyle]=\"panelStyle\" [class]=\"panelStyleClass\" (click)=\"panelClick=true\" (keydown)=\"onKeydown($event)\">\n                <div class=\"ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix\" [ngClass]=\"{'ui-multiselect-header-no-toggleall': !showToggleAll}\" *ngIf=\"showHeader\">\n                <ng-content select=\"p-header\"></ng-content>  \n                <div class=\"ui-chkbox ui-widget\" *ngIf=\"showToggleAll && !selectionLimit\">\n                        <div class=\"ui-helper-hidden-accessible\">\n                            <input type=\"checkbox\" readonly=\"readonly\" [checked]=\"isAllChecked()\" (focus)=\"onHeaderCheckboxFocus()\" (blur)=\"onHeaderCheckboxBlur()\" (keydown.space)=\"toggleAll($event)\">\n                        </div>\n                        <div class=\"ui-chkbox-box ui-widget ui-corner-all ui-state-default\" role=\"checkbox\" [attr.aria-checked]=\"allSelected\" [ngClass]=\"{'ui-state-active':isAllChecked(), 'ui-state-focus': headerCheckboxFocus}\" (click)=\"toggleAll($event)\">\n                            <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"{'pi pi-check':isAllChecked()}\"></span>\n                        </div>\n                    </div>\n                    <div class=\"ui-multiselect-filter-container\" *ngIf=\"filter\">\n                        <input #filterInput type=\"text\" role=\"textbox\" [value]=\"filterValue||''\" (input)=\"onFilter()\" class=\"ui-inputtext ui-widget ui-state-default ui-corner-all\" [attr.placeholder]=\"filterPlaceHolder\" [attr.aria-label]=\"ariaFilterLabel\">\n                        <span class=\"ui-multiselect-filter-icon pi pi-search\"></span>\n                    </div>\n                    <a class=\"ui-multiselect-close ui-corner-all\" tabindex=\"0\" (click)=\"close($event)\" (keydown.enter)=\"close($event)\">\n                        <span class=\"pi pi-times\"></span>\n                    </a>\n                </div>\n                <div class=\"ui-multiselect-items-wrapper\" [style.max-height]=\"virtualScroll ? 'auto' : (scrollHeight||'auto')\">\n                    <ul class=\"ui-multiselect-items ui-multiselect-list ui-widget-content ui-widget ui-corner-all ui-helper-reset\" role=\"listbox\" aria-multiselectable=\"true\">\n                        <ng-container *ngIf=\"!virtualScroll; else virtualScrollList\">\n                            <ng-template ngFor let-option let-i=\"index\" [ngForOf]=\"options\">\n                                <p-multiSelectItem [option]=\"option\" [selected]=\"isSelected(option.value)\" (onClick)=\"onOptionClick($event)\" (onKeydown)=\"onOptionKeydown($event)\" \n                                        [maxSelectionLimitReached]=\"maxSelectionLimitReached\" [visible]=\"isItemVisible(option)\" [template]=\"itemTemplate\"></p-multiSelectItem>\n                            </ng-template>\n                        </ng-container>\n                        <ng-template #virtualScrollList>\n                            <cdk-virtual-scroll-viewport #viewport [ngStyle]=\"{'height': scrollHeight}\" [itemSize]=\"itemSize\" *ngIf=\"virtualScroll && visibleOptions && visibleOptions.length\">\n                                <ng-container *cdkVirtualFor=\"let option of visibleOptions; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd\">\n                                    <p-multiSelectItem [option]=\"option\" [selected]=\"isSelected(option.value)\" (onClick)=\"onOptionClick($event)\" (onKeydown)=\"onOptionKeydown($event)\" \n                                        [maxSelectionLimitReached]=\"maxSelectionLimitReached\" [visible]=\"isItemVisible(option)\" [template]=\"itemTemplate\" [itemSize]=\"itemSize\"></p-multiSelectItem>\n                                </ng-container>\n                            </cdk-virtual-scroll-viewport>\n                        </ng-template>\n                        <li *ngIf=\"filter && visibleOptions && visibleOptions.length === 0\" class=\"ui-multiselect-empty-message\">{{emptyFilterMessage}}</li>\n                    </ul>\n                </div>\n                <div class=\"ui-multiselect-footer ui-widget-content\" *ngIf=\"footerFacet\">\n                    <ng-content select=\"p-footer\"></ng-content>\n                </div>\n            </div>\n        </div>\n    ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('overlayAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateY(5%)',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateY(0)',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{showTransitionParams}}')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{hideTransitionParams}}'))
                ])
            ],
            host: {
                '[class.ui-inputwrapper-filled]': 'filled',
                '[class.ui-inputwrapper-focus]': 'focus'
            },
            providers: [MULTISELECT_VALUE_ACCESSOR]
        })
    ], MultiSelect);
    return MultiSelect;
}());
var MultiSelectModule = /** @class */ (function () {
    function MultiSelectModule() {
    }
    MultiSelectModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"]],
            exports: [MultiSelect, primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"]],
            declarations: [MultiSelect, MultiSelectItem]
        })
    ], MultiSelectModule);
    return MultiSelectModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-multiselect.js.map


/***/ }),

/***/ "./node_modules/primeng/fesm5/primeng-slider.js":
/*!******************************************************!*\
  !*** ./node_modules/primeng/fesm5/primeng-slider.js ***!
  \******************************************************/
/*! exports provided: SLIDER_VALUE_ACCESSOR, Slider, SliderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLIDER_VALUE_ACCESSOR", function() { return SLIDER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderModule", function() { return SliderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ "./node_modules/primeng/fesm5/primeng-dom.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SLIDER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return Slider; }),
    multi: true
};
var Slider = /** @class */ (function () {
    function Slider(el, renderer, ngZone, cd) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.cd = cd;
        this.min = 0;
        this.max = 100;
        this.orientation = 'horizontal';
        this.tabindex = 0;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSlideEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.handleValues = [];
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
        this.handleIndex = 0;
    }
    Slider.prototype.onMouseDown = function (event, index) {
        if (this.disabled) {
            return;
        }
        this.dragging = true;
        this.updateDomData();
        this.sliderHandleClick = true;
        this.handleIndex = index;
        this.bindDragListeners();
        event.target.focus();
        event.preventDefault();
    };
    Slider.prototype.onTouchStart = function (event, index) {
        if (this.disabled) {
            return;
        }
        var touchobj = event.changedTouches[0];
        this.startHandleValue = (this.range) ? this.handleValues[index] : this.handleValue;
        this.dragging = true;
        this.handleIndex = index;
        if (this.orientation === 'horizontal') {
            this.startx = parseInt(touchobj.clientX, 10);
            this.barWidth = this.el.nativeElement.children[0].offsetWidth;
        }
        else {
            this.starty = parseInt(touchobj.clientY, 10);
            this.barHeight = this.el.nativeElement.children[0].offsetHeight;
        }
        event.preventDefault();
    };
    Slider.prototype.onTouchMove = function (event, index) {
        if (this.disabled) {
            return;
        }
        var touchobj = event.changedTouches[0], handleValue = 0;
        if (this.orientation === 'horizontal') {
            handleValue = Math.floor(((parseInt(touchobj.clientX, 10) - this.startx) * 100) / (this.barWidth)) + this.startHandleValue;
        }
        else {
            handleValue = Math.floor(((this.starty - parseInt(touchobj.clientY, 10)) * 100) / (this.barHeight)) + this.startHandleValue;
        }
        this.setValueFromHandle(event, handleValue);
        event.preventDefault();
    };
    Slider.prototype.onTouchEnd = function (event, index) {
        if (this.disabled) {
            return;
        }
        this.dragging = false;
        if (this.range)
            this.onSlideEnd.emit({ originalEvent: event, values: this.values });
        else
            this.onSlideEnd.emit({ originalEvent: event, value: this.value });
        event.preventDefault();
    };
    Slider.prototype.onBarClick = function (event) {
        if (this.disabled) {
            return;
        }
        if (!this.sliderHandleClick) {
            this.updateDomData();
            this.handleChange(event);
        }
        this.sliderHandleClick = false;
    };
    Slider.prototype.onHandleKeydown = function (event, handleIndex) {
        if (event.which == 38 || event.which == 39) {
            this.spin(event, 1, handleIndex);
        }
        else if (event.which == 37 || event.which == 40) {
            this.spin(event, -1, handleIndex);
        }
    };
    Slider.prototype.spin = function (event, dir, handleIndex) {
        var step = (this.step || 1) * dir;
        if (this.range) {
            this.handleIndex = handleIndex;
            this.updateValue(this.values[this.handleIndex] + step);
            this.updateHandleValue();
        }
        else {
            this.updateValue(this.value + step);
            this.updateHandleValue();
        }
        event.preventDefault();
    };
    Slider.prototype.handleChange = function (event) {
        var handleValue = this.calculateHandleValue(event);
        this.setValueFromHandle(event, handleValue);
    };
    Slider.prototype.bindDragListeners = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            if (!_this.dragListener) {
                _this.dragListener = _this.renderer.listen('document', 'mousemove', function (event) {
                    if (_this.dragging) {
                        _this.ngZone.run(function () {
                            _this.handleChange(event);
                        });
                    }
                });
            }
            if (!_this.mouseupListener) {
                _this.mouseupListener = _this.renderer.listen('document', 'mouseup', function (event) {
                    if (_this.dragging) {
                        _this.dragging = false;
                        _this.ngZone.run(function () {
                            if (_this.range) {
                                _this.onSlideEnd.emit({ originalEvent: event, values: _this.values });
                            }
                            else {
                                _this.onSlideEnd.emit({ originalEvent: event, value: _this.value });
                            }
                        });
                    }
                });
            }
        });
    };
    Slider.prototype.unbindDragListeners = function () {
        if (this.dragListener) {
            this.dragListener();
        }
        if (this.mouseupListener) {
            this.mouseupListener();
        }
    };
    Slider.prototype.setValueFromHandle = function (event, handleValue) {
        var newValue = this.getValueFromHandle(handleValue);
        if (this.range) {
            if (this.step) {
                this.handleStepChange(newValue, this.values[this.handleIndex]);
            }
            else {
                this.handleValues[this.handleIndex] = handleValue;
                this.updateValue(newValue, event);
            }
        }
        else {
            if (this.step) {
                this.handleStepChange(newValue, this.value);
            }
            else {
                this.handleValue = handleValue;
                this.updateValue(newValue, event);
            }
        }
    };
    Slider.prototype.handleStepChange = function (newValue, oldValue) {
        var diff = (newValue - oldValue);
        var val = oldValue;
        if (diff < 0) {
            val = oldValue + Math.ceil(newValue / this.step - oldValue / this.step) * this.step;
        }
        else if (diff > 0) {
            val = oldValue + Math.floor(newValue / this.step - oldValue / this.step) * this.step;
        }
        this.updateValue(val);
        this.updateHandleValue();
    };
    Slider.prototype.writeValue = function (value) {
        if (this.range)
            this.values = value || [0, 0];
        else
            this.value = value || 0;
        this.updateHandleValue();
        this.cd.markForCheck();
    };
    Slider.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Slider.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Slider.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    Object.defineProperty(Slider.prototype, "rangeStartLeft", {
        get: function () {
            return this.isVertical() ? 'auto' : this.handleValues[0] + '%';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "rangeStartBottom", {
        get: function () {
            return this.isVertical() ? this.handleValues[0] + '%' : 'auto';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "rangeEndLeft", {
        get: function () {
            return this.isVertical() ? 'auto' : this.handleValues[1] + '%';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "rangeEndBottom", {
        get: function () {
            return this.isVertical() ? this.handleValues[1] + '%' : 'auto';
        },
        enumerable: true,
        configurable: true
    });
    Slider.prototype.isVertical = function () {
        return this.orientation === 'vertical';
    };
    Slider.prototype.updateDomData = function () {
        var rect = this.el.nativeElement.children[0].getBoundingClientRect();
        this.initX = rect.left + primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getWindowScrollLeft();
        this.initY = rect.top + primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getWindowScrollTop();
        this.barWidth = this.el.nativeElement.children[0].offsetWidth;
        this.barHeight = this.el.nativeElement.children[0].offsetHeight;
    };
    Slider.prototype.calculateHandleValue = function (event) {
        if (this.orientation === 'horizontal')
            return ((event.pageX - this.initX) * 100) / (this.barWidth);
        else
            return (((this.initY + this.barHeight) - event.pageY) * 100) / (this.barHeight);
    };
    Slider.prototype.updateHandleValue = function () {
        if (this.range) {
            this.handleValues[0] = (this.values[0] < this.min ? 0 : this.values[0] - this.min) * 100 / (this.max - this.min);
            this.handleValues[1] = (this.values[1] > this.max ? 100 : this.values[1] - this.min) * 100 / (this.max - this.min);
        }
        else {
            if (this.value < this.min)
                this.handleValue = 0;
            else if (this.value > this.max)
                this.handleValue = 100;
            else
                this.handleValue = (this.value - this.min) * 100 / (this.max - this.min);
        }
    };
    Slider.prototype.updateValue = function (val, event) {
        if (this.range) {
            var value = val;
            if (this.handleIndex == 0) {
                if (value < this.min) {
                    value = this.min;
                    this.handleValues[0] = 0;
                }
                else if (value > this.values[1]) {
                    value = this.values[1];
                    this.handleValues[0] = this.handleValues[1];
                }
                this.sliderHandleStart.nativeElement.focus();
            }
            else {
                if (value > this.max) {
                    value = this.max;
                    this.handleValues[1] = 100;
                }
                else if (value < this.values[0]) {
                    value = this.values[0];
                    this.handleValues[1] = this.handleValues[0];
                }
                this.sliderHandleEnd.nativeElement.focus();
            }
            this.values[this.handleIndex] = this.getNormalizedValue(value);
            this.onModelChange(this.values);
            this.onChange.emit({ event: event, values: this.values });
        }
        else {
            if (val < this.min) {
                val = this.min;
                this.handleValue = 0;
            }
            else if (val > this.max) {
                val = this.max;
                this.handleValue = 100;
            }
            this.value = this.getNormalizedValue(val);
            this.onModelChange(this.value);
            this.onChange.emit({ event: event, value: this.value });
            this.sliderHandle.nativeElement.focus();
        }
    };
    Slider.prototype.getValueFromHandle = function (handleValue) {
        return (this.max - this.min) * (handleValue / 100) + this.min;
    };
    Slider.prototype.getDecimalsCount = function (value) {
        if (value && Math.floor(value) !== value)
            return value.toString().split(".")[1].length || 0;
        return 0;
    };
    Slider.prototype.getNormalizedValue = function (val) {
        var decimalsCount = this.getDecimalsCount(this.step);
        if (decimalsCount > 0) {
            return +val.toFixed(decimalsCount);
        }
        else {
            return Math.floor(val);
        }
    };
    Slider.prototype.ngOnDestroy = function () {
        this.unbindDragListeners();
    };
    Slider.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Slider.prototype, "animate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Slider.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Slider.prototype, "min", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Slider.prototype, "max", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Slider.prototype, "orientation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Slider.prototype, "step", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Slider.prototype, "range", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Slider.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Slider.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Slider.prototype, "ariaLabelledBy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Slider.prototype, "tabindex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
    ], Slider.prototype, "onChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
    ], Slider.prototype, "onSlideEnd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("sliderHandle", { static: false })
    ], Slider.prototype, "sliderHandle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("sliderHandleStart", { static: false })
    ], Slider.prototype, "sliderHandleStart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("sliderHandleEnd", { static: false })
    ], Slider.prototype, "sliderHandleEnd", void 0);
    Slider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-slider',
            template: "\n        <div [ngStyle]=\"style\" [class]=\"styleClass\" [ngClass]=\"{'ui-slider ui-widget ui-widget-content ui-corner-all':true,'ui-state-disabled':disabled,\n            'ui-slider-horizontal':orientation == 'horizontal','ui-slider-vertical':orientation == 'vertical','ui-slider-animate':animate}\"\n            (click)=\"onBarClick($event)\">\n            <span *ngIf=\"range && orientation == 'horizontal'\" class=\"ui-slider-range ui-widget-header ui-corner-all\" [ngStyle]=\"{'left':handleValues[0] + '%',width: (handleValues[1] - handleValues[0] + '%')}\"></span>\n            <span *ngIf=\"range && orientation == 'vertical'\" class=\"ui-slider-range ui-widget-header ui-corner-all\" [ngStyle]=\"{'bottom':handleValues[0] + '%',height: (handleValues[1] - handleValues[0] + '%')}\"></span>\n            <span *ngIf=\"!range && orientation=='vertical'\" class=\"ui-slider-range ui-slider-range-min ui-widget-header ui-corner-all\" [ngStyle]=\"{'height': handleValue + '%'}\"></span>\n            <span *ngIf=\"!range && orientation=='horizontal'\" class=\"ui-slider-range ui-slider-range-min ui-widget-header ui-corner-all\" [ngStyle]=\"{'width': handleValue + '%'}\"></span>\n            <span #sliderHandle *ngIf=\"!range\" [attr.tabindex]=\"tabindex\" (keydown)=\"onHandleKeydown($event)\" class=\"ui-slider-handle ui-state-default ui-corner-all ui-clickable\" (mousedown)=\"onMouseDown($event)\" (touchstart)=\"onTouchStart($event)\" (touchmove)=\"onTouchMove($event)\" (touchend)=\"onTouchEnd($event)\"\n                [style.transition]=\"dragging ? 'none': null\" [ngStyle]=\"{'left': orientation == 'horizontal' ? handleValue + '%' : null,'bottom': orientation == 'vertical' ? handleValue + '%' : null}\"\n                [attr.aria-valuemin]=\"min\" [attr.aria-valuenow]=\"value\" [attr.aria-valuemax]=\"max\" [attr.aria-labelledby]=\"ariaLabelledBy\"></span>\n            <span #sliderHandleStart *ngIf=\"range\" [attr.tabindex]=\"tabindex\" (keydown)=\"onHandleKeydown($event,0)\" (mousedown)=\"onMouseDown($event,0)\" (touchstart)=\"onTouchStart($event,0)\" (touchmove)=\"onTouchMove($event,0)\" (touchend)=\"onTouchEnd($event)\" [style.transition]=\"dragging ? 'none': null\" class=\"ui-slider-handle ui-state-default ui-corner-all ui-clickable\" \n                [ngStyle]=\"{'left': rangeStartLeft, 'bottom': rangeStartBottom}\" [ngClass]=\"{'ui-slider-handle-active':handleIndex==0}\"\n                [attr.aria-valuemin]=\"min\" [attr.aria-valuenow]=\"value ? value[0] : null\" [attr.aria-valuemax]=\"max\" [attr.aria-labelledby]=\"ariaLabelledBy\"></span>\n            <span #sliderHandleEnd *ngIf=\"range\" [attr.tabindex]=\"tabindex\" (keydown)=\"onHandleKeydown($event,1)\" (mousedown)=\"onMouseDown($event,1)\" (touchstart)=\"onTouchStart($event,1)\" (touchmove)=\"onTouchMove($event,1)\" (touchend)=\"onTouchEnd($event)\" [style.transition]=\"dragging ? 'none': null\" class=\"ui-slider-handle ui-state-default ui-corner-all ui-clickable\" \n                [ngStyle]=\"{'left': rangeEndLeft, 'bottom': rangeEndBottom}\" [ngClass]=\"{'ui-slider-handle-active':handleIndex==1}\"\n                [attr.aria-valuemin]=\"min\" [attr.aria-valuenow]=\"value ? value[1] : null\" [attr.aria-valuemax]=\"max\" [attr.aria-labelledby]=\"ariaLabelledBy\"></span>\n        </div>\n    ",
            providers: [SLIDER_VALUE_ACCESSOR]
        })
    ], Slider);
    return Slider;
}());
var SliderModule = /** @class */ (function () {
    function SliderModule() {
    }
    SliderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [Slider],
            declarations: [Slider]
        })
    ], SliderModule);
    return SliderModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-slider.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/taxi/guests/guests.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/taxi/guests/guests.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-table #dt [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\">\n  <ng-template pTemplate=\"caption\">\n      <div style=\"text-align: right\">        \n          <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n          <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n      </div>\n  </ng-template>\n  <ng-template pTemplate=\"header\" let-columns>\n      <tr>\n          <th *ngFor=\"let col of columns\">\n              {{col.header}}\n          </th>\n      </tr>\n      <tr>\n          <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n              <input *ngSwitchCase=\"'vin'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n              <div *ngSwitchCase=\"'year'\">\n                  Value > {{yearFilter}}\n                  <i class=\"fa fa-close\" (click)=\"yearFilter=null;dt.filter(null, col.field, col.filterMatchMode)\" style=\"cursor:pointer\" *ngIf=\"yearFilter\"></i>\n                  <p-slider [style]=\"{'width':'100%','margin-top':'8px'}\" [(ngModel)]=\"yearFilter\" [min]=\"1970\" [max]=\"2010\" (onChange)=\"onYearChange($event, dt)\"></p-slider>\n              </div>\n              <p-dropdown *ngSwitchCase=\"'brand'\" [options]=\"brands\" [style]=\"{'width':'100%'}\" (onChange)=\"dt.filter($event.value, col.field, 'equals')\"></p-dropdown>\n              <p-multiSelect *ngSwitchCase=\"'color'\" [options]=\"colors\" defaultLabel=\"All Colors\" (onChange)=\"dt.filter($event.value, col.field, 'in')\"></p-multiSelect>\n              <input *ngSwitchCase=\"'price'\" pInputText type=\"text\" placeholder=\"Custom - Greater Than\" (input)=\"dt.filter($event.target.value, col.field, 'custom')\">\n          </th>\n      </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n      <tr [pSelectableRow]=\"rowData\">\n          <td *ngFor=\"let col of columns\">\n              {{rowData[col.field]}}\n          </td>\n      </tr>\n  </ng-template>\n</p-table>\n\n<br><br><br><br>\n\n<h3>Row Editing</h3>\n<p-table [value]=\"cars2\" dataKey=\"vin\" editMode=\"row\">\n  <ng-template pTemplate=\"header\">\n      <tr>\n          <th>Vin</th>\n          <th>Year</th>\n          <th>Brand</th>\n          <th>Color</th>\n          <th style=\"width:8em\"></th>\n      </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-rowData let-editing=\"editing\" let-ri=\"rowIndex\">\n      <tr [pEditableRow]=\"rowData\">\n          <td>\n              {{rowData.vin}}\n          </td>\n          <td>\n              <p-cellEditor>\n                  <ng-template pTemplate=\"input\">\n                      <input pInputText type=\"text\" [(ngModel)]=\"rowData.year\" required>\n                  </ng-template>\n                  <ng-template pTemplate=\"output\">\n                      {{rowData.year}}\n                  </ng-template>\n              </p-cellEditor>\n          </td>\n          <td>\n              <p-cellEditor>\n                  <ng-template pTemplate=\"input\">\n                      <p-dropdown [options]=\"brands\" [(ngModel)]=\"rowData.brand\" [style]=\"{'width':'100%'}\"></p-dropdown>\n                  </ng-template>\n                  <ng-template pTemplate=\"output\">\n                      {{rowData.brand}}\n                  </ng-template>\n              </p-cellEditor>\n          </td>\n          <td>\n              <p-cellEditor>\n                  <ng-template pTemplate=\"input\">\n                      <input pInputText type=\"text\" [(ngModel)]=\"rowData.color\">\n                  </ng-template>\n                  <ng-template pTemplate=\"output\">\n                      {{rowData.color}}\n                  </ng-template>\n              </p-cellEditor>\n          </td>\n          <td style=\"text-align:center\">\n              <button *ngIf=\"!editing\" pButton type=\"button\" pInitEditableRow class=\"btn btn-sm btn-primary\" (click)=\"onRowEditInit(rowData)\">\n                <span class=\"fa fa-edit\"></span>\n              </button>\n              <button *ngIf=\"editing\" pButton type=\"button\" pSaveEditableRow class=\"btn btn-sm btn-success\" style=\"margin-right: .5em\" (click)=\"onRowEditSave(rowData)\">\n                <span class=\"fa fa-check\"></span>\n              </button>\n              <button *ngIf=\"editing\" pButton type=\"button\" pCancelEditableRow class=\"btn btn-sm btn-danger\" (click)=\"onRowEditCancel(rowData, ri)\">\n                <span class=\"fa fa-times\"></span>\n              </button>\n          </td>\n      </tr>\n  </ng-template>\n</p-table>\n"

/***/ }),

/***/ "./src/app/taxi/guests/guests-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/taxi/guests/guests-routing.module.ts ***!
  \******************************************************/
/*! exports provided: GuestsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestsRoutingModule", function() { return GuestsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guests_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guests.component */ "./src/app/taxi/guests/guests.component.ts");




var routes = [
    {
        path: '', component: _guests_component__WEBPACK_IMPORTED_MODULE_3__["GuestsComponent"]
    }
];
var GuestsRoutingModule = /** @class */ (function () {
    function GuestsRoutingModule() {
    }
    GuestsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GuestsRoutingModule);
    return GuestsRoutingModule;
}());



/***/ }),

/***/ "./src/app/taxi/guests/guests.component.scss":
/*!***************************************************!*\
  !*** ./src/app/taxi/guests/guests.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RheGkvZ3Vlc3RzL2d1ZXN0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/taxi/guests/guests.component.ts":
/*!*************************************************!*\
  !*** ./src/app/taxi/guests/guests.component.ts ***!
  \*************************************************/
/*! exports provided: GuestsComponent, Car */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestsComponent", function() { return GuestsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Car", function() { return Car; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GuestsComponent = /** @class */ (function () {
    function GuestsComponent() {
        this.cols = ['vin', 'year', 'brand', 'color'];
        this.cars = [{ vin: "a1653d4d", brand: "VW", year: 1998, color: "White", price: 10000 },
            { vin: "ddeb9b10", brand: "Mercedes", year: 1985, color: "Green", price: 25000 },
            { vin: "d8ebe413", brand: "Jaguar", year: 1979, color: "Silver", price: 30000 },
            { vin: "aab227b7", brand: "Audi", year: 1970, color: "Black", price: 12000 },
            { vin: "631f7412", brand: "Volvo", year: 1992, color: "Red", price: 15500 },
            { vin: "7d2d22b0", brand: "VW", year: 1993, color: "Maroon", price: 40000 },
            { vin: "50e900ca", brand: "Fiat", year: 1964, color: "Blue", price: 25000 },
            { vin: "4bbcd603", brand: "Renault", year: 1983, color: "Maroon", price: 22000 },
            { vin: "70214c7e", brand: "Renault", year: 1961, color: "Black", price: 19000 },
            { vin: "ec229a92", brand: "Audi", year: 1984, color: "Brown", price: 36000 },
            { vin: "1083ee40", brand: "VW", year: 1984, color: "Silver", price: 215000 },
            { vin: "6e0da3ab", brand: "Volvo", year: 1987, color: "Silver", price: 32000 },
            { vin: "5aee636b", brand: "Jaguar", year: 1995, color: "Maroon", price: 20000 },
            { vin: "7cc43997", brand: "Jaguar", year: 1984, color: "Orange", price: 14000 },
            { vin: "88ec9f66", brand: "Honda", year: 1989, color: "Maroon", price: 36000 },
            { vin: "f5a4a5f5", brand: "BMW", year: 1986, color: "Blue", price: 28000 },
            { vin: "15b9a5c9", brand: "Mercedes", year: 1986, color: "Orange", price: 14000 },
            { vin: "f7e18d01", brand: "Mercedes", year: 1991, color: "White", price: 25000 },
            { vin: "cec593d7", brand: "VW", year: 1992, color: "Blue", price: 36000 },
            { vin: "d5bac4f0", brand: "Renault", year: 2001, color: "Blue", price: 25000 },
            { vin: "56b527c8", brand: "Jaguar", year: 1990, color: "Yellow", price: 52000 },
            { vin: "1ac011ff", brand: "Audi", year: 1966, color: "Maroon", price: 45000 },
            { vin: "fc074185", brand: "BMW", year: 1962, color: "Blue", price: 54000 },
            { vin: "606ba663", brand: "Honda", year: 1982, color: "Blue", price: 22000 },
            { vin: "d05060b8", brand: "Mercedes", year: 2003, color: "Silver", price: 15000 },
            { vin: "46e4bbe8", brand: "Mercedes", year: 1986, color: "White", price: 18000 },
            { vin: "c29da0d7", brand: "BMW", year: 1983, color: "Brown", price: 32000 },
            { vin: "24622f70", brand: "VW", year: 1973, color: "Maroon", price: 36000 },
            { vin: "7f573d2c", brand: "Mercedes", year: 1991, color: "Red", price: 21000 },
            { vin: "b69e6f5c", brand: "Jaguar", year: 1993, color: "Yellow", price: 16000 },
            { vin: "ead9bf1d", brand: "Fiat", year: 1968, color: "Maroon", price: 43000 },
            { vin: "bc58113e", brand: "Renault", year: 1981, color: "Silver", price: 36000 },
            { vin: "2989d5b1", brand: "Honda", year: 2006, color: "Blue", price: 240000 },
            { vin: "c243e3a0", brand: "Fiat", year: 1990, color: "Maroon", price: 15000 },
            { vin: "e3d3ebf3", brand: "Audi", year: 1996, color: "White", price: 28000 },
            { vin: "45337e7a", brand: "Mercedes", year: 1982, color: "Blue", price: 14000 },
            { vin: "36e9cf7e", brand: "Fiat", year: 2000, color: "Orange", price: 26000 },
            { vin: "036bf135", brand: "Mercedes", year: 1973, color: "Black", price: 22000 },
            { vin: "ad612e9f", brand: "Mercedes", year: 1975, color: "Red", price: 45000 },
            { vin: "97c6e1e9", brand: "Volvo", year: 1967, color: "Green", price: 42000 },
            { vin: "ae962274", brand: "Volvo", year: 1982, color: "Red", price: 36000 },
            { vin: "81f8972a", brand: "BMW", year: 2007, color: "Black", price: 56000 },
            { vin: "f8506743", brand: "Audi", year: 1975, color: "Blue", price: 42000 },
            { vin: "596859d1", brand: "Fiat", year: 2002, color: "Green", price: 48000 },
            { vin: "d83c1d9a", brand: "Volvo", year: 1972, color: "Black", price: 29000 },
            { vin: "32f41550", brand: "Mercedes", year: 1978, color: "Brown", price: 17000 },
            { vin: "c28cd2e4", brand: "Volvo", year: 1982, color: "Silver", price: 24000 },
            { vin: "80890dcc", brand: "Audi", year: 1962, color: "White", price: 36000 },
            { vin: "4bf1aeb5", brand: "VW", year: 2000, color: "Silver", price: 24000 },
            { vin: "45ca4786", brand: "BMW", year: 1995, color: "Maroon", price: 50000 }];
        this.clonedCars = {};
    }
    GuestsComponent.prototype.ngOnInit = function () {
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' },
            { field: 'price', header: 'Price' }
        ];
        this.cars1 = this.cars;
        this.cars2 = this.cars1;
        this.brands = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
    };
    GuestsComponent.prototype.onRowEditInit = function (car) {
        this.clonedCars[car.vin] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, car);
    };
    GuestsComponent.prototype.onRowEditSave = function (car) {
        if (car.year > 0) {
            delete this.clonedCars[car.vin];
            alert({ severity: 'success', summary: 'Success', detail: 'Car is updated' });
        }
        else {
            alert({ severity: 'error', summary: 'Error', detail: 'Year is required' });
        }
    };
    GuestsComponent.prototype.onRowEditCancel = function (car, index) {
        this.cars2[index] = this.clonedCars[car.vin];
        delete this.clonedCars[car.vin];
    };
    GuestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guests',
            template: __webpack_require__(/*! raw-loader!./guests.component.html */ "./node_modules/raw-loader/index.js!./src/app/taxi/guests/guests.component.html"),
            styles: [__webpack_require__(/*! ./guests.component.scss */ "./src/app/taxi/guests/guests.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GuestsComponent);
    return GuestsComponent;
}());

var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());



/***/ }),

/***/ "./src/app/taxi/guests/guests.module.ts":
/*!**********************************************!*\
  !*** ./src/app/taxi/guests/guests.module.ts ***!
  \**********************************************/
/*! exports provided: GuestsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestsModule", function() { return GuestsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _guests_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guests.component */ "./src/app/taxi/guests/guests.component.ts");
/* harmony import */ var _guests_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guests-routing.module */ "./src/app/taxi/guests/guests-routing.module.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm5/primeng-table.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/fesm5/primeng-slider.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/fesm5/primeng-multiselect.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/fesm5/primeng-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var GuestsModule = /** @class */ (function () {
    function GuestsModule() {
    }
    GuestsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
                primeng_slider__WEBPACK_IMPORTED_MODULE_6__["SliderModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_7__["MultiSelectModule"],
                _guests_routing_module__WEBPACK_IMPORTED_MODULE_4__["GuestsRoutingModule"]],
            declarations: [_guests_component__WEBPACK_IMPORTED_MODULE_3__["GuestsComponent"]]
        })
    ], GuestsModule);
    return GuestsModule;
}());



/***/ })

}]);
//# sourceMappingURL=taxi-guests-guests-module-es5.js.map