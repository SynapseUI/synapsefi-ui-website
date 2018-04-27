export const shortJson = `{
  0: {
    cancel: false,
    cancel_message: false,
    queue: true,
    queue_message: 'check_kyc. KYC unfinished on sender.. KYC unfinished on receiver.',
    score: 1,
  },
  1: {
    cancel: false,
    cancel_message: '',
    queue: true,
    queue_message: 'dddd',
  },
};

export const longJson = {
  _id: {
    $oid: '5ad6619ce6e9f700490c0750',
  },
  _v: 2,
  amount: {
    amount: 20,
    currency: 'USD',
  },
  client: {
    id: '59824f354aeefb00215e4c60',
    name: 'Mimble Sandbox',
  },
  extra: {
    created_on: {
      $date: 1523999132095,
    },
    ip: '172.18.0.9',
    latlon: '0,0',
    note: 'type=B,goalRels=[id=5dee739e-4257-11e8-abd5-bb29366368e8,amount=20]',
    other: {
      approved: false,
      attachments: [],
      create_email_sent: false,
      process: {
        credit: 1,
        debit: 0,
      },
      settlement_batch_id: 'aaa',
      show_queue: false,
    },
    process_on: {
      $date: 1523999132095,
    },
    same_day: false,
    supp_id: '0c8f46f0-4283-11e8-a8c8-f393a31fda7f',
  },
  from: {
    id: {
      $oid: '5ad6187cc5d4c3004fad452a',
    },
    meta: {},
    nickname: 'SynapsePay Test Checking Account - 8901',
    type: 'ACH-US',
    user: {
      _id: {
        $oid: '5ad6182f24d2f9006d80a7db',
      },
      legal_names: ['Mon Tag'],
    },
  },
  recent_status: {
    date: {},
  },
}`;
