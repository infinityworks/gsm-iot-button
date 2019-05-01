# Mongoose OS on Moduino X1 demo
This is a demo project that demonstrates Mongoose OS running on Moduino X1. Rather than using mos flash which can be quite erratic esptool.py will be used to reliably flash a Moduino X1. Demo project contains both Hello World  JS and and C file.

## Prerequisites
Ensure you have:
- [mos](https://github.com/cesanta/mos-tool)
- [esptool](https://github.com/espressif/esptool)
- Relevant USB to Serial driver

## Building Project
Build project by using either command:

```
mos build --platform esp32 --clean
```

or

```
make
```

## Flashing Moduino
To flash Moduino X1:
1. Power down Moduino
2. Connect BOOT pin to GND
3. Power up Moduino
4. Run command:

```
make flash
```
5. When terminal outputs message below power down and and power up moduino
```
Connecting...
```

## Console
To display logs from Moduino, run command
```
make console
```