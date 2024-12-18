import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAJ5L58_iwzEB_lPFsV6JOCyi3nIR9UsR0",
  authDomain: "cap-shop-1ffa9.firebaseapp.com",
  projectId: "cap-shop-1ffa9",
  storageBucket: "cap-shop-1ffa9.firebasestorage.app",
  messagingSenderId: "712090580505",
  appId: "1:712090580505:web:021d7afad865eb3c209c88",
  measurementId: "G-LQCNXQQ04R",
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ]
};
