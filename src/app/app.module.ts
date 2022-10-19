import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Reactiveform2Component } from './reactiveform2/reactiveform2.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustPipe } from './cust.pipe';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildComponent } from './lifecycle/child/child.component';
import { ServiceDataComponent } from './service-data/service-data.component';
import{ HttpClientModule} from '@angular/common/http';
import { RxjsopComponent } from './rxjsop/rxjsop.component';
import { PromiseComponent } from './promise/promise.component';
import { LivecodingComponent } from './livecoding/livecoding.component';
import { Test1Component } from './test1/test1.component';
import { Binding01Component } from './binding01/binding01.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectivesComponent,
    ReactiveformComponent,
    Reactiveform2Component,
    PipesComponent,
    CustPipe,
    LifecycleComponent,
    ChildComponent,
    ServiceDataComponent,
    RxjsopComponent,
    PromiseComponent,
    LivecodingComponent,
    Test1Component,
    Binding01Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
