import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule } from '@angular/material/radio';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTooltipModule} from "@angular/material/tooltip"
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
//import {MatTableDataSource} from "@angular/material/table"; this not work in filter data
import {MatSortModule} from "@angular/material/sort";
import { MatPaginatorModule }  from '@angular/material/paginator';






const mat = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatToolbarModule,
 MatButtonToggleModule,
 MatDatepickerModule,
 MatNativeDateModule,
 MatFormFieldModule,
 MatInputModule,
 MatSelectModule,
 MatBadgeModule,
 MatProgressSpinnerModule,
 MatListModule,
MatDividerModule,
MatGridListModule,
MatExpansionModule,
MatCardModule,
MatTabsModule,
MatStepperModule,
MatAutocompleteModule,
MatCheckboxModule,
MatRadioModule,
MatTooltipModule,
MatSnackBarModule,
MatDialogModule,
MatTableModule,
MatSortModule,
MatPaginatorModule,
MatInputModule,
MatFormFieldModule



]




@NgModule({
  declarations: [],
  imports: [mat],
  exports:[mat]
})
export class MaterialModule { }
