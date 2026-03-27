import { Component } from '@angular/core';
import { Info } from "../components/info/info";
import { infoHeader, InfoModel } from '../models/info.models';

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
    title:'Appointment with the Design Team...',
    date: '25 jan. 14:00',
    status:"Behind Schedule"
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
    status:"Behind Schedule"
  }

   infoComplited: InfoModel = {
      title: 'Appointment with the Design Team...',
     date: '25 Nov. 14:00',
     status:'completed'
     }

  
     info: infoHeader[] =[

     {
      title:'upcoming',
      status:'active'
     
     },
      {
      title:'pending',
      status:'active'
     
     },
      {
      title:'completed',
      status:'active'
     
     },
         {
      title:'upcoming',
      status:'disabled'
     
     },
      {
      title:'pending',
      status:'disabled'
     
     },
      {
      title:'completed',
      status:'disabled'
     
     }

    ]

   infoUpcomingActive : infoHeader = 
   {
      title:'upcoming',
      status:'active'
     
   }
   infoUpcomingDisabled : infoHeader = 
   {
      title:'upcoming',
      status:'disabled'
   }

    infoComplitedActive : infoHeader = 
   {
      title:'complited',
      status:'active'
     
   }
   infoComplitedDisabled : infoHeader = 
   {
      title:'complited',
      status:'disabled'
   }

    infoPendingActive : infoHeader = 
   {
      title:'Behind Schedule',
      status:'active'
     
   }
   infoPendingDisabled : infoHeader = 
   {
      title:'Behind Schedule',
      status:'disabled'
   }




   
     


}



