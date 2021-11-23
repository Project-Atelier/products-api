import http from 'k6/http';
import { sleep, check } from 'k6';

//Running a 15-second, 10-virtual user load test
export const options = {
  vus: 20,   // virtual user
  duration: '15s',
};


export default function () {
  let randomId = Math.floor(Math.random() * 100000)
  const res = http.get(`http://localhost:3000/products/${randomId}/styles`);
  check(res, {
    'transaction time < 10ms': (r) => r.timings.duration < 10,
    'transaction time < 15ms': (r) => r.timings.duration < 15,
    'transaction time < 30ms': (r) => r.timings.duration < 30,
    'transaction time < 50ms': (r) => r.timings.duration < 50,
    'transaction time < 100ms': (r) => r.timings.duration < 100,
    'transaction time < 200ms': (r) => r.timings.duration < 200,
    'transaction time < 500ms': (r) => r.timings.duration < 500,
    'transaction time < 1000ms': (r) => r.timings.duration < 1000,
    'transaction time < 2000ms': (r) => r.timings.duration < 2000,
  });
}