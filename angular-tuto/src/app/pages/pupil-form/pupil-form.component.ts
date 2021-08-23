import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pupil } from '../../repository/dto/pupil';
import { PupilService } from "../../services/pupil.service";

@Component({
  selector: 'app-pupil-form',
  templateUrl: './pupil-form.component.html',
  styleUrls: ['./pupil-form.component.css']
})
export class PupilFormComponent implements OnInit {

  submitted = false;

  onSubmit() {
    if(this.pupil.id )
      this.pupilService.updatePupil(this.pupil).subscribe(pupil => this.pupil = pupil);
    else
      this.pupilService.createPupil(this.pupil).subscribe(pupil => this.pupil = pupil);
    this.submitted = true;
  }

  pupil: Pupil = new Pupil('','','');

  constructor(private pupilService: PupilService,private route: ActivatedRoute,  private location: Location) { }

  ngOnInit(): void {
    this.getPupil();
  }

  public goBack() {
    this.location.back();
  }

  getPupil(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id)
      this.pupilService.getPupil(id).subscribe(pupil => this.pupil = pupil);
  }

  public getLibelleAction() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return id ? 'Modify' : 'Create';
  }

  public selectSchool(event : any) {
    this.pupil.school = event;
  }

}
