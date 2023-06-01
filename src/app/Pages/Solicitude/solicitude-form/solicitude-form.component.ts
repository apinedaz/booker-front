import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-solicitude-form',
  templateUrl: './solicitude-form.component.html',
  styleUrls: ['./solicitude-form.component.scss']
})
export class SolicitudeFormComponent implements OnInit{

  public solicitudeForm : FormGroup;

  constructor(private fb: FormBuilder){

    this.solicitudeForm = this.fb.group({
      description: new FormControl(null),
      value: new FormControl(null)
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
