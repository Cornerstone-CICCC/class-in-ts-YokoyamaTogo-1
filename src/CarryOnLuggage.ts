import { Luggage, Priority } from "./Luggage"

export class CarryOnLuggage extends Luggage {
  constructor(weight: number, description: string, priority: Priority) {
    super(weight, description, priority)
  }

  public getPrice(): number {
    if (this.weight <= 5) {
      return 0
    }

    const extraWeight = this.weight - 5
    return this.fee * 3 * extraWeight
  }
}
