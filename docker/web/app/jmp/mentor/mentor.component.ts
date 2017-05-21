import { Component, OnInit } from '@angular/core';
import { Mentor } from './mentor';
import { MentorService } from './mentor.service';

@Component({
    selector: 'mentor-cmp',
    moduleId: module.id,
    templateUrl: 'mentor.component.html',
    providers: [MentorService]
})

export class MentorComponent implements OnInit{
    mentor: Mentor;
    constructor(private mentorService: MentorService) {
    }

    ngOnInit(){
        this.mentor = new Mentor();
    }

    create (){
        if (!this.mentorService.checkAllFieldsNotEmpty(this.mentor)){
            this.mentorService.create(this.mentor).subscribe();
            this.showPopup('success', "Mentor was created!", "ti-save");
            this.mentor = new Mentor();
        } else {
            this.showPopup('danger', "All fields must be filled!", "ti-na");
        }



    }

    showPopup (type, messag, icon){
        $.notify({
            icon: icon,
            message: messag

        },{
            type: type,
            timer: 500,
            placement: {
                from: 'top',
                align: 'right'
            }
        });
    }
}
