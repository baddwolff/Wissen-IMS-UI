import {Component, Inject, OnInit} from '@angular/core';
import {JQ_TOKEN} from '../../Services/jquery.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(@Inject(JQ_TOKEN) private $: any,private router:Router) {
  }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.$("body").toggleClass("sidebar-toggled");
    this.$(".sidebar").toggleClass("toggled");
    if (this.$(".sidebar").hasClass("toggled")) {

      this.$('.sidebar .collapse').collapse('hide');
    }
  }

  routeAdd() {
    this.router.navigate(['/home/product/add'])
  }

  routeView(){
    this.router.navigate(['home/product/view'])
  }

  routeHome() {
    this.router.navigate(['home/dashboard'])
  }


}
