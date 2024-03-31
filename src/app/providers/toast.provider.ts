import { importProvidersFrom } from '@angular/core';
import { MessageModule } from 'primeng/message';


export const provideToast = () => importProvidersFrom(MessageModule);
