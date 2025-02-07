import { defineAuth } from "@aws-amplify/backend"

export const auth = defineAuth({
  loginWith: {
   email: {
     verificationEmailStyle: "CODE",
     verificationEmailSubject: "Verify your new account",
     verificationEmailBody: (createCode) => `Use this code to confirm your account: ${createCode()}`,
     userInvitation: {
       emailSubject: "Welcome to my app!",
       emailBody: (user, code) =>
         `We're so excited to have you on board ${user()}! Here's your code: ${code()}`,
     },
   },
  },
})