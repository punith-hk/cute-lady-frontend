import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared-service/shared.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {

  constructor(public sharedService: SharedService) { }
  public menuFolded: any;
  ngOnInit() {
    if(this.sharedService.leftSideMenuBar){
      // this.sharedService.appMenuFolded.subscribe(menufolded => {
      //   this.menuFolded = menufolded;
      // });
    }
  }

}
