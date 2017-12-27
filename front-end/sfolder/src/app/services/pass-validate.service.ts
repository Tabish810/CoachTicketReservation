import { Injectable } from '@angular/core';

@Injectable()
export class PassValidateService {

  constructor() { }

  validatePassword(input){

    if(input.current_pass === "" || input.new_pass === "" ||
      input.confirm_pass === ""
    )
    {
      return false;

    }else{
        return true;
    }
 }
 validateLogin(input){
  
      if(input.user_name === "" || input.password === "")
      {
        return false;
  
      }else{
          return true;
      }
   }
   validateReserveseat(input){
        if(input.ticketno === "" || input.coachname === ""||
        input.customer_name ==="" || input.from === ""||
        input.to === "" || input.departure_time === ""||
        input.coach_time === "" || input.seat_no=== ""||
        input.fare === "" || input.advance === ""||
        input.remaining === "" || input.phone === "" ||
        input.cnic === "" || input.date === "")
        {
          return false;
    
        }else{
            return true;
        }
     }
     validateCoachInfo(input){
      if(input.coach_no === "" || input.coach_name === ""||
      input.timings === "" || input.destination_loc === ""||
      input.fare === ""){
        
        return false;
  
      }
      else{
          return true;
      }
   }

   validateSaveDriverInfo(input){
    if(input.coach_number === "" || input.name === ""||
    input.coach_name === "" || input.cnic === ""||
    input.phone_no === "" || input.address === "" ){
      
      return false;

    }
    else{
        return true;
    }
 }
 validateCancelSeat(input){
  if(input.ticket_number === "" ){  
    return false;
  }
  else{
      return true;
    }
  }
  validateCoachModelInput(input){
    if(input.coach_no === "" || input.coach_name === "" || input.timings === "" 
   || input.destination_loc === "" || input.fare === "" ){  
      return false;
    }
    else{
        return true;
      }
  }
  validateDriverModelInput(input){
    if(input.coach_number === "" || input.name === "" || input.cnic === "" 
   || input.phone_no === "" || input.address === "" ){  
      return false;
    }
    else{
        return true;
      }
  }


}