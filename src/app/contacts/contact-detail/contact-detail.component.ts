import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact;

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
  }

}
