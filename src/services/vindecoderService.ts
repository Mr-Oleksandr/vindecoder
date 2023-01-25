export default class VinDecoderServices {
   urlBase = 'https://vpic.nhtsa.dot.gov/api/';
   getData = async (url: string) => {
      const data = await fetch(`${this.urlBase}/${url}`);
      const response = await data.json();
      return response;
   };
   getDecodeVin = async (vinCode: string) => {
      try {
         const articles = await this.getData(`vehicles/decodevinasd/${vinCode}?format=json`);
         return articles;
      } catch (error) {
         throw new Error();
      }
   };
   getVariableList = async () => {
      try {
         const getVehicleList = await this.getData('/vehicles/getvehiclevariablelist?format=json');
         return getVehicleList;
      } catch (error) {
         throw new Error();
      }
   };
   getVariable = async (id: string) => {
      try {
         const getVehicleList = await this.getData(
            `/vehicles/getvehiclevariablevalueslist/${id}?format=json`,
         );
         return getVehicleList;
      } catch (error) {
         throw new Error();
      }
   };
}
