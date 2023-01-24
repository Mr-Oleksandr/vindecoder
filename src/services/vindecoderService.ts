
import { ArticleQueryParams } from '../Types/Article';

export default class VinDecoderServices {
    urlBase = 'https://vpic.nhtsa.dot.gov/api/'
    getData = async (url: string) => {
        const data = await fetch(`${this.urlBase}/${url}`)
        const response = await data.json()
        return response
    }
     getDecodeVin = async (vinCode:string) => {
         try {
             const articles = await this.getData(`vehicles/decodevin/${vinCode}?format=json`)
             return articles
         } catch (error) {
             console.log(error)
         }
  }
}