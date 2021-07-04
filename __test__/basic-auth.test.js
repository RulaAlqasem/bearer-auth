'use strict';

require('@code-fellows/supergoose');
const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);
const base64 = require('base-64');


describe('testing basic auth routes', () => {
  it('should respond with a user on POST /signup', async () => {
    const response = await request.post('/signup').send({
      username: 'rula',
      password: 'test',
    });

    expect(response.status).toEqual(201);
    expect(response.body.username).toEqual('rula');
  });

  it('should respond with a user on POST /signin with basic auth header', async () => {
    let authString = base64.encode('rula:test');
    const response = await request.post('/signin').set('Authorization', `Basic ${authString}`);

    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('rula');
  });
  it('should throw error for missing username', async () => {
    const response = await request.post('/signup').send({
      username: '',
      password: '1234'
    });
    expect(response.status).toEqual(403);
    expect(response.body).toEqual('Error Creating User');
  });
  it('should throw error for missing pass', async () => {
    const response = await request.post('/signup').send({
      username: 'rula',
      password: ''
    });
    expect(response.status).toEqual(403);
    expect(response.body).toEqual('Error Creating User');
  });
  it('Middleware basic Authentication ', async () => {
    const response = await request.post('/signin').set(
      'Authorization', ``
    );
    expect(response.status).toEqual(403);
    expect(response.body).toEqual({});
  });

});



