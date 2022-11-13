import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {EpisodeResolver} from "./resolves";
import {EpisodesComponent} from "./components/episodes/episodes.component";
import {EpisodeDetailsComponent} from "./components/episode-details/episode-details.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'episodes', pathMatch: 'full'},
      {
        path: 'episodes',
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        resolve: {data: EpisodeResolver},
        component: EpisodesComponent,
        children: [
          {path: ':id', component: EpisodeDetailsComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
