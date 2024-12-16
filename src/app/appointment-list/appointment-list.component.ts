import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
      
      newApptDesc : string = ''
      newApptDate : Date = new Date();
      counter: number = 1;

      appointments : Appointment[] = []

      ngOnInit(): void {
        let savedAppointments = localStorage.getItem('appointments')
        let counter = localStorage.getItem('idCounter')
        this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
        this.counter = counter ? JSON.parse(counter) : 0;
      }

      addAppointment() {
        if(this.newApptDate && this.newApptDesc !== '') {
          this.appointments.push({
            id: this.counter,
            description: this.newApptDesc,
            date: this.newApptDate
          });
          // alert('Added Appointment: ' + this.newApptDesc + ' ' + this.newApptDate + 'with Id: ' + this.counter)
          this.counter++;
          this.newApptDesc = ''
          this.newApptDate = new Date();
        }

        localStorage.setItem('appointments',JSON.stringify(this.appointments))
        localStorage.setItem('idCounter',JSON.stringify(this.counter))
        
      }

      removeAppointment(index : number) {
        this.appointments.splice(index,1);
        localStorage.setItem('appointments',JSON.stringify(this.appointments))
      }
}
