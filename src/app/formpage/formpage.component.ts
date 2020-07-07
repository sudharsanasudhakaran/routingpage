
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// import { DataService } from '../data.service';

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css']
})
export class FormpageComponent implements OnInit {
  // iter: number= 0;
  // myForm: FormGroup;
  // productList: [];
  // constructor(private fb: FormBuilder ) { 
  //   this.myForm= this.fb.group({
  //     'name': this.fb.control('', Validators.required),
  //     'price': this.fb.control("", Validators.required),
  //     'stock': this.fb.control("", Validators.required)
  //   })
  //   console.log(fb)
  // }

  ngOnInit(): void {
  }

  // submit(){
  //   console.log(this.myForm.value.name,  this.myForm.value.price, this.myForm.value.stock);
  //   window.localStorage.setItem(this.productForm.value.id, JSON.stringify({ name: this.productForm.value.name, price: this.productForm.value.price, stock: this.productForm.value.stock }))
  //   this.dataService.sharedData.push(this.productForm.value.id);
  //   this.show = false;

  //   }
  // }
}