# SQNCR
SQNCR is a web-based application designed for creating musical sequences. It allows users to combine and arrange sounds and rhythms in an intuitive and creative way, also thanks to its ease of use on touch-screen devices. 
Ideal for musicians, composers, and anyone looking to explore the world of digital music creation.

Developed in Vue.js, a JavaScript framework, it implements the use of Tone.js, a library for audio synthesis, enabling users to combine and arrange sounds and rhythms intuitively and creatively. It includes various sound banks, which can be easily expanded to cater to a wide range of musical tastes, making it a versatile tool.
This project is part of the university course Advanced Coding Tools and Methodologies, taught by Professor F. Bruschi, academic year 2023/2024, Politecnico di Milano.

///METTI IMMAGINE 

## Features
The heart of the sequencer implements four rows of selectable buttons, each with a different type of sound (kick, hi-hat, snare, open-hat). You can select the sound kit in the selector on the left side of the tool, where you will find five different types of drum sets. 

When the user presses the "play" button, the sequencer will start the loop, producing the sound of the selected buttons. With the "pause" button, the sequence will be interrupted, and the sequencer will restart from its first step on the next play. 

It is also possible to mute an entire row of the sequencer by selecting the button positioned to the right of the respective row. This way, the user will have maximum flexibility over the sounds that will be reproduced.

Additionally, it is possible to change the scrolling speed by adjusting the BPM (within the range of 30-240 BPM) and the swing percentage with the corresponding sliders positioned on the left side of the screen. 

Changing these parameters will not only alter the produced sound but also update the respective parameters on the black screen visible on the left side of the sequencer. The black screen also allows the user to view the waveform produced by the sound created during the use of the sequencer. 

With the second green selector, it is possible to change the beat division.

### Effects
In the lower right part of the screen, there is a large section dedicated to effects. As previously mentioned, various effects can be applied to the sound produced by the instrument. Specifically, the proportion of the wet signal that will be processed by the effect can be adjusted with four independent knobs. The four effects that can be adjusted are:

* **Pitch:** The knob sends a control command to the DSP algorithm. This command adjusts the fundamental frequency of the sound based on the rotation of the knob.
* **Delay:** A delay effect reproduces an audio signal delayed in time, creating echoes or doubling the original sound. The longer the delay, the more perceptible the echo, creating a spatial or ambiguous atmosphere.
* **Reverb:** Simulates the acoustic response of an environment, such as a room, auditorium, or cave. It adds delayed and attenuated copies of the original audio signal, imitating the way sound bounces off surfaces and fades over time. This creates a sense of width and depth, making the sound richer and more realistic.
* **Phaser:** A modulation effect that creates a "whispering" or "pulsating" sound by gradually shifting the phases of the audio signal frequencies. An all-pass filter is applied to the signal, slightly delaying different frequencies, and a low-frequency oscillator (LFO) modulates the amount of delay applied by the all-pass filter. Finally, the audio signal is altered with the phase variations created by the all-pass filter, generating the characteristic phaser effect.

The effects can be applied independently to each row of the sequencer, allowing the user to modify the sound of just one of the instruments, providing greater flexibility and versatility. 

Each section related to the instrument also has a small reset button, so that during playback, the user does not have to manually set each knob back to zero. The reset button does this automatically, making it convenient and quick to configure.

## Framework & Dependencies
The framework of choice is Vue. Developed using HTML, JavaScript and CSS.

* Tone.js - Web Audio Framework
* Vue.js - Web UI Framework
* Quasar - Web UI Framework

## Team
* Niccolò Galante - descrizione di che abbiamo fatto - niccolo.galante@mail.polimi.it
* Flavio Ingenito - descrizione di che abbiamo fatto - flavio.ingenito@mail.polimi.it
