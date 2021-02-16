import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { faChevronLeft, faHome, faPuzzlePiece ,faPlug, faGamepad, faGlobeAmericas, faCar, faWallet, faGraduationCap, faDonate , faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { BillersService } from 'src/app/services/billers.service';

@Component({
  selector: 'app-billers-main-categories',
  templateUrl: './billers-main-categories.component.html',
  styleUrls: ['./billers-main-categories.component.scss']
})
export class BillersMainCategoriesComponent implements OnInit {

 
  billersAlldata: any[] = []; 
  billersCategoryList: any[] = []; 
  
  destroy: Subject<void> = new Subject<void>(); 
  languageId = '1'; 

    // * * * Icons * * * * 
    billerIconLink = 'assets/img/biller-illustrations/item.name.svg'
    faHome = faHome;
    faPlug = faPlug; 
    faGamepad= faGamepad; 
    faGlobeAmericas = faGlobeAmericas;
    faCar = faCar; 
    faWallet = faWallet; 
    faGraduationCap = faGraduationCap;
    faDonate = faDonate;
    faPuzzlePiece = faPuzzlePiece;
    faArrowDown = faArrowDown;
    faChevronLeft = faChevronLeft; 
  //  * * *   / * * * 

  constructor(
    private _billersService: BillersService,  
    private router: Router
  ) { }

  ngOnInit(): void {
    

    this.getBillers(); 
    console.log(this._billersService.billerData);


  };
  


  getBillers(): any {    
             
      //  * * * check if billerData exists  * * * * 
        if ( this._billersService.billerData && this._billersService.billerData.length > 0 ) { 
          console.log(this._billersService.billerData);
          
          
          this.billersAlldata = this._billersService.billerData[0];
          //  * * Set main biller categories  * * 
          this.billersCategoryList = this.billersAlldata.map(item => item );

        } else { 
          
          const schema = {
            domainId: '2', 
            languageId: 1
          };

           return this._billersService
                      .getBillers(  schema  )
                      .pipe( takeUntil(this.destroy) )
                      .subscribe( (data: any) => {
                            console.log(data);
                            
                            this.billersAlldata = data['data']['elements'][1]['children'];             
                            //  * * Set main biller categoeries * * 
                            this.billersCategoryList = this.billersAlldata.map( item => item );
                      
   
          }, err => console.log(err) )

        }
    
   
    
          
  }; 

  routeToCategory(categoryName: string) {

    this.router.navigate([`/user-profile/transfer/pay-bill/${categoryName}`]);
    
  };

  routeBack() {
    return this.router.navigate(['/user-profile/transfer/pay-bill/pay']);
  }


}
