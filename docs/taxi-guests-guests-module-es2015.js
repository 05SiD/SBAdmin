(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taxi-guests-guests-module"],{

/***/ "./node_modules/primeng/fesm2015/primeng-multiselect.js":
/*!**************************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-multiselect.js ***!
  \**************************************************************/
/*! exports provided: MULTISELECT_VALUE_ACCESSOR, MultiSelect, MultiSelectItem, MultiSelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MULTISELECT_VALUE_ACCESSOR", function() { return MULTISELECT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelect", function() { return MultiSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectItem", function() { return MultiSelectItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectModule", function() { return MultiSelectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ "./node_modules/primeng/fesm2015/primeng-dom.js");
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/utils */ "./node_modules/primeng/fesm2015/primeng-utils.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/fesm2015/primeng-tooltip.js");










var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const MULTISELECT_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => MultiSelect),
    multi: true
};
let MultiSelectItem = class MultiSelectItem {
    constructor() {
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onOptionClick(event) {
        this.onClick.emit({
            originalEvent: event,
            option: this.option
        });
    }
    onOptionKeydown(event) {
        this.onKeydown.emit({
            originalEvent: event,
            option: this.option
        });
    }
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
        template: `
        <li class="ui-multiselect-item ui-corner-all" (click)="onOptionClick($event)" (keydown)="onOptionKeydown($event)" [attr.aria-label]="option.label"
            [style.display]="visible ? 'block' : 'none'" [attr.tabindex]="option.disabled ? null : '0'" [ngStyle]="{'height': itemSize + 'px'}"
            [ngClass]="{'ui-state-highlight': selected, 'ui-state-disabled': (option.disabled || (maxSelectionLimitReached && !selected))}">
            <div class="ui-chkbox ui-widget">
                <div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"
                    [ngClass]="{'ui-state-active': selected}">
                    <span class="ui-chkbox-icon ui-clickable" [ngClass]="{'pi pi-check': selected}"></span>
                </div>
            </div>
            <span *ngIf="!template">{{option.label}}</span>
            <ng-container *ngTemplateOutlet="template; context: {$implicit: option}"></ng-container>
        </li>
    `
    })
], MultiSelectItem);
let MultiSelect = class MultiSelect {
    constructor(el, renderer, cd) {
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
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.disabledSelectedOptions = [];
    }
    set defaultLabel(val) {
        this._defaultLabel = val;
        this.updateLabel();
    }
    get defaultLabel() {
        return this._defaultLabel;
    }
    get options() {
        return this._options;
    }
    set options(val) {
        let opts = this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_4__["ObjectUtils"].generateSelectItems(val, this.optionLabel) : val;
        this.visibleOptions = opts;
        this._options = opts;
        this.updateLabel();
        if (this.filterValue && this.filterValue.length) {
            this.activateFilter();
        }
    }
    ngOnInit() {
        this.updateLabel();
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                case 'selectedItems':
                    this.selectedItemsTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    ngAfterViewInit() {
        if (this.overlayVisible) {
            this.show();
        }
    }
    ngAfterViewChecked() {
        if (this.filtered) {
            this.alignOverlay();
            this.filtered = false;
        }
    }
    writeValue(value) {
        this.value = value;
        this.updateLabel();
        this.updateFilledState();
        this.setDisabledSelectedOptions();
        this.checkSelectionLimit();
        this.cd.markForCheck();
    }
    checkSelectionLimit() {
        if (this.selectionLimit && (this.value && this.value.length === this.selectionLimit)) {
            this.maxSelectionLimitReached = true;
        }
    }
    updateFilledState() {
        this.filled = (this.valuesAsString != null && this.valuesAsString.length > 0);
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(val) {
        this.disabled = val;
    }
    onOptionClick(event) {
        let option = event.option;
        if (option.disabled) {
            return;
        }
        const optionValue = option.value;
        let selectionIndex = this.findSelectionIndex(optionValue);
        if (selectionIndex != -1) {
            this.value = this.value.filter((val, i) => i != selectionIndex);
            if (this.selectionLimit) {
                this.maxSelectionLimitReached = false;
            }
        }
        else {
            if (!this.selectionLimit || (!this.value || this.value.length < this.selectionLimit)) {
                this.value = [...this.value || [], optionValue];
            }
            this.checkSelectionLimit();
        }
        this.onModelChange(this.value);
        this.onChange.emit({ originalEvent: event.originalEvent, value: this.value, itemValue: optionValue });
        this.updateLabel();
        this.updateFilledState();
    }
    isSelected(value) {
        return this.findSelectionIndex(value) != -1;
    }
    findSelectionIndex(val) {
        let index = -1;
        if (this.value) {
            for (let i = 0; i < this.value.length; i++) {
                if (primeng_utils__WEBPACK_IMPORTED_MODULE_4__["ObjectUtils"].equals(this.value[i], val, this.dataKey)) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    toggleAll(event) {
        if (this.isAllChecked()) {
            if (this.disabledSelectedOptions && this.disabledSelectedOptions.length > 0) {
                let value = [];
                value = [...this.disabledSelectedOptions];
                this.value = value;
            }
            else {
                this.value = [];
            }
        }
        else {
            let opts = this.getVisibleOptions();
            if (opts) {
                let value = [];
                if (this.disabledSelectedOptions && this.disabledSelectedOptions.length > 0) {
                    value = [...this.disabledSelectedOptions];
                }
                for (let i = 0; i < opts.length; i++) {
                    let option = opts[i];
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
    }
    isAllChecked() {
        if (this.filterValue && this.filterValue.trim().length) {
            return this.value && this.visibleOptions && this.visibleOptions.length && this.isAllVisibleOptionsChecked();
        }
        else {
            let optionCount = this.getEnabledOptionCount();
            let disabledSelectedOptionCount = this.disabledSelectedOptions.length;
            return this.value && this.options && (this.value.length > 0 && this.value.length == optionCount + disabledSelectedOptionCount);
        }
    }
    isAllVisibleOptionsChecked() {
        if (!this.visibleOptions || this.visibleOptions.length === 0) {
            return false;
        }
        else {
            for (let option of this.visibleOptions) {
                if (!this.isSelected(option.value)) {
                    return false;
                }
            }
            return true;
        }
    }
    getEnabledOptionCount() {
        if (this.options) {
            let count = 0;
            for (let opt of this.options) {
                if (!opt.disabled) {
                    count++;
                }
            }
            return count;
        }
        else {
            return 0;
        }
    }
    setDisabledSelectedOptions() {
        if (this.options) {
            this.disabledSelectedOptions = [];
            if (this.value) {
                for (let opt of this.options) {
                    if (opt.disabled && this.isSelected(opt.value)) {
                        this.disabledSelectedOptions.push(opt.value);
                    }
                }
            }
        }
    }
    show() {
        if (!this.overlayVisible) {
            this.overlayVisible = true;
        }
        if (this.filter) {
            setTimeout(() => {
                if (this.filterInputChild != undefined) {
                    this.filterInputChild.nativeElement.focus();
                }
            }, 200);
        }
        this.bindDocumentClickListener();
    }
    onOverlayAnimationStart(event) {
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
    }
    appendOverlay() {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.overlay);
            else
                primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].appendChild(this.overlay, this.appendTo);
            this.overlay.style.minWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getWidth(this.containerViewChild.nativeElement) + 'px';
        }
    }
    restoreOverlayAppend() {
        if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
        }
    }
    alignOverlay() {
        if (this.overlay) {
            if (this.appendTo)
                primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].absolutePosition(this.overlay, this.containerViewChild.nativeElement);
            else
                primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].relativePosition(this.overlay, this.containerViewChild.nativeElement);
        }
    }
    hide() {
        this.overlayVisible = false;
        this.unbindDocumentClickListener();
        if (this.resetFilterOnHide) {
            this.filterInputChild.nativeElement.value = '';
            this.onFilter();
        }
        this.onPanelHide.emit();
    }
    close(event) {
        this.hide();
        event.preventDefault();
        event.stopPropagation();
    }
    onMouseclick(event, input) {
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
    }
    onInputFocus(event) {
        this.focus = true;
        this.onFocus.emit({ originalEvent: event });
    }
    onInputBlur(event) {
        this.focus = false;
        this.onBlur.emit({ originalEvent: event });
        this.onModelTouched();
    }
    onOptionKeydown(event) {
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
    }
    findNextItem(item) {
        let nextItem = item.nextElementSibling;
        if (nextItem)
            return primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].hasClass(nextItem.children[0], 'ui-state-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].isHidden(nextItem.children[0]) ? this.findNextItem(nextItem) : nextItem.children[0];
        else
            return null;
    }
    findPrevItem(item) {
        let prevItem = item.previousElementSibling;
        if (prevItem)
            return primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].hasClass(prevItem.children[0], 'ui-state-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].isHidden(prevItem.children[0]) ? this.findPrevItem(prevItem) : prevItem.children[0];
        else
            return null;
    }
    onKeydown(event) {
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
    }
    updateLabel() {
        if (this.value && this.options && this.value.length && this.displaySelectedLabel) {
            let label = '';
            for (let i = 0; i < this.value.length; i++) {
                let itemLabel = this.findLabelByValue(this.value[i]);
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
                let pattern = /{(.*?)}/;
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
    }
    findLabelByValue(val) {
        let label = null;
        for (let i = 0; i < this.options.length; i++) {
            let option = this.options[i];
            if (val == null && option.value == null || primeng_utils__WEBPACK_IMPORTED_MODULE_4__["ObjectUtils"].equals(val, option.value, this.dataKey)) {
                label = option.label;
                break;
            }
        }
        return label;
    }
    onFilter() {
        let inputValue = this.filterInputChild.nativeElement.value;
        if (inputValue && inputValue.length) {
            this.filterValue = inputValue;
            this.activateFilter();
        }
        else {
            this.filterValue = null;
            this.visibleOptions = this.options;
            this.filtered = false;
        }
    }
    activateFilter() {
        if (this.options && this.options.length) {
            let searchFields = this.filterBy.split(',');
            this.visibleOptions = primeng_utils__WEBPACK_IMPORTED_MODULE_4__["FilterUtils"].filter(this.options, searchFields, this.filterValue, this.filterMatchMode);
            this.filtered = true;
        }
    }
    isItemVisible(option) {
        if (this.filterValue && this.filterValue.trim().length) {
            for (let i = 0; i < this.visibleOptions.length; i++) {
                if (this.visibleOptions[i].value == option.value) {
                    return true;
                }
            }
        }
        else {
            return true;
        }
    }
    getVisibleOptions() {
        return this.visibleOptions || this.options;
    }
    onHeaderCheckboxFocus() {
        this.headerCheckboxFocus = true;
    }
    onHeaderCheckboxBlur() {
        this.headerCheckboxFocus = false;
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', () => {
                if (!this.selfClick && !this.panelClick && this.overlayVisible) {
                    this.hide();
                }
                this.selfClick = false;
                this.panelClick = false;
                this.cd.markForCheck();
            });
        }
    }
    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    }
    bindDocumentResizeListener() {
        this.documentResizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.documentResizeListener);
    }
    unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }
    onWindowResize() {
        if (!primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].isAndroid()) {
            this.hide();
        }
    }
    onOverlayHide() {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.overlay = null;
    }
    ngOnDestroy() {
        this.restoreOverlayAppend();
        this.onOverlayHide();
    }
};
MultiSelect.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
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
        template: `
        <div #container [ngClass]="{'ui-multiselect ui-widget ui-state-default ui-corner-all':true,'ui-multiselect-open':overlayVisible,'ui-state-focus':focus,'ui-state-disabled': disabled}" [ngStyle]="style" [class]="styleClass"
            (click)="onMouseclick($event,in)">
            <div class="ui-helper-hidden-accessible">
                <input #in type="text" readonly="readonly" [attr.id]="inputId" [attr.name]="name" (focus)="onInputFocus($event)" (blur)="onInputBlur($event)"
                       [disabled]="disabled" [attr.tabindex]="tabindex" (keydown)="onKeydown($event)" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible" 
                       [attr.aria-labelledby]="ariaLabelledBy">
            </div>
            <div class="ui-multiselect-label-container" [pTooltip]="tooltip" [tooltipPosition]="tooltipPosition" [positionStyle]="tooltipPositionStyle" [tooltipStyleClass]="tooltipStyleClass">
                <span class="ui-multiselect-label ui-corner-all">
                    <ng-container *ngIf="!selectedItemsTemplate">{{valuesAsString}}</ng-container>
                    <ng-container *ngTemplateOutlet="selectedItemsTemplate; context: {$implicit: value}"></ng-container>
                </span>
            </div>
            <div [ngClass]="{'ui-multiselect-trigger ui-state-default ui-corner-right':true}">
                <span class="ui-multiselect-trigger-icon ui-clickable" [ngClass]="dropdownIcon"></span>
            </div>
            <div *ngIf="overlayVisible" [ngClass]="['ui-multiselect-panel ui-widget ui-widget-content ui-corner-all ui-shadow']" [@overlayAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" (@overlayAnimation.start)="onOverlayAnimationStart($event)"
                [ngStyle]="panelStyle" [class]="panelStyleClass" (click)="panelClick=true" (keydown)="onKeydown($event)">
                <div class="ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix" [ngClass]="{'ui-multiselect-header-no-toggleall': !showToggleAll}" *ngIf="showHeader">
                <ng-content select="p-header"></ng-content>  
                <div class="ui-chkbox ui-widget" *ngIf="showToggleAll && !selectionLimit">
                        <div class="ui-helper-hidden-accessible">
                            <input type="checkbox" readonly="readonly" [checked]="isAllChecked()" (focus)="onHeaderCheckboxFocus()" (blur)="onHeaderCheckboxBlur()" (keydown.space)="toggleAll($event)">
                        </div>
                        <div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default" role="checkbox" [attr.aria-checked]="allSelected" [ngClass]="{'ui-state-active':isAllChecked(), 'ui-state-focus': headerCheckboxFocus}" (click)="toggleAll($event)">
                            <span class="ui-chkbox-icon ui-clickable" [ngClass]="{'pi pi-check':isAllChecked()}"></span>
                        </div>
                    </div>
                    <div class="ui-multiselect-filter-container" *ngIf="filter">
                        <input #filterInput type="text" role="textbox" [value]="filterValue||''" (input)="onFilter()" class="ui-inputtext ui-widget ui-state-default ui-corner-all" [attr.placeholder]="filterPlaceHolder" [attr.aria-label]="ariaFilterLabel">
                        <span class="ui-multiselect-filter-icon pi pi-search"></span>
                    </div>
                    <a class="ui-multiselect-close ui-corner-all" tabindex="0" (click)="close($event)" (keydown.enter)="close($event)">
                        <span class="pi pi-times"></span>
                    </a>
                </div>
                <div class="ui-multiselect-items-wrapper" [style.max-height]="virtualScroll ? 'auto' : (scrollHeight||'auto')">
                    <ul class="ui-multiselect-items ui-multiselect-list ui-widget-content ui-widget ui-corner-all ui-helper-reset" role="listbox" aria-multiselectable="true">
                        <ng-container *ngIf="!virtualScroll; else virtualScrollList">
                            <ng-template ngFor let-option let-i="index" [ngForOf]="options">
                                <p-multiSelectItem [option]="option" [selected]="isSelected(option.value)" (onClick)="onOptionClick($event)" (onKeydown)="onOptionKeydown($event)" 
                                        [maxSelectionLimitReached]="maxSelectionLimitReached" [visible]="isItemVisible(option)" [template]="itemTemplate"></p-multiSelectItem>
                            </ng-template>
                        </ng-container>
                        <ng-template #virtualScrollList>
                            <cdk-virtual-scroll-viewport #viewport [ngStyle]="{'height': scrollHeight}" [itemSize]="itemSize" *ngIf="virtualScroll && visibleOptions && visibleOptions.length">
                                <ng-container *cdkVirtualFor="let option of visibleOptions; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd">
                                    <p-multiSelectItem [option]="option" [selected]="isSelected(option.value)" (onClick)="onOptionClick($event)" (onKeydown)="onOptionKeydown($event)" 
                                        [maxSelectionLimitReached]="maxSelectionLimitReached" [visible]="isItemVisible(option)" [template]="itemTemplate" [itemSize]="itemSize"></p-multiSelectItem>
                                </ng-container>
                            </cdk-virtual-scroll-viewport>
                        </ng-template>
                        <li *ngIf="filter && visibleOptions && visibleOptions.length === 0" class="ui-multiselect-empty-message">{{emptyFilterMessage}}</li>
                    </ul>
                </div>
                <div class="ui-multiselect-footer ui-widget-content" *ngIf="footerFacet">
                    <ng-content select="p-footer"></ng-content>
                </div>
            </div>
        </div>
    `,
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
let MultiSelectModule = class MultiSelectModule {
};
MultiSelectModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"]],
        exports: [MultiSelect, primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"]],
        declarations: [MultiSelect, MultiSelectItem]
    })
], MultiSelectModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-multiselect.js.map


/***/ }),

/***/ "./node_modules/primeng/fesm2015/primeng-slider.js":
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-slider.js ***!
  \*********************************************************/
/*! exports provided: SLIDER_VALUE_ACCESSOR, Slider, SliderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLIDER_VALUE_ACCESSOR", function() { return SLIDER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderModule", function() { return SliderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ "./node_modules/primeng/fesm2015/primeng-dom.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const SLIDER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => Slider),
    multi: true
};
let Slider = class Slider {
    constructor(el, renderer, ngZone, cd) {
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
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.handleIndex = 0;
    }
    onMouseDown(event, index) {
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
    }
    onTouchStart(event, index) {
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
    }
    onTouchMove(event, index) {
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
    }
    onTouchEnd(event, index) {
        if (this.disabled) {
            return;
        }
        this.dragging = false;
        if (this.range)
            this.onSlideEnd.emit({ originalEvent: event, values: this.values });
        else
            this.onSlideEnd.emit({ originalEvent: event, value: this.value });
        event.preventDefault();
    }
    onBarClick(event) {
        if (this.disabled) {
            return;
        }
        if (!this.sliderHandleClick) {
            this.updateDomData();
            this.handleChange(event);
        }
        this.sliderHandleClick = false;
    }
    onHandleKeydown(event, handleIndex) {
        if (event.which == 38 || event.which == 39) {
            this.spin(event, 1, handleIndex);
        }
        else if (event.which == 37 || event.which == 40) {
            this.spin(event, -1, handleIndex);
        }
    }
    spin(event, dir, handleIndex) {
        let step = (this.step || 1) * dir;
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
    }
    handleChange(event) {
        let handleValue = this.calculateHandleValue(event);
        this.setValueFromHandle(event, handleValue);
    }
    bindDragListeners() {
        this.ngZone.runOutsideAngular(() => {
            if (!this.dragListener) {
                this.dragListener = this.renderer.listen('document', 'mousemove', (event) => {
                    if (this.dragging) {
                        this.ngZone.run(() => {
                            this.handleChange(event);
                        });
                    }
                });
            }
            if (!this.mouseupListener) {
                this.mouseupListener = this.renderer.listen('document', 'mouseup', (event) => {
                    if (this.dragging) {
                        this.dragging = false;
                        this.ngZone.run(() => {
                            if (this.range) {
                                this.onSlideEnd.emit({ originalEvent: event, values: this.values });
                            }
                            else {
                                this.onSlideEnd.emit({ originalEvent: event, value: this.value });
                            }
                        });
                    }
                });
            }
        });
    }
    unbindDragListeners() {
        if (this.dragListener) {
            this.dragListener();
        }
        if (this.mouseupListener) {
            this.mouseupListener();
        }
    }
    setValueFromHandle(event, handleValue) {
        let newValue = this.getValueFromHandle(handleValue);
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
    }
    handleStepChange(newValue, oldValue) {
        let diff = (newValue - oldValue);
        let val = oldValue;
        if (diff < 0) {
            val = oldValue + Math.ceil(newValue / this.step - oldValue / this.step) * this.step;
        }
        else if (diff > 0) {
            val = oldValue + Math.floor(newValue / this.step - oldValue / this.step) * this.step;
        }
        this.updateValue(val);
        this.updateHandleValue();
    }
    writeValue(value) {
        if (this.range)
            this.values = value || [0, 0];
        else
            this.value = value || 0;
        this.updateHandleValue();
        this.cd.markForCheck();
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(val) {
        this.disabled = val;
    }
    get rangeStartLeft() {
        return this.isVertical() ? 'auto' : this.handleValues[0] + '%';
    }
    get rangeStartBottom() {
        return this.isVertical() ? this.handleValues[0] + '%' : 'auto';
    }
    get rangeEndLeft() {
        return this.isVertical() ? 'auto' : this.handleValues[1] + '%';
    }
    get rangeEndBottom() {
        return this.isVertical() ? this.handleValues[1] + '%' : 'auto';
    }
    isVertical() {
        return this.orientation === 'vertical';
    }
    updateDomData() {
        let rect = this.el.nativeElement.children[0].getBoundingClientRect();
        this.initX = rect.left + primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getWindowScrollLeft();
        this.initY = rect.top + primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getWindowScrollTop();
        this.barWidth = this.el.nativeElement.children[0].offsetWidth;
        this.barHeight = this.el.nativeElement.children[0].offsetHeight;
    }
    calculateHandleValue(event) {
        if (this.orientation === 'horizontal')
            return ((event.pageX - this.initX) * 100) / (this.barWidth);
        else
            return (((this.initY + this.barHeight) - event.pageY) * 100) / (this.barHeight);
    }
    updateHandleValue() {
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
    }
    updateValue(val, event) {
        if (this.range) {
            let value = val;
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
    }
    getValueFromHandle(handleValue) {
        return (this.max - this.min) * (handleValue / 100) + this.min;
    }
    getDecimalsCount(value) {
        if (value && Math.floor(value) !== value)
            return value.toString().split(".")[1].length || 0;
        return 0;
    }
    getNormalizedValue(val) {
        let decimalsCount = this.getDecimalsCount(this.step);
        if (decimalsCount > 0) {
            return +val.toFixed(decimalsCount);
        }
        else {
            return Math.floor(val);
        }
    }
    ngOnDestroy() {
        this.unbindDragListeners();
    }
};
Slider.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
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
        template: `
        <div [ngStyle]="style" [class]="styleClass" [ngClass]="{'ui-slider ui-widget ui-widget-content ui-corner-all':true,'ui-state-disabled':disabled,
            'ui-slider-horizontal':orientation == 'horizontal','ui-slider-vertical':orientation == 'vertical','ui-slider-animate':animate}"
            (click)="onBarClick($event)">
            <span *ngIf="range && orientation == 'horizontal'" class="ui-slider-range ui-widget-header ui-corner-all" [ngStyle]="{'left':handleValues[0] + '%',width: (handleValues[1] - handleValues[0] + '%')}"></span>
            <span *ngIf="range && orientation == 'vertical'" class="ui-slider-range ui-widget-header ui-corner-all" [ngStyle]="{'bottom':handleValues[0] + '%',height: (handleValues[1] - handleValues[0] + '%')}"></span>
            <span *ngIf="!range && orientation=='vertical'" class="ui-slider-range ui-slider-range-min ui-widget-header ui-corner-all" [ngStyle]="{'height': handleValue + '%'}"></span>
            <span *ngIf="!range && orientation=='horizontal'" class="ui-slider-range ui-slider-range-min ui-widget-header ui-corner-all" [ngStyle]="{'width': handleValue + '%'}"></span>
            <span #sliderHandle *ngIf="!range" [attr.tabindex]="tabindex" (keydown)="onHandleKeydown($event)" class="ui-slider-handle ui-state-default ui-corner-all ui-clickable" (mousedown)="onMouseDown($event)" (touchstart)="onTouchStart($event)" (touchmove)="onTouchMove($event)" (touchend)="onTouchEnd($event)"
                [style.transition]="dragging ? 'none': null" [ngStyle]="{'left': orientation == 'horizontal' ? handleValue + '%' : null,'bottom': orientation == 'vertical' ? handleValue + '%' : null}"
                [attr.aria-valuemin]="min" [attr.aria-valuenow]="value" [attr.aria-valuemax]="max" [attr.aria-labelledby]="ariaLabelledBy"></span>
            <span #sliderHandleStart *ngIf="range" [attr.tabindex]="tabindex" (keydown)="onHandleKeydown($event,0)" (mousedown)="onMouseDown($event,0)" (touchstart)="onTouchStart($event,0)" (touchmove)="onTouchMove($event,0)" (touchend)="onTouchEnd($event)" [style.transition]="dragging ? 'none': null" class="ui-slider-handle ui-state-default ui-corner-all ui-clickable" 
                [ngStyle]="{'left': rangeStartLeft, 'bottom': rangeStartBottom}" [ngClass]="{'ui-slider-handle-active':handleIndex==0}"
                [attr.aria-valuemin]="min" [attr.aria-valuenow]="value ? value[0] : null" [attr.aria-valuemax]="max" [attr.aria-labelledby]="ariaLabelledBy"></span>
            <span #sliderHandleEnd *ngIf="range" [attr.tabindex]="tabindex" (keydown)="onHandleKeydown($event,1)" (mousedown)="onMouseDown($event,1)" (touchstart)="onTouchStart($event,1)" (touchmove)="onTouchMove($event,1)" (touchend)="onTouchEnd($event)" [style.transition]="dragging ? 'none': null" class="ui-slider-handle ui-state-default ui-corner-all ui-clickable" 
                [ngStyle]="{'left': rangeEndLeft, 'bottom': rangeEndBottom}" [ngClass]="{'ui-slider-handle-active':handleIndex==1}"
                [attr.aria-valuemin]="min" [attr.aria-valuenow]="value ? value[1] : null" [attr.aria-valuemax]="max" [attr.aria-labelledby]="ariaLabelledBy"></span>
        </div>
    `,
        providers: [SLIDER_VALUE_ACCESSOR]
    })
], Slider);
let SliderModule = class SliderModule {
};
SliderModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [Slider],
        declarations: [Slider]
    })
], SliderModule);

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _guests_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guests.component */ "./src/app/taxi/guests/guests.component.ts");




const routes = [
    {
        path: '', component: _guests_component__WEBPACK_IMPORTED_MODULE_3__["GuestsComponent"]
    }
];
let GuestsRoutingModule = class GuestsRoutingModule {
};
GuestsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GuestsRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GuestsComponent = class GuestsComponent {
    constructor() {
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
    ngOnInit() {
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
    }
    onRowEditInit(car) {
        this.clonedCars[car.vin] = Object.assign({}, car);
    }
    onRowEditSave(car) {
        if (car.year > 0) {
            delete this.clonedCars[car.vin];
            alert({ severity: 'success', summary: 'Success', detail: 'Car is updated' });
        }
        else {
            alert({ severity: 'error', summary: 'Error', detail: 'Year is required' });
        }
    }
    onRowEditCancel(car, index) {
        this.cars2[index] = this.clonedCars[car.vin];
        delete this.clonedCars[car.vin];
    }
};
GuestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-guests',
        template: __webpack_require__(/*! raw-loader!./guests.component.html */ "./node_modules/raw-loader/index.js!./src/app/taxi/guests/guests.component.html"),
        styles: [__webpack_require__(/*! ./guests.component.scss */ "./src/app/taxi/guests/guests.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GuestsComponent);

class Car {
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _guests_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guests.component */ "./src/app/taxi/guests/guests.component.ts");
/* harmony import */ var _guests_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guests-routing.module */ "./src/app/taxi/guests/guests-routing.module.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/fesm2015/primeng-slider.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/fesm2015/primeng-multiselect.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/fesm2015/primeng-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");










let GuestsModule = class GuestsModule {
};
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



/***/ })

}]);
//# sourceMappingURL=taxi-guests-guests-module-es2015.js.map