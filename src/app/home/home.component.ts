import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  subscribeForm! : FormGroup
  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.newSubscribeForm();
    
  }

  subscribe(){
    console.log(this.subscribeForm.value)
  }

  newSubscribeForm() {
    this.subscribeForm = new FormGroup({
      fullName: new FormControl ('', [Validators.required]),
      email: new FormControl ('', [Validators.required, Validators.email])
    })
    
  }


  testimonies = [
    {
      id: '1',
      testament: 'Thank you judikay foundation for all you do,may God continue to bless you.',
      testifierName: 'Florence Akabueze'
    },
    {
      id: '2',
      testament: 'Thank you so much Judikay foundation and the team for remembering us,we are truly grateful.',
      testifierName: 'House of mercy children Home'
    },
    {
      id: '3',
      testament: 'Thank you so much judikay foundation for giving so much to humanity and this generation.',
      testifierName: 'T.Y Cares'
    }
  ]
  gallery: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }

  testimonials: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }
}


