import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomePage} from "../home/home.page";
import {TabsPage} from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "",
        redirectTo: "/tabs/(home:home)",
        pathMatch: "full",
      },
      {
        path: "home",
        outlet: "home",
        component: HomePage
      },
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/(home:home)",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
