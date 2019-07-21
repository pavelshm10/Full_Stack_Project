import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../components/admin/admin.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: "", component: AdminComponent } // Relative to "admin" in the RoutingModule
];

@NgModule({
    declarations: [AdminComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AdminModule { }

