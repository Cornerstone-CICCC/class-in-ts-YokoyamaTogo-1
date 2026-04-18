import { Luggage, Priority } from "./Luggage"

export class RegularLuggage extends Luggage {
  constructor(weight: number, description: string, priority: Priority) {
    super(weight, description, priority)
  }

  public getPrice(): number {
    if (this.weight <= 23) {
      return 0
    }

    const extraWeight = this.weight - 23
    switch (this.priority) {
      case Priority.Priority:
        return this.fee * 5 * extraWeight
      case Priority.Urgent:
        return this.fee * 10 * extraWeight
      case Priority.Normal:
        return this.fee * extraWeight
      default:
        throw new Error("Invalid priority")
    }
  }
}
