import { Component, OnInit } from '@angular/core';
import { PupilService } from "../../services/pupil.service";
import { Pupil } from "../../repository/dto/pupil";

@Component({
  selector: 'app-pupil-list',
  templateUrl: './pupil-list.component.html',
  styleUrls: ['./pupil-list.component.css']
})
export class PupilListComponent implements OnInit {

  pupils: Pupil[] = [];

  constructor(private pupilService: PupilService) { }

  ngOnInit(): void {
    this.getPupils();
  }

  getPupils(): void {
    this.pupilService.getPupils().subscribe(pupils => 
      this.pupils = pupils
    );
  }

}
