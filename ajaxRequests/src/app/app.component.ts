import { Component } from '@angular/core';
import {AvatarService} from "./shared/services/avatar-service.service";
import {Avatar} from "./shared/models/avatar.model";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   avatarArray:Avatar;

  constructor(private myAvatarService:AvatarService) {
 
 }

 ngOnInit(){
   this.avatarArray=this.myAvatarService.avatarInfo;
 }

  title = 'app';
}
