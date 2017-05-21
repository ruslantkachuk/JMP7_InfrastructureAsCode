import {Component, OnInit} from '@angular/core';
import {ListService} from "./list.service";
import {Mentor} from "../mentor/mentor";

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'list.component.html',
    providers: [ListService]
})

export class ListComponent implements OnInit{
    errorMessage: string;
    mentors: Mentor[];
    constructor(private listService: ListService) {
    }
    ngOnInit() { this.getMentors(); }

    getMentors() {
        this.listService.getMentors()
            .subscribe(
                mentors => this.mentors = mentors,
                error =>  this.errorMessage = <any>error);
    }
}
