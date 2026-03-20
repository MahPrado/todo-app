import { Component } from '@angular/core';
import { Info } from "../components/info/info";
import { InfoModel } from '../models/info.models';

@Component({
  selector: 'app-profile-card',
  imports: [Info],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss',
})

export class profile{

  
  infos: InfoModel[] = [
    {
      title: 'Appointment with the Design Team...',
     date: '25 Nov. 14:00',
     status:'upcoming'
     },
   {
    title: 'Appointment with the Design Team...',
    date: '25 jan. 14:00',
    status:"pending"
  },
  {
      title: 'Appointment with the Design Team...',
     date: '25 Nov. 14:00',
     status:'completed'
     },
  ]

  infoUpcoming: InfoModel = {
    title: 'Appointment with the Design Team...',
    date: '25 Nov. 14:00',
    status:'upcoming'
  }



  infoPending: InfoModel = {
    title: 'Interests',
    date: '25 jan. 14:00',
    status:"pending"
  }


}



