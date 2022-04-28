import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../../environments/environment";
import { EffectsModule } from "@ngrx/effects";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { UserassessmentsComponent } from "./userassessments/userassessments.component";
import { UserassessmentsGraphsComponent } from "./userassessments-graphs/userassessments-graphs.component";
import { AdminassessmentsComponent } from "./adminassessments/adminassessments.component";
import { AppRoutingModule } from "../app-routing.module";
import { userAssessmentsReducer } from "../userAssessmentsStore/userAssessments.reducers";
import { adminAssessmentsReducer } from "../adminAssessmentsStore/adminAssessments.reducers";
import { userAssessmentsGraphsReducer } from "../userAssessmentsGrapshStore/userAssessmentsGraphs.reducers";
import { userAssessmentsEffects } from "../userAssessmentsStore/userAssessments.effects";
import { userAssessmentsGraphsEffects } from "../userAssessmentsGrapshStore/userAssessmentsGraphs.effects";
import { adminAssessmentsEffects } from "../adminAssessmentsStore/adminAssessments.effects";
import { DataService } from "../services/data.service";
import { AdminDataService } from "../services/adminData.service";
import { DataGraphsService } from '../services/dataGraphs.service'

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
    StoreModule.forRoot({
      userAssessmentsReducer,
      adminAssessmentsReducer,
      userAssessmentsGraphsReducer
    }),
    !environment.production ? StoreDevtoolsModule.instrument():[],
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
