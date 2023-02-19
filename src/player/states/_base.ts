import { UserEvents } from "../../input_handler";
import { StateDefinitions } from "./definitions";

export abstract class State {
  constructor(public name: StateDefinitions) {}

  /** runs once when entering the state */
  abstract enter(): void;

  /** runs on user input and reacts accordingly to the state */
  abstract handleInput(input: UserEvents): void;
}
