import { FragileLuggage } from "./FragileLuggage"
import { Luggage } from "./Luggage"

export class ListOfLuggages {
  private luggages: Luggage[] = []

  public insertLuggage(luggage: Luggage): void {
    this.luggages.push(luggage)
  }

  public printAllLuggages(): void {
    this.luggages.forEach((luggage) => console.log(luggage.toString()))
  }

  public priceOfEachLuggage(): void {
    this.luggages.forEach((luggage) => {
      console.log(`${luggage.toString()} -> price: ${luggage.getPrice()}`)
    })
  }

  public totalPrice(): number {
    return this.luggages.reduce((total, luggage) => total + luggage.getPrice(), 0)
  }

  public getFragileLuggageWithInsurance(): {
    quantity: number
    totalInsuranceValue: number
  } {
    const fragile = this.luggages.filter((luggage) => luggage instanceof FragileLuggage)

    const totalInsuranceValue = fragile.reduce((total, luggage) => total + luggage.getInsuranceValue(), 0)

    return {
      quantity: fragile.length,
      totalInsuranceValue,
    }
  }

  public sortByPrice(): void {
    this.luggages.sort((a, b) => a.getPrice() - b.getPrice())
  }

  public sortByWeight(): void {
    this.luggages.sort((a, b) => a.getWeight() - b.getWeight())
  }
}
