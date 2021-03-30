'use strict';

const functions = require('firebase-functions');
const { WebhookClient } = require('dialogflow-fulfillment');
const { Card, Payload, Suggestion } = require('dialogflow-fulfillment');

process.env.DEBUG = 'dialogflow:debug';

const rates = {
  'full': 0.05,
  'coll_fire_theft': 0.04,
  'coll_only': 0.02,
  'young': 0.06
};

const rateNames = {
  'full': 'Full coverage',
  'coll_fire_theft': 'Collision, fire and theft',
  'coll_only': 'Collision only',
  'young': 'Young driver'
};

const rateDetails = {
  'full': [
    'Full Coverage insurance is the highest level of insurance available. This includes both collision and comprehensive insurance and it offers the most protection of your car, any third parties involved in an accident, as well as their property.',
    'It could also include compensation for medical and legal expenses as well as accidental damage.'
  ],
  'coll_fire_theft': [
    'Collision, fire, and theft insurance provides the same level of cover as ‘collision’ but it can also cover policyholders if their car is damaged due to fire or if it is stolen.',
    'It is very important to remember that this type of insurance doesn’t cover the costs of accidental damage like a tree falling on your car.'
  ],
  'coll_only': [
    'Collision coverage is the most basic level of insurance, and is the bare minimum required by law',
    'If an accident happens between two or more cars, then the insurance covers you for any damage you cause to another person’s car or any injury you caused to someone else, including passengers in your car.'
  ],
  'young': [
    'Congratulations! You’ve passed your test and you’re no longer a learner driver.',
    'Young drivers face expensive insurance premiums because they’re far more likely to be involved in a car accident than experienced drivers.',
    'If you are between 17 and 21 you can have a flexible short-term insurance that covers your own car, or a car owned by a parent.'
  ]
};

const renewalParameters = {
  "Worth": 43750,
  "StartDate": "2018-05-27",
  "Worth.original": "43750",
  "Make.original": "Audi",
  "Model": "A5 Sportback",
  "Model.original": "a5 sportback",
  "StartDate.original": "tomorrow",
  "Premium": 2187.50,
  "Make": "Audi",
  "Coverage": "full",
  "Coverage.original": "full coverage"
};

const attachQuote = data => ({
    type: 'quote',
    premium: data.Premium,
    coverage: rateNames[data.Coverage],
    make: data.Make,
    model: data.Model,
    worth: data.Worth,
    startDate: data.StartDate
});

function pow(p) {
  if (p) {
      return Math.pow(10, p);
  }

  return 1;
}

function round(value, precision) {
  const power = pow(precision);
  return Math.round(value * power) / power;
}

function welcome(agent) {
  const payload = {
    type: 'message',
    attachments: [],
    suggestedActions: [{
        type: "postBack",
        title: "Get a Quote",
        value: "Get a Quote"
    }, {
        type: "postBack",
        title: "Get a Renewal",
        value: "Get a Renewal"
    }]
  };

  agent.context.set({ name: 'quoteinput-followup', lifespan: 5, parameters: {} });

  agent.add(new Payload(agent.UNSPECIFIED, payload));
  console.log('welcome: ' + JSON.stringify(payload, null, 2));
}

function getQuote(agent) {
  const payload = {
    attachmentLayout: "carousel",
    attachments: [
      {
        title: "Full Coverage",
        subtitle: "5% of car cost",
        images: [
          {
            url: "https://demos.telerik.com/kendo-ui/content/chat/quote_full.jpeg"
          }
        ],
        buttons: [
          {
            type: "postBack",
            title: "View Details",
            value: "View details of Full Coverage"
          },
          {
            type: "postBack",
            title: "Get a Quote",
            value: "Get a quote for Full Coverage"
          }
        ]
      },
      {
        title: "Collision, fire and theft",
        subtitle: "4% of car cost",
        images: [
          {
            url: "https://demos.telerik.com/kendo-ui/content/chat/quote_collision.jpeg"
          }
        ],
        buttons: [
          {
            type: "postBack",
            title: "View Details",
            value: "View details of Collision, fire and theft"
          },
          {
            type: "postBack",
            title: "Get a Quote",
            value: "Get a quote for Collision, fire and theft"
          }
        ]
      },
      {
        title: "Collision only",
        subtitle: "2% of car cost",
        images: [
          {
            url: "https://demos.telerik.com/kendo-ui/content/chat/quote_collision_only.jpeg"
          }
        ],
        buttons: [
          {
            type: "postBack",
            title: "View Details",
            value: "View details of Collision only"
          },
          {
            type: "postBack",
            title: "Get a Quote",
            value: "Get a quote for Collision only"
          }
        ]
      },
      {
        title: "Young driver",
        subtitle: "6% of car cost",
        images: [
          {
            url: "https://demos.telerik.com/kendo-ui/content/chat/quote_young.jpeg"
          }
        ],
        buttons: [
          {
            type: "postBack",
            title: "View Details",
            value: "View details of Young driver"
          },
          {
            type: "postBack",
            title: "Get a Quote",
            value: "Get a quote for Young driver"
          }
        ]
      }
    ]
  }

  agent.add(new Payload(agent.UNSPECIFIED, payload));
  console.log('getQuote: ' + JSON.stringify(payload, null, 2));
}

function quote(agent) {
  const context = agent.context.get('quoteinput-followup');
  const params = context.parameters;

  const worth = params.Worth;
  const coverage = params.Coverage;
  const make = params.Make[0];

  if (!rates.hasOwnProperty(coverage)) {
    agent.add(`I didn't get that, can you try again?`);
    return;
  }

  const rate = rates[coverage];
  params.Premium = worth * rate;

  agent.context.set({ name: 'quoteinput-followup', lifespan: 5, parameters: params })

  const payload = {
    type: 'message',
    attachments: [
      attachQuote(params)
    ],
    suggestedActions: [{
      type: 'postBack',
      title: 'Agree',
      value: 'Agree'
    }, {
      type: 'postBack',
      title: 'Cancel',
      value: 'Cancel'
    }, {
      type: 'postBack',
      title: 'Change Car Model',
      value: 'Change Car Model'
    }, {
      type: 'postBack',
      title: 'Change Insurance Start Date',
      value: 'Change Insurance Start Date'
    }, {
      type: 'postBack',
      title: 'Change Car Cost',
      value: 'Change Car Cost'
    }]
  };

  agent.add(new Payload(agent.UNSPECIFIED, payload));
  console.log('quote: ' + JSON.stringify(payload, null, 2));
}

function quoteConfirm(agent) {
  const payload = {
    type: 'message',
    attachments: [],
    suggestedActions: [
      {
        type: "postBack",
        title: "One Payment",
        value: "One Payment"
      },      {
        type: "postBack",
        title: "Two Payments",
        value: "Two Payments"
      },      {
        type: "postBack",
        title: "Three Payments",
        value: "Three Payments"
      },      {
        type: "postBack",
        title: "Four Payments",
        value: "Four Payments"
      }
    ]
  };

  agent.add(new Payload(agent.UNSPECIFIED, payload));
  console.log('quoteConfirm: ' + JSON.stringify(payload, null, 2));
}

function quoteCancel(agent) {
  const payload = {
    type: 'message',
    attachments: [],
    suggestedActions: [
      {
        type: "postBack",
        title: "Let's do it!",
        value: "View all products"
      },
      {
        type: "postBack",
        title: "No, thanks!",
        value: "No, thanks!"
      }
    ]
  };



  agent.add(new Payload(agent.UNSPECIFIED, payload, { sendAsMessage: true }));
  console.log('quoteCancel: ' + JSON.stringify(payload, null, 2));
}

function quoteEnd(agent) {
  const context = agent.context.get('quoteinput-followup');

  agent.add('Congratulations! Your car insurance is confirmed!');
  agent.add('A confirmation message has been sent to your e-mail.');
  agent.add('Thank you for choosing Motor Insurance Company! Enjoy the ride!');

  console.log('processing quote: ', JSON.stringify(context, null, 2));
}

function quoteDetails(agent) {
  const context = agent.context.get('quotedetails');
  const params = context.parameters;
  const coverage = params.Coverage;

  if (!rateDetails.hasOwnProperty(coverage)) {
    agent.add(`I didn't get that, can you try again?`);
    return;
  }

  const details = rateDetails[coverage];
  details.forEach((msg) => agent.add(msg));

  agent.add(new Suggestion(`Get a quote for ${rateNames[coverage]}`));
  agent.add(new Suggestion({title: 'View all products', value: 'View all products'}));

  console.log('quoteDetails: sent details for ' + coverage);
}

function payments(agent) {
  const context = agent.context.get('quoteinput-followup');
  const params = context.parameters;
  const worth = params.Worth;
  const count = params.Payments;

  const rows = [];
  const value = round(worth / count, 2);
  for (let i = 0; i < count; i++) {
    rows.push({ text: `Payment #${ i + 1 }`, value: value });
  }

  const payload = {
    type: 'message',
    attachments: [{
      type: 'payment_plan',
      rows: rows,
      premium: worth
    }],
    suggestedActions: [{
      type: 'postBack',
      title: 'Confirm',
      value: 'Confirm'
    }, {
      type: 'postBack',
      title: 'Cancel',
      value: 'Cancel'
    }]
  };

  agent.add(new Payload(agent.UNSPECIFIED, payload));
  console.log('payments: ' + JSON.stringify(payload, null, 2));
}

function resetPayments(agent) {
  agent.setFollowupEvent('ConfirmQuote');
  console.log('resetPayments: Triggering ConfirmQuote');
}

function renew(agent) {
  const data = renewalParameters;
  const payload = {
    type: 'message',
    attachments: [
      attachQuote(data)
    ],
    suggestedActions: [
      {
        type: 'postBack',
        title: 'Confirm',
        value: 'Agree'
      },
      {
        type: 'postBack',
        title: 'See other car insurance policies',
        value: 'See other car insurance policies'
      }
    ]
  };

  agent.context.set({
    name: 'quoteinput-followup',
    lifespan: 5,
    parameters: renewalParameters
  });

  agent.context.set({
    name: 'quoteinput-yes-followup',
    lifespan: 5,
    parameters: {}
  });

  agent.add(new Payload(agent.UNSPECIFIED, payload));
  console.log('renew: ' + JSON.stringify(payload, null, 2));
}

function confirmRenewal(agent) {
  agent.setFollowupEvent('ConfirmQuote');
  console.log('confirmRenewal: Triggering ConfirmQuote');
}

function renewOther(agent) {
  agent.setFollowupEvent('ListProducts');
  console.log('renewOther: triggering ListProducts')
}

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers, null, 2));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body, null, 2));

  const intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Get a Quote', getQuote);
  intentMap.set('Quote Input', quote);
  intentMap.set('Quote Input - Correction - Car Model', quote);
  intentMap.set('Quote Input - Correction - Car Cost', quote);
  intentMap.set('Quote Input - Correction - Start Date', quote);
  intentMap.set('Quote Input - Confirm', quoteConfirm);
  intentMap.set('Quote Input - Cancel', quoteCancel);
  intentMap.set('Quote Input - Payments', payments);
  intentMap.set('Quote Input - Payments - Cancel', resetPayments);
  intentMap.set('Quote Input - Payments - Confirm', quoteEnd);
  intentMap.set('Quote Details', quoteDetails);
  intentMap.set('Get a Renewal', renew);
  intentMap.set('Get a Renewal - Confirm', confirmRenewal);
  intentMap.set('Get a Renewal - Other', renewOther);

  agent.handleRequest(intentMap);
});
