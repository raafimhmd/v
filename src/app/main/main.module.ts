import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ParticlesModule } from 'angular-particle';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        ParticlesModule
    ],
    declarations: [
        LandingComponent,
    ]
})
export class MainModule { }
