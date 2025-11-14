import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', loadComponent: () => import('./home').then(m => m.HomePage) },
	{ path: 'lavagens', loadComponent: () => import('./lavagens').then(m => m.LavagensPage) },
	{ path: 'polimentos', loadComponent: () => import('./polimentos').then(m => m.PolimentosPage) },
	{ path: 'higienizacao', loadComponent: () => import('./higienizacao').then(m => m.HigienizacaoPage) }
];
