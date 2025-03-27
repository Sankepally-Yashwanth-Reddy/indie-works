import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-left',
  imports: [CommonModule],
  templateUrl: './sidebar-left.component.html',
  styleUrl: './sidebar-left.component.css'
})
export class SidebarLeftComponent {
  isSidebarOpen = false;
  menuItems = [
    { label: 'Dashboard', icon: 'dashboard', route: 'home' },
    { label: 'Find Freelancers', icon: 'person_search', route: 'home/find-freelancers' },
    { label: 'Find Jobs/Requests', icon: 'work', route: 'home/find-jobs-or-requests' },
    { label: 'My Requests/Orders', icon: 'assignment', route: 'home/my-requests-or-orders' },
    { label: 'My Services', icon: 'handyman', route: 'home/my-services' },
    { label: 'Earnings/Wallet', icon: 'account_balance_wallet', route: 'home/earnings-or-wallet' },
    { label: 'Reviews & Ratings', icon: 'star_rate', route: 'home/reviews-and-ratings' },
    { label: 'Support/Help Center', icon: 'support_agent', route: 'home/support' },
    { label: 'Settings', icon: 'settings', route: 'home/settings' }
  ];

  constructor(private router: Router) { }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Functional-based routing using switch-case
  onNavigate(route: string) {
    switch (route) {
      case 'home':
        this.router.navigate(['/home']);
        break;
      case 'home/find-freelancers':
        this.router.navigate(['/home/find-freelancers']);
        break;
      case 'home/find-jobs-or-requests':
        this.router.navigate(['/home/find-jobs-or-requests']);
        break;
      case 'home/my-requests-or-orders':
        this.router.navigate(['/home/my-requests-or-orders']);
        break;
      case 'home/my-services':
        this.router.navigate(['/home/my-services']);
        break;
      case 'home/earnings-or-wallet':
        this.router.navigate(['/home/earnings-or-wallet']);
        break;
      case 'home/reviews-and-ratings':
        this.router.navigate(['/home/reviews-and-ratings']);
        break;
      case 'home/support':
        this.router.navigate(['/home/support']);
        break;
      case 'home/settings':
        this.router.navigate(['/home/settings']);
        break;
      default:
        console.warn('Unknown route:', route);
        break;
    }
  }

}
