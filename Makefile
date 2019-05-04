.DEFAULT_GOAL := build_project

flash: unzip wipe flash_device

build_project:
	@echo "Building project..."
	mos build --platform esp32 --clean

wipe:
	@echo "Wiping flash..."
	esptool.py erase_flash

unzip:
	@echo "Extracting archive build/fw.zip"
	@unzip build/fw.zip -d build/extract/

flash_device:
	@echo "Writing to flash..."
	esptool.py write_flash -fm dio -fs 32m -ff 80m 0x1000 build/extract/*/bootloader.bin 0x8000 build/extract/*/partitions_mgos.bin 0xd000 build/extract/*/otadata.bin 0x10000 build/extract/*/gsm-iot-button.bin 0x190000 build/extract/*/fs.img
	@echo "Flashed successfully"
	@rm -rf build/extract/

console:
	@mos console