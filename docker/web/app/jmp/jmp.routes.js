"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mentor_component_1 = require("./mentor/mentor.component");
var list_component_1 = require("./list/list.component");
exports.MODULE_ROUTES = [
    { path: 'mentor', component: mentor_component_1.MentorComponent },
    { path: 'mentor-list', component: list_component_1.ListComponent },
    { path: '', redirectTo: 'mentor', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    mentor_component_1.MentorComponent,
    list_component_1.ListComponent,
];
//# sourceMappingURL=jmp.routes.js.map