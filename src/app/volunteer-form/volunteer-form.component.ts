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
      fio:'',
      email:'',
      birth:'',
      phone:'',
      education:'',
      desired_job:'',
      desired_start:'',
      desired_end:'',
      languages:'',
      volunteer_experience:'',
      recomendation:'',
      skills:'',
      volunteer_book:'',
      why:'',
      video:'',
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
        console.log(this.voluunterForm);
        alert('Произошла ошибка');
      }
    )
  }

}
