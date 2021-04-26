import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})


export class UserProfileComponent implements OnInit {
  currentUser:any;
userId:any
  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) {
    this.actRoute.paramMap.subscribe((id=>{
      this.userId=id.get('id')
    }));

    this.authService.getUserProfile(this.userId).subscribe(res => {
      this.currentUser = res.msg;
      console.log(res.msg)
    })
  }

  ngOnInit() { }
}



