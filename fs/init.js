load('api_gpio.js');
load('api_timer.js');
load('api_mqtt.js');
load('api_config.js');

let gsmModulePin = 32;
let modeBtnPin = 34;

GPIO.set_mode(gsmModulePin, GPIO.MODE_OUTPUT);
GPIO.write(gsmModulePin, 0);
GPIO.write(gsmModulePin, 1);
Timer.set(2000, false, function() {
    GPIO.write(gsmModulePin, 0);
    print('GSM module powered on');
}, null);

GPIO.set_button_handler(modeBtnPin, GPIO.PULL_UP, GPIO.INT_EDGE_NEG, 200, function() {
    let topic = Cfg.get('device.id') + '/button_pressed';
    let message = JSON.stringify({
        modeBtn: 'Button pressed',
      });
    let ok = MQTT.pub(topic, message, 1);
    print('Published:', ok ? 'yes' : 'no', 'topic:', topic, 'message:', message);
}, null);