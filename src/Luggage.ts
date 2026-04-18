export enum Priority {
  Normal = "Normal",
  Priority = "Priority",
  Urgent = "Urgent",
}

export abstract class Luggage {
  protected weight: number
  protected readonly description: string
  protected readonly priority: Priority
  protected readonly fee: number = 5.2

  protected constructor(weight: number, description: string, priority: Priority) {
    this.weight = weight
    this.description = description
    this.priority = priority
  }

  public getWeight(): number {
    return this.weight
  }

  public setWeight(weight: number): void {
    this.weight = weight
  }

  public getDescription(): string {
    return this.description
  }

  public getPriority(): Priority {
    return this.priority
  }

  public getInsuranceValue(): number {
    return 0
  }

  public setInsuranceValue(_: number): void {
    throw new Error("Insurance is only applicable to fragile luggage.")
  }

  public abstract getPrice(): number

  public toString(): string {
    return `${this.constructor.name}: ${this.description}`
  }
}
