# askui-example-android-multiple-devices
Example of using AskUI together with two Android devices. In this example, AskUI is used to click on two devices on a text.

### Prerequisites
- Two Android Devices connected to the local device
- [adb](https://developer.android.com/tools/adb) is installed

## Install

```bash
npm install
```

## Configure

Set the following environment variables to configure the example. The `ASKUI_WORKSPACE_ID` and `ASKUI_TOKEN` are required to connect to the askui services. Read our docs on how to get them: [Windows](https://docs.askui.com/docs/general/Getting%20Started/Installing%20AskUI/getting-started#step-4-connect-your-askui-account) [Linux](https://docs.askui.com/docs/general/Getting%20Started/Installing%20AskUI/getting-started-linux#access-token), [macOS](https://docs.askui.com/docs/general/Getting%20Started/Installing%20AskUI/getting-started-macos#access-token).

1. Copy the `.env.template` to `.env` and insert the value for `ASKUI_WORKSPACE_ID` and `ASKUI_TOKEN` e.g.

`.env`-example
```bash
ASKUI_WORKSPACE_ID=<your_workspace_id>
ASKUI_TOKEN=<your_workspace_token>
```

2. Configure your two Android devices with following Guide [Setup Real Android Devices](https://docs.askui.com/docs/general/Executing%20Automations/mobile-automation#set-up-a-real-android-device)

3. Download the controller [Windows](https://files.askui.com/releases/askui-ui-controller/latest/win32/x64/askui-ui-controller.exe) | [Mac (Intel)](https://files.askui.com/releases/askui-ui-controller/latest/darwin/x64/askui-ui-controller.dmg) | [Mac (ARM)](https://files.askui.com/releases/askui-ui-controller/latest/darwin/arm64/askui-ui-controller.dmg ) | [Linux](https://files.askui.com/releases/askui-ui-controller/latest/linux/x64/askui-ui-controller.AppImage) and copy it to this project `askui-example-android-multiple-devices/askui-ui-controller.{exe,dmg,AppImage}`

__Note__: I continue as a Windows user and use the `askui-ui-controller.exe` 

## Usage

First we check if both Android devices are connected. This should look like:
```bash
$ adb devices
emulator-5556 device product:sdk_google_phone_x86_64 model:Android_SDK_built_for_x86_64 device:generic_x86_64
emulator-5554 device product:sdk_google_phone_x86 model:Android_SDK_built_for_x86 device:generic_x86
```

Now we have to open a terminal for each AskUI Controller and start it on different ports.

```
# Start first AskUI Controller on Port 6769 for android device 0 (emulator-5556)
./askui-ui-controller.exe -d 0 -m -r android -p 6769  

# Start second AskUI Controller on Port 6869 for android device 1 (emulator-5554)
./askui-ui-controller.exe -d 1 -m -r android -p 6869 
```

Now both controllers should be connected to the device. 

Then let's run the workflows with:
```bash
npm run askui
```

Afterwards there should be two reports under html screenshots `./report/`
