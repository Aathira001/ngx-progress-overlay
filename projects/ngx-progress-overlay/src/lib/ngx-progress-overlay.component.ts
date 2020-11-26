import { Component, OnInit } from '@angular/core';
import { NgxProgressOverlayService } from './ngx-progress-overlay.service'

@Component({
  selector: 'ngx-progress-overlay',
  templateUrl: './ngx-progress-overlay.component.html',
  styleUrls: ['./ngx-progress-overlay.component.css'],
})
export class NgxProgressOverlayComponent implements OnInit {

  progressColor     : string = '#00e676'
  progressValue     : number = 0;
  progressText      : string = '';
  displayToggle     : boolean = false;
  progressFormatted : string = '0 100'

  constructor(
    private dataService : NgxProgressOverlayService
  ) { }

  ngOnInit() {
    // Subscribe for toggle display
    this.dataService.display$.subscribe(
      d => {
        this.displayToggle = d; 
      }
    )
    // Subscribe for value changes
    this.dataService.value$.subscribe(
      v => {
        if(v<0){
          this.progressValue = 0; 
        }else if(v>100){
          this.progressValue = 100;
        }else{
          this.progressValue = v;
        }
        let remainingValue = 100 - this.progressValue
        this.progressFormatted = this.progressValue.toString() + ' ' + remainingValue.toString()
      }
    )
    // Subscribe for text changes
    this.dataService.text$.subscribe(
      t => {
        this.progressText = t; 
      }
    )
    // Subscribe for color changes
    this.dataService.color$.subscribe(
      c => {
        if(c!=undefined && c!=''){
          this.progressColor = c; 
        }
      }
    )
  }

}