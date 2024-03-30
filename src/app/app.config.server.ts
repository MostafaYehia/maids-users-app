import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { ProvideBrowserStorageToServer } from './providers';

const serverConfig: ApplicationConfig = {
  providers: [
    ProvideBrowserStorageToServer(),
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
