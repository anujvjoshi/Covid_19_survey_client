import { AuthenticationService } from './../services/authentication.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormDetailsService } from '../services/form-details.service';
import { FormDetails } from './../formDetails';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  constructor(private formDetailsService: FormDetailsService,
              private router: Router,
              private authenticationService: AuthenticationService) { }

  formDetails: Observable<FormDetails[]>;
  submitForm: FormDetails = new FormDetails();
  submitForm1: FormDetails = new FormDetails();
  reqObj = {
    questionId: '',
    optionId: ''
};
  newObj: any;
  reqObj1: any[] = [];

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.formDetails = this.formDetailsService.getQuestionsList();
  }

  onSubmit(){
    let empId;
    empId = this.authenticationService.currentUserValue;
    this.reqObj1 = this.reqObj1.sort((a, b) => (a.questionId > b.questionId ? 1 : -1));
    this.newObj = {empId, surveyAnsList : this.reqObj1};
    this.formDetailsService.submitMyFormData(this.newObj).subscribe(
      data => {
        if (data) {
        this.router.navigate(['success']);
        }

      },
      error => {
      }
    );
  }

  submitAns(qNo, aNo){

      this.reqObj1 = this.reqObj1.filter( h => h.questionId !== qNo);
      this.reqObj1.push({questionId : qNo, answerId : aNo});

      /* Code to iterate array */
      /* if (this.reqObj1.length > 0) {
      this.reqObj1.forEach(myObject => {
    });
  }*/
  }
}
