const app = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);

const data = require('../data.js');

it('gets the chords endpoint', async () => {
    const response = await request.get('/chords');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(data);
});

it ('gets the specific chords endpoint', async () => {
    const response = await request.get('/chords/1');

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(data[0]);
});