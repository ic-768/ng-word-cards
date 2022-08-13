import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { MenuComponent } from './menu/menu.component';
import { PracticeScreenComponent } from './practice-screen/practice-screen.component';

const routes: Routes = [
  { path: 'cards', component: CardListComponent },
  { path: 'card/:id', component: CardComponent },
  { path: 'practice', component: PracticeScreenComponent },
  { path: '**', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
