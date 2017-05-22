
import { Injectable } from '@angular/core';
import {Http, Headers}          from    '@angular/http';

import {Observable}             from    "rxjs/Observable";
import {Observer}               from    "rxjs/Observer";
@Injectable()
export class Service {
  constructor(
        private http            :   Http
        ) {

    };
    getOrganization(){
        let utilityObservable   =   new Observable(observer => {
        	var utilityURL = "http://104.197.128.152:8000/v1/genres";
            let utilityWS       =   this.http.get(utilityURL);
            
           	 utilityWS.subscribe(

                utilityResponse =>  {
                    var uRespJson               =   utilityResponse.json();

                        var utilityData         =   uRespJson.results;
                        observer.next(utilityData);
                   
                },

                utilityErr      =>  {
                   
                     var errMsg  =   'ERROR: HTTP Error :: Utility Provider :: Get Utility :: \n' + JSON.stringify(utilityErr);
                    observer.error(errMsg);
                },

                ()              =>  {
                }

            );
        });
        return  utilityObservable;                    
    }
    getGenres(){
        let utilityObservable   =   new Observable(observer => {
            var utilityURL = "http://104.197.128.152:8000/v1/genres";
            let utilityWS       =   this.http.get(utilityURL);
            
                utilityWS.subscribe(

                utilityResponse =>  {
                    var uRespJson               =   utilityResponse.json();

                        var utilityData         =   uRespJson.results;
                        observer.next(utilityData);
                   
                },

                utilityErr      =>  {
                   
                     var errMsg  =   'ERROR: HTTP Error :: Utility Provider :: Get Utility :: \n' + JSON.stringify(utilityErr);
                    observer.error(errMsg);
                },

                ()              =>  {
                }

            );
        });
        return  utilityObservable;                    
    }
    createEntry(entry){
         var quotData:any        =   {
            "name":entry
        };
        console.log("Befoere",JSON.stringify(quotData));
        var url = "http://104.197.128.152:8000/v1/genres";
        let orderObservable     =   new Observable(observer => {
            this.http.post(url,quotData).subscribe(
                orderResponse =>  {
                    console.log("-------------->");
                    console.log(orderResponse);
                    var aRespJson               =   orderResponse.json();
                     observer.next(aRespJson);
                       
                 },
                orderErr      =>  {
                    
                   observer.error(orderErr);
                    },
                ()              =>  {
                    
                    }
            );
       });
       return  orderObservable;
    }
}
