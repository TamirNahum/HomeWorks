import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Avatar} from "../models/avatar.model";
import {AvatarInfo} from "../models/avatarInfo.model";


@Injectable()
export class AvatarService{

    avatarInfo:any={data:[]};;
    

    constructor(private myHttpClient: HttpClient) {
        this.initAvatar();
    }

    initAvatar(): void {
        const apiUrl:string=`https://reqres.in/api/users`;
        
        this.myHttpClient.get(apiUrl)
            .subscribe((x: Avatar) => { this.avatarInfo.data=x.data; });
            debugger;
    }
}