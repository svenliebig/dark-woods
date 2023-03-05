

export class Sound {
  constructor(protected sound: HTMLAudioElement) {
    this.sound = sound;
  }

  play() {
    this.sound.currentTime = 0;
    this.sound.play();
  }

  repeat() {
    this.sound.currentTime = 0;
    this.sound.loop = true;
    this.sound.play();
  }

  stop() {
    this.sound.pause();
  }

  setVolume(volume: number) {
    this.sound.volume = volume;
  }

  isPlaying() {
    return !this.sound.paused;
  }
}

class Footsteps {
  private sounds: Sound[] = [
    new Sound(new Audio("/assets/sounds/Mp3/Footsteps/Footstep_Dirt_00.mp3")),
    new Sound(new Audio("/assets/sounds/Mp3/Footsteps/Footstep_Dirt_01.mp3")),
    new Sound(new Audio("/assets/sounds/Mp3/Footsteps/Footstep_Dirt_02.mp3")),
    new Sound(new Audio("/assets/sounds/Mp3/Footsteps/Footstep_Dirt_03.mp3")),
    new Sound(new Audio("/assets/sounds/Mp3/Footsteps/Footstep_Dirt_04.mp3")),
    new Sound(new Audio("/assets/sounds/Mp3/Footsteps/Footstep_Dirt_05.mp3")),
    new Sound(new Audio("/assets/sounds/Mp3/Footsteps/Footstep_Dirt_06.mp3")),
    new Sound(new Audio("/assets/sounds/Mp3/Footsteps/Footstep_Dirt_07.mp3")),
    new Sound(new Audio("/assets/sounds/Mp3/Footsteps/Footstep_Dirt_08.mp3")),
    new Sound(new Audio("/assets/sounds/Mp3/Footsteps/Footstep_Dirt_09.mp3")),
  ]

  play(index: number) {
    this.sounds[index].play();
  }

  max() {
    return this.sounds.length;
  }
}

class Forest {
  private sound: Sound = new Sound(new Audio("/assets/sounds/ambient/forest.flac"))

  play() {
    this.sound.setVolume(.2);
    this.sound.repeat();
  }

  isPlaying() {
    return this.sound.isPlaying();
  }
}

export const ForestSound = new Forest();
export const FootstepsSound = new Footsteps();
