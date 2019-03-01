// REQUEST BLOCKED BY CORB
const req1 = fetch("https://localhost:3000/bad", {
    "headers": {
        "content-type": "application/json",
    },
    "referrer": "https://mail.google.com/mail/u/0/",
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": "{ test: 1 }",
    "method": "POST",
})

req1
  .then(r => r.json())
  .then(r => console.log('Reqest#1 done ', r))
  .catch((e) => {
    console.log('Request#1 failed with CORB issue', e)
  });



// GOOD REQUEST BECAUSE RETURNS `Acess-Allow-Origin: *`, but not certain domain
// REQUEST NOT BLOCKED BY CORB
const req2 = fetch("https://localhost:3000/good", {
    "headers": {
        "content-type": "application/json",
    },
    "referrer": "https://mail.google.com/mail/u/0/",
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": "{ test: 1 }",
    "method": "POST",
})

req2
  .then(r => r.json())
  .then(r => console.log('Reqest#2 done ', r))
  .catch((e) => {
    console.log('Request#2 failed with CORB issue', e)
  });


// GOOD REQUEST BECAUSE RETURNS ARRAY-STYLED JSON
// REQUEST NOT BLOCKED BY CORB
const req3 = fetch("https://localhost:3000/good-2", {
    "headers": {
        "content-type": "application/json",
    },
    "body": "{ test: 1 }",
    "method": "POST",
})

req3
  .then(r => r.json())
  .then(r => console.log('Reqest#3 done ', r))
  .catch((e) => {
    console.log('Request#3 failed with CORB issue', e)
  });
