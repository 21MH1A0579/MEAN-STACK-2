
const express=require('express');
const { url } = require('inspector');
const accountSid = "ACfd94e54e9fb1c493d25b46511b7f6ee0";
const authToken = "f180774adeab34ad19b77eebd1c9cf23";
const verifySid = "VA355901b88a50069c9b527c2ca184d00c";
const client = require("twilio")(accountSid, authToken);
const app=express();
app.listen(3000,()=>{
    console.log("Server Running SuccessFully!!!");
})
app.use(express.json())
app.use(express.urlencoded())
app.get('/register',async(req,res)=>{
    client.verify.v2
  .services(verifySid)
  .verifications.create({ to: "+919573282201", channel: "sms" })
  .then((verification) => console.log(verification.status))
  });
  app.get('/verify',(req,res)=>{
    client.verify.v2
        .services(verifySid)
        .verificationChecks.create({ to: "+919573282201", code: "036785" })
        .then((verification_check) => console.log(verification_check.status))
  })
