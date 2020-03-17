import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCreatorComponent } from './components/user-creator/user-creator.component';


const routes: Routes = [
  {path: 'create-user', component: UserCreatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
