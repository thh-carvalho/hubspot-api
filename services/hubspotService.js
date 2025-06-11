const axios = require('axios')
const hubspot = require('@hubspot/api-client');
require('dotenv').config();
var api_secret = process.env.KEY

const hubspotClient = new hubspot.Client({
    accessToken: api_secret
});

class HubSpotService {
    constructor(){
        this.apiKey = api_secret
        this.baseURL = 'https://api.hubapi.com'
    }

      async createContact(leadData){
        const properties = {
            email: 'teste0808@teste.com',
            firstname: 'teste',
            lastname: 'test',
            phone: '11998080899'
        };

        const simplePublicObjectInput = { properties };

        try {
            console.log('Attempting to create HubSpot contact with:', properties);
            const response = await hubspotClient.crm.contacts.basicApi.create(simplePublicObjectInput);
            console.log('HubSpot contact created successfully:', response.body);
            return response.body;
        } catch (e) {
            console.error('Error creating HubSpot contact:', e.response ? e.response.body : e.message || e)

            // throw new AppError(`Failed to create contact in HubSpot: ${e.message}`, e.statusCode || 500);
        }
      }
}

module.exports = new HubSpotService();