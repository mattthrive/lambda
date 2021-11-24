import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
//const knex = require('../../../knexfile.js');

import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : 'password',
      database : 'diversity_development'
    }
  });
  const x = await knex.select().from('staff')

  return formatJSONResponse({
    message: `Hello ${x}, welcome to the exciting Serverless world!`,
    event,
  });
}

export const main = middyfy(hello);
