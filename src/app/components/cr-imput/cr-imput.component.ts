import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { CrInputFacade } from '../../services/cr-input.facade';

@Component({
  selector: 'app-cr-imput',
  standalone: true,
  imports: [],
  templateUrl: './cr-imput.component.html',
  styleUrl: './cr-imput.component.css'
})
export class CrImputComponent implements OnInit, OnChanges {

  crInputFacade = inject(CrInputFacade);

  onFile($event: Event) {
    if($event.currentTarget != null) {
      $event.preventDefault();
      this.crInputFacade.manipulateEventFile($event)
    }
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}
