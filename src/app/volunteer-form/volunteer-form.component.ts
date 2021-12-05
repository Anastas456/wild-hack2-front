import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../shared/services/form-service.service';

@Component({
  selector: 'app-volunteer-form',
  templateUrl: './volunteer-form.component.html',
  styleUrls: ['./volunteer-form.component.css']
})
export class VolunteerFormComponent implements OnInit {

  voluunterForm: any;
  mask = ['+', 7, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  constructor(private formService: FormServiceService) { }

  ngOnInit(): void {
    this.voluunterForm={
      name:'',
      email:'',
      birth:'',
      phone:'',
      education:'',
      desiredWorkArea:'',
      arrivalDate:'',
      departureDate:'',
      languages:'',
      experience:'',
      recomendation:'',
      skills:'',
      volunteerPassport:'',
      reason:'',
      videoLink:'',
      comments:''


    }
  }

  sendForm(){
    this.formService.postVolunteerForm(this.voluunterForm).subscribe(
      response => {
        console.log(response);
        alert('Ваша заявка успешно отправлена');

      },
      error =>{
        console.log(error);
        alert('Произошла ошибка');
      }
    )
  }

}
