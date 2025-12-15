import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: 'home', loadComponent: () => import('./home').then(m => m.HomePage) },
	{ path: 'lavagens', loadComponent: () => import('./lavagens').then(m => m.LavagensPage) },
	{ path: 'polimentos', loadComponent: () => import('./polimentos').then(m => m.PolimentosPage) },
	{ path: 'higienizacao', loadComponent: () => import('./higienizacao').then(m => m.HigienizacaoPage) },
	{ path: '', loadComponent: () => import('./manutencao').then(m => m.ManutencaoPage) }
];
