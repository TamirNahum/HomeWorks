import {AvatarInfo} from "../models/avatarInfo.model";

export interface Avatar {
    page: number;
        per_page: number;
        total: number;
        total_pages: number;
    data:AvatarInfo;
  
}