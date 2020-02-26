import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: 'page-one',
        component: PageOneComponent,
        data: {
          title: 'Page One'
        }
      },
      {
        path: 'page-two',
        component: PageTwoComponent,
        data: {
          title: 'Page Two'
        }
      },
      {
        path: 'page-three',
        component: PageThreeComponent,
        data: {
          title: 'Page Three'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
