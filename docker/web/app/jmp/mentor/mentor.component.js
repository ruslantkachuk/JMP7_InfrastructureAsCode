"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mentor_1 = require("./mentor");
var mentor_service_1 = require("./mentor.service");
var MentorComponent = (function () {
    function MentorComponent(mentorService) {
        this.mentorService = mentorService;
    }
    MentorComponent.prototype.ngOnInit = function () {
        this.mentor = new mentor_1.Mentor();
    };
    MentorComponent.prototype.create = function () {
        if (!this.mentorService.checkAllFieldsNotEmpty(this.mentor)) {
            this.mentorService.create(this.mentor).subscribe();
            this.showPopup('success', "Mentor was created!", "ti-save");
            this.mentor = new mentor_1.Mentor();
        }
        else {
            this.showPopup('danger', "All fields must be filled!", "ti-na");
        }
    };
    MentorComponent.prototype.showPopup = function (type, messag, icon) {
        $.notify({
            icon: icon,
            message: messag
        }, {
            type: type,
            timer: 500,
            placement: {
                from: 'top',
                align: 'right'
            }
        });
    };
    return MentorComponent;
}());
MentorComponent = __decorate([
    core_1.Component({
        selector: 'mentor-cmp',
        moduleId: module.id,
        templateUrl: 'mentor.component.html',
        providers: [mentor_service_1.MentorService]
    }),
    __metadata("design:paramtypes", [mentor_service_1.MentorService])
], MentorComponent);
exports.MentorComponent = MentorComponent;
//# sourceMappingURL=mentor.component.js.map