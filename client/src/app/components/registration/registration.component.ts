import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Customer } from '../../models/customer';
import { CitiesService } from '../../services/cities.service';
import { Unsubscribe} from 'redux';
import { City } from '../../models/city';
import { Router } from '@angular/router';
import { CustomersService } from '../../services/customers.service';
import { LoginService } from '../../services/login.service';
import { ActionType } from '../../redux/action';
import { NgRedux } from 'ng2-redux';
import { Store } from 'src/app/redux/store';
import { FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit,OnDestroy {
  public customer =new Customer();
  public allCities: City[];
  public allCustomers: Customer[];
  public len: number;
  private unsubscribe: Unsubscribe;
  //public confirmPassword: String;
  public confirmPassword: boolean;
  //public group: NgForm;

  public constructor(private redux: NgRedux<Store>,private customersService: CustomersService, private loginService:LoginService, private router: Router,public title:Title,private citiesService: CitiesService) { }
  ngOnInit() {
    this.confirmPassword=false;
    this.title.setTitle("Mareket | Registration");
    //this.customersService.getAllCustomers;
    const observable=this.citiesService.getAllCities();
    observable.subscribe( cities => {
      this.allCities = cities;
    });
  }
  
  public ngOnDestroy(): void {
    //this.unsubscribe();
  }

  public send():void{ 
    //check if mail is exists
    if(!this.checkMail(this.customer.mail)){
      this.loginService.login();
      this.customersService.addCustomer(this.customer);
      alert("Your registration finished successfuly :) \n Yoy can begin puarchasing")
      this.router.navigate(["/home"]);
    }
    else{
      alert("Mail is already exists");
    }
  }

  public checkMail(mail:String):boolean{
    this.allCustomers=this.redux.getState().customers
    for(let i=0;i<this.allCustomers.length;i++){
      //alert(this.allCustomers[i].mail);
      if(mail===this.allCustomers[i].mail){
        alert(mail);
        return true;
      }
    }
    return false;
  }
}
