import { Component, NgModule } from '@angular/core';
import {Product} from './Product';
import {RatingModule} from "ng2-rating";
import { Service }         from './service';
@Component({
  selector: 'genres',
  templateUrl: './genres.html',
  styleUrls: ['./app.component.css']
})
export class GenresComponent {
  title = 'Tracks Genres';
  filteredItems : Product[];
   pages : number = 4;
  pageSize : number = 5;
   pageNumber : number = 0;
   currentIndex : number = 1;
   items: Product[];
   allItems :any;
   pagesIndex : Array<number>;
   pageStart : number = 1;
   inputName : string = '';
   starsCount : number = 2;
    pagename: string = "Page 1";
   hideElement = false;
   newValue  : string = "";
   searchValue : string="";
   constructor(private service:Service,){
      this.service.getGenres().subscribe(
                data => {
                   this.allItems = data;
          this.filteredItems = this.allItems;
                   this.init();
                 },
                 err =>{
                   console.log(err);
                 });
   };
   init(){

         this.currentIndex = 1;
         this.pageStart = 1;
         this.pages = 4;

         this.pageNumber = parseInt(""+ (this.filteredItems.length / this.pageSize));
         if(this.filteredItems.length % this.pageSize != 0){
            this.pageNumber ++;
         }
    
         if(this.pageNumber  < this.pages){

               this.pages =  this.pageNumber;

         }

       

         this.refreshItems();

        

   }
   initrefresh(){
      this.currentIndex = 1;
         this.pageStart = 1;
         this.pages = 4;

         this.pageNumber = parseInt(""+ (this.filteredItems.length / this.pageSize));
         if(this.filteredItems.length % this.pageSize != 0){
            this.pageNumber ++;
         }
    
         if(this.pageNumber  < this.pages){

               this.pages =  this.pageNumber;

         }

       

         this.refreshItemsFilter();
   }
   refreshItemsFilter(){
        var l=0;
             this.items = [];
            
             for(var i=(this.currentIndex - 1)*this.pageSize;i<(this.currentIndex) * this.pageSize;i++){
                     this.items[l]=this.filteredItems[i];
                     l++;
                    
                   }
              this.pagesIndex =  this.fillArray();
   }
   addNewTrack(){
     console.log("addNewTrack");
     this.hideElement = true;
   }

addNewTrackvalue(){
  console.log("new value::",this.newValue);
  this.service.createEntry(this.newValue).subscribe(
    data =>{
      console.log("Entry successfull");
      alert("Successfull");
      this.hideElement = false;
    },
    error=>{
      console.log("Entry fail::",error);
    }
    )
}
onKeySearch(event: any) { // without type info
    this.searchValue = event.target.value;
    console.log("search value",this.searchValue);
     if(this.searchValue != ""){
           var isFound = false;
            this.filteredItems = [];
            this.allItems.forEach(element => {
             
                if(element.name.toUpperCase().indexOf(this.searchValue.toUpperCase())>=0){
                  console.log("======",this.searchValue);
                  isFound = true;
                  this.filteredItems.push(element);
               }
               else{
                 console.log("hhhh",this.searchValue);
               }
            });
            if(isFound){
              console.log("isFound",isFound);
            }
            else{
              console.log("isFound",isFound);
            }
      }else{
         this.filteredItems = this.allItems;
      }
      console.log(this.filteredItems);
      this.initrefresh();
  }
   FilterByName(){

      this.filteredItems = [];

      if(this.inputName != ""){

            this.allItems.forEach(element => {
                if(element.name.toUpperCase().indexOf(this.inputName.toUpperCase())>=0){
                  this.filteredItems.push(element);
               }
            });
      }else{
         this.filteredItems = this.allItems;
      }
      console.log(this.filteredItems);
      this.init();
   }
   fillArray(): any{
      var obj = new Array();
      for(var index = this.pageStart; index< this.pageStart + this.pages; index ++) {

                  obj.push(index);

      }

      return obj;

   }

 refreshItems(){
             // this.items = this.allItems.slice((this.currentIndex - 1)*this.pageSize, (this.currentIndex) * this.pageSize);
             var l=0;
             this.items = [];
            
             for(var i=(this.currentIndex - 1)*this.pageSize;i<(this.currentIndex) * this.pageSize;i++){
                     this.items[l]=this.allItems[i];
                     l++;
                    
                   }
              this.pagesIndex =  this.fillArray();

   }

   prevPage(){

      if(this.currentIndex>1){
         this.currentIndex --;
      } 
      if(this.currentIndex < this.pageStart){

         this.pageStart = this.currentIndex;

      }
      this.pagename = "Page "+this.currentIndex;
      this.refreshItems();

   }

   nextPage(){

      if(this.currentIndex < this.pageNumber){

            this.currentIndex ++;

      }

      if(this.currentIndex >= (this.pageStart + this.pages)){
         this.pageStart = this.currentIndex - this.pages + 1;
      }
 	 this.pagename = "Page "+this.currentIndex;
      this.refreshItems();
   }
    setPage(index : number){
         this.currentIndex = index;
         this.refreshItems();
    }
}
