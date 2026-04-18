import { Luggage, Priority } from "./Luggage"

export class FragileLuggage extends Luggage {
  private insurance: number

  constructor(
    weight: number,
    description: string,
    priority: Priority,
    insurance: number
  ) {
    super(weight, description, priority)
    this.insurance = insurance
  }

  public override getInsuranceValue(): number {
    return this.insurance
  }

  public override setInsuranceValue(value: number): void {
    this.insurance = value
  }

  public getPrice(): number {
    switch (this.priority) {
      case Priority.Priority:
        return this.fee * 5 + this.insurance
      case Priority.Urgent:
        return this.fee * 10 + this.insurance
      case Priority.Normal:
        return this.insurance
      default:
        throw new Error("Invalid priority")
    }
  }

  public override toString(): string {
    return `${this.constructor.name}: ${this.description}, insurance=${this.insurance}`
  }
}
