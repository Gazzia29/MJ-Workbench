import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LairComponent} from "./lair/lair.component";
import {GameComponent} from "./game/game.component";
import {AngularFireAuthGuard, redirectUnauthorizedTo} from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '../library'
  },
  {
    path: 'game/:id',
    component: GameComponent,
  },
  {
    path: 'lair/:id',
    component: LairComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuerredusaleRoutingModule {
}
