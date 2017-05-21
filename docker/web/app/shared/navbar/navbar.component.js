"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidebar_routes_config_1 = require("../.././sidebar/sidebar-routes.config");
var sidebar_metadata_1 = require("../.././sidebar/sidebar.metadata");
var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = sidebar_routes_config_1.ROUTES.filter(function (listTitle) { return listTitle.menuType !== sidebar_metadata_1.MenuType.BRAND; });
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Mentor';
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'navbar-cmp',
        templateUrl: 'navbar.component.html'
    })
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map