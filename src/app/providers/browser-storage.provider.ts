import { BrowserStorageServerService } from "../common/services/browser-storage-server.service";
import { BrowserStorageService } from "../common/services/browser-storage.service";


export const ProvideBrowserStorageToServer = () => ({
    provide: BrowserStorageService,
    useClass: BrowserStorageServerService,
});

export const ProvideBrowserStorage = () => ({
    provide: BrowserStorageService,
    useClass: BrowserStorageService,
});

