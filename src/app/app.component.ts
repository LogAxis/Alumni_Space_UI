import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alumni_Space_UI';

  email = '';
  password = '';
  fullname = '';
  constructor(private router: Router, private http: HttpClient) {}

  onLogin() {
    const formData = { email: this.email, password: this.password };
    this.http.post('/api/login', formData).subscribe((response: any) => {
      if (response.message === 'Login successful') {
        // Redirect to the home page upon successful login
        this.router.navigate(['/home']);
      } else {
        // Handle failed login (show an error message, etc.)
        console.error('Login failed. Please check your credentials.');
      }
    });
  }

  onSubmit() {
    const formData = { fullname: this.fullname, email: this.email, password: this.password };
    this.http.post('http://localhost:3000/api/register', formData).subscribe((response) => {
      console.log('Data sent to server:', response);
      // Clear the form fields after successful submission
      this.email = '';
      this.password = '';
      this.fullname = '';
    });
  }

  selectedImage: { url: string; description: string; } | undefined ;

  onImageSelected(imageData: { file: File; description: string }) {
    // In a real application, you might want to upload the file to a server
    // and get the URL. For simplicity, we'll create a local URL here.
    const imageUrl = URL.createObjectURL(imageData.file);

    this.selectedImage = { url: imageUrl, description: imageData.description };
  }
}

const storedTheme: string | null = localStorage.getItem('theme')

const getPreferredTheme = (): string => {
    if (storedTheme) {
        return storedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const setTheme = (theme: string): void => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
        document.documentElement.setAttribute('data-bs-theme', theme)
    }
}

setTheme(getPreferredTheme())

window.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.theme-icon-active');
  if (el !== null) {
      // Some code here
        const showActiveTheme = (theme: string): void => {
            const activeThemeIcon = document.querySelector('.theme-icon-active use')
            const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
            const svgOfActiveBtn = btnToActive?.querySelector('.mode-switch use')?.getAttribute('href')

            document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
                element.classList.remove('active')
            })

            btnToActive?.classList.add('active')
            if (activeThemeIcon && svgOfActiveBtn) {
                activeThemeIcon.setAttribute('href', svgOfActiveBtn)
            }
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
          if (storedTheme !== 'light' && storedTheme !== 'dark') {
              setTheme(getPreferredTheme())
          }
      })
        showActiveTheme(getPreferredTheme())

        document.querySelectorAll<HTMLElement>('[data-bs-theme-value]')
            .forEach(toggle => {
                toggle.addEventListener('click', () => {
                    const theme = toggle.getAttribute('data-bs-theme-value')
                    if (theme) {
                        localStorage.setItem('theme', theme)
                        setTheme(theme)
                        showActiveTheme(theme)
                    }
                })
            })
    }
})