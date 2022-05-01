import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../../../environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from "@angular/material/table";

import { UserassessmentsComponent } from "./userassessments/userassessments.component";
import { UserassessmentsGraphsComponent } from "./userassessments-graphs/userassessments-graphs.component";
import { AdminassessmentsComponent } from "./adminassessments/adminassessments.component";
import { AppRoutingModule } from "../../app-routing.module";
import { userAssessmentsReducer } from "../../core/store/reducers/userAssessments.reducers";
import { adminAssessmentsReducer } from "../../core/store/reducers/adminAssessments.reducers";
import { userAssessmentsGraphsReducer } from "../../core/store/reducers/userAssessmentsGraphs.reducers";
import { userAssessmentsEffects } from "../../core/store/effects/userAssessments.effects";
import { userAssessmentsGraphsEffects } from "../../core/store/effects/userAssessmentsGraphs.effects";
import { adminAssessmentsEffects } from "../../core/store/effects/adminAssessments.effects";
import { DataService } from "../../core/services/data.service";
import { AdminDataService } from "../../core/services/adminData.service";
import { DataGraphsService } from '../../core/services/dataGraphs.service'

@NgModule({
  declarations: [
    UserassessmentsComponent,
    UserassessmentsGraphsComponent,
    AdminassessmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    StoreModule.forRoot({
      userAssessmentsReducer,
      adminAssessmentsReducer,
      userAssessmentsGraphsReducer
    }),
    !environment.production ? StoreDevtoolsModule.instrument(): [],
    EffectsModule.forRoot([userAssessmentsEffects, userAssessmentsGraphsEffects, adminAssessmentsEffects])
  ],
  providers: [
    DataService,
    AdminDataService,
    DataGraphsService
  ],
  bootstrap: []
})
export class RoleUserModuleModule { }
