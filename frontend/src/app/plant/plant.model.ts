export class Plant {
  constructor(public name: string,
              public description: string,
              public imageUrl: string,
              public active: boolean,
              public wateringNeedsMinutes: number,
              public lightRequirements: string,
              public floweringPeriod: string,
              public minTemperatureCelsius: number,
              public dateCreated: Date,
              public lastUpdated: Date
  ) {
  }
}
