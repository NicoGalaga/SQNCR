import * as Tone from "tone";

class Sequencer{
  static players;
  static kits;
  static instruments;
  static rows;
  static subdivisions;

  // Initializes variables
  static initSequencer(){
    this.seqInstruments = ['kick','hihat','snare', 'openhat'];
    this.rows = this.makeGrid(this.seqInstruments);
  }

  // Creates rows of buttons
  static makeGrid (instruments){
    const rows = []

    for (const instr in instruments) {
      // console.log('instr', instruments[instr])
      const row = {
        instrument : instruments[instr],
        buttons : []
      }
      for (let i = 0; i < 8; i++) {
        row.buttons.push({
          id: instruments[instr],
          isActive: false
        });
      }
      rows.push(row);
    }
    return rows;
  };

  // Initializes effects
  static configFX(numInstr){
    const pitchShifts = [];
    const phasers = [];
    const delays = [];
    const reverbs = [];
    const gains = [];

    for(let i = 0; i < numInstr; i++){
      const ps = new Tone.PitchShift();
      const phaser = new Tone.Phaser({
        frequency: 0.5, // phasing speed (in hertz)
        octaves: 2, // octaves of the effect (must be >= 0)
        baseFrequency: 1000 // base filter frequency
      });
      const delay = new Tone.FeedbackDelay("8n", 0.3);
      const rev = new Tone.JCReverb(0.4);
      const gain = new Tone.Gain();


      ps.pitch = 0;
      phaser.wet.value = 0;
      delay.wet.value = 0;
      rev.wet.value = 0;

      pitchShifts.push(ps);
      phasers.push(phaser);
      delays.push(delay);
      reverbs.push(rev);
      gains.push(gain);
    }
    return [pitchShifts, delays, reverbs, phasers, gains]
  }

  // Returns this.rows
  static getRows(){
    return this.rows
  }

  // Returns this.kits
  static getKits(){
    return this.kits
  }

  // Returns this.subdivisions
  static getSubdivisions(){
    return this.subdivisions
  }

  // Returns this.players
  static getPlayers(){
    return this.players
  }

}
export default Sequencer
