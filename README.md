# Mongoose OS on Moduino X1 demo
This is a demo project that demonstrates Mongoose OS running on Moduino X1. Rather than using mos flash which can be quite erratic esptool.py will be used to reliably flash a Moduino X1. Demo project contains both Hello World  JS and and C file.

## Prerequisites
Ensure you have:
- [mos](https://github.com/cesanta/mos-tool)
- [esptool](https://github.com/espressif/esptool)
- Relevant USB to Serial drivers

## Building
Build project:

```
mos build --platform esp32 --clean
```

## Flashing 

