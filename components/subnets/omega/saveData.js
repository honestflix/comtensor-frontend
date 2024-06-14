const axios = require('axios');
const fs = require('fs');
const path = require('path');

const fetchDataAndSave = async () => {
    try {
        const response1 = await axios.get("https://api.comtensor.io/omegalist/");
        const snData = response1.data;

        const response2 = await axios.post("https://api.comtensor.io/omegalabs/", {
            query: snData,
        });
        const secondData = response2.data.map(item => ({
            query: item.query,
            size: item.total_size,
            hotkey: item.dendrite.hotkey
        }));

        const filePath = path.join(__dirname, 'data.json');
        fs.writeFileSync(filePath, JSON.stringify(secondData, null, 2));
        console.log('Data saved to data.json');
    } catch (error) {
        console.error('Error fetching or saving data:', error);
    }
};

fetchDataAndSave();
