const API_BASE = 'https://71c7-2401-4900-632f-8057-a92b-9e0b-a574-dd9.ngrok-free.app';

async function test() {
  try {
    const res = await fetch(`${API_BASE}/laptops/services/`, {
      headers: { 'ngrok-skip-browser-warning': 'true' }
    });
    const data = await res.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (e) {
    console.error(e);
  }
}

test();
