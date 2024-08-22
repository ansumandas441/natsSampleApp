require('dotenv').config();

export const config = {
  servers: [process.env.NATS_SERVER_ADDRESS],
  user: process.env.NATS_USER_NAME,
  pass: process.env.NATS_PASSWORD,
}