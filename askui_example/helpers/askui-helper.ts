import { UiControlClient } from 'askui';
import 'dotenv/config'

// Client is necessary to use the askui API
let auiAndroidDevice1: UiControlClient;
let auiAndroidDevice2: UiControlClient;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {

  // Connects to AskUI Controller 1 (emulator-5556)
  auiAndroidDevice1 = await UiControlClient.build({
    uiControllerUrl: "ws://127.0.0.1:6769",
  });
  await auiAndroidDevice1.connect();
  
  // Connects to AskUI Controller 2 (emulator-5554)
  auiAndroidDevice2 = await UiControlClient.build({
    uiControllerUrl: "ws://127.0.0.1:6869",
  });
  
  await auiAndroidDevice2.connect();
});

beforeEach(async () => {
});


afterEach(async () => {});

afterAll(async () => {
  auiAndroidDevice1.disconnect();
  auiAndroidDevice2.disconnect();

});

export { auiAndroidDevice1, auiAndroidDevice2 };
