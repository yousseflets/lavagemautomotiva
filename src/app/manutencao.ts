import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-manutencao',
  standalone: true,
  templateUrl: './manutencao.html',
  styleUrls: ['./manutencao.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ManutencaoPage implements OnInit, OnDestroy {
  ngOnInit(): void {
    try { document.documentElement.classList.add('maintenance-mode'); } catch(e) {}
  }
  ngOnDestroy(): void {
    try { document.documentElement.classList.remove('maintenance-mode'); } catch(e) {}
  }
}
