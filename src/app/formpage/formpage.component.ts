import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css']
})

export class FormpageComponent implements OnInit {
  myForm: FormGroup;
  productList: [];

  constructor()
  {
    this.myForm = new FormGroup(
      {
        name : new FormControl('', Validators.required),
        price : new FormControl("", Validators.required),
        stock : new FormControl("", Validators.required)
      }
    );
  }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.myForm.value.name);
    if(this.myForm.valid)
      localStorage.setItem('tableValues', JSON.stringify({name : this.myForm.value.name, price : this.myForm.value.price, stock : this.myForm.value.stock}));
    
  }
}