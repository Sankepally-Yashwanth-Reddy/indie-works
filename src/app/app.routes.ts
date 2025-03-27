import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { FindFreelancersComponent } from './find-freelancers/find-freelancers.component';
import { FindJobsOrRequestsComponent } from './find-jobs-or-requests/find-jobs-or-requests.component';
import { MyRequestsOrOrdersComponent } from './my-requests-or-orders/my-requests-or-orders.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { EarningOrWalletComponent } from './earning-or-wallet/earning-or-wallet.component';
import { ReviewsAndRatingsComponent } from './reviews-and-ratings/reviews-and-ratings.component';
import { SupportHelpCenterComponent } from './support-help-center/support-help-center.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    {
        path: '', component: LoginComponent
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'forgot-password', component: ForgotPasswordComponent
    },
    {
        path: 'home', component: LayoutComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'find-freelancers', component: FindFreelancersComponent },
            { path: 'find-jobs-or-requests', component: FindJobsOrRequestsComponent },
            {
                path: 'my-requests-or-orders', component: MyRequestsOrOrdersComponent
            },
            {
                path: 'my-services', component: MyServicesComponent
            },
            {
                path: 'earnings-or-wallet', component: EarningOrWalletComponent
            },
            {
                path: 'reviews-and-ratings', component: ReviewsAndRatingsComponent
            },
            {
                path: 'support', component: SupportHelpCenterComponent
            },
            {
                path: 'settings', component: SettingsComponent
            },
        ]
    },
    {
        path: 'admin', component: AdminComponent
    }
];
