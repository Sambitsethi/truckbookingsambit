import { LightningElement, track } from 'lwc';
import Account_object from '@salesforce/schema/Account';

export default class Salesforcedataservice extends LightningElement {

@track Accountapi=Account_object;


}