import { LightningElement } from 'lwc';

export default class Com1fortest extends LightningElement {


    prodarray=[
        {
        empid: 7863,
        employeename: "sambit",
        employeesalary: 7000,
        employeedepartment: "bca"
        },
        {
            empid: 7864,
            employeename: "athar",
            employeesalary: 10000,
            employeedepartment: "btech"
            },
            {
                empid: 7865,
                employeename: "roshan",
                employeesalary: 7000,
                employeedepartment: "bsc"
                }
        
    ];
    sdgh(event)
    {
       
       var sk="";
        this.sk=value;
    }
}