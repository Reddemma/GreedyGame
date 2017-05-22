import { Component, NgModule } from '@angular/core';
import {Product} from './Product';
import {RatingModule} from "ng2-rating";
import { Service }         from './service';
import { TracksComponent } from './tracks';
import { GenresComponent } from './genres';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hideTracks = false;
  hideGenres = false;
  
   constructor(private service:Service,){
     
   };
   hideTracksMethod(){
     this.hideGenres = false;
     this.hideTracks = true;
   }
   showGenresMethod(){
     this.hideTracks = false;
       this.hideGenres = true;
   }
  
}
