import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SplashScreenComponent } from './Pages/splash-screen/splash-screen.component';
import { HomeScreenComponent } from './Pages/home-screen/home-screen.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
import { FeedbackScreenComponent } from './Pages/feedback-screen/feedback-screen.component';
import { FeedbackBlockComponent } from './Components/feedback-block/feedback-block.component';
import { FeedbackDetailsScreenComponent } from './Pages/feedback-details-screen/feedback-details-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { RatingComponent } from './Components/rating/rating.component'; // Import HttpClientModule
import { MatListModule } from '@angular/material/list';
import { FeedbackFormComponent } from './Pages/feedback-form/feedback-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarComponent } from './Components/snackbar/snackbar.component';
import {MatIconModule} from '@angular/material/icon';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminOrderAddComponent } from './admin/admin-orders/admin-order-add/admin-order-add.component';
import { AdminOrderServiceService } from './Services/admin-order-service/admin-order-service.service';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminAddUserComponent } from './admin/admin-add-user/admin-add-user.component';
import { CartPageComponent } from './Pages/cart-page/cart-page.component';
<<<<<<< HEAD
import { CustomizeScreenComponent } from './Pages/customize-screen/customize-screen.component';
import { IngredientsSliderComponent } from './Components/ingredients-slider/ingredients-slider.component';
=======
import { AdminIngredientsComponent } from './admin/admin-ingredients/admin-ingredients.component';
import { AdminIngredientServiceService } from './Services/admin-ingredient-service/admin-ingredient-service.service';
import { CustomizeScreenComponent } from './Pages/customize-screen/customize-screen.component';
>>>>>>> 560d8a6cec4c2f2e76c5b3ee41acc3eea0b21e9d


@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    HomeScreenComponent,
    NavbarComponent,
    FeedbackScreenComponent,
    FeedbackBlockComponent,
    FeedbackDetailsScreenComponent,
    RatingComponent,
    FeedbackFormComponent,
    SnackbarComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    AdminOrdersComponent,
    AdminOrderAddComponent,
    AdminUsersComponent,
    AdminAddUserComponent,
    CartPageComponent,
    SnackbarComponent,
<<<<<<< HEAD
    CustomizeScreenComponent,
    IngredientsSliderComponent,
=======
    AdminIngredientsComponent,
    CustomizeScreenComponent
>>>>>>> 560d8a6cec4c2f2e76c5b3ee41acc3eea0b21e9d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    CarouselModule.forRoot(),
  ],
  exports: [RouterModule],
  providers: [AdminOrderServiceService, AdminIngredientServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
