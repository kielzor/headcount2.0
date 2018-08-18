export default class DistrictRepository {
  constructor(data) {
    this.stats = this.removeDuplicates(data)
  }

  removeDuplicates = (data) => {
    return data.reduce((acc, stat) => {
      let name = stat.Location.toUpperCase();

      if (!acc[name]) {
        acc[name] = {
          location: name,
          stats: {}
        }
      }

      acc[name].stats[stat.TimeFrame] = Math.round(1000 * stat.Data) / 1000 || 0;
      return acc
    }, {})
  }

  findByName = (search) => {
    if (!search) return;
    let upper = search.toUpperCase()
    return this.stats[upper] ? this.stats[upper] : undefined
  }

  findAllMatches = (search) => {
    let arr = Object.keys(this.stats).map(key => this.stats[key]);

    if (!search) return arr
    
    let matches = arr.filter(match => {
      return match.location.includes(search.toUpperCase())
    })

    return matches
  }

  findAverage = (district) => {
    let stats = Object.values(this.stats[district].stats)
    let average = stats.reduce((sum, num) => {
      sum = sum + num / stats.length
      return sum
    }, 0)
    return Math.round(1000 * average) / 1000
  }

  compareDistrictAverages = (districtOne, districtTwo) => {
    console.log('yay')
    let firstDistrict = districtOne.toUpperCase()
    let secondDistrict = districtTwo.toUpperCase()
    let first = this.findAverage(firstDistrict)
    let second = this.findAverage(secondDistrict)
    let compared = first / second

    return {
            [firstDistrict]: first,
            [secondDistrict]: second,
            compared: Math.round(1000 * compared) / 1000
    }
  }
}