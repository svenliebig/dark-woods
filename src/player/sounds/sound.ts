

export class Sound {
  constructor(protected sound: HTMLAudioElement) {
    this.sound = sound;
  }

  play() {
    this.sound.currentTime = 0;
    this.sound.play();
  }

  stop() {
    this.sound.pause();
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

export const FootstepsSound = new Footsteps();
