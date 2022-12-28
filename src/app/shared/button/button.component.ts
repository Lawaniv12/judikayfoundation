import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Status } from 'src/app/types/shared.types';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonText!: string;
  @Input() disabled!: boolean;
  @Input() overRideButtonClass!: boolean;
  @Input() customClass!: string;
  @Input() status!: Status;
  @Output() buttonClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  get getCustomClass(): string {
    return this.overRideButtonClass ? this.customClass: '';
  }

  handleClick(){
    this.buttonClick.emit(true);
  }
}
