import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/**
 * Factory function that creates a new instance of `TranslateHttpLoader`.
 * It is used for loading translation files from the server for internationalization.
 * 
 * @param http - The `HttpClient` instance used to perform HTTP requests.
 * @returns A new instance of `TranslateHttpLoader` configured with the specified path and file extension.
 */
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

/**
 * The application configuration for setting up routing, HTTP client, and internationalization (i18n).
 * It provides necessary services such as routing, HTTP client with interceptors, and translation loader for i18n.
 * 
 * @constant appConfig - Configuration object for the Angular application setup.
 */
export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(withInterceptorsFromDi()),
        importProvidersFrom(
            TranslateModule.forRoot({
                loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
                }
            })
        )
    ]
}