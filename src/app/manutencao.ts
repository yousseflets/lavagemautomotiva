import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-manutencao',
  standalone: true,
  templateUrl: './manutencao.html',
  styleUrls: ['./manutencao.scss','./app.scss']
})
export class ManutencaoPage implements OnInit, OnDestroy {
  ngOnInit(): void {
    try { document.documentElement.classList.add('maintenance-mode'); } catch(e) {}
  }
  ngOnDestroy(): void {
    try { document.documentElement.classList.remove('maintenance-mode'); } catch(e) {}
  }
}
