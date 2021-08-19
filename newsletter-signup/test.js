const client = require('@mailchimp/mailchimp_marketing');

client.setConfig({
  apiKey: "2c11bc941efe69fc3bcdc1b13984",
  server: "us5",
});

const run = async () => {
  const response = await client.lists.batchListMembers("list_id", {
    members : [

      {
        email_address : "mil10rodrigz@gmail.com",
        status : "subscribed",
        merge_fields: {
          FNAME : "Milton",
          LNAME : "Rodrigues"
        }

      }
    ],
  });
  console.log(response);
};
