import { LightningElement, track} from 'lwc';

export default class Com2 extends LightningElement {

   @track show = true;   
   @track emparray = [{
        'name':'',
        'age':0,
        'location':'',
        'salary':0.0
    }];


@track name;
@track age;
@track location;
@track salary;

    employee(event)
    {
        if(event.target.label=="Enter Employee Name")
        {
         this.name=event.target.value;
        }
        if(event.target.label=="Enter Employee Age")
        {
          this.age=event.target.value;
        }
        if(event.target.label=="Enter Salary")
        {
          this.salary=event.target.value;
        }
        if(event.target.label=="Enter Employee Location")
        {
          this.location=event.target.value;
        }
        
    }
    addEmp(event)
    {
      this.emparray.push({
          'name':this.name,
          'age':this.age,
          'location':this.location,
          'salary':this.salary
      });
      console.log(this.emparray);
    }
    showhide()
    {
        this.show = (this.show == true) ? false : true;
    }


}