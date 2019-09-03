import { NgModule } from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import * as Material from '@angular/material';

const MaterialModules = [
  A11yModule,
  CdkStepperModule,
  CdkTableModule,
  CdkTreeModule,
  DragDropModule,
  Material.MatAutocompleteModule,
  Material.MatBadgeModule,
  Material.MatBottomSheetModule,
  Material.MatButtonModule,
  Material.MatButtonToggleModule,
  Material.MatCardModule,
  Material.MatCheckboxModule,
  Material.MatChipsModule,
  Material.MatStepperModule,
  Material.MatDatepickerModule,
  Material.MatDialogModule,
  Material.MatDividerModule,
  Material.MatExpansionModule,
  Material.MatGridListModule,
  Material.MatIconModule,
  Material.MatInputModule,
  Material.MatListModule,
  Material.MatMenuModule,
  Material.MatNativeDateModule,
  Material.MatPaginatorModule,
  Material.MatProgressBarModule,
  Material.MatProgressSpinnerModule,
  Material.MatRadioModule,
  Material.MatRippleModule,
  Material.MatSelectModule,
  Material.MatSidenavModule,
  Material.MatSliderModule,
  Material.MatSlideToggleModule,
  Material.MatSnackBarModule,
  Material.MatSortModule,
  Material.MatTableModule,
  Material.MatTabsModule,
  Material.MatToolbarModule,
  Material.MatTooltipModule,
  Material.MatTreeModule,
  PortalModule,
  ScrollingModule,
]

@NgModule({
  exports: [MaterialModules],
  imports: [MaterialModules]
})
export class MaterialModule { }
